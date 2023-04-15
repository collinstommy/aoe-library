<script>
	import { QueryClient, QueryClientProvider } from '@sveltestack/svelte-query';
	import '../app.css';
	import '../tailwind.css';
	import Footer from '../components/Footer.svelte';
	import Nav from '../components/Nav.svelte';

	const queryClient = new QueryClient();
</script>

<QueryClientProvider client={queryClient}>
	<Nav />
	<main class="wrapper flex flex-col">
		<slot />
	</main>
	<Footer />
</QueryClientProvider>
