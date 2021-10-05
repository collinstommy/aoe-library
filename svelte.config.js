import preprocess from "svelte-preprocess";
import tailwind from 'tailwindcss'
import autoprefixer from 'autoprefixer'

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    // hydrate the <div id="svelte"> element in src/app.html
    target: '#svelte'
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
