<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import { Card } from '$lib/components/ui/card';
	import { blogPosts, getPostBySlug } from '$lib/data';
	import { page } from '$app/stores';

	let { data } = $props();

	const post = getPostBySlug($page.params.slug);
</script>

<svelte:head>
	<title>{post?.title ?? 'Post Not Found'} | Jonathan Wallace</title>
</svelte:head>

<div class="mx-auto max-w-3xl px-6 py-12">
	<a href="/#updates">
		<Button variant="ghost" class="text-zinc-400 hover:text-zinc-200 mb-8 -ml-2">
			<svg class="h-4 w-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
				<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
			</svg>
			Back to updates
		</Button>
	</a>

	{#if post}
		<article>
			<header class="mb-8">
				<span class="text-sm text-zinc-500 mb-2 block">{post.date}</span>
				<h1 class="text-3xl font-bold text-zinc-100">{post.title}</h1>
			</header>

			<Card class="border-zinc-800 bg-zinc-900/30 p-8">
				<div class="prose prose-invert prose-zinc max-w-none">
					{@html post.content}
				</div>
			</Card>
		</article>
	{:else}
		<Card class="border-zinc-800 bg-zinc-900/30 p-8 text-center">
			<h2 class="text-xl font-semibold text-zinc-100 mb-2">Post not found</h2>
			<p class="text-zinc-400 mb-4">This post doesn't exist or has been removed.</p>
			<a href="/#updates">
				<Button variant="outline" class="border-zinc-700 bg-zinc-900/50 hover:bg-zinc-800 text-zinc-200">
					Back to updates
				</Button>
			</a>
		</Card>
	{/if}
</div>
