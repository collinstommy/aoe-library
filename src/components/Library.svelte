<script>
	import Fuse from 'fuse.js';
	import Filters from './Filters.svelte';
	import selectedFilters from '../stores/filters';
	import Card from './Card.svelte';
	import { sortItems } from '../lib/filtering';
	import Search from './Search.svelte';
	import Cta from './Cta.svelte';
	import Sort from './Sort.svelte';
	import { page } from '$app/stores';

	export let items;

	let activeFilters = [];
	const likes = $page.data.likes;

	selectedFilters.subscribe((value) => {
		activeFilters = value;
	});

	let searchTerm = '';
	let sortBy = 'Newest';

	// ToDo: move to separate file
	$: searchAndSort = (items, activeFilters, sortBy, likes) => {
		const sorted = sortItems(activeFilters, items, sortBy, likes);
		if (!searchTerm) return sorted;
		const fuse = new Fuse(sorted, {
			keys: ['description', 'title'],
			threshold: 0.3
		});
		const searched = fuse.search(searchTerm);
		return searched.map(({ item }) => item);
	};

	$: selectedItems = searchAndSort(items, activeFilters, sortBy, likes);
</script>

<div class="wrapper mt-3 flex flex-col items-center md:mt-8">
	<div class="main-container flex w-full flex-col items-start p-3 md:flex-row md:p-4">
		<aside class="flex w-full flex-col gap-2 md:mr-4 md:w-auto md:max-w-xs">
			<div class="w-full text-center font-semibold">
				<Cta href="/submit">Add Site</Cta>
			</div>
			<Search bind:searchTerm />
			<Sort bind:sortBy />
			<Filters />
		</aside>
		<ul class="grid w-full flex-1 grid-cols-1 gap-4 lg:grid-cols-2 xl:grid-cols-3">
			{#each selectedItems as { dateAdded, ...item } (item.title)}
				<Card {...item} />
			{/each}
		</ul>
	</div>
</div>

<style>
	.wrapper {
		display: flex;
		justify-content: center;
	}
</style>
