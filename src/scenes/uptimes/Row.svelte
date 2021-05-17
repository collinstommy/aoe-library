<script>
  export let pop;
  export let feudalUp;
  export let feudalArrive;
  export let castleUp;
  export let castleArrive;

  import Cell from './Cell';

</script>

<style>
  /* your styles go here */
</style>
<tr class="border-b border-gray-200 hover:bg-gray-100">
    <Cell>
      {pop}
    </Cell>
    <Cell>
      {feudalUp}
    </Cell>
    <Cell>
      {feudalArrive}
    </Cell>
    <Cell>
      <span class="hidden">+2 villagers</span>
    </Cell>
    <Cell>
      {castleUp}
    </Cell>
    <Cell>
      {castleArrive}
    </Cell>
</tr>
