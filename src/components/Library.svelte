<script>
	import dayjs from 'dayjs';
	
	import dataItems from '../data.json';
	import Filters from './Filters';
	import selectedFilters from '../stores/filters';
	import Hero from './Hero';
	import Card from './Card';
	

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

	$: selectedItems = sortItems(activeFilters, dataItems);
	
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
	<div class="p-2 md:p-4 item-container">
		<Filters />
		<section class="grid grid-cols-1 md:grid-cols-3 gap-4 section text-gray-900">
			{#each selectedItems as item (item.title)}
				<Card {...item} />
			{/each}
		</section>
	</div>
</main>
