// 引入插件组件
import FullScreenLoading from './lib/fullSreenLoading.vue'

// 定义插件对象
const LoadPlugin = {
	// install 方法 
	install (Vue, options) {
		// 通过vue.extend构造子类 参数为引入的组件
		const loadingSubClass = Vue.extend(FullScreenLoading)
		// 实例化loadingSubClass , 挂载到 HtmlElement实例上
		const Profile = new loadingSubClass({
			el: document.createElement('div')
		})
		// 插入到body中, FullScreenLoading.vue中的template模板内容将会替换挂载的元素, Profile.el中的内容最终为模板的内容
		document.body.appendChild(Profile.$el)
		// 判断是否有参数 替换掉模板中的参数
		if (options) {
			if (options.tips) {
				Profile.tips = options.tips
			}
		}
		// 添加实例方法 挂在到vue原型
		Vue.prototype.$fullScreenLoading = {
			show (tips) {
				Profile.show = true
				if (tips) {
					Profile.tips = tips
				}
			},
			hide () {
				Profile.show = false
			}
		}
	}
}
// 到处对象
export default LoadPlugin