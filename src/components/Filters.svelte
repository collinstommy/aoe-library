<script>
	import { TAGS } from '../config/tags';
	import { setContext } from 'svelte'
	import filters from '../stores/filters';
	import Cta from './Cta.svelte';

	export let setPage;

	const tags = Object.entries(TAGS);
	let filterCount = 0;

	const unsubscribe = filters.subscribe(value => {
		filterCount = value.length;
	});

	let show = true;

</script>
	
<style>
	.label {
		text-transform: capitalize;
	}

	.filters {
		min-width: 200px;
	}

</style>

<aside class="filters flex flex-col my-5 mr-4">
	<div class="flex justify-between items-baseline">
		<label class="flex md:pointer-events-none" for="showFilters" >
			<h3 class="text-xl mb-2 hidden md:block">Filter</h3>
			<h3 class="text-xl mb-2 md:hidden">Toggle Filters</h3>
			<i class={`ri-arrow-down-s-line
				ml-1
				md:hidden
			`}></i>
			<input class="hidden"
				id="showFilters"
				name="showFilters"
				type=checkbox bind:checked={show}
			/>
		</label>
		<div class={`
			${!filterCount && 'hidden'}
			flex
			justify-center
			items-center	
			rounded-full
			w-11
			h-11
			bg-gray-200
			font-bold

			md:hidden
			`}>
			{filterCount}
		</div>
	</div>
	<div class={`
		flex
		items-start
		flex-col
		md:flex-row

		${!show && 'hidden'}
	`}>
		<div class="flex flex-col w-full">
			{#each tags as [key, value]}
				<label class={`
					label
					
					w-full
					px-3
					py-1
					my-1
					cursor-pointer
					rounded
					flex
					items-center
					text-lg	

					md:py-1
					${$filters.includes(key) && 'bg-blue-100 dark:bg-gray-700'}
					`}
					for="{key}"
				>
					
					<input
					id="{key}"
					name="{key}"
					value="{key}"
					type="checkbox"
					bind:group={$filters}
					on:click={() => setPage(0)}
					class="
						focus:ring-indigo-500
						h-4
						w-4
						text-indigo-600
						border-gray-300
						rounded">
					<span class="mx-2">{value.text || key}</span>
				</label>
			{/each}
		</div>
	</div>
</aside>
