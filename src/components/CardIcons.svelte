<script>
	export let twitch;
	export let youtube;
	export let facebook;
	export let url;
	export let type;

	import Icon from './Icon.svelte';
	import Cta from './Cta.svelte';

	const ctaText = type === 'app' ? 'Download' : 'View Site';
</script>

<div class="flex items-center">
	{#if twitch} <a href={twitch}><Icon type="twitch" /></a>{/if}
	{#if youtube} <a href={youtube}><Icon type="youtube" /></a>{/if}
	{#if facebook} <a href={facebook}><Icon type="facebook" /></a>{/if}
	{#if url}
		<a
			class="
      ml-1
      flex
      items-baseline
      text-lg
      font-semibold
      text-indigo-800
      
      hover:text-indigo-500
      hover:underline

      dark:text-white
      "
			href={url}
		>
			<span>{ctaText}</span>
			<i class="ri-external-link-fill ml-1" />
		</a>
	{/if}
</div>

<style>
</style>
