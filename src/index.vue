<template>
	<div style="flex-direction: column;">
		<osc-tabbar :tabItems="tabItems" @tabBarOnClick="tabBarOnClick"/>
	</div>
</template>
<script>
	import config from './config'
	module.exports = {
		data: function() {
			return {
				dir: 'examples',
				tabItems: [{
						index: 0,
						title: 'tab1',
						titleColor: '#000000',
						icon: '',
						image: 'http://gtms01.alicdn.com/tps/i1/TB1qw.hMpXXXXagXXXX9t7RGVXX-46-46.png',
						selectedImage: 'http://gtms04.alicdn.com/tps/i4/TB16jjPMpXXXXazXVXX9t7RGVXX-46-46.png',
						src: '/view/home/home.js',
						visibility: 'visible',
					},
					{
						index: 1,
						title: 'tab2',
						titleColor: '#000000',
						icon: '',
						image: 'http://gtms03.alicdn.com/tps/i3/TB1LEn9MpXXXXaUXpXX9t7RGVXX-46-46.png',
						selectedImage: 'http://gtms02.alicdn.com/tps/i2/TB1qysbMpXXXXcnXXXX9t7RGVXX-46-46.png',
						src: '/content2.js',
						visibility: 'hidden',
					},
					{
						index: 2,
						title: 'tab3',
						titleColor: '#000000',
						icon: '',
						image: 'http://gtms01.alicdn.com/tps/i1/TB1B0v5MpXXXXcvXpXX9t7RGVXX-46-46.png',
						selectedImage: 'http://gtms04.alicdn.com/tps/i4/TB1NxY5MpXXXXcrXpXX9t7RGVXX-46-46.png',
						src: '/content3.js',
						visibility: 'hidden',
					}
				],
			}
		},
		components: {
			oscTabbar: typeof(window) == 'undefined' ? require('./components/tabbar.vue') : require('./components/tabbar-web.vue')
		},
		created: function() {
			for(var i = 0; i < this.tabItems.length; i++) {
				var tabItem = this.tabItems[i];
				tabItem.src = config.js(tabItem.src)
				console.log(tabItem.src)
			}
		},
		methods: {
			tabBarOnClick: function(e) {
				console.log('tabBarOnClick', e.index)
			}
		}
	}
</script>