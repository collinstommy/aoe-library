<script>
  export let type;

  const mapper = {
    twitch: { 
      icon: 'ri-twitch-fill',
      color: 'bg-purple-200',
    },
    youtube: {
      icon: 'ri-youtube-line',
      color: 'bg-red-200'
    },
  };

  const { icon, color } = mapper[type];
</script>

<style>
</style>

<figure class={`
  ri-xl
  
  rounded-full
  h-11
  w-11
  flex
  items-center
  justify-center
  mx-1
  ${color || 'bg-grey-800'}
  hover:cursor-pointer
  hover:shadow-md
`}>
  <i class={icon}></i>
</figure>
