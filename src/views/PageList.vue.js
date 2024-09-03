import { onMounted, ref } from "vue";
import { collection, deleteDoc, doc, getDocs, getFirestore, orderBy, query, where } from 'firebase/firestore';
import { useUserStore } from "@/stores/auth";
import { useConfirm } from "primevue/useconfirm";
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const userStore = useUserStore();
const db = getFirestore();
const confirm = useConfirm();
const interviews = ref([]);
const isLoading = ref(false);
const selectedFilterResult = ref('');
const submitFilter = async () => {
    isLoading.value = true;
    interviews.value = await getAllInterviews(true);
    isLoading.value = false;
};
const confirmRemoveInterview = async (id) => {
    confirm.require({
        message: "Want to delete?",
        header: 'Delete',
        icon: 'pi pi-info-circle',
        rejectLabel: "Cancel",
        acceptLabel: 'Delete',
        rejectClass: 'p-button-secondary p-button-outlined',
        acceptClass: 'p-button-danger',
        accept: async () => {
            isLoading.value = true;
            await deleteDoc(doc(db, `users/${userStore.userId}/interviews`, id));
            const listInterviews = await getAllInterviews();
            interviews.value = [...listInterviews];
            isLoading.value = false;
        }
    });
};
const getAllInterviews = async (isFilter) => {
    let getData;
    if (isFilter) {
        getData = query(collection(db, `users/${userStore.userId}/interviews`), orderBy('company'), where('result', '==', selectedFilterResult.value));
    }
    else {
        getData = query(collection(db, `users/${userStore.userId}/interviews`), orderBy('company'));
    }
    const listDocs = await getDocs(getData);
    return listDocs.docs.map((doc) => doc.data());
};
onMounted(async () => {
    interviews.value = await getAllInterviews();
    isLoading.value = false;
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
let __VLS_resolvedLocalAndGlobalComponents;
const __VLS_0 = __VLS_resolvedLocalAndGlobalComponents.AppDialog;
/** @type { [typeof __VLS_components.AppDialog, typeof __VLS_components.appDialog, ] } */
// @ts-ignore
const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({}));
const __VLS_2 = __VLS_1({}, ...__VLS_functionalComponentArgsRest(__VLS_1));
if (__VLS_ctx.isLoading) {
    const __VLS_6 = __VLS_resolvedLocalAndGlobalComponents.AppProgress;
    /** @type { [typeof __VLS_components.AppProgress, typeof __VLS_components.appProgress, ] } */
    // @ts-ignore
    const __VLS_7 = __VLS_asFunctionalComponent(__VLS_6, new __VLS_6({}));
    const __VLS_8 = __VLS_7({}, ...__VLS_functionalComponentArgsRest(__VLS_7));
}
else if (!__VLS_ctx.isLoading && !__VLS_ctx.interviews.length) {
    const __VLS_12 = __VLS_resolvedLocalAndGlobalComponents.AppMessage;
    /** @type { [typeof __VLS_components.AppMessage, typeof __VLS_components.appMessage, typeof __VLS_components.AppMessage, typeof __VLS_components.appMessage, ] } */
    // @ts-ignore
    const __VLS_13 = __VLS_asFunctionalComponent(__VLS_12, new __VLS_12({ ...{ class: ("mx-4") }, severity: ("info"), }));
    const __VLS_14 = __VLS_13({ ...{ class: ("mx-4") }, severity: ("info"), }, ...__VLS_functionalComponentArgsRest(__VLS_13));
    __VLS_nonNullable(__VLS_17.slots).default;
    const __VLS_17 = __VLS_pickFunctionalComponentCtx(__VLS_12, __VLS_14);
}
else {
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("mx-4") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.h2, __VLS_intrinsicElements.h2)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("flex align-items-center mb-5") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("flex align-items-center mr-3") }, });
    const __VLS_18 = __VLS_resolvedLocalAndGlobalComponents.AppRadio;
    /** @type { [typeof __VLS_components.AppRadio, typeof __VLS_components.appRadio, ] } */
    // @ts-ignore
    const __VLS_19 = __VLS_asFunctionalComponent(__VLS_18, new __VLS_18({ ...{ class: ("mr-1") }, modelValue: ((__VLS_ctx.selectedFilterResult)), inputId: ("interviewResult2"), name: ("result"), value: ("Refusal"), }));
    const __VLS_20 = __VLS_19({ ...{ class: ("mr-1") }, modelValue: ((__VLS_ctx.selectedFilterResult)), inputId: ("interviewResult2"), name: ("result"), value: ("Refusal"), }, ...__VLS_functionalComponentArgsRest(__VLS_19));
    __VLS_elementAsFunction(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)({ for: ("interviewResult2"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("flex align-items-center  mr-5") }, });
    const __VLS_24 = __VLS_resolvedLocalAndGlobalComponents.AppRadio;
    /** @type { [typeof __VLS_components.AppRadio, typeof __VLS_components.appRadio, ] } */
    // @ts-ignore
    const __VLS_25 = __VLS_asFunctionalComponent(__VLS_24, new __VLS_24({ ...{ class: ("mr-1") }, modelValue: ((__VLS_ctx.selectedFilterResult)), inputId: ("interviewResult2"), name: ("result"), value: ("Offer"), }));
    const __VLS_26 = __VLS_25({ ...{ class: ("mr-1") }, modelValue: ((__VLS_ctx.selectedFilterResult)), inputId: ("interviewResult2"), name: ("result"), value: ("Offer"), }, ...__VLS_functionalComponentArgsRest(__VLS_25));
    __VLS_elementAsFunction(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)({ for: ("interviewResult2"), });
    const __VLS_30 = __VLS_resolvedLocalAndGlobalComponents.AppButton;
    /** @type { [typeof __VLS_components.AppButton, typeof __VLS_components.appButton, ] } */
    // @ts-ignore
    const __VLS_31 = __VLS_asFunctionalComponent(__VLS_30, new __VLS_30({ ...{ 'onClick': {} }, ...{ class: ("mr-2") }, disabled: ((!__VLS_ctx.selectedFilterResult)), label: ("Apply"), }));
    const __VLS_32 = __VLS_31({ ...{ 'onClick': {} }, ...{ class: ("mr-2") }, disabled: ((!__VLS_ctx.selectedFilterResult)), label: ("Apply"), }, ...__VLS_functionalComponentArgsRest(__VLS_31));
    let __VLS_36;
    const __VLS_37 = {
        onClick: (__VLS_ctx.submitFilter)
    };
    let __VLS_33;
    let __VLS_34;
    const __VLS_35 = __VLS_pickFunctionalComponentCtx(__VLS_30, __VLS_32);
    const __VLS_38 = __VLS_resolvedLocalAndGlobalComponents.AppButton;
    /** @type { [typeof __VLS_components.AppButton, typeof __VLS_components.appButton, ] } */
    // @ts-ignore
    const __VLS_39 = __VLS_asFunctionalComponent(__VLS_38, new __VLS_38({ disabled: ((!__VLS_ctx.selectedFilterResult)), ...{ class: ("mr-2") }, label: ("Cancel"), severity: ("danger"), }));
    const __VLS_40 = __VLS_39({ disabled: ((!__VLS_ctx.selectedFilterResult)), ...{ class: ("mr-2") }, label: ("Cancel"), severity: ("danger"), }, ...__VLS_functionalComponentArgsRest(__VLS_39));
    const __VLS_44 = __VLS_resolvedLocalAndGlobalComponents.AppDatatable;
    /** @type { [typeof __VLS_components.AppDatatable, typeof __VLS_components.appDatatable, typeof __VLS_components.AppDatatable, typeof __VLS_components.appDatatable, ] } */
    // @ts-ignore
    const __VLS_45 = __VLS_asFunctionalComponent(__VLS_44, new __VLS_44({ value: ((__VLS_ctx.interviews)), }));
    const __VLS_46 = __VLS_45({ value: ((__VLS_ctx.interviews)), }, ...__VLS_functionalComponentArgsRest(__VLS_45));
    const __VLS_50 = __VLS_resolvedLocalAndGlobalComponents.AppColumn;
    /** @type { [typeof __VLS_components.AppColumn, typeof __VLS_components.appColumn, typeof __VLS_components.AppColumn, typeof __VLS_components.appColumn, ] } */
    // @ts-ignore
    const __VLS_51 = __VLS_asFunctionalComponent(__VLS_50, new __VLS_50({ field: ("company"), header: ("Company"), }));
    const __VLS_52 = __VLS_51({ field: ("company"), header: ("Company"), }, ...__VLS_functionalComponentArgsRest(__VLS_51));
    const __VLS_56 = __VLS_resolvedLocalAndGlobalComponents.AppColumn;
    /** @type { [typeof __VLS_components.AppColumn, typeof __VLS_components.appColumn, typeof __VLS_components.AppColumn, typeof __VLS_components.appColumn, ] } */
    // @ts-ignore
    const __VLS_57 = __VLS_asFunctionalComponent(__VLS_56, new __VLS_56({ field: ("hrName"), header: ("Hr Name"), }));
    const __VLS_58 = __VLS_57({ field: ("hrName"), header: ("Hr Name"), }, ...__VLS_functionalComponentArgsRest(__VLS_57));
    const __VLS_62 = __VLS_resolvedLocalAndGlobalComponents.AppColumn;
    /** @type { [typeof __VLS_components.AppColumn, typeof __VLS_components.appColumn, typeof __VLS_components.AppColumn, typeof __VLS_components.appColumn, ] } */
    // @ts-ignore
    const __VLS_63 = __VLS_asFunctionalComponent(__VLS_62, new __VLS_62({ field: ("vacancyLink"), header: ("Link"), }));
    const __VLS_64 = __VLS_63({ field: ("vacancyLink"), header: ("Link"), }, ...__VLS_functionalComponentArgsRest(__VLS_63));
    __VLS_elementAsFunction(__VLS_intrinsicElements.template, __VLS_intrinsicElements.template)({});
    {
        const { body: __VLS_thisSlot } = __VLS_nonNullable(__VLS_67.slots);
        const [slotProps] = __VLS_getSlotParams(__VLS_thisSlot);
        __VLS_elementAsFunction(__VLS_intrinsicElements.a, __VLS_intrinsicElements.a)({ href: ((slotProps.data.vacancyLink)), target: ("_blank"), });
    }
    const __VLS_67 = __VLS_pickFunctionalComponentCtx(__VLS_62, __VLS_64);
    const __VLS_68 = __VLS_resolvedLocalAndGlobalComponents.AppColumn;
    /** @type { [typeof __VLS_components.AppColumn, typeof __VLS_components.appColumn, typeof __VLS_components.AppColumn, typeof __VLS_components.appColumn, ] } */
    // @ts-ignore
    const __VLS_69 = __VLS_asFunctionalComponent(__VLS_68, new __VLS_68({ header: ("Contacts"), }));
    const __VLS_70 = __VLS_69({ header: ("Contacts"), }, ...__VLS_functionalComponentArgsRest(__VLS_69));
    __VLS_elementAsFunction(__VLS_intrinsicElements.template, __VLS_intrinsicElements.template)({});
    {
        const { body: __VLS_thisSlot } = __VLS_nonNullable(__VLS_73.slots);
        const [slotProps] = __VLS_getSlotParams(__VLS_thisSlot);
        if (slotProps.data.contactTelegram) {
            __VLS_elementAsFunction(__VLS_intrinsicElements.a, __VLS_intrinsicElements.a)({ ...{ class: ("mr-2") }, href: ((`https://t.me/${slotProps.data.contactTelegram}`)), target: ("_blank"), });
            __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("pi pi-telegram") }, });
        }
        if (slotProps.data.contactWhatsApp) {
            __VLS_elementAsFunction(__VLS_intrinsicElements.a, __VLS_intrinsicElements.a)({ ...{ class: ("mr-2") }, href: ((`https://wa.me/${slotProps.data.contactWhatsApp}`)), target: ("_blank"), });
            __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("pi pi-whatsapp") }, });
        }
        if (slotProps.data.contactPhone) {
            __VLS_elementAsFunction(__VLS_intrinsicElements.a, __VLS_intrinsicElements.a)({ href: ((`https://t.me/${slotProps.data.contactPhone}`)), target: ("_blank"), });
            __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("pi pi-phone") }, });
        }
    }
    const __VLS_73 = __VLS_pickFunctionalComponentCtx(__VLS_68, __VLS_70);
    const __VLS_74 = __VLS_resolvedLocalAndGlobalComponents.AppColumn;
    /** @type { [typeof __VLS_components.AppColumn, typeof __VLS_components.appColumn, typeof __VLS_components.AppColumn, typeof __VLS_components.appColumn, ] } */
    // @ts-ignore
    const __VLS_75 = __VLS_asFunctionalComponent(__VLS_74, new __VLS_74({ header: ("Stages"), }));
    const __VLS_76 = __VLS_75({ header: ("Stages"), }, ...__VLS_functionalComponentArgsRest(__VLS_75));
    __VLS_elementAsFunction(__VLS_intrinsicElements.template, __VLS_intrinsicElements.template)({});
    {
        const { body: __VLS_thisSlot } = __VLS_nonNullable(__VLS_79.slots);
        const [slotProps] = __VLS_getSlotParams(__VLS_thisSlot);
        if (!slotProps.data.stages) {
            __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
        }
        else {
            __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
            for (const [stage, index] of __VLS_getVForSourceType((slotProps.data.stages))) {
                const __VLS_80 = __VLS_resolvedLocalAndGlobalComponents.AppBadge;
                /** @type { [typeof __VLS_components.AppBadge, typeof __VLS_components.appBadge, ] } */
                // @ts-ignore
                const __VLS_81 = __VLS_asFunctionalComponent(__VLS_80, new __VLS_80({ ...{ class: ("mr-1") }, key: ((index)), value: ((index + 1)), rounded: (true), }));
                const __VLS_82 = __VLS_81({ ...{ class: ("mr-1") }, key: ((index)), value: ((index + 1)), rounded: (true), }, ...__VLS_functionalComponentArgsRest(__VLS_81));
                __VLS_directiveAsFunction(__VLS_ctx.vTooltip)(null, { ...__VLS_directiveBindingRestFields, value: (stage.name) }, null, null);
            }
        }
    }
    const __VLS_79 = __VLS_pickFunctionalComponentCtx(__VLS_74, __VLS_76);
    const __VLS_86 = __VLS_resolvedLocalAndGlobalComponents.AppColumn;
    /** @type { [typeof __VLS_components.AppColumn, typeof __VLS_components.appColumn, typeof __VLS_components.AppColumn, typeof __VLS_components.appColumn, ] } */
    // @ts-ignore
    const __VLS_87 = __VLS_asFunctionalComponent(__VLS_86, new __VLS_86({ header: ("Salary"), }));
    const __VLS_88 = __VLS_87({ header: ("Salary"), }, ...__VLS_functionalComponentArgsRest(__VLS_87));
    __VLS_elementAsFunction(__VLS_intrinsicElements.template, __VLS_intrinsicElements.template)({});
    {
        const { body: __VLS_thisSlot } = __VLS_nonNullable(__VLS_91.slots);
        const [slotProps] = __VLS_getSlotParams(__VLS_thisSlot);
        if (!slotProps.data.salaryFrom) {
            __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
        }
        else {
            __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
            (slotProps.data.salaryFrom);
            (slotProps.data.salaryTo);
        }
    }
    const __VLS_91 = __VLS_pickFunctionalComponentCtx(__VLS_86, __VLS_88);
    const __VLS_92 = __VLS_resolvedLocalAndGlobalComponents.AppColumn;
    /** @type { [typeof __VLS_components.AppColumn, typeof __VLS_components.appColumn, typeof __VLS_components.AppColumn, typeof __VLS_components.appColumn, ] } */
    // @ts-ignore
    const __VLS_93 = __VLS_asFunctionalComponent(__VLS_92, new __VLS_92({ header: ("Result"), }));
    const __VLS_94 = __VLS_93({ header: ("Result"), }, ...__VLS_functionalComponentArgsRest(__VLS_93));
    __VLS_elementAsFunction(__VLS_intrinsicElements.template, __VLS_intrinsicElements.template)({});
    {
        const { body: __VLS_thisSlot } = __VLS_nonNullable(__VLS_97.slots);
        const [slotProps] = __VLS_getSlotParams(__VLS_thisSlot);
        if (!slotProps.data.result) {
            __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
        }
        else {
            const __VLS_98 = __VLS_resolvedLocalAndGlobalComponents.AppBadge;
            /** @type { [typeof __VLS_components.AppBadge, typeof __VLS_components.appBadge, ] } */
            // @ts-ignore
            const __VLS_99 = __VLS_asFunctionalComponent(__VLS_98, new __VLS_98({ severity: ((slotProps.data.result === 'Offer' ? 'success' : 'danger')), value: ((slotProps.data.result === 'Offer' ? 'Offer' : 'Refusal')), }));
            const __VLS_100 = __VLS_99({ severity: ((slotProps.data.result === 'Offer' ? 'success' : 'danger')), value: ((slotProps.data.result === 'Offer' ? 'Offer' : 'Refusal')), }, ...__VLS_functionalComponentArgsRest(__VLS_99));
        }
    }
    const __VLS_97 = __VLS_pickFunctionalComponentCtx(__VLS_92, __VLS_94);
    const __VLS_104 = __VLS_resolvedLocalAndGlobalComponents.AppColumn;
    /** @type { [typeof __VLS_components.AppColumn, typeof __VLS_components.appColumn, typeof __VLS_components.AppColumn, typeof __VLS_components.appColumn, ] } */
    // @ts-ignore
    const __VLS_105 = __VLS_asFunctionalComponent(__VLS_104, new __VLS_104({}));
    const __VLS_106 = __VLS_105({}, ...__VLS_functionalComponentArgsRest(__VLS_105));
    __VLS_elementAsFunction(__VLS_intrinsicElements.template, __VLS_intrinsicElements.template)({});
    {
        const { body: __VLS_thisSlot } = __VLS_nonNullable(__VLS_109.slots);
        const [slotProps] = __VLS_getSlotParams(__VLS_thisSlot);
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("flex gap-2") }, });
        const __VLS_110 = __VLS_resolvedLocalAndGlobalComponents.RouterLink;
        /** @type { [typeof __VLS_components.RouterLink, typeof __VLS_components.routerLink, typeof __VLS_components.RouterLink, typeof __VLS_components.routerLink, ] } */
        // @ts-ignore
        const __VLS_111 = __VLS_asFunctionalComponent(__VLS_110, new __VLS_110({ to: ((`interview/${slotProps.data.id}`)), }));
        const __VLS_112 = __VLS_111({ to: ((`interview/${slotProps.data.id}`)), }, ...__VLS_functionalComponentArgsRest(__VLS_111));
        const __VLS_116 = __VLS_resolvedLocalAndGlobalComponents.AppButton;
        /** @type { [typeof __VLS_components.AppButton, typeof __VLS_components.appButton, ] } */
        // @ts-ignore
        const __VLS_117 = __VLS_asFunctionalComponent(__VLS_116, new __VLS_116({ icon: ("pi pi-pencil"), severity: ("info"), }));
        const __VLS_118 = __VLS_117({ icon: ("pi pi-pencil"), severity: ("info"), }, ...__VLS_functionalComponentArgsRest(__VLS_117));
        __VLS_nonNullable(__VLS_115.slots).default;
        const __VLS_115 = __VLS_pickFunctionalComponentCtx(__VLS_110, __VLS_112);
        const __VLS_122 = __VLS_resolvedLocalAndGlobalComponents.AppButton;
        /** @type { [typeof __VLS_components.AppButton, typeof __VLS_components.appButton, ] } */
        // @ts-ignore
        const __VLS_123 = __VLS_asFunctionalComponent(__VLS_122, new __VLS_122({ ...{ 'onClick': {} }, icon: ("pi pi-trash"), severity: ("danger"), }));
        const __VLS_124 = __VLS_123({ ...{ 'onClick': {} }, icon: ("pi pi-trash"), severity: ("danger"), }, ...__VLS_functionalComponentArgsRest(__VLS_123));
        let __VLS_128;
        const __VLS_129 = {
            onClick: (...[$event]) => {
                if (!(!((__VLS_ctx.isLoading))))
                    return;
                if (!(!((!__VLS_ctx.isLoading && !__VLS_ctx.interviews.length))))
                    return;
                __VLS_ctx.confirmRemoveInterview(slotProps.data.id);
            }
        };
        let __VLS_125;
        let __VLS_126;
        const __VLS_127 = __VLS_pickFunctionalComponentCtx(__VLS_122, __VLS_124);
    }
    const __VLS_109 = __VLS_pickFunctionalComponentCtx(__VLS_104, __VLS_106);
    __VLS_nonNullable(__VLS_49.slots).default;
    const __VLS_49 = __VLS_pickFunctionalComponentCtx(__VLS_44, __VLS_46);
}
__VLS_styleScopedClasses['mx-4'];
__VLS_styleScopedClasses['mx-4'];
__VLS_styleScopedClasses['flex'];
__VLS_styleScopedClasses['align-items-center'];
__VLS_styleScopedClasses['mb-5'];
__VLS_styleScopedClasses['flex'];
__VLS_styleScopedClasses['align-items-center'];
__VLS_styleScopedClasses['mr-3'];
__VLS_styleScopedClasses['mr-1'];
__VLS_styleScopedClasses['flex'];
__VLS_styleScopedClasses['align-items-center'];
__VLS_styleScopedClasses['mr-5'];
__VLS_styleScopedClasses['mr-1'];
__VLS_styleScopedClasses['mr-2'];
__VLS_styleScopedClasses['mr-2'];
__VLS_styleScopedClasses['mr-2'];
__VLS_styleScopedClasses['pi'];
__VLS_styleScopedClasses['pi-telegram'];
__VLS_styleScopedClasses['mr-2'];
__VLS_styleScopedClasses['pi'];
__VLS_styleScopedClasses['pi-whatsapp'];
__VLS_styleScopedClasses['pi'];
__VLS_styleScopedClasses['pi-phone'];
__VLS_styleScopedClasses['mr-1'];
__VLS_styleScopedClasses['flex'];
__VLS_styleScopedClasses['gap-2'];
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
            interviews: interviews,
            isLoading: isLoading,
            selectedFilterResult: selectedFilterResult,
            submitFilter: submitFilter,
            confirmRemoveInterview: confirmRemoveInterview,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
});
;
