import { computed, ref } from "vue";
import { useUserStore } from "@/stores/auth";
import { getAuth, signOut } from "firebase/auth";
import router from "@/router";
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const userStore = useUserStore();
const items = ref([
    {
        label: 'Authorization',
        icon: 'pi pi-user',
        path: '/auth',
        show: computed(() => !userStore.userId)
    },
    {
        label: 'Add',
        icon: 'pi pi-plus',
        path: '/',
        show: computed(() => !!userStore.userId)
    },
    {
        label: 'List',
        icon: 'pi pi-list',
        path: '/list',
        show: computed(() => !!userStore.userId)
    },
    {
        label: 'Statistic',
        icon: 'pi pi-chart-pie',
        path: '/statistic',
        show: computed(() => !!userStore.userId)
    },
]);
const signOutMethod = async () => {
    await signOut(getAuth());
    await router.push('/auth');
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
const __VLS_0 = __VLS_resolvedLocalAndGlobalComponents.AppMenubar;
/** @type { [typeof __VLS_components.AppMenubar, typeof __VLS_components.appMenubar, typeof __VLS_components.AppMenubar, typeof __VLS_components.appMenubar, ] } */
// @ts-ignore
const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ model: ((__VLS_ctx.items)), ...{ class: ("menu") }, }));
const __VLS_2 = __VLS_1({ model: ((__VLS_ctx.items)), ...{ class: ("menu") }, }, ...__VLS_functionalComponentArgsRest(__VLS_1));
__VLS_elementAsFunction(__VLS_intrinsicElements.template, __VLS_intrinsicElements.template)({});
{
    const { item: __VLS_thisSlot } = __VLS_nonNullable(__VLS_5.slots);
    const [{ item, props }] = __VLS_getSlotParams(__VLS_thisSlot);
    if (item.show) {
        const __VLS_6 = __VLS_resolvedLocalAndGlobalComponents.RouterLink;
        /** @type { [typeof __VLS_components.RouterLink, typeof __VLS_components.routerLink, typeof __VLS_components.RouterLink, typeof __VLS_components.routerLink, ] } */
        // @ts-ignore
        const __VLS_7 = __VLS_asFunctionalComponent(__VLS_6, new __VLS_6({ to: ((item.path)), ...{ class: ("flex align-items-center mr-4") }, ...(props.action), }));
        const __VLS_8 = __VLS_7({ to: ((item.path)), ...{ class: ("flex align-items-center mr-4") }, ...(props.action), }, ...__VLS_functionalComponentArgsRest(__VLS_7));
        __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ((item.icon)) }, ...{ class: ("p-menuitem-icon") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("ml-2") }, });
        (item.label);
        __VLS_nonNullable(__VLS_11.slots).default;
        const __VLS_11 = __VLS_pickFunctionalComponentCtx(__VLS_6, __VLS_8);
    }
}
__VLS_elementAsFunction(__VLS_intrinsicElements.template, __VLS_intrinsicElements.template)({});
{
    const { end: __VLS_thisSlot } = __VLS_nonNullable(__VLS_5.slots);
    if (__VLS_ctx.userStore.userId) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ onClick: (__VLS_ctx.signOutMethod) }, ...{ class: ("flex align-items-center cursor-pointer") }, });
        __VLS_directiveAsFunction(__VLS_ctx.vCloak)(null, { ...__VLS_directiveBindingRestFields, undefined }, null, null);
        __VLS_elementAsFunction(__VLS_intrinsicElements.span)({ ...{ class: ("pi pi-sign-out p-menuitem-icon") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("ml-2") }, });
    }
}
const __VLS_5 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2);
__VLS_styleScopedClasses['menu'];
__VLS_styleScopedClasses['flex'];
__VLS_styleScopedClasses['align-items-center'];
__VLS_styleScopedClasses['mr-4'];
__VLS_styleScopedClasses['p-menuitem-icon'];
__VLS_styleScopedClasses['ml-2'];
__VLS_styleScopedClasses['flex'];
__VLS_styleScopedClasses['align-items-center'];
__VLS_styleScopedClasses['cursor-pointer'];
__VLS_styleScopedClasses['pi'];
__VLS_styleScopedClasses['pi-sign-out'];
__VLS_styleScopedClasses['p-menuitem-icon'];
__VLS_styleScopedClasses['ml-2'];
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
            userStore: userStore,
            items: items,
            signOutMethod: signOutMethod,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
});
;
