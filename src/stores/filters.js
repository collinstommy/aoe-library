import { writable } from 'svelte/store';

 const { update, subscribe, set } = writable([]);

 const addFilter = tag => update(tags => {
     return [...tags, tag];
 });

 export default {
  addFilter,
  subscribe,
  set
 }


