<script>
	export let title = '';
	export let description = '';
</script>

<section
	class="hero w-100 text-grey-800 w-full border-gray-600 bg-indigo-900 p-10 text-center text-gray-100 dark:border-y dark:border-white md:mb-6 md:p-20"
>
	<h1 class="my-2 text-4xl font-semibold lg:text-5xl">{title}</h1>
	<p class="hidden md:block">{description}</p>
	<slot />
</section>

<style>
	.hero {
		font-family: Verdana, Geneva, Tahoma, sans-serif;
	}
</style>
