<script setup lang="ts">
import {ref} from "vue";
import * as perf_hooks from "perf_hooks";

const company = ref<string>('')
const description = ref<string>('')
const hrName = ref<string>('')
const contactTelegram = ref<string>('')
const contactWhatsapp = ref<string>('')
const contactPhone = ref<string>('')
</script>

<template>

    <div class="flex flex-column mx-4">
        <h2 class="mb-4"> New Interview</h2>
        <app-inputtext class="mb-3" v-model="company" placeholder="Company" type="text"/>
        <app-inputtext class="mb-3" v-model="description" placeholder="Description (link)" type="text"/>
        <app-inputtext class="mb-3" v-model="hrName" placeholder="Contact (name)" type="text"/>
        <app-inputtext class="mb-3" v-model="contactTelegram" placeholder="Telegram (hr)" type="text"/>
        <app-inputtext class="mb-3" v-model="contactWhatsapp" placeholder="Whats'app (hr)" type="text"/>
        <app-inputtext class="mb-3" v-model="contactPhone" placeholder="Phone number (hr)" type="text"/>
    </div>
</template>
<style scoped>

</style>
