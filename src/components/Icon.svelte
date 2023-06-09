<script>
	export let type;
	export let className = '';

	const ICONS = {
		twitch: 'ri-twitch-fill',
		youtube: 'ri-youtube-line',
		facebook: 'ri-facebook-fill',
		discord: 'ri-discord-fill',
		hamburger: 'ri-menu-line',
		lightBulb: 'ri-lightbulb-line',
		moon: 'ri-moon-line',
		star: 'ri-star-line',
		starFilled: 'ri-star-fill'
	};
</script>

<figure class={`ri-xl mx-1 flex h-11 w-11 items-center justify-center ${className}`}>
	<i class={ICONS[type]} />
</figure>

<style>
</style>
