<script lang="ts">
	import { createEventDispatcher } from "svelte";
	import Notes from "./Notes.svelte";
	import { store } from "./../store";
	const dispatch = createEventDispatcher();
	function changeWorkbar(label: string) {
		dispatch("tap", {
			label,
		});
		$store.notes.forEach((note) => (note.current = false));
		$store.notes = $store.notes.map((note) => {
			if (note.label === label) note.current = true;
			return note;
		});
	}
</script>

<main>
	<div class="title">
		<i class="fas fa-list-ul" />
		<span>Notes</span>
	</div>
	{#each $store.notes as note}
		<Notes
			id={note.id}
			on:click={() => {
				changeWorkbar(note.label);
			}}
		/>
	{/each}
	<div class="add-folder">
		<i class="fas fa-plus-circle" />
		<span>Add Folder</span>
	</div>
</main>

<style lang="scss">
	@import "./../scss/theme.scss";
	main {
		max-width: 25vw;
		width: 25vw;
		height: calc(100vh - 80px);
		border-right: 1px solid $tertiary-color;
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		overflow-y: scroll;
		padding: 5px;
		padding-top: 40px;
		.title {
			font-family: $secondary-font;
			font-weight: 600;
			padding-bottom: 30px;
			padding-left: 15px;
			span {
				padding-left: 10px;
			}
		}
		.add-folder {
			padding-top: 20px;
			font-size: 1.1rem;
			padding-left: 15px;
			font-family: $secondary-font;
			font-weight: 200;
			color: $tertiary-color;
			span {
				padding-left: 10px;
			}
		}
	}
</style>
