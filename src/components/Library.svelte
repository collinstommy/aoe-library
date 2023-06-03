<script>
	import Fuse from 'fuse.js';
	import Filters from './Filters.svelte';
	import selectedFilters from '../stores/filters';
	import Card from './Card.svelte';
	import { sortItems } from '../lib/filtering';
	import { getStartIndex, getEndIndex } from '../lib/usePagination';
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

	let currentPage = 0;
	let pageSize = 12;

	let searchTerm = '';
	let sortBy = 'Newest';

	// ToDo: move to separate file
	const paginate = ({ items, pageSize, currentPage }) => {
		const startIndex = getStartIndex(pageSize, currentPage);
		const endIndex = getEndIndex(pageSize, currentPage, items.length);
		return items.slice(startIndex, endIndex + 1);
	};

	const setPage = (i) => {
		currentPage = i;
	};

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

	$: pages = Array.from({ length: Math.ceil(selectedItems.length / pageSize) });

	$: paginatedItems = paginate({ items: selectedItems, pageSize, currentPage });
</script>

<div class="wrapper mt-3 flex flex-col items-center md:mt-8">
	<div class="main-container flex w-full flex-col items-start p-3 md:flex-row md:p-4">
		<aside class="flex w-full flex-col gap-2 md:mr-4 md:w-auto md:max-w-xs">
			<div class="w-full text-center font-semibold">
				<Cta href="/submit">Add Site</Cta>
			</div>
			<Search bind:searchTerm />
			<Sort bind:sortBy />
			<Filters {setPage} />
		</aside>
		<ul class="grid w-full flex-1 grid-cols-1 gap-4 lg:grid-cols-2 xl:grid-cols-3">
			{#each paginatedItems as item (item.title)}
				<Card {...item} />
			{/each}
		</ul>
	</div>
	<nav class="my-4">
		<ul class="inline-flex items-center -space-x-px">
			<li>
				{#each pages as page, i}
					<button
						class={`border border-gray-300 bg-white py-2 px-3 leading-tight text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white
							${
								i === currentPage &&
								'bg-blue-50 text-blue-600 hover:bg-blue-100 hover:text-blue-700 dark:bg-gray-500 dark:text-gray-100'
							}`}
						on:click={() => setPage(i)}>{i + 1}</button
					>
				{/each}
			</li>
		</ul>
	</nav>
</div>

<style>
	.wrapper {
		display: flex;
		justify-content: center;
	}
</style>
