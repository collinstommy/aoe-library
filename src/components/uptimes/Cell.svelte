<script>
  export let hidden = false;
</script>

<style>
  
</style>

<td class="py-3 px-6 text-left whitespace-nowrap">
  {#if hidden}
    -
  {:else}
    <div class:invisible={hidden} class="flex items-center">
      <slot />
    </div>
  {/if}
</td>
