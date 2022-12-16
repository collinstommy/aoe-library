import { sveltekit } from '@sveltejs/kit/vite';
import { writeItems } from './src/build/writeItems';

const config = {
  plugins: [sveltekit(),
  {
    name: 'postbuild-commands', // the name of your custom plugin. Could be anything.
    buildStart: async () => {
      writeItems()
    }
  },],
  server: {
    fs: {
      // Allow serving files from one level up to the project root
      allow: ['..'],
    },
  },
};

export default config;
