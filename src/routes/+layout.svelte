<script>
	import '../app.css';
	import '../tailwind.css';
	import Footer from '../components/Footer.svelte';
	import Cta from '../components/Cta.svelte';

	/* 
		TODO: set theme in localStorage
		https://rodneylab.com/using-local-storage-sveltekit/
		https://www.davidwparker.com/posts/dark-mode-in-sveltekit-with-and-without-javascript
	*/

	export const prerender = true;
	$: isDark = true;

	$: setDarkMode = (darkMode) => {
		isDark = darkMode;
		if (darkMode) {
			document.querySelector('html').classList.add('dark');
		} else {
			document.querySelector('html').classList.remove('dark');
		}
	};

	const handleClick = () => {
		setDarkMode(!isDark);
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
<main class="wrapper flex flex-col">
	<slot />
</main>

<Footer />
