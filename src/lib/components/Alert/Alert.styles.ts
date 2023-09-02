import { css, cva } from 'styled-system/css';

export function getStyle({ color, radius }, override) {
    const root = cva({
		base: {
			fontFamily: 'standard',
            position: 'relative',
			overflow: 'hidden',
            padding: 'token(spacing.sm) token(spacing.md)',
			borderRadius: radius,
			border: '1px solid transparent',
		},
		variants: {
			visual: {
				light: {
					border: 'transparent',
					backgroundColor: { base: `${color}.50`},
					// backgroundColor: { base: `${color}.50`, _dark: `rgba(token(${color}.800), 0.35)` },
					color: { base: `${color}.600`, _dark: 'dark.50' }
				},
				filled: {
					border: 'transparent',
					backgroundColor: { base: `${color}.600`, _dark: `${color}.800` },
					color: 'white'
				},
				outline: {
					borderColor: { base: `${color}.600`, _dark: `${color}.400` },
					color: { base: `${color}.600`, _dark: `${color}.400` }
				}
			},
		}
	}, override.base);

    const wrapper = css({
		display: 'flex'
	}, override.wrapper);

    const content = css({
		flex: 1
	}, override.content);

    const title = css({
		boxSizing: 'border-box',
        margin: 0,
        marginBottom: 7,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        lineHeight: 'sm',
        fontSize: 'sm',
        fontWeight: 'bold'
	}, override.title);

    const label = css({
		display: 'block',
        overflow: 'hidden',
        textOverflow: 'ellipsis'
	}, override.label);

    const message = cva({
        base: {
            textOverflow: 'ellipsis',
            overflow: 'hidden',
            lineHeight: 'sm',
            fontSize: 'sm',
            color: { base: 'black', _dark: 'white' }
        },
        variants: {
            visual: {
                filled: {
                    color: 'white'
                },
                light: {
                    color: { base: 'black', _dark: 'dark.50' }
                }
            }   
        }
	}, override.message);

    const closeButton = cva({
        base: {
            marginTop: '2px'
        },
        variants: {
            visual: {
                filled: {
                    color: 'white'
                }
            }   
        }
	}, override.closeButton);

    return {
        root,
        wrapper,
        content,
        title,
        label,
        message,
        closeButton
    }
}