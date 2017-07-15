export default {
	js(url) {
		var bundleUrl = weex.config.bundleUrl
		if(typeof(window) == "undefined") {
			bundleUrl = bundleUrl.substring(0, bundleUrl.lastIndexOf('/'))
			while(url.startsWith('../')) {
				url = url.substr(3)
				bundleUrl = bundleUrl.substr(0, bundleUrl.lastIndexOf('/'))
			}
			return bundleUrl + url
		} else {
			var webUrl = new URL(bundleUrl).origin + "/web/?page=/dist/web" + encodeURI(url)
			console.log('webUrl=' + webUrl)
			return webUrl 
		}
	},
	img(url){
		var bundleUrl = weex.config.bundleUrl
		return new URL(bundleUrl).hostname + "url"
	}
}