<script>
	import { onMount } from 'svelte';
	import { clerk } from '../../stores/clerk';
	export let publishableKey = '';

	onMount(() => {
		const script = document.createElement('script');
		script.setAttribute('data-clerk-publishable-key', publishableKey);
		script.async = true;
		script.src =
			'https://useful-panther-30.clerk.accounts.dev/npm/@clerk/clerk-js@4/dist/clerk.browser.js';
		script.addEventListener('load', function () {
			window.Clerk.load().then(() => {
				clerk.update(() => window.Clerk);
			});
		});
		document.body.appendChild(script);
	});
</script>

<slot />
<div style="display:none;">Clerk loader</div>
