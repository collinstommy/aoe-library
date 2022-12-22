<script>
	import Fuse from 'fuse.js';
	import Filters from './Filters.svelte';
	import selectedFilters from '../stores/filters';
	import Card from './Card.svelte';
	import { sortItems } from '../lib/filtering';
	import { getStartIndex, getEndIndex } from '../lib/usePagination';
	import isNew from '$lib/isNew';
	import Search from './Search.svelte';
	import Cta from './Cta.svelte';
	import { useQuery } from '@sveltestack/svelte-query';

	export let items;
	export let likes;

	// const queryResult = useQuery(
	// 	'allLikes',
	// 	async () => {
	// 		const likes = await (await fetch('/api/likes')).json();
	// 		return likes;
	// 	},
	// 	{
	// 		initialData: likes
	// 	}
	// );

	let activeFilters = [];

	selectedFilters.subscribe((value) => {
		activeFilters = value;
	});

	let currentPage = 0;
	let pageSize = 12;

	const setIsNew = (item) => {
		return {
			...item,
			isNew: isNew(item.dateAdded)
		};
	};

	const byDate = (a, b) => {
		if (a.isNew && !b.isNew) {
			return -1;
		}
		if (!a.isNew && b.isNew) {
			return 1;
		}
		return 0;
	};

	let searchTerm = '';

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
	$: searchAndSort = (items, activeFilters) => {
		const sorted = sortItems(activeFilters, items);
		if (!searchTerm) return sorted;
		const fuse = new Fuse(sorted, {
			keys: ['description', 'title'],
			threshold: 0.3
		});
		const searched = fuse.search(searchTerm);
		return searched.map(({ item }) => item);
	};

	$: selectedItems = searchAndSort(items, activeFilters).map(setIsNew).sort(byDate);

	$: pages = Array.from({ length: Math.ceil(selectedItems.length / pageSize) });
	$: paginatedItems = paginate({ items: selectedItems, pageSize, currentPage });
</script>

<div class="wrapper mt-3 flex flex-col items-center md:mt-8">
	<div class="main-container flex w-full flex-col items-start p-3 md:flex-row md:p-4">
		<aside class="w-full md:mr-4 md:w-auto">
			<div class="mb-2 w-full text-center font-semibold">
				<Cta href="/submit">Add Site</Cta>
			</div>
			<Search bind:searchTerm />
			<Filters {setPage} />
		</aside>
		<section class="grid w-full flex-1 grid-cols-1 gap-4 lg:grid-cols-2 xl:grid-cols-3">
			{#each paginatedItems as item (item.title)}
				<Card {...item} />
			{/each}
		</section>
	</div>
	<div class="my-4">
		<ul class="inline-flex items-center -space-x-px">
			{#each pages as page, i}
				<button
					class={`border border-gray-300 bg-white py-2 px-3 leading-tight text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white
					${i === currentPage && 'bg-blue-50 text-blue-600 hover:bg-blue-100 hover:text-blue-700'}`}
					on:click={() => setPage(i)}>{i + 1}</button
				>
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
