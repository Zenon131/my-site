<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import { Mail, Globe, Folder, User, Newspaper } from '@lucide/svelte';
	import GithubIcon from '$lib/components/icons/GithubIcon.svelte';
	import ThemeToggle from './ThemeToggle.svelte';

	const navItems = [
		{ href: '#about', label: 'About', icon: User },
		{ href: '#projects', label: 'Projects', icon: Folder },
		{ href: '#updates', label: 'Updates', icon: Newspaper }
	];

	const socialItems = [
		{ href: 'https://github.com/Zenon131', label: 'GitHub', icon: GithubIcon, external: true },
		{ href: 'https://www.engramartificial.com', label: 'Engram', icon: Globe, external: true },
		{ href: 'mailto:jonozw@seas.upenn.edu', label: 'Email', icon: Mail, external: false }
	];
</script>

<nav
	class="fixed top-0 right-0 left-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-md"
>
	<div class="mx-auto flex max-w-5xl items-center justify-between px-6 py-3">
		<a
			href="#/"
			class="font-mono text-lg font-bold tracking-tight text-foreground transition-colors hover:text-primary"
		>
			jw
		</a>

		<div class="flex items-center gap-1 md:gap-2">
			{#each navItems as item}
				<Button
					variant="ghost"
					size="icon-sm"
					href={item.href}
					class="text-muted-foreground hover:bg-secondary hover:text-foreground"
					aria-label={item.label}
					title={item.label}
				>
					<item.icon class="h-4 w-4" />
				</Button>
			{/each}

			<div class="mx-1 h-5 w-px bg-border/70" aria-hidden="true"></div>

			{#each socialItems as item}
				<Button
					variant="ghost"
					size="icon-sm"
					href={item.href}
					target={item.external ? '_blank' : undefined}
					rel={item.external ? 'noopener noreferrer' : undefined}
					class="text-muted-foreground hover:bg-secondary hover:text-foreground"
					aria-label={item.label}
					title={item.label}
				>
					<item.icon class="h-4 w-4" />
				</Button>
			{/each}

			<ThemeToggle />
		</div>
	</div>
</nav>
