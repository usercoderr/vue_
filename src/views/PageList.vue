<script setup lang="ts">
import {
    getFirestore,
    collection,
    query,
    orderBy,
    getDocs,
    deleteDoc,
    doc
} from 'firebase/firestore'
import {onMounted, ref} from "vue";
import type {IInterview} from "@/interfaces";
import {useUserStore} from "@/stores/auth";
import {useConfirm} from "primevue/useconfirm";

const userStore = useUserStore()
const db = getFirestore()
const confirm = useConfirm()


const interviews = ref<IInterview[]>([])
const isLoading = ref<boolean>(false)

const confirmRemoveInterview = async (id: string): Promise<void> => {
    confirm.require({
        message: "Want to delete?",
        header: 'Delete',
        icon: 'pi pi-info-circle',
        rejectLabel: "Cancel",
        acceptLabel: 'Delete',
        rejectClass: 'p-button-secondary p-button-outlined',
        acceptClass: 'p-button-danger',
        accept: async () => {
            isLoading.value = true
            await deleteDoc(doc(db, `users/${userStore.userId}/interviews`, id))
            const listInterviews: Array<IInterview> = await getAllInterviews()
            interviews.value = [...listInterviews]
            isLoading.value = false
        }
    })
}
const getAllInterviews = async <T extends IInterview>(): Promise<T[]> => {
    const getData = query(
        collection(db, `users/${userStore.userId}/interviews`),
        orderBy('company')
    )
    const listDocs = await getDocs(getData)
    return listDocs.docs.map((doc) => doc.data() as T)
}

onMounted(async () => {
    const listInterviews: Array<IInterview> = await getAllInterviews()
    interviews.value = [...listInterviews]
    isLoading.value = false
})
</script>

<template>
    <app-dialog/>
    <app-progress v-if="isLoading"/>
    <app-message class="mx-4" v-else-if="!isLoading && !interviews.length" severity="info">No Interviews</app-message>
    <div v-else class="mx-4">
        <h2>List</h2>
        <app-datatable :value="interviews">
            <app-column field="company" header="Company"></app-column>
            <app-column field="hrName" header="Hr Name"></app-column>
            <app-column field="vacancyLink" header="Link">
                <template #body="slotProps">
                    <a :href="slotProps.data.vacancyLink" target="_blank">
                        Link
                    </a>
                </template>
            </app-column>
            <app-column header="Contacts">
                <template #body="slotProps">

                    <a
                            class="mr-2"
                            v-if="slotProps.data.contactTelegram"
                            :href='`https://t.me/${slotProps.data.contactTelegram}`'
                            target="_blank">
                        <span class="pi pi-telegram"></span>
                    </a>
                    <a
                            class="mr-2"

                            v-if="slotProps.data.contactWhatsApp"
                            :href='`https://wa.me/${slotProps.data.contactWhatsApp}`'
                            target="_blank">
                        <span class="pi pi-whatsapp"></span>
                    </a>
                    <a
                            v-if="slotProps.data.contactPhone"
                            :href='`https://t.me/${slotProps.data.contactPhone}`'
                            target="_blank">
                        <span class="pi pi-phone"></span>
                    </a>

                </template>
            </app-column>
            <app-column>
                <template #body="slotProps">
                    <div class="flex gap-2">
                        <router-link :to="`interview/${slotProps.data.id}`">
                            <app-button icon="pi pi-pencil" severity="info"/>
                        </router-link>
                        <app-button icon="pi pi-trash" severity="danger"
                                    @click="confirmRemoveInterview(slotProps.data.id)"/>
                    </div>
                </template>
            </app-column>
        </app-datatable>
    </div>
</template>
