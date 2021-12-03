<script>
  export let checked;
  export let id;
  export let label;
</script>

<style>
  
</style>

<div class="flex items-start ml-2">
  <div class="flex items-center h-5">
    <input
      id="{id}"
      name="{id}"
      type="checkbox"
      class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
      bind:checked={checked}
    />
  </div>
  <div class="ml-3 text-sm">
    <label for="{id}" class="font-medium text-gray-700 dark:text-gray-200"
      >{label}</label
    >
  </div>
</div>
