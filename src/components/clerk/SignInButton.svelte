<script>
	import { clerk } from '../../stores/clerk';

	function handleSignIn() {
		clerk.subscribe((Clerk) => {
			if (Clerk) {
				Clerk.openSignIn({ mode: 'modal' });
			}
		});
	}
</script>

<button on:click={handleSignIn}>Sign In</button>
