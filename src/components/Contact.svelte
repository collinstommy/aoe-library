<script>
  import Hero from './Hero';  
	import { Link } from 'svelte-routing';

  const initializeHSForm = () => {
    hbspt.forms.create({
      portalId: "4324853",
      formId: "9968d7b0-2a16-4150-bde7-0d914668f5fa",
      target: ".contact-form"
    });
  };
</script>

<svelte:head>
	<script src="//js.hsforms.net/forms/v2.js" on:load={initializeHSForm}></script>
</svelte:head>

<style>

</style>

<main class="flex flex-col justify-center items-center">
  <Hero
    title="Contact"
  />
  <div>
    <Link class="py-4 flex hover:underline">&#8592; Back</Link>
    <section class="section">
      <div class="contact-form" />
    </section>
  </div>
</main>
