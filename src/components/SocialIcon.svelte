<script>
	import Icon from './Icon.svelte';
	export let type;
</script>

<Icon
	{type}
	className=" ri-xl mx-1 flex h-11 w-11 items-center justify-center rounded-full bg-gray-100 text-indigo-900 hover:cursor-pointer  hover:text-indigo-500 dark:bg-transparent hover:dark:bg-gray-600 dark:text-white"
/>
