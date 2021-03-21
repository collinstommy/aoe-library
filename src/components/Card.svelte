<script>
import Tag from './Tag';
import Icon from './Icon';
import Cta from './Cta';
import isNew from '../lib/isNew';

export let url;
export let title;
export let description;
export let dateAdded;
export let twitch;
export let youtube;

const isNewItem = isNew(dateAdded);
</script>

<style>
.link {
  color: inherit;
}

.link:hover {
  text-decoration: none;
}

.card {
  position: relative;
  height: 100%;
}

.ribbon {
  right: -4px;
}

@media (max-width: 640px){
  .description {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 5;
    -webkit-box-orient: vertical;
  }	
}

</style>

<a class="link" href="{url}" target="_blank">
  <article class="card
    hover:shadow-md
    rounded-md
    p-4
    flex
    flex-col
    justify-between
    transition-shadow
    border
    border-gray-200
    bg-white

    md:p-8"
  >
    {#if isNewItem}
      <div class="
        ribbon
        bg-blue-800
        shadow-md
        rounded-l-md
        absolute
        top-2
        -right-0.5
        py-1
        px-4
        text-sm
        text-white
      ">New</div>
    {/if}
    <div>
      <h2 class="md:text-2xl text-xl">{title}</h2>
      <p class="description mt-4 md:leading-relaxed">{description}</p>
    </div>
    <div class="
      flex
      flex-wrap
      justify-end
      mt-3
      
      md:mt-8
      ">
      {#if twitch} <a href={twitch}><Icon type="twitch" /></a>{/if}
      {#if youtube} <a href={youtube}><Icon type="youtube" /></a>{/if}
      {#if url}<Cta href={url}>View</Cta>{/if}
    </div>
  </article>
</a>
