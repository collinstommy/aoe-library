
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
  import Library from "../components/Library.svelte";

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
