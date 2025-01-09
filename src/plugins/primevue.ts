import type { App } from "vue";

import PrimeVue from "primevue/config";
import Aura from "@primevue/themes/aura";

export default function registerPrimeVue(app: App): App {
	app.use(PrimeVue, {
		theme: {
			preset: Aura,
		},
	});

	return app;
}
