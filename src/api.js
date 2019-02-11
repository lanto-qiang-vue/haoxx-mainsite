import Vue from "vue"

Vue.directive('style', {
	bind: function (el, binding) {
		el.style.cssText =binding.value.style
	}
})
