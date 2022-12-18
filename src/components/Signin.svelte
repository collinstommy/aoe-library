<script>
	import { signIn, signOut } from '@auth/sveltekit/client';
	import { page } from '$app/stores';
	import Cta from './Cta.svelte';
</script>

{#if $page.data.session}
	<div class="flex">
		<button on:click={() => signOut()} class="button">Sign out</button>
		{#if $page.data.session.user?.image}
			<img
				src={$page.data.session.user?.image}
				alt={$page.data.session.user?.name ?? 'Profile image'}
				class="ml-4 max-h-8 rounded"
			/>
		{/if}
	</div>
{:else}
	<Cta handleClick={() => signIn('discord')}>Sign In</Cta>
{/if}
