<script>
	const options = [
		{ value: 'Newest', label: 'Date Added: Newest' },
		{ value: 'Likes', label: 'Likes' },
		{ label: 'Date Added: Oldest', value: 'Oldest' }
	];

	export let sortBy;
</script>

<div
	class="filters mb-4 flex w-full flex-col rounded-md border-indigo-400 bg-gray-100 py-4 px-4 dark:border dark:border-gray-100 dark:bg-gray-800 md:m-0 md:w-auto md:border-0 md:py-4"
>
	<div class="flex items-baseline justify-between">
		<label class="flex items-baseline md:pointer-events-none" for="showFilters">
			<h3 class="mb-2 text-xl font-semibold">Sort By</h3>
		</label>
	</div>
	<div
		class={`
		mt-2
		flex
		flex-col
		items-start
		md:flex-row
	`}
	>
		<div class="flex w-full flex-wrap gap-2">
			{#each options as { label, value }}
				<label for={value} class="rounded-full bg-gray-500 px-4 py-1">
					<input type="radio" name={value} {value} id={value} bind:group={sortBy} />
					{label}
				</label>
			{/each}
		</div>
	</div>
</div>
