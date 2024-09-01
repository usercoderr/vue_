import type {ComputedRef} from "vue";

export interface IMenuItem {
    label:string,
    icon: string,
    path: string,
    show:ComputedRef
}
