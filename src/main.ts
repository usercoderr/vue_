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
import ConfirmationService from "primevue/confirmationservice";
import InputText from "primevue/inputtext";
import ProgressSpinner from 'primevue/progressspinner';
import DataTable from "primevue/datatable";
import Column from "primevue/column";
import ConfirmDialog from "primevue/confirmdialog";
import Message from "primevue/message";
import Card from "primevue/card";
import InputNumber from "primevue/inputnumber";
import Textarea from "primevue/textarea";
import DatePicker from "primevue/datepicker";
import RadioButton from "primevue/radiobutton";
import Badge from "primevue/badge";
import Tooltip from "primevue/tooltip";
import Chart from "primevue/chart";


initializeApp(firebaseConfig);
const app = createApp(App)

app.use(createPinia())
app.use(PrimeVue, {
    theme: {
        preset: Aura
    }
});
app.use(ConfirmationService)
app.directive('tooltip', Tooltip)
app.use(router)
app.component('app-menubar', Menubar)
app.component('app-progress', ProgressSpinner)
app.component('app-button', Button)
app.component('app-datatable', DataTable)
app.component('app-column', Column)
app.component('app-card', Card)
app.component('app-dialog', ConfirmDialog)
app.component('app-inputtext', InputText)
app.component('app-textarea', Textarea)
app.component('app-inputnumber', InputNumber)
app.component('app-message', Message)
app.component('app-calendar', DatePicker)
app.component('app-radio', RadioButton)
app.component('app-badge', Badge)
app.component('app-chart', Chart)

app.mount('#app')
