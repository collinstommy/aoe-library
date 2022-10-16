import preprocess from "svelte-preprocess";
import tailwind from 'tailwindcss'
import autoprefixer from 'autoprefixer'
import adapter from '@sveltejs/adapter-auto';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: adapter()
    // hydrate the <div id="svelte"> element in src/app.html
  },

  preprocess: [preprocess({
    postcss: {
      plugins: [
        tailwind,
        autoprefixer
      ]
    }
  })]
};

export default config;
