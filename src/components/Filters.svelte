<script>
	import { TAGS } from '../config/tags';
	import { setContext } from 'svelte';
	import filters from '../stores/filters';
	import Cta from './Cta.svelte';

	export let setPage;

	const tags = Object.entries(TAGS);
	let filterCount = 0;

	const unsubscribe = filters.subscribe((value) => {
		filterCount = value.length;
	});

	let show = true;
</script>

<aside
	class="filters mb-4 flex w-full flex-col rounded-md border border-indigo-400 bg-gray-100 py-2 px-4 dark:border dark:border-gray-100 dark:bg-gray-800 md:m-0 md:mr-4 md:w-auto md:border-0 md:py-4"
>
	<div class="flex items-baseline justify-between">
		<label class="flex md:pointer-events-none" for="showFilters">
			<h3 class="mb-2 hidden text-xl font-semibold md:block">Filter</h3>
			<h3 class="mb-2 text-xl md:hidden">Toggle Filters</h3>
			<i
				class={`ri-arrow-down-s-line
				ml-1
				md:hidden
			`}
			/>
			<input
				class="hidden"
				id="showFilters"
				name="showFilters"
				type="checkbox"
				bind:checked={show}
			/>
		</label>
		<div
			class={`
			${
				!filterCount && 'hidden'
			} flex h-11 w-11 items-center justify-center rounded-full bg-indigo-600 font-bold text-white md:hidden
			`}
		>
			{filterCount}
		</div>
	</div>
	<div
		class={`
		mt-2
		flex
		flex-col
		items-start
		md:flex-row 

		${!show && 'hidden'}
	`}
	>
		<div class="flex w-full flex-col">
			{#each tags as [key, value]}
				<label
					class={`label my-1 flex w-full cursor-pointer items-center rounded px-3 py-1 text-lg md:py-1
						${
							$filters.includes(key) &&
							'border border-gray-300 bg-blue-100 dark:border-gray-600 dark:bg-gray-700'
						}
					`}
					for={key}
				>
					<input
						id={key}
						name={key}
						value={key}
						type="checkbox"
						bind:group={$filters}
						on:click={() => setPage(0)}
						class="
						h-4
						w-4
						rounded
						border-gray-300
						text-indigo-600
						focus:ring-indigo-500"
					/>
					<span class="mx-2">{value.text || key}</span>
				</label>
			{/each}
		</div>
	</div>
</aside>

<style>
	.label {
		text-transform: capitalize;
	}

	.filters {
		min-width: 200px;
	}
</style>
