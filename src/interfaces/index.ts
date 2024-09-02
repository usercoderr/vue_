import type {ComputedRef} from "vue";

export interface IMenuItem {
    label: string,
    icon: string,
    path: string,
    show: ComputedRef
}

export interface IInterview {
    id: string,
    company: string,
    vacancyLink: string,
    hrName: string,
    contactTelegram?: string,
    contactWhatsApp?: string,
    contactPhone?: string,
    cratedAt: Date

}
