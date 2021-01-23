<script>
  import Hero from './Hero';  
	import { Link } from 'svelte-routing';

  export let formId;
  export let title;
  export let description;

  const initializeHSForm = () => {
    hbspt.forms.create({
      portalId: "4324853",
      formId: formId,
      target: ".form-target"
    });
  };
</script>

<svelte:head>
	<script src="//js.hsforms.net/forms/v2.js" on:load={initializeHSForm}></script>
</svelte:head>

<style>

</style>

<main class="flex flex-col items-center flex-1">
  <Hero
    title={title}
    description={description}
  />
  <div>
    <Link class="py-4 flex hover:underline">&#8592; Back</Link>
    <section class="section">
      <div class="form-target" />
    </section>
  </div>
</main>
