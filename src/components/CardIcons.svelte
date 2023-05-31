<script>
	export let twitch;
	export let youtube;
	export let facebook;
	export let discord;
	export let url;
	export let type;

	import SocialIcon from './SocialIcon.svelte';

	const ctaText = type === 'app' ? 'Download' : 'View Site';
</script>

<div class="flex w-full items-center justify-between">
	<div class="links">
		<div class="flex">
			{#if twitch} <a href={twitch}><SocialIcon type="twitch" /></a>{/if}
			{#if youtube} <a href={youtube}><SocialIcon type="youtube" /></a>{/if}
			{#if facebook} <a href={facebook}><SocialIcon type="facebook" /></a>{/if}
			{#if discord} <a href={discord}><SocialIcon type="discord" /></a>{/if}
		</div>
		{#if url}
			<div>
				<a
					class="ml-1 flex items-baseline text-lg font-semibold text-indigo-900 hover:underline marker:hover:text-indigo-500 dark:text-white"
					href={url}
					target="_blank"
					rel="noreferrer"
				>
					<span>{ctaText}</span>
					<i class="ri-external-link-fill ml-1" />
				</a>
			</div>
		{/if}
	</div>
</div>

<style>
</style>
