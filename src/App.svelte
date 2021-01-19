<script>
	import Library from './components/Library'; 
	import Footer from './components/Footer'; 
	import Submit from './components/Submit'; 
	import Contact from './components/Contact'; 
	import { Router, Link, Route } from 'svelte-routing';

</script>

<style>
</style>
<Router url="">
	<Route path="/"><Library /></Route>
	<Route path="/submit"><Submit /></Route>
	<Route path="/contact"><Contact /></Route>
	<Footer />
</Router>

