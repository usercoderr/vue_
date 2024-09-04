<script setup lang="ts">
import {computed, ref} from "vue";
import type {IInterview} from "@/interfaces";
import {v4 as uuidv4} from 'uuid'
import {getAuth} from "firebase/auth";
import {getFirestore, doc, setDoc} from "firebase/firestore";
import {useRouter} from "vue-router";
import {useToast} from "primevue/usetoast";

const toast = useToast();
const router = useRouter()
const db = getFirestore()
const company = ref<string>('')
const description = ref<string>('')
const hrName = ref<string>('')
const contactTelegram = ref<string>('')
const contactWhatsapp = ref<string>('')
const contactPhone = ref<string>('')
const loading = ref<boolean>(false)
const addNewInterview = async (): Promise<void> => {
    loading.value = true
    const payload: IInterview = {
        id: uuidv4(),
        company: company.value,
        vacancyLink: description.value,
        hrName: hrName.value,
        contactTelegram: contactTelegram.value,
        contactWhatsApp: contactWhatsapp.value,
        contactPhone: contactPhone.value,
        cratedAt: new Date()
    }
    const userId = getAuth().currentUser?.uid

    if (userId) {
        await setDoc(doc(db, `users/${userId}/interviews`, payload.id), payload).then(() => {
            toast.add({
                severity: 'success',
                summary: 'Success Message',
                detail: 'Success!!!',
                group: 'br',
                life: 3000
            });
            setTimeout(() => {

                router.push('/list')
            }, 1200)
        })
    }
}
const disabledSaveBtn = computed<boolean>(() => {
    return !(company.value && description.value && hrName.value)
})
</script>

<template>
    <app-toast position="bottom-right" group="br"/>
    <div class="flex flex-column mx-4">
        <h2 class="mb-4"> New Interview</h2>
        <app-inputtext class="mb-3" v-model="company" placeholder="Company" type="text"/>
        <app-inputtext class="mb-3" v-model="description" placeholder="Description (link)" type="text"/>
        <app-inputtext class="mb-3" v-model="hrName" placeholder="HR (name)" type="text"/>
        <app-inputtext class="mb-3" v-model="contactTelegram" placeholder="Telegram (hr)" type="text"/>
        <app-inputtext class="mb-3" v-model="contactWhatsapp" placeholder="Whats'app (hr)" type="text"/>
        <app-inputtext class="mb-3" v-model="contactPhone" placeholder="Phone number (hr)" type="text"/>
        <app-button
                @click="addNewInterview"
                label="Create"
                :disabled="disabledSaveBtn"
                :loading="loading"
        />
    </div>
</template>
<style scoped>

</style>
