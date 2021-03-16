<script>
	import { onMount } from 'svelte';
  export let location;

  onMount(async () => {
    const params = new URLSearchParams(location.search);
    const code = params.get('code');
    console.log({ code });
		const response = await fetch(`http://localhost:3000/dev/auth/twitch`, {
      method: 'post',
      body: JSON.stringify({ code }),
      headers: {
        'Content-Type': 'application/json'
      },
    });
		const json = await response.json();
	});
</script>

<style>
</style>
