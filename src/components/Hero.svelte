<script>
  export let title = '';
  export let description = '';
</script>

<style>
  .hero {
    font-family: Verdana, Geneva, Tahoma, sans-serif;
  }
</style>

<section class="
  hero

  text-center
  w-100
  p-8
  text-grey-800
  w-full
  
  md:p-16
  "
>
  <h1 class="text-4xl my-2 font-semibold">{title}</h1>
  <p>{description}</p>
  <slot />
</section>
