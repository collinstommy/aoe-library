<script>
	import { TAGS } from '../config';
	import { setContext } from 'svelte'
	import filters from '../stores/filters';
	import { Link } from 'svelte-routing';

	const tags = Object.entries(TAGS);

</script>
	
<style>
</style>

<section class="w-full section flex flex-col my-5">
	<h3 class="text-xl mb-2">Filter by:</h3>
	<div class="flex items-start flex-col md:flex-row">
		<div class="flex flex-wrap">
			{#each tags as [key, value]}
				<label class={`
					rounded-full
					border-2
					md:py-1
					px-3
					mx-1
					my-1
					border-blue-800
					bg-white
					cursor-pointer
					${$filters.includes(key) && 'bg-blue-800 text-white'}
					`}
					for="{key}"
				>
					{value.text || key}
					<input type="checkbox"
						class="appearance-none"
						id="{key}"
						name="{key}"
						value="{key}"
						bind:group={$filters}
					/>
				</label>
			{/each}
		</div>
		<Link to="/submit">
			<button class="px-3
				py-2
				bg-blue-800
				border-2
				rounded-md
				text-white
				hover:bg-blue-500
				whitespace-nowrap
				mt-3"
			>
				Add +
			</button>
		</Link>
	</div>
</section>
