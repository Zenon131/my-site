<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';
	import IconNav from '$lib/components/IconNav.svelte';
	import Starfield from '$lib/components/Starfield.svelte';
	import { theme } from '$lib/stores/theme.svelte';

	let { children } = $props();

	const themeColor = $derived(theme.value === 'dark' ? '#03020a' : '#f7f6fe');
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<meta name="theme-color" content={themeColor} />
</svelte:head>

<div class="relative min-h-screen overflow-x-hidden bg-background text-foreground">
	<Starfield />

	<IconNav />

	<main class="relative z-10 pt-20">
		{@render children()}
	</main>

	<footer class="relative z-10 mt-20 border-t border-border/50 py-8">
		<div class="mx-auto max-w-5xl px-6 text-center">
			<p class="font-mono text-xs text-muted-foreground">
				&copy; {new Date().getFullYear()} Jonathan Wallace
			</p>
			<p class="mt-1 text-xs text-muted-foreground/60">
				Built with Svelte, Tailwind, and stardust.
			</p>
		</div>
	</footer>
</div>
