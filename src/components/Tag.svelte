<script>
	import { TAGS } from '../config/tags';

	export let tag;

	const { colorClass, text, fontColor, hidden } = TAGS[tag] || {};
	const label = text || tag;
</script>

{#if !hidden}
	<div
		class={`
    mt-1
    rounded-full
    py-1
    px-3
    text-sm
    font-medium
    ${colorClass}
    ${fontColor}
    mr-2
  `}
	>
		{label}
	</div>
{/if}

<style>
</style>
