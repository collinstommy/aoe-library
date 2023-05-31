<script lang="ts">
	import { enhance } from '$app/forms';
	import { page } from '$app/stores';

	export let itemId: string;

	let loading = false;

	$: likeCount = $page.data.likes[itemId] || 0;
	$: checked = !!$page.data.me.likes?.find((id: string) => itemId === id);
</script>

<form
	method="POST"
	action="?/updateLike"
	use:enhance={() => {
		loading = true;

		return async ({ update }) => {
			await update();
			loading = false;
		};
	}}
>
	<input name="liked" type="checkbox" class="hidden" {checked} />
	<input name="itemId" type="hidden" value={itemId} class="hidden" />

	<button
		disabled={loading}
		class="flex cursor-pointer items-center rounded py-1 px-2 hover:bg-gray-200 dark:hover:bg-gray-500"
	>
		<div class="flex rounded-full p-1" class:animation={loading}>
			<i
				class={`
      star
      ri-star-fill
      ri-lg
      text-xlg
    ${checked ? 'ri-star-fill' : 'ri-star-line'}
    ${loading ? 'text-grey-300' : 'text-yellow-300'}
  `}
			/>
		</div>
		<div class="ml-2 font-medium">{likeCount}</div>
	</button>
</form>

<style>
	.animation {
		box-shadow: 0 0 0 0 rgb(215, 211, 211);
		transform: scale(1);
		animation: pulse 2s infinite;
	}

	@keyframes pulse {
		0% {
			transform: scale(0.95);
			box-shadow: 0 0 0 0 rgba(215, 211, 211, 0.7);
		}

		70% {
			transform: scale(1);
			box-shadow: 0 0 0 10px rgba(215, 211, 211, 0);
		}

		100% {
			transform: scale(0.95);
			box-shadow: 0 0 0 0 rgba(215, 211, 211, 0);
		}
	}
</style>
