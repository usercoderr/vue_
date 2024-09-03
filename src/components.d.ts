import DatePicker from "primevue/datepicker";

declare module 'vue' {
    export interface GlobalComponents {
        'app-calendar': typeof DatePicker
    }
}
