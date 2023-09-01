<script lang="ts">
	// import { css } from '@panda-test/styled-system/css';
	import { cva } from 'styled-system/css';

	export let color = 'blue';
	export let radius = 'sm';
	export let size = 'sm';
	export let fullSize = false;

    // const style = css({ bg: 'red.300', px: '2', py: '3', color: 'dark.800' });
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
					backgroundColor: `${color}.600`,
					color: 'white',
					'&:hover': { backgroundColor: `${color}.700` }
				},
				outline: {
					border: `1px solid ${color}.700`,
					backgroundColor: 'transparent',
					color: `${color}.700`,
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

<button class={buttonStyle({ visual: 'filled', size: size })}>
	<slot />
</button>
