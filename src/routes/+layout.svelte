<script>
	import '../app.css';
	import '../tailwind.css';
	import Footer from '../components/Footer.svelte';
  import Cta from '../components/Cta.svelte';
  import darkMode from '../stores/darkMode';

	export const prerender = true

	let isDark;

	darkMode.subscribe(value => {
		isDark = value;
	});

	const handleClick = () => {
		document.querySelector('html').classList.toggle('dark');
		darkMode.update(mode => !mode);
	};
</script>

<header
	class="flex relative z-50 text-sm leading-6 font-medium ring-1 ring-gray-900 ring-opacity-5 shadow-sm py-5 bg-white w-full dark:bg-gray-800
	"
>
	<nav aria-label="Global" class="max-w-container mx-auto px-1 md:px-4 w-full">
		<div class="flex items-center justify-between flex-wrap sm:flex-nowrap w-full">
			<div />
			<div class="flex-none sm:w-auto flex items-center">
				<a class="mx-2 md:mx-5 hover:underline" href="/">Library</a>
				<a class="mx-2 md:mx-5 hover:underline" href="/uptimes">Uptimes</a>
				<a class="
          mx-2
          md:mx-5
          hover:underline
          rounded-full
          px-3
          md:px-6
          py-2
          border
          bg-blue-800
          hover:bg-blue-500
          text-white"
					href="/submit">Add +</a
				>
			</div>
			<Cta handleClick={handleClick}>{isDark ? 'Light Mode' : 'Dark Mode'}</Cta>
		</div>
	</nav>
</header>
<main class="wrapper flex flex-col items-center p-3">
  <slot />
</main>

<Footer />
