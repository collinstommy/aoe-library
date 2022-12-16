<script>
	import Library from '../components/Library.svelte';

	export let data;
</script>

<Library items={data.items} />

<style>
	.hero {
		font-family: Verdana, Geneva, Tahoma, sans-serif;
	}
</style>
