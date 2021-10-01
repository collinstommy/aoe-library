<script>
  import Library from "./components/Library";
  import Footer from "./components/Footer";
  import Submit from "./components/Submit";
  import Contact from "./components/Contact";
  import Uptimes from "./scenes/uptimes";
  import { Router, link, Route } from "svelte-routing";
</script>

<header
  class="flex relative z-50 text-sm leading-6 font-medium ring-1 ring-gray-900 ring-opacity-5 shadow-sm py-5 bg-white w-full"
>
  <nav aria-label="Global" class="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
    <div class="flex items-center  flex-wrap sm:flex-nowrap  ">
      <div
        class="w-full flex-none mt-4 sm:mt-0 sm:w-auto sm:ml-auto flex items-center"
      >
        <a class="mx-6 hover:underline" use:link href="/">Library</a>
        <a class="mx-6 hover:underline" use:link href="/uptimes">Uptimes</a>
        <a class="mx-6 hover:underline rounded-full px-6 py-10 border" use:link href="/submit">Add to Library</a>
      </div>
    </div>
  </nav>
</header>
<Router url="">
  <Route path="/"><Library /></Route>
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
</Router>

<style global lang="postcss">
  @tailwind base;
  @tailwind components;

  @tailwind utilities;
  @tailwind colors;
</style>
