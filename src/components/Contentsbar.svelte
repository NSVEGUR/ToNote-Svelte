<script lang="ts">
	import Content from "./Content.svelte";
	export let label: string;
</script>

<main>
	<h1 class="title">{label}</h1>
	<section>
		<Content />
		<Content />
		<Content />
		<Content />
		<Content />
		<Content />
		<Content />
		<Content />
		<Content />
		<Content />
		<Content />
		<Content />
	</section>
</main>

<style lang="scss">
	@import "./../scss/theme.scss";
	main {
		height: calc(100vh - 80px);
		padding: 30px;
		padding-left: 50px;
		max-width: 75vw;
		width: 75vw;
		overflow: scroll;
		.title {
			font-family: $secondary-font;
			font-weight: 600;
			padding-bottom: 30px;
		}
		section {
			display: grid;
			grid-template-columns: auto auto;
			justify-content: flex-start;
			gap: 30px;
		}
	}
</style>
