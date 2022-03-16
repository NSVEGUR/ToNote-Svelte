<script lang="ts">
	import { store } from "./../store";
	export let id: number;
	let display: boolean = false;
</script>

<button
	on:mouseenter={(e) => {
		display = true;
	}}
	on:mouseleave={(e) => {
		display = false;
	}}
	on:click
	class:current={$store.notes[id].current}
>
	<div style="background-color: {$store.notes[id].tag};" class="tag" />
	<h2>{$store.notes[id].label}</h2>
	{#if display}
		<i class="far fa-trash-alt" />
		<i class="far fa-edit" />
	{/if}
</button>

<style lang="scss">
	@import "./../scss/theme.scss";
	.current {
		background: $secondary-accent-color;
		border-radius: 10px;
	}
	button {
		border: none;
		outline: none;
		background: none;
		cursor: pointer;
		display: flex;
		height: 50px;
		padding: 10px 15px;
		width: 100%;
		align-items: center;
		font-size: 1.1rem;
		font-family: $primary-font;
		color: $tertiary-text-color;
		position: relative;
		.tag {
			height: 11px;
			width: 11px;
			border-radius: 50%;
			margin-right: 20px;
		}
		i {
			position: absolute;
			font-weight: bold;
		}
		i.fa-trash-alt {
			right: 5px;
		}
		i.fa-edit {
			right: 25px;
		}
	}
	button:focus {
		border: none;
		outline: none;
	}
</style>
