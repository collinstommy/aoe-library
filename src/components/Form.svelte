<script>
	import Hero from './Hero.svelte';

	export let formId;
	export let title;
	export let description;

	const initializeHSForm = () => {
		hbspt.forms.create({
			portalId: '4324853',
			formId: formId,
			target: '.form-target'
		});
	};
</script>

<svelte:head>
	<script src="//js.hsforms.net/forms/v2.js" on:load={initializeHSForm}></script>
</svelte:head>

<div class="mt-6 flex flex-1 flex-col items-center gap-3">
	<h1 class="page-heading">Submit a new item</h1>
	<p>Add a new tools or site by filling in the form below</p>
	<div>
		<a href="/" class="flex py-4 hover:underline">&#8592; Back</a>
		<section class="section">
			<div class="form-target" />
		</section>
	</div>
</div>

<style>
</style>
