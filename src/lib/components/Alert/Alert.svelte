<script lang="ts">
	import { getStyle } from "./Alert.styles.js";

	export let color = 'blue';
	export let radius = 'sm';
	export let variant = 'filled';
	export let title = '';
	export let withCloseButton = false;
    export let override: { base?: {}, wrapper?: {}, content?: {}, title?: {}, label?: {}, message?: {}, closeButton?: {}} = {};

	const classes = getStyle({ color, radius }, override);
</script>

<div class={classes.root({ visual: variant })}>
    <div class={classes.wrapper}>
        <div class={classes.content}>
            {#if title}
                <div class={classes.title}>
                    <span class={classes.label}>
                        {title}
                    </span>
                    {#if withCloseButton}
                        <button class={classes.closeButton({ visual: variant })}>
                            X
                        </button>
                    {/if}
                </div>
            {/if}
            <div class={classes.message({ visual: variant })}>
                <slot />
            </div>
        </div>
    </div>
</div>
