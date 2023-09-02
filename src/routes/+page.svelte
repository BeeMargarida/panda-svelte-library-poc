<script lang="ts">
	import { default as Button } from '$lib/components/Button/Button.svelte';
	import 'styled-system/styles.css';

	let theme = 'light';
	function toggle() {
		theme = theme === 'light' ? 'dark' : 'light';

		const element = document.querySelector('body');
		if (!element) return;

		element.className = theme;
	}
</script>

<Button on:click={toggle}>Toggle theme</Button>

<Button>Click me</Button>
