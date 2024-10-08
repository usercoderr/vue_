<script setup lang="ts">
import {onMounted, ref} from "vue";
import {
    collection, deleteDoc, doc,
    getDocs, getFirestore, orderBy,
    query, where
} from 'firebase/firestore'
import type {IInterview} from "@/interfaces";
import {useUserStore} from "@/stores/auth";
import {useConfirm} from "primevue/useconfirm";

const userStore = useUserStore()
const db = getFirestore()
const confirm = useConfirm()


const interviews = ref<IInterview[]>([])
const isLoading = ref<boolean>(false)
const selectedFilterResult = ref<string>('')

const cancelFilter = async (): Promise<void> => {
    selectedFilterResult.value = ''
    isLoading.value = true
    interviews.value = await getAllInterviews(false)
    isLoading.value = false
}
const submitFilter = async (): Promise<void> => {
    isLoading.value = true
    interviews.value = await getAllInterviews(true)
    isLoading.value = false
}

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
const getAllInterviews = async <T extends IInterview>(isFilter?: boolean): Promise<T[]> => {
    let getData;
    if (isFilter) {
        getData = query(
            collection(db, `users/${userStore.userId}/interviews`),
            orderBy('company'),
            where('result', '==', selectedFilterResult.value)
        )
    } else {
        getData = query(
            collection(db, `users/${userStore.userId}/interviews`),
            orderBy('company')
        )
    }
    const listDocs = await getDocs(getData)
    return listDocs.docs.map((doc) => doc.data() as T)
}

onMounted(async () => {
    isLoading.value = true
    interviews.value = await getAllInterviews()
    isLoading.value = false
})
</script>

<template>
    <app-dialog/>
    <div class="mx-4">
        <h2>List</h2>
        <div class="flex align-items-center mb-5">
            <div class="flex align-items-center mr-3">
                <app-radio
                        class="mr-1"
                        v-model="selectedFilterResult"
                        inputId="interviewResult2"
                        name="result"
                        value="Refusal"
                />
                <label for="interviewResult2">Refusal</label>
            </div>
            <div class="flex align-items-center  mr-5">
                <app-radio
                        class="mr-1"
                        v-model="selectedFilterResult"
                        inputId="interviewResult2"
                        name="result"
                        value="Offer"
                />
                <label for="interviewResult2">Offer</label>
            </div>
            <app-button
                    class="mr-2"
                    :disabled="!selectedFilterResult"
                    @click="submitFilter"
                    label="Apply"
            />
            <app-button
                    @click="cancelFilter"
                    :disabled="!selectedFilterResult"
                    class="mr-2"
                    label="Cancel"
                    severity="danger"
            />
        </div>
        <app-progress class="flex justify-content-center align-items-center" v-if="isLoading"/>

        <app-datatable v-else :value="interviews">
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
                    <app-badge
                            class="mr-1 badge-no-bg"
                            v-if="slotProps.data.contactTelegram"
                            :value="1"
                            v-tooltip.top="'Telegram: ' + slotProps.data.contactTelegram"
                    >
                        <a
                                :href="`https://t.me/${slotProps.data.contactTelegram}`"
                                target="_blank"
                        >
                            <span class="pi pi-telegram"></span>
                        </a>
                    </app-badge>

                    <app-badge
                            class="mr-1 badge-no-bg"
                            v-if="slotProps.data.contactWhatsApp"
                            rounded
                            :value="2"
                            v-tooltip.top="'WhatsApp: ' + slotProps.data.contactWhatsApp"
                    >
                        <a
                                :href="`https://wa.me/${slotProps.data.contactWhatsApp}`"
                                target="_blank"
                        >
                            <span class="pi pi-whatsapp"></span>
                        </a>
                    </app-badge>

                    <app-badge
                            class="mr-1 badge-no-bg"
                            v-if="slotProps.data.contactPhone"
                            rounded
                            :value="3"
                            v-tooltip.top="'Phone: ' + slotProps.data.contactPhone"
                    >
                        <a
                                :href="`tel:${slotProps.data.contactPhone}`"
                                target="_blank"
                        >
                            <span class="pi pi-phone"></span>
                        </a>
                    </app-badge>
                </template>
            </app-column>
            <app-column header="Stages">
                <template #body="slotProps">
                    <span v-if="!slotProps.data.stages">Not Specified</span>
                    <div v-else>
                        <app-badge
                                class="mr-1"
                                v-for="(stage, index) in slotProps.data.stages"
                                :key="index"
                                :value="index + 1"
                                rounded
                                v-tooltip.top="stage.name"
                        />
                    </div>

                </template>
            </app-column>
            <app-column header="Salary">
                <template #body="slotProps">
                    <span v-if="!slotProps.data.salaryFrom">Not Specified</span>
                    <span v-else>
                       {{ slotProps.data.salaryFrom }} - {{ slotProps.data.salaryTo }}
                    </span>
                </template>
            </app-column>
            <app-column header="Result">
                <template #body="slotProps">
                    <span v-if="!slotProps.data.result">Not Specified</span>
                    <template v-else>
                        <app-badge
                                :severity="slotProps.data.result === 'Offer' ? 'success':'danger'"
                                :value="slotProps.data.result === 'Offer' ? 'Offer':'Refusal'"

                        />

                    </template>
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
<style scoped>
.badge-no-bg {
    background-color: transparent !important; /* Remove background color */
    border: none; /* Remove border if needed */
    box-shadow: none; /* Remove any shadows if present */
}
</style>
