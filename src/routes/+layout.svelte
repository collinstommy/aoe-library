<script>
	import '../app.css';
	import '../tailwind.css';
	import Footer from '../components/Footer.svelte';
	import Nav from '../components/Nav.svelte';
</script>

<Nav />
<main class="wrapper flex flex-col">
	<slot />
</main>
<Footer />
