<template>
	<nav id="topNav">
		<v-app-bar id="topNav-bar" app elevate-on-scroll>
			<img id="topNav-logo" class="py-2" src="@/assets/logos/tg-logo-wide.svg">
			<v-spacer></v-spacer>
			<router-link :to="{ name: 'Home' }" class="text-button d-none d-md-block mx-4">{{ $core.Content.HOME_TITLE }}</router-link>
			<router-link :to="{ name: 'GettingStarted' }" class="text-button d-none d-md-block mx-4">{{ $core.Content.GETTINGSTARTED_TITLE }}</router-link>
			<router-link :to="{ name: 'StyleGuide' }" class="text-button d-none d-md-block mx-4">{{ $core.Content.STYLEGUIDE_TITLE }}</router-link>
			<v-app-bar-nav-icon class="d-md-none" @click="navDrawer = true"></v-app-bar-nav-icon>
		</v-app-bar>
		<v-navigation-drawer id="topNav-drawer" v-model="navDrawer" app temporary right>
			<v-list nav>
				<v-list-item-group v-model="navDrawerGroup" active-class="">
					<v-list-item>
						<router-link :to="{ name: 'Home' }" class="text-button">{{ $core.Content.HOME_TITLE }}</router-link>
					</v-list-item>
					<v-list-item>
						<router-link :to="{ name: 'GettingStarted' }" class="text-button">{{ $core.Content.GETTINGSTARTED_TITLE }}</router-link>
					</v-list-item>
					<v-list-item>
						<router-link :to="{ name: 'StyleGuide' }" class="text-button">{{ $core.Content.STYLEGUIDE_TITLE }}</router-link>
					</v-list-item>
				</v-list-item-group>
			</v-list>
		</v-navigation-drawer>
	</nav>
</template>

<script>
export default {
	name: "TopNav",
	data() {
		return {
			navDrawer: false,
			navDrawerGroup: null
		};
	}
};
</script>

<style lang="scss">
@import "@/core/app.core.globals";

#topNav {
	#topNav-logo {
		width: auto;
		height: 100%;
	}

	a.text-button {
		opacity: 0.5;

		text-decoration: none !important;

		transition: opacity linear .25s;

		&.router-link-exact-active {
			opacity: 1;
		}
		&:hover,
		&:active {
			opacity: 1;
		}
	}

	#topNav-drawer {
		margin-top: 56px;

	}
}
</style>
