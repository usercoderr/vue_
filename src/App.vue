<script setup lang="ts">
import {RouterView} from 'vue-router'
import AppHeader from "@/components/AppHeader.vue";
import {getAuth, onAuthStateChanged} from 'firebase/auth'
import {useUserStore} from "@/stores/auth";
import {onMounted, ref} from "vue";

const userStore = useUserStore()
const isLoading = ref<boolean>(true)
onMounted(() => {
    onAuthStateChanged(getAuth(), (user) => {
        if (user) {
            userStore.userId = user.uid
        } else {
            userStore.userId = ''
        }
        isLoading.value = false
    })
})
</script>

<template>
    <div class="container">
        <app-header/>
    </div>
    <div class="content">
        <RouterView/>
    </div>
</template>
<style>
.container {
    width: 100%;
    padding: 20px;
}
</style>
