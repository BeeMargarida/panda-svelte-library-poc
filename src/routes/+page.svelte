<script lang="ts">
	import { default as Alert } from '$lib/components/Alert/Alert.svelte';
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

<div style="display: flex; gap: 20px; margin: 20px;">
	<Button variant="filled">Filled</Button>
	<Button variant="outline">Outline</Button>
</div>

<div style="display: flex; flex-direction: column; gap: 20px; margin: 20px;">
	<Alert title="Important!" variant="filled">This is an alert message</Alert>
	<Alert title="Important!" variant="outline">This is an alert message outlined</Alert>
</div>
