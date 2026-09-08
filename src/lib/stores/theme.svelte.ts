import { browser } from '$app/environment';

export type Theme = 'dark' | 'light';

function getInitialTheme(): Theme {
	if (!browser) return 'dark';
	const stored = localStorage.getItem('theme') as Theme | null;
	if (stored === 'light' || stored === 'dark') return stored;
	return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
}

export const theme = $state<{ value: Theme }>({ value: getInitialTheme() });

export function toggleTheme() {
	const next = theme.value === 'dark' ? 'light' : 'dark';
	setTheme(next);
}

export function setTheme(next: Theme) {
	theme.value = next;
	if (browser) {
		localStorage.setItem('theme', next);
		document.documentElement.setAttribute('data-theme', next);
	}
}
