<script>
	import Library from '../components/Library.svelte';

	export let data;
</script>

<svelte:head>
	<meta
		name="description"
		content="A list of websites and tools for Age of Empires 2 aka AOE 2. Find links to build orders, popular streamers and stats sites."
	/>
</svelte:head>

<title>AOE Library</title>
<Library items={data.items} likes={data.likes} me={data.me} />
