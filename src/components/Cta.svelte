<script>
  export let href;

  const className = `
    px-3
    py-2
    bg-blue-800
    border-2
    rounded-md
    text-white
    hover:bg-blue-500
    whitespace-nowrap
  `;

</script>

<style>
  
</style>
  {#if href}
   <a class={className} href={href}>
    <slot />
  </a>
  {:else}
    <button class={className}>
      <slot />
    </button>
  {/if}
