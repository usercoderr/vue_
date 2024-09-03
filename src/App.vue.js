import { RouterView } from 'vue-router';
import AppHeader from "@/components/AppHeader.vue";
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { useUserStore } from "@/stores/auth";
import { onMounted, ref } from "vue";
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const userStore = useUserStore();
const isLoading = ref(true);
onMounted(() => {
    onAuthStateChanged(getAuth(), (user) => {
        if (user) {
            userStore.userId = user.uid;
        }
        else {
            userStore.userId = '';
        }
        isLoading.value = false;
    });
});
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
if (__VLS_ctx.isLoading) {
    const __VLS_0 = __VLS_resolvedLocalAndGlobalComponents.AppProgress;
    /** @type { [typeof __VLS_components.AppProgress, typeof __VLS_components.appProgress, ] } */
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({}));
    const __VLS_2 = __VLS_1({}, ...__VLS_functionalComponentArgsRest(__VLS_1));
}
else {
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("container") }, });
    // @ts-ignore
    [AppHeader,];
    // @ts-ignore
    const __VLS_6 = __VLS_asFunctionalComponent(AppHeader, new AppHeader({}));
    const __VLS_7 = __VLS_6({}, ...__VLS_functionalComponentArgsRest(__VLS_6));
}
__VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("content") }, });
const __VLS_11 = __VLS_resolvedLocalAndGlobalComponents.RouterView;
/** @type { [typeof __VLS_components.RouterView, ] } */
// @ts-ignore
const __VLS_12 = __VLS_asFunctionalComponent(__VLS_11, new __VLS_11({}));
const __VLS_13 = __VLS_12({}, ...__VLS_functionalComponentArgsRest(__VLS_12));
__VLS_styleScopedClasses['container'];
__VLS_styleScopedClasses['content'];
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
            RouterView: RouterView,
            AppHeader: AppHeader,
            isLoading: isLoading,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
});
;
