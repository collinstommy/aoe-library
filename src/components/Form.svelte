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

<div class="flex flex-1 flex-col items-center">
	<Hero {title} {description} />
	<div>
		<a href="/" class="flex py-4 hover:underline">&#8592; Back</a>
		<section class="section">
			<div class="form-target" />
		</section>
	</div>
</div>

<style>
</style>
