<script>
	import { TAGS } from '../config';
	import { setContext } from 'svelte'
	import filters from '../stores/filters';

	const tags = Object.entries(TAGS);

</script>
	
<style>
</style>

<section class="w-full section flex flex-col my-4 my-4">
	<h3 class="text-xl my-3">Filter by:</h3>
	<div class="flex flex-wrap">
		{#each tags as [key, value]}
			<label class={`
				rounded-full
				border-2
				py-1
				px-3
				mx-1
				my-1
				border-blue-800
				bg-white
				cursor-pointer
				${$filters.includes(key) && 'bg-blue-800 text-white'}`}
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
</section>
