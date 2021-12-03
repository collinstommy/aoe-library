<script>
  export let twitch;
  export let youtube;
  export let facebook;
  export let url;
  export let type;

  import Icon from './Icon.svelte';
  import Cta from './Cta.svelte';

  const ctaText = type === 'app' ? 'Download' : 'View Site';

</script>

<style>
</style>

<div class="flex">
  {#if twitch} <a href={twitch}><Icon type="twitch" /></a>{/if}
  {#if youtube} <a href={youtube}><Icon type="youtube" /></a>{/if}
  {#if facebook} <a href={facebook}><Icon type="facebook" /></a>{/if}
  {#if url}
    <a class="
      flex
      items-baseline
      text-blue-800
      font-semibold
      text-lg
      
      hover:text-blue-500
      hover:underline

      dark:text-white
      "
      href={url}>
      <span>{ctaText}</span>
      <i class="ri-external-link-fill ml-1"></i>
    </a>
  {/if}
</div>
