<script>
	import { QueryClient, QueryClientProvider } from '@sveltestack/svelte-query';
	import '../app.css';
	import '../tailwind.css';
	import Footer from '../components/Footer.svelte';
	import Nav from '../components/Nav.svelte';
	import ClerkProvider from '../components/clerk/ClerkProvider.svelte';

	const queryClient = new QueryClient();
</script>

<ClerkProvider
	publishableKey="pk_test_dXNlZnVsLXBhbnRoZXItMzAuY2xlcmsuYWNjb3VudHMuZGV2JA"
	frontendApi="useful-panther-30.clerk.accounts.dev"
>
	<QueryClientProvider client={queryClient}>
		<Nav />
		<main class="wrapper flex flex-col">
			<slot />
		</main>
		<Footer />
	</QueryClientProvider>
</ClerkProvider>
