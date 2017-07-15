<template>
	<list @viewappear="viewappear">
		<cell>
			<slider class="slider">
				<div  v-for="v in [1,2,3]">
					<image src="http://192.168.199.161:8084/resources/WX20170715-192137.png" class="slider-item"></image>
				</div>
				<indicator class="indicator"></indicator>
			</slider>
		</cell>
		<cell>
			<div style="flex-direction: row;">
				<div v-for="v in [1,2,3]" class="nav-item">
					<div style="justify-content: center;align-items: center;">
						<div class="nav-item-content"></div>
						<text>ICO {{v}}</text>
					</div>
				</div>
			</div>
		</cell>
		<cell>
			<scroller scroll-direction="horizontal" class="category">
				<div v-for="v in ['全部','比特币','以太坊','ETH','全部','比特币','以太坊','ETH']" class="category-item" >
					<text>{{v}}</text>
				</div>
			</scroller>
		</cell>
		<cell v-for="(item, index) in [1,1,1,1,1,1,1,1,1,1,1,1,1,1]">
			<warp-cell :type = "index % 2"></warp-cell>
		</cell>
	</list>
</template>
<script>
	export default {
		components:{
			warpCell:require('./cells/warp-cell.vue'),
		},
		methods:{
			viewappear(){
				console.log('viewappear')
			}
		}
	}
</script>
<style>
	.border {
		border-width: 1px;
	}
	
	.indicator {
		width: 750px;
		height: 30px;
		position: absolute;
		bottom: 0px;
	}
	.slider{width: 750px; height: 400px;}
	.slider-item{width: 750px;height: 350px; }
	.nav-item{flex: 1; border-width: 1px; height: 190px; justify-content: center; align-items: center;}
	.nav-item-content{width: 90px; height: 90px; border-radius: 90px; background-color: #e3e3e3;}
	.category{width: 750px; height: 100px; border-width: 1px; flex-direction: row; background-color: #f3f3f3;}
	.category-item{width: 120px; height: 100px; align-items: center;justify-content: center; }
</style>