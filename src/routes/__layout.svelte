<script>
	import '../app.css';
	import '../tailwind.css';
	import Footer from '../components/Footer.svelte';
</script>

<header
	class="flex relative z-50 text-sm leading-6 font-medium ring-1 ring-gray-900 ring-opacity-5 shadow-sm py-5 bg-white w-full"
>
	<nav aria-label="Global" class="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
		<div class="flex items-center  flex-wrap sm:flex-nowrap  ">
			<div class="w-full flex-none sm:w-auto sm:ml-auto flex items-center">
				<a class="mx-3 md:mx-5 hover:underline" href="/">Library</a>
				<a class="mx-3 md:mx-5 hover:underline" href="/uptimes">Uptimes</a>
				<a class="
          mx-3
          md:mx-5
          hover:underline
          rounded-full
          px-6
          py-2
          border
          bg-blue-800
          hover:bg-blue-500
          text-white"
					href="/submit">Add +</a
				>
			</div>
		</div>
	</nav>
</header>
<main class="wrapper flex flex-col items-center p-3">
  <slot />
</main>

<Footer />
