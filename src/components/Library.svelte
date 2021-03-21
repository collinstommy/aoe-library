<script>
	import dayjs from 'dayjs';
	import { paginate, LightPaginationNav } from 'svelte-paginate'

	import dataItems from '../data.json';
	import Filters from './Filters';
	import selectedFilters from '../stores/filters';
	import Hero from './Hero';
	import Card from './Card';
	import { Link } from 'svelte-routing';
	import Cta from './Cta';

	let activeFilters = [];

	const unsubscribe = selectedFilters.subscribe(value => {
		activeFilters = value;
	});

	const getIsNew = epocDate => epocDate && dayjs(epocDate).diff(Date.now(), 'day') < 10;

	const sortItems = (filters, array) => {
		const filtered = filters.length
		? array.filter(({ tags }) => tags.some(tag => filters.includes(tag)))
		: array;
		
		filtered.sort((a, b) => {
			const dateA = a.dateAdded;
			const dateB = b.dateAdded;
			const isANew = getIsNew(dateA);
			const isBNew = getIsNew(dateB);
			if(isANew && isBNew) return 0;
			if(isANew) return -1;
			return 1;
		});
		return filtered;
	};

  let currentPage = 1;
  let pageSize = 12;
	console.log({ context: process.env.context });

	$: selectedItems = sortItems(activeFilters, dataItems);
  $: paginatedItems = paginate({ items: selectedItems, pageSize, currentPage });
</script>
	
<style>
	.wrapper {
		display: flex;
		justify-content: center;
	}
	.item-container {
		max-width: 1440px;
	}
</style>

<main class="wrapper flex flex-col items-center">
	<Hero
		title="AOE Library"
		description="A directory of useful information and tools for Age of Empires 2"
	>
		<Link class="md:hidden mt-5" to="/submit">
			<Cta>
				Add to Library
			</Cta>
		</Link>
	</Hero>
	<div class="
		p-2
		md:p-4
		item-container
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
