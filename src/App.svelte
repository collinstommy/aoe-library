<script>
	import Library from './components/Library'; 
	import Submit from './components/Submit'; 
	import { Router, Link, Route } from 'svelte-routing';

</script>

<style>
</style>
<Router url="">
	<Route path="/submit"><Library /></Route>
	<Route path="/"><Submit /></Route>
</Router>


