<script>
	export let type;

	const mapper = {
		twitch: {
			icon: 'ri-twitch-fill'
		},
		youtube: {
			icon: 'ri-youtube-line'
		},
		facebook: {
			icon: 'ri-facebook-fill'
		},
		discord: {
			icon: 'ri-discord-fill'
		}
	};

	const { icon, color } = mapper[type];
</script>

<figure
	class={`
  ri-xl
  
  mx-1
  flex
  h-11
  w-11
  items-center
  justify-center
  rounded-full
  bg-gray-100
  text-indigo-900
  hover:cursor-pointer
  hover:border
  hover:border-white
  hover:text-indigo-500
  dark:bg-transparent
  dark:text-white
`}
>
	<i class={icon} />
</figure>

<style>
</style>
