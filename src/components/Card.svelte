<script>
import Tag from './Tag';
import Cta from './Cta';
import Star from './Star';
import CardIcons from './CardIcons';
import isNew from '../lib/isNew';

export let url;
export let title;
export let description;
export let dateAdded;
export let twitch;
export let youtube;
export let tags;
export let type;
export let voteCount;

const isNewItem = isNew(dateAdded);
</script>

<style>
.card {
  position: relative;
  height: 100%;
}

.ribbon {
  right: -4px;
}

.bottom {
  min-height: 58px;
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

<article class="card
  rounded-md
  px-4
  py-6
  flex
  flex-col
  justify-between
  transition-shadow
  border
  border-gray-200
  bg-white

  md:px-8
  md:py-6
  "
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
    <p class="description mt-4 md:leading-relaxed text-gray-600">{description}</p>
  </div>
  <div class="
    bottom
    mt-6
    
    md:mt-8">
    <div class="flex flex-wrap mt-1">
      {#if tags}
        {#each tags as tag}
          <Tag tag={tag} />
        {/each}
      {/if}
    </div>
    <div class="
      bottom
      flex
      justify-between
      items-center
      border-t
      border-gray-200

      mt-4
      pt-3
      ">
      <!-- <Star checked votes={40}/> -->
      <div />
      <CardIcons {twitch} {youtube} {url} {type} />
    </div>
  </div>
</article>
