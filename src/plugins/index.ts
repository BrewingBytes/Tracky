import type { App } from "vue";
import registerPrimeVue from "@/plugins/primevue";
import router from "@/router";
import { createPinia } from "pinia";

export default function registerPlugins(app: App): App {
	app = registerPrimeVue(app);
	app.use(router);
	app.use(createPinia());

	return app;
}
