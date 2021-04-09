<script>
  import { TAGS } from '../config/tags';
  
  export let tag;

  const { colorClass, text, fontColor, hidden } = TAGS[tag] || {};
  const label = text || tag;
</script>
	
<style>
	
</style>

{#if !hidden}
  <div class={`
    rounded-full
    text-sm
    py-1
    px-3
    mt-1
    font-medium
    ${colorClass}
    ${fontColor}
    mr-2
  `}>
    {label}
  </div>
{/if}
