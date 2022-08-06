import { createApp, defineComponent } from 'vue'

if (process.env.NODE_ENV === "development") {
   globalThis.__VUE_OPTIONS_API__ = true
   globalThis.__VUE_PROD_DEVTOOLS__ = true
} else {
   globalThis.__VUE_OPTIONS_API__ = false
   globalThis.__VUE_PROD_DEVTOOLS__ = false
}


const App = defineComponent({

	render() {
		return <div> hello word!111</div>
	}
})

createApp(App).mount("#app")

if (module.hot) {
    module.hot.accept();
}