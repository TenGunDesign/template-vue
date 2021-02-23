<template>
	<div data-view="GettingStarted">
		<v-main>
			<v-container>
				<v-row>
					<v-spacer></v-spacer>
					<v-col cols="12" md="8" lg="6" class="text-center">
						<img id="heroLogo" class="my-8" src="@/assets/logos/tg-logo.svg">
						<h1 class="text-h2">{{ $core.Content.GETTINGSTARTED_HEADING }}</h1>
					</v-col>
					<v-spacer></v-spacer>
				</v-row>
				<v-row>
					<v-spacer></v-spacer>
					<v-col cols="12" md="8" lg="6">
						<p class="text-body-1">{{ $core.Content.GETTINGSTARTED_INTRO }}</p>
						<v-alert outlined type="info" elevation="4">{{ $core.Content.GETTINGSTARTED_NOTE }}</v-alert>
						<p class="text-body-1">
							<ol>
								<li v-for="(s, idx) in $core.Content.GETTINGSTARTED_STEPS" :key="'step' + idx" class="mb-4" v-html="s"></li>
							</ol>
						</p>
					</v-col>
					<v-spacer></v-spacer>
				</v-row>
			</v-container>
		</v-main>
	</div>
</template>

<script>
export default {
	name: 'GettingStarted',
	components: {},
	mounted: function() {
		this.$core.CurView = this;
		this.$nextTick(this.init);
	},
	methods: {
		init: function() {

		}
	}
};
</script>

<style lang="scss">
#View[data-view="GettingStarted"] {
	#heroLogo {
		max-width: 200px;
	}
}
</style>
