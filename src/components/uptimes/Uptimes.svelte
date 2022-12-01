<script>
	import Row from './Row.svelte';
	import Radio from '../Radio.svelte';
	import CheckBox from '../shared/CheckBox.svelte';
	import { Chinese, Generic, Goths, Malay, Mayans, Persians, Portuguese } from './civs';

	let loom = 'true';
	let includeScout = true;
	let selectedCiv = 'Generic';

	const getAllTimes = (loom, includeScout, civ) => {
		const ChosenCiv = {
			Generic: Generic,
			Chinese: Chinese,
			Goths: Goths,
			Malay: Malay,
			Mayans: Mayans,
			Persians: Persians,
			Portuguese: Portuguese
		}[civ];
		const civCalculator = new ChosenCiv(loom);
		const result = [];
		for (let i = 16; i < 32; i++) {
			const count = includeScout ? i + 1 : i;
			result.push(civCalculator.getTime(i, count));
		}
		return result;
	};

	let times = [];
	$: times = getAllTimes(loom, includeScout, selectedCiv);
</script>

<div class="container flex w-full flex-1 flex-col">
	<div class="filters pb-8">
		<div id="options" class="flex flex-col items-center md:flex-row md:items-baseline">
			<div class="flex">
				<Radio id="withLoom" value="true" bind:group={loom}>With Loom</Radio>
				<Radio id="loom" value="false" bind:group={loom}>No Loom</Radio>
			</div>
			<div class="mt-3">
				<CheckBox bind:checked={includeScout} label="Include Starting Scout" id="staring-scout" />
			</div>
		</div>
		<div id="civ-dropdown" class="my-6 flex flex-col items-center md:items-start">
			<label for="civs" class="pb-2 font-bold">Civ</label>
			<select id="civs" class="p-1 dark:text-gray-800" bind:value={selectedCiv}>
				<option>Generic</option>
				<option>Chinese</option>
				<option>Goths</option>
				<option>Malay</option>
				<option>Mayans</option>
				<option>Persians</option>
				<option>Portuguese</option>
			</select>
		</div>
	</div>
	<div class="flex flex-col">
		<div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
			<div class="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
				<div class="border-b border-gray-200 shadow sm:rounded-lg">
					<table class="min-w-full divide-y divide-gray-200 bg-gray-100 ">
						<thead>
							<tr
								class="bg-indigo-800 text-sm uppercase leading-normal text-gray-100 dark:bg-gray-700"
							>
								<th class="py-3 px-6 text-left">{includeScout ? 'Pop' : 'Vills'}</th>
								<th class="py-3 px-6 text-left">Click up feudal</th>
								<th class="py-3 px-6 text-left">Arrive in feudal</th>
								<th class="py-3 px-6 text-left" />
								<th class="py-3 px-6 text-left">Click up castle</th>
								<th class="py-3 px-6 text-left">Arrive in castle</th>
							</tr>
						</thead>
						<tbody class="text-md font-light text-gray-800">
							{#each times as { pop, feudalUp, feudalArrive, castleUp, castleArrive, hideCastle }}
								<Row {pop} {feudalUp} {feudalArrive} {castleUp} {castleArrive} {hideCastle} />
							{/each}
						</tbody>
					</table>
				</div>
			</div>
		</div>
	</div>
</div>

<style>
	.container {
		max-width: 1080px;
	}
</style>
