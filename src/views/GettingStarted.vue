<template>
	<div data-view="GettingStarted">
		
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

</style>
