<script setup lang="ts">
import {computed, ref} from "vue";
import {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword} from 'firebase/auth'
import {useRouter} from "vue-router";
import {useToast} from "primevue/usetoast";

const toast = useToast();
const router = useRouter()
const email = ref<string>('')
const password = ref<string>('')
const isLogin = ref<boolean>(true)
const isLoading = ref<boolean>(false)
const toggleAuth = () => {
    isLogin.value = !isLogin.value
}


const subTitleText = computed<string>(() => {
    return isLogin.value ? 'Еще нет аккаунта ?' : "Уже есть аккаунт?"
})
const linkAccountText = computed<string>(() => {
    return isLogin.value ? 'Создайте сейчас ?' : "Войти в аккаунт!"
})

const loginText = computed<string>(() => {
    return isLogin.value ? 'Login' : "Sign Up"
})
const signIn = async (): Promise<void> => {
    isLoading.value = true
    try {
        await signInWithEmailAndPassword(getAuth(), email.value, password.value)
        await router.push('/')
    } catch (e: unknown) {
        if (e instanceof Error) {
            console.log(e.message)
        }
    } finally {
        isLoading.value = false
    }
}
const signUp = async (): Promise<void> => {
    isLoading.value = true
    try {
        await createUserWithEmailAndPassword(getAuth(), email.value, password.value)
        toast.add({
            severity: 'success',
            summary: 'Success Message',
            detail: 'Congratulations!!!',
            group: 'br',
            life: 3000
        });
        setTimeout(async () => {
            await router.push('/')
        }, 1600)
    } catch (e: unknown) {
        if (e instanceof Error) {
            console.log(e.message)
        }
    } finally {
        isLoading.value = false
    }
}
const submitForm = (): void => {
    if (isLogin.value) {
        signIn()
    } else {
        signUp()
    }
}
</script>


<template>
    <div class="container">
        <h2>{{ loginText }}</h2>
        <app-toast position="bottom-right" group="br"/>
        <h4 class="my-2">{{ subTitleText }}</h4>
        <a class="cursor-pointer" @click="toggleAuth">{{ linkAccountText }}</a>
        <form @submit.prevent="submitForm" class="box">
            <div class="input">

                <label for="email">E-Mail:</label>
                <app-inputtext id="email" v-model="email" class="w-full" type="email" placeholder="E-Mail"/>
            </div>
            <div class="input">

                <label for="password">Password:</label>
                <app-inputtext id="password" v-model="password" type="password" class="w-full" placeholder="Password"/>
            </div>
            <div class="google">
                <app-button
                        type="submit"
                        :loading="isLoading"
                        :label="loginText">
                </app-button>
            </div>
        </form>

    </div>
</template>
<style scoped>
.container {
    display: flex;
    width: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 30px 20px;
}

.icon-google {
    font-size: 20px;
    background: linear-gradient(90deg, #4285F4 25%, #34A853 50%, #FBBC05 75%, #EA4335 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    display: inline-block;
}

.box {
    display: flex;
    margin-top: 20px;
    padding: 12px;
    flex-direction: column;
    align-items: start;
    width: 30%;
}

.input {
    width: 100%;
    flex-direction: column;
    display: flex;
    margin: 6px 0;
}

.google {
    margin-top: 12px;
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;
}
</style>
