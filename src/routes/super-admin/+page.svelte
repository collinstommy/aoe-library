<script>
	import Cta from '../../components/Cta.svelte';
	import seed from '../../db/seed';

	async function seedUsers() {
		const { createdLikes } = await seed();

		if (createdLikes) {
			return createdLikes;
		}
		return null;
	}

	let seedUsersPromise = seedUsers();

	function handleClick() {
		seedUsersPromise = seedUsers();
	}
</script>

<section class="p-20">
	<h1 class="text-3xl">Admin</h1>
	<Cta on:click={handleClick}>Seed</Cta>
</section>

<style>
</style>
