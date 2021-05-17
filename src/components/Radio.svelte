<script>
  export let group;
  export let id;
  export let value;

  $: checked = group === value;
</script>

<style>
  
</style>

<label
  for={id}
  class="cursor-pointer p-2 px-4 rounded-full border-2 flex items-center mr-2"
  class:border-indigo-500={checked}
  class:border-gray-200={!checked}
>
  <input
    type="radio"
    class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 mr-2" 
    {value}
    {id}
    bind:group
  />
  <slot />
</label>
