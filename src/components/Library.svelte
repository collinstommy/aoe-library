<script>
	// import { paginate, LightPaginationNav, DarkPaginationNav } from 'svelte-paginate'
	// import { onMount } from 'svelte';
	import Filters from './Filters.svelte';
	import selectedFilters from '../stores/filters';
	import Hero from './Hero.svelte';
	import Card from './Card.svelte';
	import { sortItems, getIsNew } from '../lib/filtering';
	import { getStartIndex, getEndIndex } from '../lib/usePagination';
	import isNew from '$lib/isNew';
	import darkMode from '../stores/darkMode';

	export let items;

	let isDark;

	darkMode.subscribe((value) => {
		isDark = value;
	});

	// TODO: fix pagination for dark mode

	// const Pagination = isDark ? DarkPaginationNav : LightPaginationNav;

	// import { voteEndpoint } from '../config/endpoints';
	let activeFilters = [];

	// onMount(async () => {
	// 	// const res = await fetch(voteEndpoint);
	// 	// votes = await res.json();
	// 	// console.log({ votes });
	// });

	const unsubscribe = selectedFilters.subscribe((value) => {
		activeFilters = value;
	});

	let currentPage = 0;
	let pageSize = 12;

	let votes = [];

	const getVoteCount = (itemId) => (vote) => vote.resourceId === itemId;
	const addVotes = (item) => {
		const resource = votes.find(getVoteCount(item.id));
		return {
			...item,
			voteCount: resource ? +resource.voteCount : 0
		};
	};

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

	const paginate = ({ items, pageSize, currentPage }) => {
		const startIndex = getStartIndex(pageSize, currentPage);
		const endIndex = getEndIndex(pageSize, currentPage, items.length);
		console.log({ startIndex, endIndex });
		return items.slice(startIndex, endIndex + 1);
	};

	const setPage = (i) => {
		currentPage = i;
	};

	$: selectedItems = sortItems(activeFilters, items).map(addVotes).map(setIsNew).sort(byDate);

	$: pages = Array.from({ length: Math.ceil(selectedItems.length / pageSize) });
	$: paginatedItems = paginate({ items: selectedItems, pageSize, currentPage });
</script>

<main class="wrapper flex flex-col items-center p-3">
	<Hero
		title="AOE Library"
		description="A directory of useful information and tools for Age of Empires 2"
	/>
	<div
		class="
		main-container
		flex
		flex-col
		items-start

		md:flex-row
		md:p-4
		"
	>
		<Filters {setPage} />
		<section class="grid flex-1 grid-cols-1 gap-4 lg:grid-cols-2 xl:grid-cols-3">
			{#each paginatedItems as item (item.title)}
				<Card {...item} />
			{/each}
		</section>
	</div>
	<div class="my-4">
		<ul class="inline-flex items-center -space-x-px">
			{#each pages as page, i}
				<button
					class={`border
					border-gray-300
					bg-white
					py-2
					px-3
					leading-tight
					text-gray-500
					hover:bg-gray-100
					hover:text-gray-700
					dark:border-gray-700
					dark:bg-gray-800
					dark:text-gray-400
					dark:hover:bg-gray-700
					dark:hover:text-white
					${i === currentPage && 'bg-blue-50 text-blue-600 hover:bg-blue-100 hover:text-blue-700'}`}
					on:click={() => setPage(i)}>{i + 1}</button
				>
			{/each}
		</ul>
		<!-- <Pagination
			totalItems="{selectedItems.length}"
			pageSize="{pageSize}"
			currentPage="{currentPage}"
			limit="{1}"
			showStepOptions="{true}"
			on:setPage="{(e) => currentPage = e.detail.page}"
		/> -->
	</div>
</main>

<style>
	.wrapper {
		display: flex;
		justify-content: center;
	}
</style>
