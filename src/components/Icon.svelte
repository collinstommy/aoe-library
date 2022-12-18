<script>
	export let type;
	export let className;

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
		},
		hamburger: {
			icon: 'ri-menu-line'
		},
		lightBulb: {
			icon: 'ri-lightbulb-line'
		},
		moon: {
			icon: 'ri-moon-line'
		}
	};

	const { icon, color } = mapper[type];
</script>

<!-- TODO move styling logic into social icon component -->
<figure
	class={`
  ri-xl
  
  mx-1
  flex
  h-11
  w-11
  items-center
  justify-center
	${className}
`}
>
	<i class={icon} />
</figure>

<style>
</style>
