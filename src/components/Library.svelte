<script>
	import { paginate, LightPaginationNav } from 'svelte-paginate'
	import { onMount } from 'svelte';
	import dataItems from '../data.json';
	import Filters from './Filters';
	import selectedFilters from '../stores/filters';
	import Hero from './Hero';
	import Card from './Card';
	import Nav from './Nav';
	import { sortItems, getIsNew } from '../lib/filtering';
	import { voteEndpoint } from '../config/endpoints';
	let activeFilters = [];

	onMount(async () => {
		const res = await fetch(voteEndpoint);
		votes = await res.json();
		console.log({ votes });
	});

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

	$: selectedItems = sortItems(activeFilters, dataItems).map(addVotes);
  $: paginatedItems = paginate({ items: selectedItems, pageSize, currentPage });

	
</script>
	
<style>
	.wrapper {
		display: flex;
		justify-content: center;
	}
</style>

<main class="wrapper flex flex-col items-center">
	<Hero
		title="AOE Library"
		description="A directory of useful information and tools for Age of Empires 2"
	>
	</Hero>
	<div class="
		p-2
		md:p-4
		main-container
		flex
		flex-col
		md:flex-row
		">
		<Filters />
		<section class="grid grid-cols-1 md:grid-cols-3 gap-4 text-gray-900 flex-1">
			{#each paginatedItems as item (item.title)}
				<Card {...item} />
			{/each}
		</section>
	</div>
	<div class="my-4">
		<LightPaginationNav
			totalItems="{selectedItems.length}"
			pageSize="{pageSize}"
			currentPage="{currentPage}"
			limit="{1}"
			showStepOptions="{true}"
			on:setPage="{(e) => currentPage = e.detail.page}"
		/>
	</div>
</main>
