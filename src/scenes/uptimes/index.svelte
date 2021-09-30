<script>
  import Row from "./Row";
  import dayjs from "dayjs";
  import duration from "dayjs/plugin/duration";
  import Radio from "../../components/Radio.svelte";
  dayjs.extend(duration);

  let loom = "true";
  let includeScout = true;

  const VILL_TIME = 25;
  const FEUDAL_TIME = 130;
  const CASTLE_TIME = 160;

  const asMinutes = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time - minutes * 60;
    const duration = dayjs.duration({
      minutes,
      seconds,
    });
    return duration.format("mm:ss");
  };

  const getTime = (vills, loom, count) => {
    const loomTime = loom === "true" ? VILL_TIME : 0;

    const feudalTime = ((vills - 3) * VILL_TIME) + loomTime;
    const feudalArrive = feudalTime + FEUDAL_TIME;
    const castleClick = feudalArrive + VILL_TIME * 2;
    const castleArrive = castleClick + CASTLE_TIME;

    return {
      pop: count,
      feudalUp: asMinutes(feudalTime),
      feudalArrive: asMinutes(feudalArrive),
      castleUp: asMinutes(castleClick),
      castleArrive: asMinutes(castleArrive),
    };
  };

  const getAllTimes = (loom, includeScout) => {
    console.log({ includeScout });
    const result = [];
    for (let i = 16; i < 31; i++) {
      const count = includeScout ? i + 1 : i;
      result.push(getTime(i, loom, count));
    }
    return result;
  };

  let times = [];
  $: times = getAllTimes(loom, includeScout);
</script>

<main class="flex flex-col flex-1 main-container w-full">
  <div class="filters py-8">
    <div class="flex">
      <Radio id="withLoom" value="true" bind:group={loom}>With Loom</Radio>
      <Radio id="loom" value="false" bind:group={loom}>No Loom</Radio>
    </div>
    <div class="flex items-start mt-4">
      <div class="flex items-center h-5">
        <input
          id="includeScout"
          name="includeScout"
          type="checkbox"
          class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
          bind:checked={includeScout}
        />
      </div>
      <div class="ml-3 text-sm">
        <label for="includeScout" class="font-medium text-gray-700"
          >Include Starting Scout</label
        >
      </div>
    </div>
  </div>
  <div class="flex flex-col">
    <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
      <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
        <div class="shadow border-b border-gray-200 sm:rounded-lg">
          <table class="min-w-full divide-y divide-gray-200">
            <thead>
              <tr
                class="bg-gray-200 text-gray-600 uppercase text-sm leading-normal"
              >
                <th class="py-3 px-6 text-left">{includeScout ? 'Pop' : 'Vills'}</th>
                <th class="py-3 px-6 text-left">Click up feudal</th>
                <th class="py-3 px-6 text-left">Arrive in feudal</th>
                <th class="py-3 px-6 text-left"></th>
                <th class="py-3 px-6 text-left">Click up castle</th>
                <th class="py-3 px-6 text-left">Arrive in castle</th>
              </tr>
            </thead>
            <tbody class="text-gray-600 text-sm font-light">
              {#each times as { pop, feudalUp, feudalArrive, castleUp, castleArrive }}
                <Row
                  {pop}
                  {feudalUp}
                  {feudalArrive}
                  {castleUp}
                  {castleArrive}
                />
              {/each}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</main>

<style>
</style>
