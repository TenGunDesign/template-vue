<template>
	<footer id="legalFooter">
		<v-container>
			<v-row>
				<v-col cols="12">
					<span class="d-block text-overline text-center white--text" v-html="legalText"></span>
				</v-col>
			</v-row>
		</v-container>
	</footer>
</template>

<script>
export default {
	name: "LegalFooter",
	computed: {
		legalText() {
			return ((this.$store.state.contentParsed) ? this.$core.Content.LEGAL_COPYRIGHT_TEXT : "&nbsp;");
		}
	}
};
</script>

<style lang="scss">
@import "@/core/app.core.globals";

#legalFooter {
	position: absolute;
	left: 0;
	bottom: 0;
	width: 100%;

	background-color: $offblack;
	border-top: 2px solid $black;
}
</style>
