<script>
  export let pop;
  export let feudalUp;
  export let feudalArrive;
  export let castleUp;
  export let castleArrive;
  export let hideCastle;

  import Cell from './Cell.svelte';

</script>

<style>
  /* your styles go here */
</style>
<tr class="
  border-b
  border-gray-200
  even:bg-gray-200
  
  dark:even:bg-gray-700
  dark:bg-gray-800
  dark:text-gray-200
  dark:border-gray-600
  
  ">
    <Cell>
      {pop}
    </Cell>
    <Cell>
      {feudalUp}
    </Cell>
    <Cell>
      {feudalArrive}
    </Cell>
    <Cell hidden={hideCastle}>
      <span class="">+2 villagers</span>
    </Cell>
    <Cell hidden={hideCastle}>
      {castleUp}
    </Cell>
    <Cell hidden={hideCastle}>
      {castleArrive}
    </Cell>
</tr>
