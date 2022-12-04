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

<Library items={data.items} />

<style>
	.hero {
		font-family: Verdana, Geneva, Tahoma, sans-serif;
	}
</style>
