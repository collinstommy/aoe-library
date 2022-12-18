<script>
	import '../app.css';
	import '../tailwind.css';
	import Footer from '../components/Footer.svelte';
	import Signin from '../components/Signin.svelte';
	import Icon from '../components/Icon.svelte';
	import SocialIcon from '../components/SocialIcon.svelte';

	/* 
		TODO: set theme in localStorage
		https://rodneylab.com/using-local-storage-sveltekit/
		https://www.davidwparker.com/posts/dark-mode-in-sveltekit-with-and-without-javascript
	*/

	let isDark = true;
	$: isMenuOpen = false;

	const setDarkMode = (darkMode) => {
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

	const handleHanmburgerClick = () => {
		document.querySelector('body').classList.toggle('fixed');
		isMenuOpen = !isMenuOpen;
	};
</script>

<header
	class="relative z-50 flex w-full bg-white py-5 text-sm font-medium leading-6 shadow-sm ring-1 ring-gray-900 ring-opacity-5 dark:bg-gray-800
	"
>
	<nav
		aria-label="Global"
		class="max-w-container mx-auto w-full px-1 text-indigo-900  dark:text-white md:px-4"
	>
		<div class="mx-2 flex items-center justify-between">
			<a class="ml-2 text-lg" href="/">AOE Library</a>
			<div class="md:flex">
				<button on:click={handleHanmburgerClick} class="visible md:hidden"
					><Icon type="hamburger" />
				</button>
				<ul
					class={`fixed inset-y-0 top-16 flex w-full flex-col bg-white px-3 transition-all dark:bg-gray-800 md:static md:flex-row md:items-center ${
						isMenuOpen ? 'right-0' : '-right-full'
					} `}
				>
					<li><a class="mx-2 block p-3 hover:underline md:mx-5" href="/">Library</a></li>
					<li>
						<a class="mx-2 block p-3 hover:underline md:mx-5" href="/uptimes">Uptimes</a>
					</li>

					<li>
						<a class="mx-2 block p-3 hover:underline md:mx-5" href="/">Library</a>
					</li>
					<li>
						<a class="mx-2 block p-3 first-line:mx-2 hover:underline md:mx-5" href="/uptimes"
							>Uptimes</a
						>
					</li>
					<li>
						<button on:click={handleClick} class="md:mt-o mt-0">
							{#if isDark}
								<SocialIcon className="bg-transparent" type="lightBulb" />
							{:else}
								<SocialIcon className="" type="moon" />
							{/if}
						</button>
					</li>
					<li class="m-3 md:my-0"><Signin /></li>
				</ul>
			</div>
		</div>
	</nav>
</header>
<main class="wrapper flex flex-col">
	<slot />
</main>

<Footer />
