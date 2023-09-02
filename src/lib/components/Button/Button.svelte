<script lang="ts">
	import { cva } from 'styled-system/css';

	export let color = 'blue';
	export let radius = 'sm';
	export let size = 'sm';
	export let fullSize = false;

	const buttonStyle = cva({
		base: {
			cursor: 'pointer',
			position: 'relative',
			boxSizing: 'border-box',
			textDecoration: 'none',
			outline: 'none',
			userSelect: 'none',
			appearance: 'none',
			textAlign: 'center',
			display: 'flex',
			justifyContent: 'center',
			alignItems: 'center',
			background: null,
			borderRadius: radius,
			fontFamily: 'standard',
			fontWeight: 'semibold',
			fontSize: size,
			lineHeight: 1,
			flexGrow: 0,
			width: fullSize ? '100%' : 'fit-content',
		},
		variants: {
			visual: {
				filled: {
					border: 'transparent',
					backgroundColor: { base: `${color}.600`, _dark: `${color}.800` },
					color: 'white',
					'&:hover': { backgroundColor: `${color}.700` },
				},
				outline: {
					border: { base: `1px solid token(${color}.700)`, _dark: `1px solid token(${color}.400)` },
					backgroundColor: 'transparent',
					color: { base: `${color}.700`, _dark: `${color}.400` },
				}
			},
			size: {
				xs: {
					height: '30px',
					padding: '0px 14px'
				},
				sm: {
					height: '36px',
					padding: '0px 18px'
				},
				md: {
					height: '42px',
					padding: '0px 22px'
				},
				lg: {
					height: '50px',
					padding: '0px 26px'
				},
				xl: {
					height: '60px',
					padding: '0px 32px'
				},
				compact_xs: {
					height: '22px',
					padding: '0 7px'
				},
				compact_sm: {
					height: '26px',
					padding: '0 8px'
				},
				compact_md: {
					height: '30px',
					padding: '0 10px'
				},
				compact_lg: {
					height: '34px',
					padding: '0 12px'
				},
				compact_xl: {
					height: '40px',
					padding: '0 14px'
				}
			}
		}
	})
</script>

<button class={buttonStyle({ visual: 'filled', size: size })} on:click>
	<slot />
</button>
