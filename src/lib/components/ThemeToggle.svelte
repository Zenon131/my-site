<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import { theme, toggleTheme } from '$lib/stores/theme.svelte';
	import { Moon, Sun } from '@lucide/svelte';
</script>

<Button
	variant="ghost"
	size="icon"
	class="text-muted-foreground hover:bg-secondary hover:text-foreground"
	onclick={toggleTheme}
	aria-label={theme.value === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
	title={theme.value === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
>
	{#if theme.value === 'dark'}
		<Moon class="h-4 w-4" />
	{:else}
		<Sun class="h-4 w-4" />
	{/if}
</Button>
