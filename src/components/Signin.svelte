<script>
	import Cta from './Cta.svelte';
	import clerkStore, { useAuth } from '$lib/client/clerk.client';
</script>

{#if $useAuth.status === 'authenticated'}
	<div class="flex">
		<button on:click={() => $clerkStore.signOut()} class="button hover:underline ">Sign out</button>
		{#if $clerkStore?.user?.profileImageUrl}
			<img
				src={$clerkStore?.user?.profileImageUrl}
				alt={$clerkStore?.user?.name ?? 'Profile image'}
				class="ml-4 max-h-8 rounded"
			/>
		{/if}
	</div>
{:else}
	<Cta handleClick={() => $clerkStore.openSignIn()}>Sign In</Cta>
{/if}
