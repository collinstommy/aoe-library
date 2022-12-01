<script>
	import '../app.css';
	import '../tailwind.css';
	import Footer from '../components/Footer.svelte';
	import Cta from '../components/Cta.svelte';
	import darkMode from '../stores/darkMode';

	export const prerender = true;

	let isDark;

	darkMode.subscribe((value) => {
		isDark = value;
	});

	const handleClick = () => {
		document.querySelector('html').classList.toggle('dark');
		darkMode.update((mode) => !mode);
	};
</script>

<header
	class="relative z-50 flex w-full bg-white py-5 text-sm font-medium leading-6 shadow-sm ring-1 ring-gray-900 ring-opacity-5 dark:bg-gray-800
	"
>
	<nav aria-label="Global" class="max-w-container mx-auto w-full px-1 md:px-4">
		<div class="flex w-full flex-wrap items-center justify-between sm:flex-nowrap">
			<div />
			<div class="flex flex-none items-center sm:w-auto">
				<a class="mx-2 hover:underline md:mx-5" href="/">Library</a>
				<a class="mx-2 hover:underline md:mx-5" href="/uptimes">Uptimes</a>
				<a
					class="
          mx-2
          rounded-full
          border
          bg-indigo-800
          px-3
          py-2
          text-white
          hover:bg-indigo-500
          hover:underline
          md:mx-5
          md:px-6"
					href="/submit">Add +</a
				>
			</div>
			<Cta {handleClick}>{isDark ? 'Light Mode' : 'Dark Mode'}</Cta>
		</div>
	</nav>
</header>
<main class="wrapper flex flex-col items-center">
	<slot />
</main>

<Footer />
