<template>
	<v-app :class="{ prod : isProd }">
		<TopNav />
		<router-view id="View" />
		<LegalFooter />
	</v-app>
</template>

<script>
import TopNav from "@/components/nav/TopNav";
import LegalFooter from "@/components/footer/LegalFooter";

export default {
	name: "App",
	components: {
		TopNav,
		LegalFooter
	},
	computed: {
		isProd() {
			return (this.$store.state.productionMode);
		}
	},
	mounted: function() {
		this.$core.App = this;
		this.$nextTick(this.init);
	},
	methods: {
		init: function() {
			this.$core.Log("App init: " + process.env.VUE_APP_BUILD_TARGET + ":" + process.env.VUE_APP_BUILD_VERSION);

			this.processLocalizedContent();
		},
		processLocalizedContent: function() {
			let currentYear = new Date().getFullYear();
			this.$core.Content.LEGAL_COPYRIGHT_TEXT = (this.$core.Content.LEGAL_COPYRIGHT_TEXT).replace('{{year}}', currentYear);

			this.$core.SetStoreData('contentParsed', true);
		}
	}
};
</script>

<style lang="scss">
@import "@/core/app.core.globals";
@import "@/core/app.core.main";
</style>
