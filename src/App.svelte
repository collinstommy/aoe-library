<script>
	import items from './data.json';
	import Tag from './components/Tag';
	import Filters from './components/Filters';
	import selectedFilters from './stores/filters';
	import Hero from './components/Hero';
	
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
</style>

<main class="wrapper flex flex-col items-center p-2 md:p-4">
	<Hero />
	<Filters />
	<section class="grid grid-cols-2 md:grid-cols-3 gap-4 section text-gray-900">
		{#each selectedItems as { title, url, description, tags }, i}
			<a class="link" href="{url}" target="_blank">
				<article class="card hover:shadow-md rounded-md p-4 md:p-8 flex flex-col justify-between transition-shadow border border-gray-200 bg-white">
				<div>
					<h2 class="md:text-2xl text-xl">{title}</h2>
					<p class="mt-4 md:leading-relaxed">{description}</p>
				</div>
				<div class="flex mt-8">
					{#each tags as tag}
						<Tag tag={tag} />
					{/each}
				</div>
			</article>
			</a>
		{/each}
	</section>
</main>
