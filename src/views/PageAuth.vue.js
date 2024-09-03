import { computed, ref } from "vue";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { useRouter } from "vue-router";
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const router = useRouter();
const email = ref('');
const password = ref('');
const isLogin = ref(true);
const isLoading = ref(false);
const toggleAuth = () => {
    isLogin.value = !isLogin.value;
};
const subTitleText = computed(() => {
    return isLogin.value ? 'Еще нет аккаунта ?' : "Уже есть аккаунт?";
});
const linkAccountText = computed(() => {
    return isLogin.value ? 'Создайте сейчас ?' : "Войти в аккаунт!";
});
const submitBtnText = computed(() => {
    return isLogin.value ? 'Login with' : "Continue with";
});
const loginText = computed(() => {
    return isLogin.value ? 'Login' : "Sign Up";
});
const signIn = async () => {
    isLoading.value = true;
    try {
        await signInWithEmailAndPassword(getAuth(), email.value, password.value);
        await router.push('/');
    }
    catch (e) {
        if (e instanceof Error) {
            console.log(e.message);
        }
    }
    finally {
        isLoading.value = false;
    }
};
const signUp = async () => {
    isLoading.value = true;
    try {
        await createUserWithEmailAndPassword(getAuth(), email.value, password.value);
        await router.push('/');
    }
    catch (e) {
        if (e instanceof Error) {
            console.log(e.message);
        }
    }
    finally {
        isLoading.value = false;
    }
};
const submitForm = () => {
    if (isLogin.value) {
        signIn();
    }
    else {
        signUp();
    }
};
const __VLS_fnComponent = (await import('vue')).defineComponent({});
;
let __VLS_functionalComponentProps;
const __VLS_ctxBase = {};
const __VLS_ctx = __VLS_ctxBase;
let __VLS_name;
const __VLS_localComponents = {
    ...{},
    ...{},
    ...__VLS_ctxBase,
};
let __VLS_components;
let __VLS_styleScopedClasses;
// CSS variable injection 
// CSS variable injection end 
let __VLS_resolvedLocalAndGlobalComponents;
__VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("container") }, });
__VLS_elementAsFunction(__VLS_intrinsicElements.h2, __VLS_intrinsicElements.h2)({});
(__VLS_ctx.loginText);
__VLS_elementAsFunction(__VLS_intrinsicElements.h4, __VLS_intrinsicElements.h4)({ ...{ class: ("my-2") }, });
(__VLS_ctx.subTitleText);
__VLS_elementAsFunction(__VLS_intrinsicElements.a, __VLS_intrinsicElements.a)({ ...{ onClick: (__VLS_ctx.toggleAuth) }, ...{ class: ("cursor-pointer") }, });
(__VLS_ctx.linkAccountText);
__VLS_elementAsFunction(__VLS_intrinsicElements.form, __VLS_intrinsicElements.form)({ ...{ onSubmit: (__VLS_ctx.submitForm) }, ...{ class: ("box") }, });
__VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("input") }, });
__VLS_elementAsFunction(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)({ for: ("email"), });
const __VLS_0 = __VLS_resolvedLocalAndGlobalComponents.AppInputtext;
/** @type { [typeof __VLS_components.AppInputtext, typeof __VLS_components.appInputtext, ] } */
// @ts-ignore
const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ id: ("email"), modelValue: ((__VLS_ctx.email)), ...{ class: ("w-full") }, type: ("email"), placeholder: ("E-Mail"), }));
const __VLS_2 = __VLS_1({ id: ("email"), modelValue: ((__VLS_ctx.email)), ...{ class: ("w-full") }, type: ("email"), placeholder: ("E-Mail"), }, ...__VLS_functionalComponentArgsRest(__VLS_1));
__VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("input") }, });
__VLS_elementAsFunction(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)({ for: ("password"), });
const __VLS_6 = __VLS_resolvedLocalAndGlobalComponents.AppInputtext;
/** @type { [typeof __VLS_components.AppInputtext, typeof __VLS_components.appInputtext, ] } */
// @ts-ignore
const __VLS_7 = __VLS_asFunctionalComponent(__VLS_6, new __VLS_6({ id: ("password"), modelValue: ((__VLS_ctx.password)), type: ("password"), ...{ class: ("w-full") }, placeholder: ("Password"), }));
const __VLS_8 = __VLS_7({ id: ("password"), modelValue: ((__VLS_ctx.password)), type: ("password"), ...{ class: ("w-full") }, placeholder: ("Password"), }, ...__VLS_functionalComponentArgsRest(__VLS_7));
__VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("google") }, });
const __VLS_12 = __VLS_resolvedLocalAndGlobalComponents.AppButton;
/** @type { [typeof __VLS_components.AppButton, typeof __VLS_components.appButton, typeof __VLS_components.AppButton, typeof __VLS_components.appButton, ] } */
// @ts-ignore
const __VLS_13 = __VLS_asFunctionalComponent(__VLS_12, new __VLS_12({ type: ("submit"), loading: ((__VLS_ctx.isLoading)), label: ((__VLS_ctx.loginText)), }));
const __VLS_14 = __VLS_13({ type: ("submit"), loading: ((__VLS_ctx.isLoading)), label: ((__VLS_ctx.loginText)), }, ...__VLS_functionalComponentArgsRest(__VLS_13));
__VLS_styleScopedClasses['container'];
__VLS_styleScopedClasses['my-2'];
__VLS_styleScopedClasses['cursor-pointer'];
__VLS_styleScopedClasses['box'];
__VLS_styleScopedClasses['input'];
__VLS_styleScopedClasses['w-full'];
__VLS_styleScopedClasses['input'];
__VLS_styleScopedClasses['w-full'];
__VLS_styleScopedClasses['google'];
var __VLS_slots;
var __VLS_inheritedAttrs;
const __VLS_refs = {};
const __VLS_templateResult = { slots: __VLS_slots,
    refs: $refs,
    attrs: {},
};
const __VLS_internalComponent = (await import('vue')).defineComponent({
    setup() {
        return {
            email: email,
            password: password,
            isLoading: isLoading,
            toggleAuth: toggleAuth,
            subTitleText: subTitleText,
            linkAccountText: linkAccountText,
            loginText: loginText,
            submitForm: submitForm,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
});
;
