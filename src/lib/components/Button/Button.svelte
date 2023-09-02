<script lang="ts">
	import { cx } from 'styled-system/css';
	import { getStyle } from "./Button.styles.js";

	export let className = '';
	export let color = 'blue';
	export let radius = 'sm';
	export let size = 'sm';
	export let variant = 'filled';
	export let fullSize = false;
	export let override: { base?: {}} = {};

	const { root } = getStyle({ color, size, radius, fullSize }, override);
</script>

<button class={cx(root({ visual: variant, size: size }), className)} on:click>
	<slot />
</button>
