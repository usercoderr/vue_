<script setup lang="ts">

import {computed, ref} from "vue";
import type {IMenuItem} from "@/interfaces";
import {useUserStore} from "@/stores/auth";
import {getAuth, signOut} from "firebase/auth";
import router from "@/router";

const userStore = useUserStore()
const items = ref<IMenuItem[]>([
    {
        label: 'Authorization',
        icon: 'pi pi-user',
        path: '/auth',
        show: computed((): boolean => !userStore.userId)
    },
    {
        label: 'Add',
        icon: 'pi pi-plus',
        path: '/',
        show: computed((): boolean => !!userStore.userId)
    },
    {
        label: 'List',
        icon: 'pi pi-list',
        path: '/list',
        show: computed((): boolean => !!userStore.userId)

    },
    {
        label: 'Statistic',
        icon: 'pi pi-chart-pie',
        path: '/statistic',
        show: computed((): boolean => !!userStore.userId)
    },

])

const signOutMethod = async (): Promise<void> => {
    await signOut(getAuth())
   await router.push('/auth')
}
</script>
<template>
    <app-menubar :model="items" class="menu">
        <template #item="{item, props}">
            <template v-if="item.show">
                <router-link :to="item.path" class="flex align-items-center mr-4" v-bind="props.action">
                    <span :class="item.icon" class="p-menuitem-icon"></span>
                    <span class="ml-2">{{ item.label }}</span>
                </router-link>
            </template>
        </template>
        <template #end>
            <span v-cloak
                  v-if="userStore.userId"
                  @click="signOutMethod"
                  class="flex align-items-center cursor-pointer"
            >
                <span class="pi pi-sign-out p-menuitem-icon"/>
                <span class="ml-2">Sign Out</span>

            </span>
        </template>
    </app-menubar>
</template>
<style scoped>
.menu {
    background: #67c2c2;
    padding: 30px 20px;
}
</style>
