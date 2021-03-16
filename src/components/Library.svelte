<script>
	import { onMount } from 'svelte';
	import dataItems from '../data.json';
	import Filters from './Filters';
	import selectedFilters from '../stores/filters';
	import Hero from './Hero';
	import Card from './Card';
	import sortItems from '../lib/sortItems';
	import { saveAccessToken } from '../lib/auth';
	
	onMount(() => {
		saveAccessToken();
	});

	let activeFilters = [];

	const unsubscribe = selectedFilters.subscribe(value => {
		activeFilters = value;
	});

	$: selectedItems = sortItems(activeFilters, dataItems);

// 	const url = `
// https://id.twitch.tv/oauth2/authorize
// ?client_id=e6hpabm5qkbhp1tmv20oe6nu0556gr
// &redirect_uri=http://localhost:8080/callback
// &response_type=code
// &scope=user:read:email
// 	`

		const url = `
https://id.twitch.tv/oauth2/authorize
?client_id=e6hpabm5qkbhp1tmv20oe6nu0556gr
&redirect_uri=http://localhost:3000/dev/auth/twitch/callback
&response_type=code
&scope=user:read:email
	`;

</script>
	
<style>
	.wrapper {
		display: flex;
		justify-content: center;
	}
	.item-container {
		min-height: 100vh;
	}

</style>

<main class="wrapper flex flex-col items-center">
	<Hero
		title="AOE Library"
		description="A directory of useful information and tools for Age of Empires 2"
	/>
	<a href={url}>
		twitch
	</a>
	<a href="http://localhost:3000/dev/test">
		test cookie
	</a>
	<div class="p-4 md:p-4 item-container">
		<Filters />
		<section class="grid grid-cols-1 md:grid-cols-3 gap-4 section text-gray-900">
			{#each selectedItems as item (item.title)}
				<Card {...item} />
			{/each}
		</section>
	</div>
</main>
