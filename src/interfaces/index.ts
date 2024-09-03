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
    cratedAt: Date,
    salaryFrom?:number,
    salaryTo?:number,
    stages?:IStage[]
    result?: 'Refusal' | 'Offer'

}
export interface IStage{
    name:string
    date:null | Date
    comment:string
}
