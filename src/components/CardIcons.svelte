<script>
	export let twitch;
	export let youtube;
	export let facebook;
	export let discord;
	export let url;
	export let type;

	import Icon from './Icon.svelte';
	import Cta from './Cta.svelte';

	const ctaText = type === 'app' ? 'Download' : 'View Site';
</script>

<div class="flex w-full items-center justify-between">
	<div class="flex">
		{#if twitch} <a href={twitch}><Icon type="twitch" /></a>{/if}
		{#if youtube} <a href={youtube}><Icon type="youtube" /></a>{/if}
		{#if facebook} <a href={facebook}><Icon type="facebook" /></a>{/if}
		{#if discord} <a href={discord}><Icon type="discord" /></a>{/if}
	</div>
	{#if url}
		<div>
			<a
				class="
      ml-1
      flex
      items-baseline
      text-lg
      font-semibold
      text-indigo-900
      
      hover:text-indigo-500
      hover:underline

      dark:text-white
      "
				href={url}
			>
				<span>{ctaText}</span>
				<i class="ri-external-link-fill ml-1" />
			</a>
		</div>
	{/if}
</div>

<style>
</style>
