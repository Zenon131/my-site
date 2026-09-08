<script lang="ts">
	import { onMount } from 'svelte';
	import { Card } from '$lib/components/ui/card';
	import { Button } from '$lib/components/ui/button';
	import {
		Loader2,
		RefreshCw,
		GitCommit,
		GitBranch,
		Star,
		Tag,
		MessageSquare
	} from '@lucide/svelte';
	import { user } from '$lib/data';

	interface ActivityEvent {
		id: string;
		type: string;
		repo: string;
		payload: unknown;
		createdAt: string;
		url: string;
	}

	let events = $state<ActivityEvent[]>([]);
	let loading = $state(true);
	let error = $state('');
	const username = user.username;

	const eventTypes: Record<string, { label: string; icon: typeof GitCommit; color: string }> = {
		PushEvent: { label: 'pushed to', icon: GitCommit, color: 'text-accent' },
		CreateEvent: { label: 'created', icon: GitBranch, color: 'text-primary' },
		WatchEvent: { label: 'starred', icon: Star, color: 'text-yellow-400' },
		ReleaseEvent: { label: 'released', icon: Tag, color: 'text-neon-pink' },
		IssuesEvent: { label: 'opened issue in', icon: MessageSquare, color: 'text-green-400' },
		PullRequestEvent: { label: 'opened PR in', icon: GitBranch, color: 'text-purple-400' }
	};

	const CACHE_KEY = 'github-activity-cache';
	const CACHE_TTL_MS = 5 * 60 * 1000;

	function formatDate(iso: string): string {
		const date = new Date(iso);
		return date.toLocaleDateString(undefined, { month: 'short', day: 'numeric' });
	}

	function truncateRepo(repo: string): string {
		return repo.length > 28 ? repo.slice(0, 25) + '...' : repo;
	}

	async function loadEvents() {
		loading = true;
		error = '';
		try {
			if (typeof window !== 'undefined') {
				const cached = localStorage.getItem(CACHE_KEY);
				if (cached) {
					const parsed = JSON.parse(cached);
					if (Date.now() - parsed.ts < CACHE_TTL_MS) {
						events = parsed.events;
						loading = false;
						return;
					}
				}
			}

			const res = await fetch(`https://api.github.com/users/${username}/events/public`);
			if (!res.ok) throw new Error(`GitHub returned ${res.status}`);
			const data = await res.json();

			events = data.slice(0, 8).map((item: unknown) => {
				const event = item as Record<string, unknown>;
				return {
					id: String(event.id),
					type: String(event.type),
					repo: String((event.repo as Record<string, string>)?.name ?? ''),
					payload: event.payload,
					createdAt: String(event.created_at),
					url: `https://github.com/${String((event.repo as Record<string, string>)?.name ?? '')}`
				};
			});

			if (typeof window !== 'undefined') {
				localStorage.setItem(CACHE_KEY, JSON.stringify({ ts: Date.now(), events }));
			}
		} catch (e) {
			error = e instanceof Error ? e.message : 'Failed to load activity';
		} finally {
			loading = false;
		}
	}

	onMount(loadEvents);
</script>

<div class="space-y-4">
	<div class="flex items-center justify-between">
		<h3 class="font-mono text-sm font-medium text-muted-foreground">
			@github/{username}
		</h3>
		<Button
			variant="ghost"
			size="icon-xs"
			onclick={loadEvents}
			disabled={loading}
			aria-label="Refresh activity"
			title="Refresh activity"
		>
			{#if loading}
				<Loader2 class="h-3.5 w-3.5 animate-spin" />
			{:else}
				<RefreshCw class="h-3.5 w-3.5" />
			{/if}
		</Button>
	</div>

	{#if loading && events.length === 0}
		<div class="flex items-center justify-center py-8">
			<Loader2 class="h-5 w-5 animate-spin text-primary" />
		</div>
	{:else if error && events.length === 0}
		<Card class="border-border/60 bg-card/60 p-4 text-center text-sm text-muted-foreground">
			Could not load activity: {error}
		</Card>
	{:else if events.length === 0}
		<Card class="border-border/60 bg-card/60 p-4 text-center text-sm text-muted-foreground">
			No recent public activity.
		</Card>
	{:else}
		<div class="space-y-2">
			{#each events as event (event.id)}
				{@const meta = eventTypes[event.type] ?? {
					label: event.type,
					icon: GitCommit,
					color: 'text-muted-foreground'
				}}
				<Card class="border-border/40 bg-card/40 p-3 transition-colors hover:bg-card/70">
					<div class="flex items-start gap-3">
						<div class="mt-0.5 shrink-0">
							<meta.icon class="h-4 w-4 {meta.color}" />
						</div>
						<div class="min-w-0 flex-grow">
							<p class="truncate text-sm">
								<span class="text-muted-foreground">{meta.label}</span>
								<span class="mx-1 text-border">·</span>
								<a
									href={event.url}
									target="_blank"
									rel="noopener noreferrer"
									class="font-medium text-foreground hover:text-primary hover:underline"
								>
									{truncateRepo(event.repo)}
								</a>
							</p>
							<p class="mt-0.5 text-xs text-muted-foreground">{formatDate(event.createdAt)}</p>
						</div>
					</div>
				</Card>
			{/each}
		</div>
	{/if}
</div>
