import { writable } from 'svelte/store';

 const { update, subscribe, set } = writable([]);

 const addFilter = tag => update(tags => {
     return [...tags, tag];
 });

 const removeFilter = tag => update(tags => {
  return tags.filter(items !== tag);
});

 export default {
  addFilter,
  removeFilter,
  subscribe,
  set
 }
