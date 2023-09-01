<script lang="ts">
	import { css } from 'styled-system/css';

    const style = css({ color: 'rose.50' });
</script>

<p class={style}>
	<slot />
</p>
