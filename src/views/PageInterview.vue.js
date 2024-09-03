import { getFirestore, doc, getDoc, updateDoc, Timestamp } from 'firebase/firestore';
import { useUserStore } from "@/stores/auth";
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const db = getFirestore();
const userStore = useUserStore();
const route = useRoute();
const interview = ref(null);
const isLoading = ref(true);
const docref = doc(db, `users/${userStore.userId}/interviews`, route.params.id);
const getData = async () => {
    isLoading.value = true;
    const docSnap = await getDoc(docref);
    if (docSnap.exists()) {
        const interviewData = docSnap.data();
        if (interviewData.stages && interviewData.stages.length) {
            interviewData.stages = interviewData.stages.map((stage) => {
                if (stage.date && stage.date instanceof Timestamp) {
                    return {
                        ...stage,
                        date: stage.date.toDate()
                    };
                }
                return stage;
            });
        }
        interview.value = interviewData;
    }
    isLoading.value = false;
};
console.log(interview);
const saveInterview = async () => {
    isLoading.value = true;
    await updateDoc(docref, { ...interview.value });
    await getData();
    isLoading.value = false;
};
onMounted(async () => await getData());
const addStage = () => {
    if (interview.value) {
        if (!interview.value.stages) {
            interview.value.stages = [];
        }
        interview.value?.stages.push({ name: '', date: null, comment: '' });
    }
};
const removeStage = (index) => {
    if (interview.value) {
        if (interview.value?.stages) {
            interview.value?.stages.splice(index, 1);
        }
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
let __VLS_resolvedLocalAndGlobalComponents;
__VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("mx-4") }, });
if (__VLS_ctx.isLoading) {
    const __VLS_0 = __VLS_resolvedLocalAndGlobalComponents.AppProgress;
    /** @type { [typeof __VLS_components.AppProgress, typeof __VLS_components.appProgress, ] } */
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({}));
    const __VLS_2 = __VLS_1({}, ...__VLS_functionalComponentArgsRest(__VLS_1));
}
else if (__VLS_ctx.interview?.id && !__VLS_ctx.isLoading) {
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
    const __VLS_6 = __VLS_resolvedLocalAndGlobalComponents.AppCard;
    /** @type { [typeof __VLS_components.AppCard, typeof __VLS_components.appCard, typeof __VLS_components.AppCard, typeof __VLS_components.appCard, ] } */
    // @ts-ignore
    const __VLS_7 = __VLS_asFunctionalComponent(__VLS_6, new __VLS_6({}));
    const __VLS_8 = __VLS_7({}, ...__VLS_functionalComponentArgsRest(__VLS_7));
    __VLS_elementAsFunction(__VLS_intrinsicElements.template, __VLS_intrinsicElements.template)({});
    {
        const { title: __VLS_thisSlot } = __VLS_nonNullable(__VLS_11.slots);
        (__VLS_ctx.interview.company);
    }
    __VLS_elementAsFunction(__VLS_intrinsicElements.template, __VLS_intrinsicElements.template)({});
    {
        const { content: __VLS_thisSlot } = __VLS_nonNullable(__VLS_11.slots);
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("flex flex-column gap-2") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)({ for: ("company"), });
        const __VLS_12 = __VLS_resolvedLocalAndGlobalComponents.AppInputtext;
        /** @type { [typeof __VLS_components.AppInputtext, typeof __VLS_components.appInputtext, ] } */
        // @ts-ignore
        const __VLS_13 = __VLS_asFunctionalComponent(__VLS_12, new __VLS_12({ ...{ class: (" mb-3") }, modelValue: ((__VLS_ctx.interview.company)), id: ("company"), }));
        const __VLS_14 = __VLS_13({ ...{ class: (" mb-3") }, modelValue: ((__VLS_ctx.interview.company)), id: ("company"), }, ...__VLS_functionalComponentArgsRest(__VLS_13));
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("flex flex-column gap-2") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)({ for: ("vacancyLink"), });
        const __VLS_18 = __VLS_resolvedLocalAndGlobalComponents.AppInputtext;
        /** @type { [typeof __VLS_components.AppInputtext, typeof __VLS_components.appInputtext, ] } */
        // @ts-ignore
        const __VLS_19 = __VLS_asFunctionalComponent(__VLS_18, new __VLS_18({ ...{ class: (" mb-3") }, modelValue: ((__VLS_ctx.interview.vacancyLink)), id: ("vacancyLink"), }));
        const __VLS_20 = __VLS_19({ ...{ class: (" mb-3") }, modelValue: ((__VLS_ctx.interview.vacancyLink)), id: ("vacancyLink"), }, ...__VLS_functionalComponentArgsRest(__VLS_19));
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("flex flex-column gap-2") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)({ for: ("hrName"), });
        const __VLS_24 = __VLS_resolvedLocalAndGlobalComponents.AppInputtext;
        /** @type { [typeof __VLS_components.AppInputtext, typeof __VLS_components.appInputtext, ] } */
        // @ts-ignore
        const __VLS_25 = __VLS_asFunctionalComponent(__VLS_24, new __VLS_24({ ...{ class: (" mb-3") }, modelValue: ((__VLS_ctx.interview.hrName)), id: ("hrName"), }));
        const __VLS_26 = __VLS_25({ ...{ class: (" mb-3") }, modelValue: ((__VLS_ctx.interview.hrName)), id: ("hrName"), }, ...__VLS_functionalComponentArgsRest(__VLS_25));
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("flex flex-column gap-2") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)({ for: ("contactTelegram"), });
        const __VLS_30 = __VLS_resolvedLocalAndGlobalComponents.AppInputtext;
        /** @type { [typeof __VLS_components.AppInputtext, typeof __VLS_components.appInputtext, ] } */
        // @ts-ignore
        const __VLS_31 = __VLS_asFunctionalComponent(__VLS_30, new __VLS_30({ ...{ class: (" mb-3") }, modelValue: ((__VLS_ctx.interview.contactTelegram)), id: ("contactTelegram"), }));
        const __VLS_32 = __VLS_31({ ...{ class: (" mb-3") }, modelValue: ((__VLS_ctx.interview.contactTelegram)), id: ("contactTelegram"), }, ...__VLS_functionalComponentArgsRest(__VLS_31));
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("flex flex-column gap-2") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)({ for: ("contactWhatsApp"), });
        const __VLS_36 = __VLS_resolvedLocalAndGlobalComponents.AppInputtext;
        /** @type { [typeof __VLS_components.AppInputtext, typeof __VLS_components.appInputtext, ] } */
        // @ts-ignore
        const __VLS_37 = __VLS_asFunctionalComponent(__VLS_36, new __VLS_36({ ...{ class: (" mb-3") }, modelValue: ((__VLS_ctx.interview.contactWhatsApp)), id: ("contactWhatsApp"), }));
        const __VLS_38 = __VLS_37({ ...{ class: (" mb-3") }, modelValue: ((__VLS_ctx.interview.contactWhatsApp)), id: ("contactWhatsApp"), }, ...__VLS_functionalComponentArgsRest(__VLS_37));
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("flex flex-column gap-2") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)({ for: ("contactPhone"), });
        const __VLS_42 = __VLS_resolvedLocalAndGlobalComponents.AppInputtext;
        /** @type { [typeof __VLS_components.AppInputtext, typeof __VLS_components.appInputtext, ] } */
        // @ts-ignore
        const __VLS_43 = __VLS_asFunctionalComponent(__VLS_42, new __VLS_42({ ...{ class: (" mb-3") }, modelValue: ((__VLS_ctx.interview.contactPhone)), id: ("contactPhone"), }));
        const __VLS_44 = __VLS_43({ ...{ class: (" mb-3") }, modelValue: ((__VLS_ctx.interview.contactPhone)), id: ("contactPhone"), }, ...__VLS_functionalComponentArgsRest(__VLS_43));
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("flex flex-wrap justify-content-start gap-3 p-fluid mb-3") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
        const __VLS_48 = __VLS_resolvedLocalAndGlobalComponents.AppInputnumber;
        /** @type { [typeof __VLS_components.AppInputnumber, typeof __VLS_components.appInputnumber, ] } */
        // @ts-ignore
        const __VLS_49 = __VLS_asFunctionalComponent(__VLS_48, new __VLS_48({ modelValue: ((__VLS_ctx.interview.salaryFrom)), inputId: ("salaryFrom"), placeholder: ("Salary From"), }));
        const __VLS_50 = __VLS_49({ modelValue: ((__VLS_ctx.interview.salaryFrom)), inputId: ("salaryFrom"), placeholder: ("Salary From"), }, ...__VLS_functionalComponentArgsRest(__VLS_49));
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
        const __VLS_54 = __VLS_resolvedLocalAndGlobalComponents.AppInputnumber;
        /** @type { [typeof __VLS_components.AppInputnumber, typeof __VLS_components.appInputnumber, ] } */
        // @ts-ignore
        const __VLS_55 = __VLS_asFunctionalComponent(__VLS_54, new __VLS_54({ inputId: ("salaryTo"), modelValue: ((__VLS_ctx.interview.salaryTo)), placeholder: ("SalaryTo"), }));
        const __VLS_56 = __VLS_55({ inputId: ("salaryTo"), modelValue: ((__VLS_ctx.interview.salaryTo)), placeholder: ("SalaryTo"), }, ...__VLS_functionalComponentArgsRest(__VLS_55));
        const __VLS_60 = __VLS_resolvedLocalAndGlobalComponents.AppButton;
        /** @type { [typeof __VLS_components.AppButton, typeof __VLS_components.appButton, ] } */
        // @ts-ignore
        const __VLS_61 = __VLS_asFunctionalComponent(__VLS_60, new __VLS_60({ ...{ 'onClick': {} }, label: ("Add Stage"), ...{ class: ("mb-3") }, severity: ("info"), icon: ("pi pi-plus"), }));
        const __VLS_62 = __VLS_61({ ...{ 'onClick': {} }, label: ("Add Stage"), ...{ class: ("mb-3") }, severity: ("info"), icon: ("pi pi-plus"), }, ...__VLS_functionalComponentArgsRest(__VLS_61));
        let __VLS_66;
        const __VLS_67 = {
            onClick: (__VLS_ctx.addStage)
        };
        let __VLS_63;
        let __VLS_64;
        const __VLS_65 = __VLS_pickFunctionalComponentCtx(__VLS_60, __VLS_62);
        if (__VLS_ctx.interview.stages) {
            for (const [stage, index] of __VLS_getVForSourceType((__VLS_ctx.interview.stages))) {
                __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ key: ((index)), ...{ class: ("flex flex-column mb-3 border-1 p-4 border-dashed") }, });
                __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("flex flex-column gap-2") }, });
                __VLS_elementAsFunction(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)({ for: ((`stageName-${index}`)), });
                const __VLS_68 = __VLS_resolvedLocalAndGlobalComponents.AppInputtext;
                /** @type { [typeof __VLS_components.AppInputtext, typeof __VLS_components.appInputtext, ] } */
                // @ts-ignore
                const __VLS_69 = __VLS_asFunctionalComponent(__VLS_68, new __VLS_68({ modelValue: ((stage.name)), ...{ class: ("mb-3") }, id: ((`stageName-${index}`)), }));
                const __VLS_70 = __VLS_69({ modelValue: ((stage.name)), ...{ class: ("mb-3") }, id: ((`stageName-${index}`)), }, ...__VLS_functionalComponentArgsRest(__VLS_69));
                __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("flex flex-column gap-2") }, });
                __VLS_elementAsFunction(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)({ for: ((`stageCalendar-${index}`)), });
                const __VLS_74 = __VLS_resolvedLocalAndGlobalComponents.AppCalendar;
                /** @type { [typeof __VLS_components.AppCalendar, typeof __VLS_components.appCalendar, ] } */
                // @ts-ignore
                const __VLS_75 = __VLS_asFunctionalComponent(__VLS_74, new __VLS_74({ modelValue: ((stage.date)), dataformatas: ("DD.MM.YYYY"), id: ((`stageCalendar-${index}`)), }));
                const __VLS_76 = __VLS_75({ modelValue: ((stage.date)), dataformatas: ("DD.MM.YYYY"), id: ((`stageCalendar-${index}`)), }, ...__VLS_functionalComponentArgsRest(__VLS_75));
                __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("flex flex-column gap-2") }, });
                __VLS_elementAsFunction(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)({ for: ((`stageComment-${index}`)), });
                const __VLS_80 = __VLS_resolvedLocalAndGlobalComponents.AppTextarea;
                /** @type { [typeof __VLS_components.AppTextarea, typeof __VLS_components.appTextarea, ] } */
                // @ts-ignore
                const __VLS_81 = __VLS_asFunctionalComponent(__VLS_80, new __VLS_80({ ...{ class: ("mb-3") }, modelValue: ((stage.comment)), dataformatas: ("dd.mm.yy"), id: ((`stageComment-${index}`)), }));
                const __VLS_82 = __VLS_81({ ...{ class: ("mb-3") }, modelValue: ((stage.comment)), dataformatas: ("dd.mm.yy"), id: ((`stageComment-${index}`)), }, ...__VLS_functionalComponentArgsRest(__VLS_81));
                const __VLS_86 = __VLS_resolvedLocalAndGlobalComponents.AppButton;
                /** @type { [typeof __VLS_components.AppButton, typeof __VLS_components.appButton, ] } */
                // @ts-ignore
                const __VLS_87 = __VLS_asFunctionalComponent(__VLS_86, new __VLS_86({ ...{ 'onClick': {} }, severity: ("danger"), label: ("Delete Stage"), }));
                const __VLS_88 = __VLS_87({ ...{ 'onClick': {} }, severity: ("danger"), label: ("Delete Stage"), }, ...__VLS_functionalComponentArgsRest(__VLS_87));
                let __VLS_92;
                const __VLS_93 = {
                    onClick: (...[$event]) => {
                        if (!(!((__VLS_ctx.isLoading))))
                            return;
                        if (!((__VLS_ctx.interview?.id && !__VLS_ctx.isLoading)))
                            return;
                        if (!((__VLS_ctx.interview.stages)))
                            return;
                        __VLS_ctx.removeStage(index);
                    }
                };
                let __VLS_89;
                let __VLS_90;
                const __VLS_91 = __VLS_pickFunctionalComponentCtx(__VLS_86, __VLS_88);
            }
        }
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("flex  gap-3 mb-3") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("flex align-items-center") }, });
        const __VLS_94 = __VLS_resolvedLocalAndGlobalComponents.AppRadio;
        /** @type { [typeof __VLS_components.AppRadio, typeof __VLS_components.appRadio, ] } */
        // @ts-ignore
        const __VLS_95 = __VLS_asFunctionalComponent(__VLS_94, new __VLS_94({ ...{ class: ("mr-1") }, modelValue: ((__VLS_ctx.interview.result)), inputId: ("interviewResult1"), name: ("result"), value: ("Refusal"), }));
        const __VLS_96 = __VLS_95({ ...{ class: ("mr-1") }, modelValue: ((__VLS_ctx.interview.result)), inputId: ("interviewResult1"), name: ("result"), value: ("Refusal"), }, ...__VLS_functionalComponentArgsRest(__VLS_95));
        __VLS_elementAsFunction(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)({ for: ("interviewResult1"), });
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("flex align-items-center") }, });
        const __VLS_100 = __VLS_resolvedLocalAndGlobalComponents.AppRadio;
        /** @type { [typeof __VLS_components.AppRadio, typeof __VLS_components.appRadio, ] } */
        // @ts-ignore
        const __VLS_101 = __VLS_asFunctionalComponent(__VLS_100, new __VLS_100({ ...{ class: ("mr-1") }, modelValue: ((__VLS_ctx.interview.result)), inputId: ("interviewResult2"), name: ("result"), value: ("Offer"), }));
        const __VLS_102 = __VLS_101({ ...{ class: ("mr-1") }, modelValue: ((__VLS_ctx.interview.result)), inputId: ("interviewResult2"), name: ("result"), value: ("Offer"), }, ...__VLS_functionalComponentArgsRest(__VLS_101));
        __VLS_elementAsFunction(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)({ for: ("interviewResult2"), });
        const __VLS_106 = __VLS_resolvedLocalAndGlobalComponents.AppButton;
        /** @type { [typeof __VLS_components.AppButton, typeof __VLS_components.appButton, ] } */
        // @ts-ignore
        const __VLS_107 = __VLS_asFunctionalComponent(__VLS_106, new __VLS_106({ ...{ 'onClick': {} }, icon: ("pi pi-save"), label: ("Save"), }));
        const __VLS_108 = __VLS_107({ ...{ 'onClick': {} }, icon: ("pi pi-save"), label: ("Save"), }, ...__VLS_functionalComponentArgsRest(__VLS_107));
        let __VLS_112;
        const __VLS_113 = {
            onClick: (__VLS_ctx.saveInterview)
        };
        let __VLS_109;
        let __VLS_110;
        const __VLS_111 = __VLS_pickFunctionalComponentCtx(__VLS_106, __VLS_108);
    }
    const __VLS_11 = __VLS_pickFunctionalComponentCtx(__VLS_6, __VLS_8);
}
__VLS_styleScopedClasses['mx-4'];
__VLS_styleScopedClasses['flex'];
__VLS_styleScopedClasses['flex-column'];
__VLS_styleScopedClasses['gap-2'];
__VLS_styleScopedClasses['mb-3'];
__VLS_styleScopedClasses['flex'];
__VLS_styleScopedClasses['flex-column'];
__VLS_styleScopedClasses['gap-2'];
__VLS_styleScopedClasses['mb-3'];
__VLS_styleScopedClasses['flex'];
__VLS_styleScopedClasses['flex-column'];
__VLS_styleScopedClasses['gap-2'];
__VLS_styleScopedClasses['mb-3'];
__VLS_styleScopedClasses['flex'];
__VLS_styleScopedClasses['flex-column'];
__VLS_styleScopedClasses['gap-2'];
__VLS_styleScopedClasses['mb-3'];
__VLS_styleScopedClasses['flex'];
__VLS_styleScopedClasses['flex-column'];
__VLS_styleScopedClasses['gap-2'];
__VLS_styleScopedClasses['mb-3'];
__VLS_styleScopedClasses['flex'];
__VLS_styleScopedClasses['flex-column'];
__VLS_styleScopedClasses['gap-2'];
__VLS_styleScopedClasses['mb-3'];
__VLS_styleScopedClasses['flex'];
__VLS_styleScopedClasses['flex-wrap'];
__VLS_styleScopedClasses['justify-content-start'];
__VLS_styleScopedClasses['gap-3'];
__VLS_styleScopedClasses['p-fluid'];
__VLS_styleScopedClasses['mb-3'];
__VLS_styleScopedClasses['mb-3'];
__VLS_styleScopedClasses['flex'];
__VLS_styleScopedClasses['flex-column'];
__VLS_styleScopedClasses['mb-3'];
__VLS_styleScopedClasses['border-1'];
__VLS_styleScopedClasses['p-4'];
__VLS_styleScopedClasses['border-dashed'];
__VLS_styleScopedClasses['flex'];
__VLS_styleScopedClasses['flex-column'];
__VLS_styleScopedClasses['gap-2'];
__VLS_styleScopedClasses['mb-3'];
__VLS_styleScopedClasses['flex'];
__VLS_styleScopedClasses['flex-column'];
__VLS_styleScopedClasses['gap-2'];
__VLS_styleScopedClasses['flex'];
__VLS_styleScopedClasses['flex-column'];
__VLS_styleScopedClasses['gap-2'];
__VLS_styleScopedClasses['mb-3'];
__VLS_styleScopedClasses['flex'];
__VLS_styleScopedClasses['gap-3'];
__VLS_styleScopedClasses['mb-3'];
__VLS_styleScopedClasses['flex'];
__VLS_styleScopedClasses['align-items-center'];
__VLS_styleScopedClasses['mr-1'];
__VLS_styleScopedClasses['flex'];
__VLS_styleScopedClasses['align-items-center'];
__VLS_styleScopedClasses['mr-1'];
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
            interview: interview,
            isLoading: isLoading,
            saveInterview: saveInterview,
            addStage: addStage,
            removeStage: removeStage,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
});
;
