import {createApp} from 'vue'
import {createPinia} from 'pinia'
import App from "./App.vue";
import router from './router'
import PrimeVue from "primevue/config";
import Menubar from "primevue/menubar";
import './assets/main.css'
import 'primeicons/primeicons.css'
import 'primeflex/primeflex.css'
import {firebaseConfig} from "@/config/firebase";
import {initializeApp} from "firebase/app";
import Aura from '@primevue/themes/aura';
import Button from "primevue/button";
import InputText from "primevue/inputtext";
import ProgressSpinner from 'primevue/progressspinner';


initializeApp(firebaseConfig);
const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(PrimeVue, {
    theme: {
        preset: Aura
    }
});
app.component('app-menubar', Menubar)
app.component('app-progress', ProgressSpinner)
app.component('app-button', Button)
app.component('app-inputtext', InputText)

app.mount('#app')
