<script>
import Tag from './Tag';

export let url;
export let title;
export let description;
export let tags;
export let dateAdded;

</script>

<style>
.link {
  color: inherit;
}

.link:hover {
  text-decoration: underline;
}

.card {
  height: 100%;
  position: relative;
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

<article class="card rounded-md p-4 md:p-8 flex flex-col justify-between transition-shadow border border-gray-200 bg-white">
  {#if dateAdded}
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
    <a class="link" href="{url}" target="_blank">
      <h2 class="md:text-2xl text-xl">{title}</h2>
    </a>
    <a class="link" href="{url}" target="_blank">
      <p class="description mt-4 md:leading-relaxed">{description}</p>
    </a>
  </div>
  <div class="md:mt-8 mt-6">
    <div class="flex cursor-pointer hover:text-gray-500">
      <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M12 18.26l-7.053 3.948 1.575-7.928L.587 8.792l8.027-.952L12 .5l3.386 7.34 8.027.952-5.935 5.488 1.575 7.928L12 18.26zm0-2.292l4.247 2.377-.949-4.773 3.573-3.305-4.833-.573L12 5.275l-2.038 4.42-4.833.572 3.573 3.305-.949 4.773L12 15.968z"/>
      </svg>
      <div class="mx-2">43</div>
    </div>
    <div class="flex flex-wrap mt-2">
      {#each tags as tag}
        <Tag tag={tag} />
      {/each}
    </div>
  </div>
</article>
