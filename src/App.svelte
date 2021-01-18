<script>
	import Library from './components/Library'; 
	import Submit from './components/Submit'; 
	import { Router, Link, Route } from 'svelte-routing';

</script>

<style>
</style>
<Router url="">
	<Route path="/"><Library /></Route>
	<Route path="/submit"><Submit /></Route>
</Router>


