import { cva } from 'styled-system/css';
import { token } from 'styled-system/tokens';

export function getStyle({ color, size, radius, fullSize }, override) {
    const root = cva({
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
			border: '1px solid transparent'
		},
		variants: {
			visual: {
				filled: {
					backgroundColor: { base: `${color}.600`, _dark: `${color}.800` },
					color: 'white',
					'&:hover': { backgroundColor: `${color}.700` }
				},
				outline: {
					borderColor: token.var(`${color}.700`),
					// @TODO: fix this - the colors are not being applied
					// borderColor: { base: `${color}.600`, _dark: `${color}.400` },
					backgroundColor: 'transparent',
					color: { base: `${color}.600`, _dark: `${color}.400` }
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
	}, override.base);

    return {
        root
    }
}