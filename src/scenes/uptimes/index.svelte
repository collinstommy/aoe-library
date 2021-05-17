<script>
  import Row from './Row';
  import dayjs from 'dayjs';
  import duration from 'dayjs/plugin/duration';
import Radio from '../../components/Radio.svelte';

  dayjs.extend(duration);

  let loom = 'noLoom';

  const VILL_TIME = 25;
  const getVillTime = vills => vills * VILL_TIME;
  const getFeudalClick = vills => getVillTime(vills);
  const getFeudalArrive = vills => getFeudalClick(vills) + 130;
  const getCastleClick = vills => getFeudalArrive(vills) + (VILL_TIME * 2);
  const getCastleArrive = vills => getCastleClick(vills) + 160;
  const asMinutes = time => {
    const minutes = Math.floor(time / 60);
    const seconds = time - minutes * 60;
    const duration = dayjs.duration({ 
      minutes,
      seconds,
    });
    return duration.format('mm:ss');
  }

  const times = [];

  for (let i = 19; i < 31; i++) {
    times.push({
      pop: i,
      feudalUp: asMinutes(getFeudalClick(i)), 
      feudalArrive: asMinutes(getFeudalArrive(i)), 
      castleUp: asMinutes(getCastleClick(i)), 
      castleArrive: asMinutes(getCastleArrive(i)), 
    })
  }

</script>

<style>
</style>
<div class="section flex justify-center">
  <main class="flex flex-col">
    <div class="filters py-8">
      <div class="flex">
        <Radio id="withLoom" value="withLoom" bind:group={loom}>
          With Loom
        </Radio>
        <Radio id="loom" value="noLoom" bind:group={loom}>
          No Loom
        </Radio>
      </div>
    </div>
    <div class="flex flex-col">
      <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div class="shadow border-b border-gray-200 sm:rounded-lg">
            <table class="min-w-full divide-y divide-gray-200">
              <thead>
                <tr class="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                  <th class="py-3 px-6 text-left">Pop</th>
                  <th class="py-3 px-6 text-left">Click up feudal</th>
                  <th class="py-3 px-6 text-left">Arrive in feudal</th>
                  <th class="py-3 px-6 text-left"> +2 Vills </th>
                  <th class="py-3 px-6 text-left">Click up castle</th>
                  <th class="py-3 px-6 text-left">Arrive in castle</th>
                </tr>
              </thead>
              <tbody class="text-gray-600 text-sm font-light">
                {#each times as {pop, feudalUp, feudalArrive, castleUp, castleArrive}}
                <Row {pop} {feudalUp} {feudalArrive} {castleUp} {castleArrive} />
                {/each}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </main>
</div>
