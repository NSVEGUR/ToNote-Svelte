<section>
	<h2>Lorem Ipsum</h2>
	<p>
		Lorem Ipsum is simply dummy text of the printing and typesetting industry.
		Lorem Ipsum has been the industry's standard dummy text ever since the
		1500s, when an unknown printer took a galley of type and scrambled it to
		make a type specimen book. It has survived not only five centuries, but also
		the leap into electronic typesetting, remaining essentially unchanged. It
		was popularised in the 1960s with the release of Letraset sheets containing
		Lorem Ipsum passages, and more recently with desktop publishing software
		like Aldus PageMaker including versions of Lorem Ipsum.
	</p>
	<div>
		<div style="background-color: #54C1FE;" class="tag" />
		<h2>aofhahfa</h2>
		<i class="far fa-trash-alt" />
		<i class="far fa-edit" />
	</div>
</section>

<style lang="scss">
	@import "./../scss/theme.scss";
	section {
		width: 25vw;
		border: 1px solid $tertiary-color;
		h2 {
			font-family: $secondary-font;
			font-weight: 500;
		}
		border-radius: 10px;
		padding: 10px;
		p {
			font-size: 1rem;
			font-family: $primary-font;
			color: $tertiary-color;
			text-overflow: ellipsis;
			overflow: hidden !important;
			white-space: nowrap;
		}
		div {
			border: none;
			outline: none;
			background: none;
			cursor: pointer;
			display: flex;
			width: 100%;
			align-items: center;
			font-size: 1rem;
			font-family: $primary-font;
			color: $tertiary-text-color;
			position: relative;

			.tag {
				height: 10px;
				width: 10px;
				border-radius: 50%;
				margin-right: 10px;
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
	}
</style>
