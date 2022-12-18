<script>
	export let href;
	export let handleClick;

	const className = `
    block
    px-3
    py-2
    bg-indigo-800
    border-2
    rounded-md
    text-white
    hover:underline
    whitespace-nowrap

    dark:bg-gray-200
    dark:text-gray-900
  `;
</script>

{#if href}
	<a class={className} {href}>
		<slot />
	</a>
{:else}
	<button class={className} on:click={handleClick}>
		<slot />
	</button>
{/if}
