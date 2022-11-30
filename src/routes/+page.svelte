<script>
	import Library from '../components/Library.svelte';

	// onMount(async() => {
	//   const { hash } = window.location;
	//   if(hash.includes('access_token')){
	//     window.location.href = `/admin${hash}`;
	//   }
	// })

	export let data;
</script>

<section
	class="hero w-100 text-grey-800 w-full border-gray-600 bg-gradient-to-r from-slate-900 to-indigo-900 p-8 text-center text-gray-100 dark:border-y dark:border-white md:mb-6 md:p-20"
>
	<h1 class="my-2 text-4xl font-semibold">AOE Library</h1>
	<p>A directory of useful information and tools for Age of Empires 2</p>
	<slot />
</section>

<Library items={data.items} />

<style>
	.hero {
		font-family: Verdana, Geneva, Tahoma, sans-serif;
	}
</style>
