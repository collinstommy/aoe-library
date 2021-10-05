<script>
  import Row from "./Row.svelte";
  import dayjs from "dayjs";
  import duration from "dayjs/plugin/duration.js";
  import Radio from "../Radio.svelte";
import CheckBox from "../shared/CheckBox.svelte";
  dayjs.extend(duration);

  let loom = "true";
  let includeScout = true;
  let isMalay = false;

  const VILL_TIME = 25;
  const FEUDAL_TIME = 130;
  const CASTLE_TIME = 160;

  const MALAY_FEUDAL = 79;
  const MALAY_CASTLE = 95;

  const asMinutes = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time - minutes * 60;
    const duration = dayjs.duration({
      minutes,
      seconds,
    });
    return duration.format("mm:ss");
  };

  const getTime = (vills, loom, count, isMalay) => {
    const loomTime = loom === "true" ? VILL_TIME : 0;
    const feudal = isMalay ? MALAY_FEUDAL : FEUDAL_TIME;
    const castle = isMalay ? MALAY_CASTLE : CASTLE_TIME;

    const feudalTime = ((vills - 3) * VILL_TIME) + loomTime;
    const feudalArrive = feudalTime + feudal;
    const castleClick = feudalArrive + VILL_TIME * 2;
    const castleArrive = castleClick + castle;

    return {
      pop: count,
      feudalUp: asMinutes(feudalTime),
      feudalArrive: asMinutes(feudalArrive),
      castleUp: asMinutes(castleClick),
      castleArrive: asMinutes(castleArrive),
    };
  };

  const getAllTimes = (loom, includeScout, isMalay) => {
    console.log({ includeScout });
    const result = [];
    for (let i = 16; i < 32; i++) {
      const count = includeScout ? i + 1 : i;
      result.push(getTime(i, loom, count, isMalay));
    }
    return result;
  };

  let times = [];
  $: times = getAllTimes(loom, includeScout, isMalay);
</script>

<style>
  .container {
    max-width: 1080px;
  }
</style>

<main class="flex flex-col flex-1 w-full container">
  <div class="filters pb-8">
    <div class="flex">
      <Radio id="withLoom" value="true" bind:group={loom}>With Loom</Radio>
      <Radio id="loom" value="false" bind:group={loom}>No Loom</Radio>
    </div>
    <CheckBox
      bind:checked={includeScout}
      label="Include Starting Scout"
      id="staring-scout"
    />
    <CheckBox
      bind:checked={isMalay}
      label="Malay"
      id="is-malay"
  />
  </div>
  <div class="flex flex-col">
    <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
      <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
        <div class="shadow border-b border-gray-200 sm:rounded-lg">
          <table class="min-w-full divide-y divide-gray-200">
            <thead>
              <tr
                class="bg-blue-800 text-gray-100 uppercase text-sm leading-normal"
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
