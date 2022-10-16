<script>
	import { paginate, LightPaginationNav, DarkPaginationNav } from 'svelte-paginate'
	import { onMount } from 'svelte';
	import Filters from './Filters.svelte';
	import selectedFilters from '../stores/filters';
	import Hero from './Hero.svelte';
	import Card from './Card.svelte';
	import { sortItems, getIsNew } from '../lib/filtering';
  import isNew from '$lib/isNew';
  import darkMode from '../stores/darkMode';

	export let items;

	let isDark;

	darkMode.subscribe(value => {
		isDark = value;
	});

	// TODO: fix pagination for dark mode

	const Pagination = isDark ? DarkPaginationNav : LightPaginationNav;

	// import { voteEndpoint } from '../config/endpoints';
	let activeFilters = [];

	// onMount(async () => {
	// 	// const res = await fetch(voteEndpoint);
	// 	// votes = await res.json();
	// 	// console.log({ votes });
	// });

	const unsubscribe = selectedFilters.subscribe(value => {
		activeFilters = value;
	});
	
  let currentPage = 1;
  let pageSize = 12;

	let votes = [];

	const getVoteCount = itemId => vote => vote.resourceId === itemId;
	const addVotes = item => {
		const resource = votes.find(getVoteCount(item.id));
		return {
			...item,
			voteCount: resource ? +resource.voteCount : 0,
		};
	};

	const setIsNew = item => {
		return {
			...item,
			isNew: isNew(item.dateAdded)
		};
	};

	const byDate = (a, b) => {
		if(a.isNew && !b.isNew){
			return -1;
		}
		if(!a.isNew && b.isNew){
			return 1;
		}
		return 0;
	}

	$: selectedItems = sortItems(activeFilters, items)
		.map(addVotes)
		.map(setIsNew)
		.sort(byDate)
  $: paginatedItems = paginate({ items: selectedItems, pageSize, currentPage });
</script>
	
<style>
	.wrapper {
		display: flex;
		justify-content: center;
	}
</style>

<main class="wrapper flex flex-col items-center p-3">
	<Hero
		title="AOE Library"
		description="A directory of useful information and tools for Age of Empires 2"
	>
	</Hero>
	<div class="
		main-container
		flex
		flex-col

		md:p-4
		md:flex-row
		">
		<Filters />
		<section class="grid grid-cols-1 md:grid-cols-3 gap-4 flex-1">
			{#each paginatedItems as item (item.title)}
				<Card {...item} />
			{/each}
		</section>
	</div>
	<div class="my-4">
		<Pagination
			totalItems="{selectedItems.length}"
			pageSize="{pageSize}"
			currentPage="{currentPage}"
			limit="{1}"
			showStepOptions="{true}"
			on:setPage="{(e) => currentPage = e.detail.page}"
		/>
	</div>
</main>
