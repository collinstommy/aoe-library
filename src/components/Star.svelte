<script>
  export let checked;
  export let votes;
</script>

<style>
</style>
<div class="flex items-center rounded hover:bg-gray-100 py-1 px-2 cursor-pointer">
  <i class={`ri-star-fill
    ri-lg
    text-xlg
    text-yellow-300
    ${checked ? 'ri-star-fill' : 'ri-star-line'}
  `}></i>
  <div class="ml-2 font-medium">{votes}</div>
</div>
