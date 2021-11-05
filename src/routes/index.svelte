
<script context="module">
  const dataItems = import.meta.glob('../../content/items/*.json');

  let body = [];

  for (const path in dataItems) {
    body.push(dataItems[path]().then(item => {
      const copy = { ...item };
      delete copy.default;
      return copy;
    }));
  }
  /**
  * @type {import('@sveltejs/kit').Load}
  */
  export async function load({ page, fetch }) {
    const items = await Promise.all(body)
    return {
      props: {
        items
      }
    };
  }
</script>
<script>
  import { onMount } from 'svelte';
  import Library from "../components/Library.svelte";
  
  onMount(async() => {
    const { hash } = window.location;
    if(hash.includes('access_token')){
      window.location.href = `/admin${hash}`;
    }
  })

  export let items;
</script>

<Library items={items} />

<!-- 
  <Route path="/submit">
    <Submit />
  </Route>
  <Route path="/contact">
    <Contact />
  </Route>
  <Route path="/uptimes">
    <Uptimes />
  </Route>
  <Footer />
</Router> -->
