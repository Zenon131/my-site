<script lang="ts">
	import { Avatar } from '$lib/components/ui/avatar';
	import { Badge } from '$lib/components/ui/badge';
	import { Separator } from '$lib/components/ui/separator';
	import { Button } from '$lib/components/ui/button';
	import { user, projects, blogPosts } from '$lib/data';
	import ProjectCard from '$lib/components/ProjectCard.svelte';
	import GitHubActivity from '$lib/components/GitHubActivity.svelte';
	import GithubIcon from '$lib/components/icons/GithubIcon.svelte';
	import { Newspaper, Mail, Globe, User, ArrowDown } from '@lucide/svelte';

	const skills = [
		'AI/ML',
		'Bioengineering',
		'Neuroscience',
		'Web Development',
		'Prosthetics',
		'TypeScript',
		'Python',
		'Svelte'
	];

	const socials = [
		{ href: 'https://github.com/Zenon131', label: 'GitHub', icon: GithubIcon },
		{ href: 'https://www.engramartificial.com', label: 'Engram', icon: Globe },
		{ href: 'mailto:jonozw@seas.upenn.edu', label: 'Email', icon: Mail }
	];
</script>

<svelte:head>
	<title>Jonathan Wallace</title>
	<meta
		name="description"
		content="Bioengineering + Neuroscience student at UPenn. AI/ML, neuroscience, web development, data science."
	/>
</svelte:head>

<!-- Hero Section -->
<section class="relative mx-auto max-w-5xl px-6 py-24 md:py-32">
	<div class="flex flex-col items-center text-center">
		<div class="relative mb-8">
			<div
				class="absolute inset-0 -m-2 rounded-full bg-gradient-to-tr from-primary via-accent to-neon-pink opacity-40 blur-xl"
			></div>
			<Avatar
				class="relative h-32 w-32 ring-2 ring-primary/30 ring-offset-2 ring-offset-background"
			>
				<img src={user.avatar} alt={user.name} class="object-cover" />
			</Avatar>
		</div>

		<p class="mb-2 font-mono text-xs font-medium tracking-widest text-accent uppercase">
			Bioengineering & Neuroscience
		</p>

		<h1 class="mb-3 text-5xl font-bold tracking-tight text-foreground md:text-6xl">
			{user.name}
		</h1>
		<p class="mb-6 font-mono text-sm text-muted-foreground">@{user.username}</p>

		<p class="mb-10 max-w-xl text-lg leading-relaxed text-muted-foreground">
			{user.bio}
		</p>

		<div class="flex flex-wrap justify-center gap-3">
			{#each socials as social}
				<Button
					variant="outline"
					size="default"
					href={social.href}
					target={social.label === 'Email' ? undefined : '_blank'}
					rel={social.label === 'Email' ? undefined : 'noopener noreferrer'}
					class="border-border/60 bg-card/50 text-foreground backdrop-blur-sm transition-all hover:-translate-y-0.5 hover:border-primary/50 hover:bg-card/80 hover:text-primary"
				>
					<social.icon class="mr-2 h-4 w-4" />
					{social.label}
				</Button>
			{/each}
		</div>

		<a
			href="#about"
			class="mt-16 inline-flex animate-bounce items-center gap-2 text-xs text-muted-foreground transition-colors hover:text-primary"
		>
			<ArrowDown class="h-4 w-4" />
			Explore
		</a>
	</div>
</section>

<Separator class="mx-auto max-w-5xl bg-border/50" />

<!-- About Section -->
<section id="about" class="mx-auto max-w-5xl scroll-mt-24 px-6 py-20">
	<div class="mb-8 flex items-center gap-3">
		<User class="h-5 w-5 text-primary" />
		<h2 class="text-3xl font-bold text-foreground">About</h2>
	</div>

	<div class="grid gap-8 md:grid-cols-[1fr_280px]">
		<div class="space-y-5 text-base leading-relaxed text-muted-foreground">
			<p>
				I'm a bioengineering student at the <a
					href="https://www.upenn.edu"
					target="_blank"
					rel="noopener noreferrer"
					class="font-medium text-foreground underline decoration-primary/50 underline-offset-4 hover:decoration-primary"
					>University of Pennsylvania</a
				>, currently exploring the intersection of technology and healthcare.
			</p>
			<p>
				My interests lie in <span class="font-medium text-accent">AI/ML</span>,
				<span class="font-medium text-primary">neuroscience</span>, and
				<span class="font-medium text-neon-pink">prosthetics</span> — I believe these fields will shape
				the future of human health and capability.
			</p>
			<p>
				When I'm not studying or coding, you can find me working on personal projects, reading about
				emerging technologies, or contributing to open source.
			</p>
		</div>

		<div class="h-fit rounded-xl border border-border/60 bg-card/50 p-5 backdrop-blur-sm">
			<h3 class="mb-3 font-mono text-sm font-medium text-muted-foreground uppercase">Stack</h3>
			<div class="flex flex-wrap gap-2">
				{#each skills as skill}
					<Badge
						variant="secondary"
						class="bg-secondary/70 text-secondary-foreground transition-colors hover:bg-primary/20 hover:text-primary"
					>
						{skill}
					</Badge>
				{/each}
			</div>
		</div>
	</div>
</section>

<Separator class="mx-auto max-w-5xl bg-border/50" />

<!-- Projects Section -->
<section id="projects" class="mx-auto max-w-5xl scroll-mt-24 px-6 py-20">
	<div class="mb-8 flex items-center gap-3">
		<GithubIcon class="h-5 w-5 text-primary" />
		<h2 class="text-3xl font-bold text-foreground">Projects</h2>
	</div>

	{#if projects.length === 0}
		<div class="rounded-xl border border-border/60 bg-card/50 p-8 text-center">
			<p class="text-muted-foreground">
				No projects to show yet. Edit <code class="text-foreground">src/lib/data.ts</code> to add your
				featured repos.
			</p>
		</div>
	{:else}
		<div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
			{#each projects as project, i}
				<ProjectCard {project} index={i} />
			{/each}
		</div>
	{/if}

	<div class="mt-16 grid gap-8 lg:grid-cols-[1fr_320px]">
		<div></div>
		<div class="rounded-xl border border-border/60 bg-card/50 p-5 backdrop-blur-sm">
			<GitHubActivity />
		</div>
	</div>
</section>

<Separator class="mx-auto max-w-5xl bg-border/50" />

<!-- Updates Section -->
<section id="updates" class="mx-auto max-w-5xl scroll-mt-24 px-6 py-20">
	<div class="mb-8 flex items-center gap-3">
		<Newspaper class="h-5 w-5 text-primary" />
		<h2 class="text-3xl font-bold text-foreground">Updates</h2>
	</div>

	{#if blogPosts.length === 0}
		<div class="rounded-xl border border-border/60 bg-card/50 p-8 text-center">
			<p class="text-muted-foreground">
				No updates yet. Edit <code class="text-foreground">src/lib/data.ts</code> to add blog posts.
			</p>
		</div>
	{:else}
		<div class="grid gap-4">
			{#each [...blogPosts].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()) as post}
				<a
					href="/updates/{post.slug}"
					class="group block rounded-xl border border-border/60 bg-card/50 p-5 backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/40 hover:bg-card/70"
				>
					<div class="mb-2 flex items-start justify-between">
						<h3
							class="font-mono text-lg font-semibold text-card-foreground transition-colors group-hover:text-primary"
						>
							{post.title}
						</h3>
						<span class="shrink-0 text-xs text-muted-foreground">{post.date}</span>
					</div>
					<p class="text-sm text-muted-foreground">{post.excerpt}</p>
				</a>
			{/each}
		</div>
	{/if}
</section>
