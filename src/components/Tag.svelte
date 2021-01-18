<script>
  import { TAGS } from '../config';
  
  export let tag;

  const { colorClass, text } = TAGS[tag];
  const label = text || tag;
</script>
	
<style>
	
</style>


<div class={`rounded-full text-sm py-1 px-3 mt-1 font-medium ${colorClass} text-white mr-2`}>{label}</div>
