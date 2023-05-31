<script>
	import Library from '../components/Library.svelte';

	export let data;
</script>

<Library items={data.items} likes={data.likes} me={data.me} />
