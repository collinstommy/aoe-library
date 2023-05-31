<script>
	import Tag from './Tag.svelte';
	import CardIcons from './CardIcons.svelte';
	import { page } from '$app/stores';
	import Star from './Star.svelte';

	export let url = '';
	export let title = '';
	export let description = '';
	export let isNew = false;
	export let twitch = '';
	export let youtube = '';
	export let facebook = '';
	export let tags = '';
	export let type = '';
	export let discord = '';
	export let id = '';
</script>

<article
	class="card transition-shado md:py- flex flex-col justify-between rounded-md border border-gray-200 bg-white px-4 py-6 text-gray-900 dark:bg-gray-800 dark:text-white md:px-8"
>
	{#if isNew}
		<div
			class="ribbon absolute top-2 -right-0.5 rounded-l-md bg-indigo-800 py-1 px-4 text-sm text-white shadow-md"
		>
			New
		</div>
	{/if}
	<div>
		<h2 class="text-xl md:text-2xl">{title}</h2>
		<p class="description mt-4 text-gray-600 dark:text-gray-200 md:leading-relaxed ">
			{description}
		</p>
	</div>
	<div class="bottom mt-6 md:mt-8">
		<div class="mt-1 flex flex-wrap">
			{#if tags}
				{#each tags as tag}
					<Tag {tag} />
				{/each}
			{/if}
		</div>
		<div class=" bottom mt-4 flex items-center justify-between border-t border-gray-200 pt-3">
			<Star itemId={id} />
			<div />
			<CardIcons {facebook} {twitch} {youtube} {url} {type} {discord} />
		</div>
	</div>
</article>

<style>
	.card {
		position: relative;
		height: 100%;
	}

	.ribbon {
		right: -4px;
	}

	.bottom {
		min-height: 58px;
	}

	@media (max-width: 640px) {
		.description {
			overflow: hidden;
			text-overflow: ellipsis;
			display: -webkit-box;
			-webkit-line-clamp: 5;
			-webkit-box-orient: vertical;
		}
	}
</style>
