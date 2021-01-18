<script>
	import items from '../data.json';
	import Tag from './Tag';
	import Filters from './Filters';
	import selectedFilters from '../stores/filters';
	import Hero from './Hero';

	let activeFilters = [];

	const unsubscribe = selectedFilters.subscribe(value => {
		activeFilters = value;
	});

	$: selectedItems = activeFilters.length
		? items.filter(({ tags }) => tags.some(tag => activeFilters.includes(tag)))
		: items;
	
</script>
	
<style>
	.wrapper {
		display: flex;
		justify-content: center;
	}

	.link {
		color: inherit;
	}

	.link:hover {
		text-decoration: none;
	}

	.card {
		height: 100%;
	}

	.item-container {
		min-height: 100vh;
	}

	@media (max-width: 640px){
		.description {
			overflow: hidden;
			text-overflow: ellipsis;
			display: -webkit-box;
			-webkit-line-clamp: 5;
			-webkit-box-orient: vertical;
		}	
	}
</style>

<main class="wrapper flex flex-col items-center">
	<Hero
		title="AOE Library"
		description="A directory of useful information and tools for Age of Empires 2"
	/>
	<div class="p-2 md:p-4 item-container">
		<Filters />
		<section class="grid grid-cols-2 md:grid-cols-3 gap-4 section text-gray-900">
			{#each selectedItems as { title, url, description, tags }, i}
				<a class="link" href="{url}" target="_blank">
					<article class="card hover:shadow-md rounded-md p-4 md:p-8 flex flex-col justify-between transition-shadow border border-gray-200 bg-white">
					<div>
						<h2 class="md:text-2xl text-xl">{title}</h2>
						<p class="description mt-4 md:leading-relaxed">{description}</p>
					</div>
					<div class="flex flex-wrap md:mt-8 mt-3">
						{#each tags as tag}
							<Tag tag={tag} />
						{/each}
					</div>
				</article>
				</a>
			{/each}
		</section>
	</div>
</main>
