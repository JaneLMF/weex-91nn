<template>
	<div>
		<text-cell v-if = "type == 0 "></text-cell>
		<image-cell v-if="type == 1"></image-cell>
	</div>
</template>

<script>
	export default {
		props:{
			type:{default: 0}
		},
		components: {
			textCell: require('./text-cell.vue'),
			imageCell: require('./image-cell.vue')
		}
	}
</script>

<style>

</style>