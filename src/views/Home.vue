<template>
	<div data-view="Home">
		<v-main>
			<v-container>
				<v-row>
					<v-spacer></v-spacer>
					<v-col cols="12" md="8" lg="6" class="text-center">
						<img id="heroLogo" class="my-8" src="@/assets/logos/tg-logo.svg">
						<h1 class="text-h2">{{ $core.Content.HOME_HEADING }}</h1>
					</v-col>
					<v-spacer></v-spacer>
				</v-row>
				<v-row>
					<v-spacer></v-spacer>
					<v-col cols="12" md="8" lg="6">
						<p class="text-body-1">
							{{ $core.Content.HOME_INTRO }}
							<br><br>
							{{ $core.Content.HOME_FEATURES_HEADER}}
							<ul>
								<li v-for="(f, idx) in $core.Content.HOME_FEATURES" :key="'feature' + idx" class="mb-4">{{ f }}</li>
							</ul>
						</p>
					</v-col>
					<v-spacer></v-spacer>
				</v-row>
				<v-row>
					<v-col cols="12" class="text-center">
						<v-btn large color="primary" :to="{ name: 'GettingStarted' }">{{ $core.Content.HOME_GETSTARTED_CTA }}</v-btn>
					</v-col>
				</v-row>
			</v-container>
		</v-main>
	</div>
</template>

<script>
export default {
	name: 'Home',
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
#View[data-view="Home"] {
	#heroLogo {
		max-width: 200px;
	}
}
</style>
