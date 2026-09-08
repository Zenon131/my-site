<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import { Card } from '$lib/components/ui/card';
	import { blogPosts, getPostBySlug } from '$lib/data';
	import { page } from '$app/stores';
	import { ArrowLeft } from '@lucide/svelte';

	let { data } = $props();

	const post = getPostBySlug($page.params.slug as string);
</script>

<svelte:head>
	<title>{post?.title ?? 'Post Not Found'} | Jonathan Wallace</title>
</svelte:head>

<div class="mx-auto max-w-3xl px-6 py-12">
	<a href="/#updates">
		<Button
			variant="ghost"
			class="mb-8 -ml-2 text-muted-foreground hover:bg-secondary hover:text-foreground"
		>
			<ArrowLeft class="mr-1 h-4 w-4" />
			Back to updates
		</Button>
	</a>

	{#if post}
		<article>
			<header class="mb-8">
				<span class="mb-2 block font-mono text-sm text-muted-foreground">{post.date}</span>
				<h1 class="text-3xl font-bold tracking-tight text-foreground">{post.title}</h1>
			</header>

			<Card class="border-border/60 bg-card/50 p-8 backdrop-blur-sm">
				<div class="prose max-w-none prose-zinc prose-invert">
					{@html post.content}
				</div>
			</Card>
		</article>
	{:else}
		<Card class="border-border/60 bg-card/50 p-8 text-center backdrop-blur-sm">
			<h2 class="mb-2 text-xl font-semibold text-foreground">Post not found</h2>
			<p class="mb-4 text-muted-foreground">This post doesn't exist or has been removed.</p>
			<a href="/#updates">
				<Button
					variant="outline"
					class="border-border/60 bg-card/50 text-foreground hover:bg-card/80 hover:text-primary"
				>
					Back to updates
				</Button>
			</a>
		</Card>
	{/if}
</div>
