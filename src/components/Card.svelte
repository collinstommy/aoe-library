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
  text-decoration: none;
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

<a class="link" href="{url}" target="_blank">
  <article class="card hover:shadow-md rounded-md p-4 md:p-8 flex flex-col justify-between transition-shadow border border-gray-200 bg-white">
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
      <h2 class="md:text-2xl text-xl">{title}</h2>
      <p class="description mt-4 md:leading-relaxed">{description}</p>
    </div>
    <div class="flex flex-wrap md:mt-8 mt-3">
      {#each tags as tag}
        <Tag tag={tag} />
      {/each}
    </div>
  </article>
</a>
