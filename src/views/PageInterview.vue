<script setup lang="ts">
import {
    getFirestore,
    doc, getDoc,
    updateDoc, Timestamp
} from 'firebase/firestore'
import {useUserStore} from "@/stores/auth";
import {onMounted, ref} from "vue";
import {useRoute} from "vue-router";
import type {IInterview, IStage} from "@/interfaces";

const db = getFirestore()
const userStore = useUserStore()
const route = useRoute()
const interview = ref<IInterview>()
const isLoading = ref<boolean>(true)
const docref = doc(db, `users/${userStore.userId}/interviews`, route.params.id as string)

const getData = async (): Promise<void> => {
    isLoading.value = true
    const docSnap = await getDoc(docref)

    if (docSnap.exists()) {
        const interviewData = docSnap.data() as IInterview

        if (interviewData.stages && interviewData.stages.length) {
            interviewData.stages = interviewData.stages.map((stage: IStage) => {
                if (stage.date && stage.date instanceof Timestamp) {
                    return {
                        ...stage,
                        date: stage.date.toDate()
                    }
                }
                return stage
            })
        }
        interview.value = interviewData
    }
    isLoading.value = false
}
console.log(interview)
const saveInterview = async (): Promise<void> => {
    isLoading.value = true

    await updateDoc(docref, {...interview.value})
    await getData()
    isLoading.value = false
}
onMounted(async () => await getData())
const addStage = () => {
    if (interview.value) {
        if (!interview.value?.stages) {
            interview.value.stages = []
        }
        interview.value?.stages.push({name: '', date: null, comment: ''})
    }
}
const removeStage = (index: number) => {
    if (interview.value) {
        if (interview.value?.stages) {
            interview.value?.stages.splice(index, 1)
        }
    }
}


</script>

<template>
    <div class="mx-4">
        <app-progress v-if="isLoading"/>
        <div v-else-if="interview?.id && !isLoading">
            <app-card>
                <template #title>
                    Interview in {{ interview?.company }}
                </template>
                <template #content>
                    <div class="flex flex-column gap-2">
                        <label for="company">Company</label>
                        <app-inputtext class=" mb-3" v-model="interview.company" id="company"/>
                    </div>
                    <div class="flex flex-column gap-2">
                        <label for="vacancyLink">Description (Link) </label>
                        <app-inputtext class=" mb-3" v-model="interview.vacancyLink" id="vacancyLink"/>
                    </div>
                    <div class="flex flex-column gap-2">
                        <label for="hrName">Hr name</label>
                        <app-inputtext class=" mb-3" v-model="interview.hrName" id="hrName"/>
                    </div>
                    <div class="flex flex-column gap-2">
                        <label for="contactTelegram">Telegram</label>
                        <app-inputtext class=" mb-3" v-model="interview.contactTelegram" id="contactTelegram"/>
                    </div>
                    <div class="flex flex-column gap-2">
                        <label for="contactWhatsApp">Whats'app</label>
                        <app-inputtext class=" mb-3" v-model="interview.contactWhatsApp" id="contactWhatsApp"/>
                    </div>
                    <div class="flex flex-column gap-2">
                        <label for="contactPhone">Phone Number</label>
                        <app-inputtext class=" mb-3" v-model="interview.contactPhone" id="contactPhone"/>
                    </div>
                    <div class="flex flex-wrap justify-content-start gap-3 p-fluid mb-3">
                        <div>
                            <app-inputnumber
                                    v-model="interview.salaryFrom"
                                    inputId="salaryFrom"
                                    placeholder="Salary From"/>
                        </div>
                        <div>
                            <app-inputnumber
                                    inputId="salaryTo"
                                    v-model="interview.salaryTo"
                                    placeholder="SalaryTo"/>
                        </div>
                    </div>
                    <app-button
                            @click="addStage"
                            label="Add Stage"
                            class="mb-3"
                            severity="info"
                            icon="pi pi-plus"/>
                    <template v-if="interview.stages">
                        <div
                                v-for="(stage, index) in interview.stages"
                                :key="index"
                                class="flex flex-column mb-3 border-1 p-4 border-dashed">
                            <div class="flex flex-column gap-2">
                                <label :for="`stageName-${index}`">Stage name</label>
                                <app-inputtext v-model="stage.name" class="mb-3" :id="`stageName-${index}`"/>
                            </div>
                            <div class="flex flex-column gap-2">
                                <label :for="`stageCalendar-${index}`">Date of Stage</label>
                                <app-calendar
                                        v-model="stage.date"
                                        dataformatas="DD.MM.YYYY"
                                        :id="`stageCalendar-${index}`"/>
                            </div>
                            <div class="flex flex-column gap-2">
                                <label
                                        :for="`stageComment-${index}`">Comment</label>
                                <app-textarea
                                        class="mb-3"
                                        v-model="stage.description"
                                        dataformatas="dd.mm.yy"
                                        :id="`stageComment-${index}`"/>
                            </div>
                            <app-button severity="danger" @click="removeStage(index)" label="Delete Stage"/>
                        </div>
                    </template>
                    <div class="flex  gap-3 mb-3">
                        <div class="flex align-items-center">
                            <app-radio
                                    class="mr-1"
                                    v-model="interview.result"
                                    inputId="interviewResult1"
                                    name="result"
                                    value="Refusal"
                            />
                            <label for="interviewResult1">Refusal</label>
                        </div>
                        <div class="flex align-items-center">
                            <app-radio
                                    class="mr-1"
                                    v-model="interview.result"
                                    inputId="interviewResult2"
                                    name="result"
                                    value="Offer"
                            />
                            <label for="interviewResult2">Offer</label>
                        </div>
                    </div>
                    <app-button icon="pi pi-save" @click="saveInterview" label="Save"/>
                </template>
            </app-card>
        </div>

    </div>
</template>
