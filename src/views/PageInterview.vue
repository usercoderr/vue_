<script setup lang="ts">
</script>

<template>
    <div class="mx-4">
        <app-card>
            <template #title>
                Interview in
            </template>
            <template #content>
                <div class="flex flex-column gap-2">
                    <label for="company">Company</label>
                    <app-inputtext class=" mb-3" id="company"/>
                </div>
                <div class="flex flex-column gap-2">
                    <label for="vacancyLink">Description (Link) </label>
                    <app-inputtext class=" mb-3" id="vacancyLink"/>
                </div>
                <div class="flex flex-column gap-2">
                    <label for="hrName">Hr name</label>
                    <app-inputtext class=" mb-3" id="hrName"/>
                </div>
                <div class="flex flex-column gap-2">
                    <label for="contactTelegram">Telegram</label>
                    <app-inputtext class=" mb-3" id="contactTelegram"/>
                </div>
                <div class="flex flex-column gap-2">
                    <label for="contactWhatsapp">Whats'app</label>
                    <app-inputtext class=" mb-3" id="contactWhatsapp"/>
                </div>
                <div class="flex flex-column gap-2">
                    <label for="contactPhone">Phone Number</label>
                    <app-inputtext class=" mb-3" id="contactPhone"/>
                </div>
                <div class="flex flex-wrap justify-content-start gap-3 p-fluid mb-3">
                    <div>
                        <app-inputnumber inputId="salaryFrom" placeholder="Salary From"/>
                    </div>
                    <div>
                        <app-inputnumber inputId="salaryTo" placeholder="SalaryTo"/>
                    </div>
                </div>
                <app-button
                        label="Add Stage"
                        class="mb-3"
                        severity="info"
                        icon="pi pi-plus"/>
                <div class="flex flex-column mb-3 border-1 p-4 border-dashed">

                    <div class="flex flex-column gap-2">
                        <label for="stageName">Stage name</label>
                        <app-inputtext class="mb-3" id="stageName"/>
                    </div>
                    <div class="flex flex-column gap-2">
                        <label for="stageCalendar">Date of Stage</label>
                        <app-calendar class="" dataformatas="dd.mm.yy" id="stageCalendar"/>
                    </div>
                    <div class="flex flex-column gap-2">
                        <label for="stageComment">Comment</label>
                        <app-textarea class="mb-3" dataformatas="dd.mm.yy" id="stageComment"/>
                    </div>
                    <app-button severity="danger" label="Delete Stage"/>
                </div>
                <div class="flex  gap-3 mb-3">
                    <div class="flex align-items-center">
                        <app-radio
                                inputId="interviewResult1"
                                name="result"
                                value="Refusal"
                        />
                        <label for="interviewResult1">Refusal</label>
                    </div>
                    <div class="flex align-items-center">
                        <app-radio
                                inputId="interviewResult2"
                                name="result"
                                value="Offer"
                        />
                        <label for="interviewResult2">Offer</label>
                    </div>
                </div>
                <app-button icon="pi pi-save" label="Save"/>
            </template>
        </app-card>
    </div>
</template>
