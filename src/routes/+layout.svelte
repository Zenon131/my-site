<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<meta name="theme-color" content="#09090b" />
</svelte:head>

<div class="min-h-screen bg-zinc-950 text-zinc-200">
	<nav
		class="fixed top-0 right-0 left-0 z-50 border-b border-zinc-800/50 bg-zinc-950/80 backdrop-blur-sm"
	>
		<div class="mx-auto flex max-w-3xl items-center justify-between px-6 py-4">
			<a href="/" class="text-lg font-semibold text-zinc-100 transition-colors hover:text-white">
				jw
			</a>
			<div class="flex items-center gap-6">
				<a href="#about" class="text-sm text-zinc-400 transition-colors hover:text-zinc-200"
					>About</a
				>
				<a href="#projects" class="text-sm text-zinc-400 transition-colors hover:text-zinc-200"
					>Projects</a
				>
				<a href="#updates" class="text-sm text-zinc-400 transition-colors hover:text-zinc-200"
					>Updates</a
				>
				<a
					href="https://github.com/Zenon131"
					target="_blank"
					rel="noopener noreferrer"
					class="text-sm text-zinc-400 transition-colors hover:text-zinc-200"
				>
					GitHub
				</a>
			</div>
		</div>
	</nav>

	<main class="pt-20">
		{@render children()}
	</main>

	<footer class="mt-20 border-t border-zinc-800/50 py-8">
		<div class="mx-auto max-w-3xl px-6 text-center text-sm text-zinc-500">
			&copy; {new Date().getFullYear()} Jonathan Wallace
		</div>
	</footer>
</div>
