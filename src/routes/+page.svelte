<script>
	import Library from '../components/Library.svelte';

	export let data;

	async function add() {
		const response = await fetch('/api/user', {
			method: 'GET',
			headers: {
				'content-type': 'application/json'
			}
		});
		console.log({ response });
	}
</script>

<button on:click={add}>test</button>

<Library items={data.items} />

<style>
	.hero {
		font-family: Verdana, Geneva, Tahoma, sans-serif;
	}
</style>
