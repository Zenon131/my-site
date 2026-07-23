<script lang="ts">
	import { Avatar } from '$lib/components/ui/avatar';
	import { Button } from '$lib/components/ui/button';
	import { Card } from '$lib/components/ui/card';
	import { Badge } from '$lib/components/ui/badge';
	import { Separator } from '$lib/components/ui/separator';
	import { user, projects, blogPosts } from '$lib/data';
</script>

<svelte:head>
	<title>Jonathan Wallace</title>
	<meta
		name="description"
		content="Bioengineering student at UPenn. AI/ML, neuroscience, web development."
	/>
</svelte:head>

<!-- Hero Section -->
<section class="mx-auto max-w-3xl px-6 py-20">
	<div class="flex flex-col items-center text-center">
		<Avatar class="mb-6 h-32 w-32 ring-2 ring-zinc-800">
			<img src={user.avatar} alt={user.name} class="object-cover" />
		</Avatar>

		<h1 class="mb-2 text-4xl font-bold text-zinc-100">{user.name}</h1>
		<p class="mb-6 text-lg text-zinc-400">@{user.username}</p>

		<p class="mb-8 max-w-xl leading-relaxed text-zinc-300">
			{user.bio}
		</p>

		<div class="flex flex-wrap justify-center gap-4">
			<Button
				variant="outline"
				class="border-zinc-700 bg-zinc-900/50 text-zinc-200 hover:bg-zinc-800"
			>
				<a
					href="https://github.com/Zenon131"
					target="_blank"
					rel="noopener noreferrer"
					class="flex items-center gap-2"
				>
					<svg class="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
						<path
							d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
						/>
					</svg>
					GitHub
				</a>
			</Button>

			<Button
				variant="outline"
				class="border-zinc-700 bg-zinc-900/50 text-zinc-200 hover:bg-zinc-800"
			>
				<a
					href="https://www.engramartificial.com"
					target="_blank"
					rel="noopener noreferrer"
					class="flex items-center gap-2"
				>
					<svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
						/>
					</svg>
					Engram Artificial
				</a>
			</Button>

			<Button
				variant="outline"
				class="border-zinc-700 bg-zinc-900/50 text-zinc-200 hover:bg-zinc-800"
			>
				<a href="mailto:jonozw@seas.upenn.edu" class="flex items-center gap-2">
					<svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
						/>
					</svg>
					Email Me
				</a>
			</Button>
		</div>
	</div>
</section>

<Separator class="mx-auto max-w-3xl bg-zinc-800/50" />

<!-- About Section -->
<section id="about" class="mx-auto max-w-3xl scroll-mt-20 px-6 py-16">
	<h2 class="mb-6 text-2xl font-semibold text-zinc-100">About</h2>

	<Card class="glassy-container border-zinc-800 bg-zinc-900/30 p-6">
		<div class="space-y-4 leading-relaxed text-zinc-300">
			<p>
				I'm a bioengineering student at the <a
					href="https://www.upenn.edu"
					target="_blank"
					rel="noopener noreferrer"
					class="text-zinc-100 hover:underline">University of Pennsylvania</a
				>, currently exploring the intersection of technology and healthcare.
			</p>
			<p>
				My interests lie in <span class="text-zinc-100">AI/ML</span>,
				<span class="text-zinc-100">neuroscience</span>, and
				<span class="text-zinc-100">prosthetics</span> — I believe these fields will shape the future
				of human health and capability.
			</p>
			<p>
				When I'm not studying or coding, you can find me working on personal projects, reading about
				emerging technologies, or contributing to open source.
			</p>
		</div>

		<div class="mt-6 flex flex-wrap gap-2">
			<Badge variant="secondary" class="bg-zinc-800 text-zinc-300 hover:bg-zinc-700">AI/ML</Badge>
			<Badge variant="secondary" class="bg-zinc-800 text-zinc-300 hover:bg-zinc-700"
				>Bioengineering</Badge
			>
			<Badge variant="secondary" class="bg-zinc-800 text-zinc-300 hover:bg-zinc-700"
				>Neuroscience</Badge
			>
			<Badge variant="secondary" class="bg-zinc-800 text-zinc-300 hover:bg-zinc-700"
				>Web Development</Badge
			>
			<Badge variant="secondary" class="bg-zinc-800 text-zinc-300 hover:bg-zinc-700"
				>Prosthetics</Badge
			>
		</div>
	</Card>
</section>

<Separator class="mx-auto max-w-3xl bg-zinc-800/50" />

<!-- Projects Section -->
<section id="projects" class="mx-auto max-w-3xl scroll-mt-20 px-6 py-16">
	<h2 class="mb-6 text-2xl font-semibold text-zinc-100">Some GitHub Projects</h2>

	{#if projects.length === 0}
		<Card class="glassy-container border-zinc-800 bg-zinc-900/30 p-6 text-center">
			<p class="text-zinc-400">
				No projects to show yet. Edit <code class="text-zinc-300">src/lib/data.ts</code> to add your featured
				repos.
			</p>
		</Card>
	{:else}
		<div class="grid gap-4 md:grid-cols-2">
			{#each projects as project}
				<Card class="glassy-container border-zinc-800 bg-zinc-900/30 p-5 transition-colors hover:bg-zinc-900/50">
					<div class="flex h-full flex-col">
						<div class="mb-2 flex items-start justify-between">
							<a
								href={project.url}
								target="_blank"
								rel="noopener noreferrer"
								class="text-lg font-medium text-zinc-100 transition-colors hover:text-white"
							>
								{project.name}
							</a>
							{#if project.stars && project.stars > 0}
								<Badge variant="secondary" class="bg-zinc-800 text-zinc-400">
									★ {project.stars}
								</Badge>
							{/if}
						</div>
						<p class="mb-3 flex-grow text-sm text-zinc-400">{project.description}</p>
						<div class="flex items-center gap-4 text-sm">
							{#if project.language}
								<span class="text-zinc-500">{project.language}</span>
							{/if}
							<a
								href={project.url}
								target="_blank"
								rel="noopener noreferrer"
								class="inline-flex items-center gap-1 text-zinc-400 transition-colors hover:text-zinc-200"
							>
								View on GitHub
								<svg class="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
									/>
								</svg>
							</a>
						</div>
					</div>
				</Card>
			{/each}
		</div>
	{/if}
</section>

<Separator class="mx-auto max-w-3xl bg-zinc-800/50" />

<!-- Updates Section -->
<section id="updates" class="mx-auto max-w-3xl scroll-mt-20 px-6 py-16">
	<h2 class="mb-6 text-2xl font-semibold text-zinc-100">Updates</h2>

	{#if blogPosts.length === 0}
		<Card class="glassy-container border-zinc-800 bg-zinc-900/30 p-6 text-center">
			<p class="text-zinc-400">
				No updates yet. Edit <code class="text-zinc-300">src/lib/data.ts</code> to add blog posts.
			</p>
		</Card>
	{:else}
		<div class="space-y-4">
			{#each blogPosts as post}
				<Card class="glassy-container border-zinc-800 bg-zinc-900/30 p-5 transition-colors hover:bg-zinc-900/50">
					<a href="/updates/{post.slug}" class="block">
						<div class="mb-2 flex items-start justify-between">
							<h3 class="text-lg font-medium text-zinc-100 transition-colors hover:text-white">
								{post.title}
							</h3>
							<span class="text-sm text-zinc-500">{post.date}</span>
						</div>
						<p class="text-sm text-zinc-400">{post.excerpt}</p>
					</a>
				</Card>
			{/each}
		</div>
	{/if}
</section>
