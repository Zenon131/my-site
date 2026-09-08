<script lang="ts">
	import { Badge } from '$lib/components/ui/badge';
	import { Button } from '$lib/components/ui/button';
	import { Card } from '$lib/components/ui/card';
	import { ExternalLink } from '@lucide/svelte';
	import GithubIcon from '$lib/components/icons/GithubIcon.svelte';
	import type { Project } from '$lib/data';

	let { project, index = 0 }: { project: Project; index?: number } = $props();

	const languageColors: Record<string, string> = {
		Python: '#3b82f6',
		TypeScript: '#22d3ee',
		JavaScript: '#facc15',
		Svelte: '#f97316',
		'C++': '#6366f1',
		Rust: '#f472b6',
		Go: '#14b8a6',
		Java: '#ef4444'
	};

	const previewGradients = [
		'from-primary/30 via-accent/20 to-neon-pink/30',
		'from-accent/30 via-neon-pink/20 to-primary/30',
		'from-neon-pink/30 via-primary/20 to-accent/30',
		'from-primary/20 via-secondary to-accent/20',
		'from-accent/20 via-primary/20 to-neon-pink/20'
	];

	const gradient = $derived(previewGradients[index % previewGradients.length]);
</script>

<Card
	class="group/card relative overflow-hidden border-border/60 bg-card/60 p-0 transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:bg-card/80 hover:shadow-[0_0_24px_-6px_rgba(168,85,247,0.25)]"
>
	<div
		class="relative h-32 overflow-hidden bg-gradient-to-br {gradient} p-4 transition-transform duration-500 group-hover/card:scale-105"
	>
		<div
			class="absolute inset-0 opacity-30"
			style="background-image: radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0); background-size: 18px 18px;"
		></div>
		<div class="relative flex h-full flex-col justify-between">
			<div class="flex items-center gap-1.5">
				<div class="h-2.5 w-2.5 rounded-full bg-red-500/80"></div>
				<div class="h-2.5 w-2.5 rounded-full bg-yellow-500/80"></div>
				<div class="h-2.5 w-2.5 rounded-full bg-green-500/80"></div>
			</div>
			<div class="font-mono text-xs text-foreground/70">
				<span class="text-primary">$</span>
				{project.name}
			</div>
		</div>
	</div>

	<div class="p-5">
		<div class="mb-3 flex items-start justify-between">
			<h3
				class="font-mono text-lg font-semibold text-card-foreground transition-colors group-hover/card:text-primary"
			>
				{project.name}
			</h3>
			{#if project.stars && project.stars > 0}
				<Badge variant="secondary" class="bg-secondary/80 text-secondary-foreground">
					★ {project.stars}
				</Badge>
			{/if}
		</div>

		<p class="mb-4 flex-grow text-sm text-muted-foreground">{project.description}</p>

		<div class="flex items-center justify-between">
			{#if project.language}
				<div class="flex items-center gap-1.5 text-xs text-muted-foreground">
					<span
						class="inline-block h-2 w-2 rounded-full"
						style="background-color: {languageColors[project.language] ?? '#a855f7'}"
					></span>
					{project.language}
				</div>
			{:else}
				<div></div>
			{/if}

			<Button
				variant="ghost"
				size="sm"
				href={project.url}
				target="_blank"
				rel="noopener noreferrer"
				class="gap-1.5 text-xs text-muted-foreground hover:text-foreground"
			>
				<GithubIcon class="h-3.5 w-3.5" />
				View
				<ExternalLink class="h-3 w-3" />
			</Button>
		</div>
	</div>
</Card>
