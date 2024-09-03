import { computed, ref } from "vue";
import { v4 as uuidv4 } from 'uuid';
import { getAuth } from "firebase/auth";
import { getFirestore, doc, setDoc } from "firebase/firestore";
import { useRouter } from "vue-router";
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const router = useRouter();
const db = getFirestore();
const company = ref('');
const description = ref('');
const hrName = ref('');
const contactTelegram = ref('');
const contactWhatsapp = ref('');
const contactPhone = ref('');
const loading = ref(false);
const addNewInterview = async () => {
    loading.value = true;
    const payload = {
        id: uuidv4(),
        company: company.value,
        vacancyLink: description.value,
        hrName: hrName.value,
        contactTelegram: contactTelegram.value,
        contactWhatsApp: contactWhatsapp.value,
        contactPhone: contactPhone.value,
        cratedAt: new Date()
    };
    const userId = getAuth().currentUser?.uid;
    if (userId) {
        await setDoc(doc(db, `users/${userId}/interviews`, payload.id), payload).then(() => {
            router.push('/list');
        });
    }
};
const disabledSaveBtn = computed(() => {
    return !(company.value && description.value && hrName.value);
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
__VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("flex flex-column mx-4") }, });
__VLS_elementAsFunction(__VLS_intrinsicElements.h2, __VLS_intrinsicElements.h2)({ ...{ class: ("mb-4") }, });
const __VLS_0 = __VLS_resolvedLocalAndGlobalComponents.AppInputtext;
/** @type { [typeof __VLS_components.AppInputtext, typeof __VLS_components.appInputtext, ] } */
// @ts-ignore
const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ ...{ class: ("mb-3") }, modelValue: ((__VLS_ctx.company)), placeholder: ("Company"), type: ("text"), }));
const __VLS_2 = __VLS_1({ ...{ class: ("mb-3") }, modelValue: ((__VLS_ctx.company)), placeholder: ("Company"), type: ("text"), }, ...__VLS_functionalComponentArgsRest(__VLS_1));
const __VLS_6 = __VLS_resolvedLocalAndGlobalComponents.AppInputtext;
/** @type { [typeof __VLS_components.AppInputtext, typeof __VLS_components.appInputtext, ] } */
// @ts-ignore
const __VLS_7 = __VLS_asFunctionalComponent(__VLS_6, new __VLS_6({ ...{ class: ("mb-3") }, modelValue: ((__VLS_ctx.description)), placeholder: ("Description (link)"), type: ("text"), }));
const __VLS_8 = __VLS_7({ ...{ class: ("mb-3") }, modelValue: ((__VLS_ctx.description)), placeholder: ("Description (link)"), type: ("text"), }, ...__VLS_functionalComponentArgsRest(__VLS_7));
const __VLS_12 = __VLS_resolvedLocalAndGlobalComponents.AppInputtext;
/** @type { [typeof __VLS_components.AppInputtext, typeof __VLS_components.appInputtext, ] } */
// @ts-ignore
const __VLS_13 = __VLS_asFunctionalComponent(__VLS_12, new __VLS_12({ ...{ class: ("mb-3") }, modelValue: ((__VLS_ctx.hrName)), placeholder: ("HR (name)"), type: ("text"), }));
const __VLS_14 = __VLS_13({ ...{ class: ("mb-3") }, modelValue: ((__VLS_ctx.hrName)), placeholder: ("HR (name)"), type: ("text"), }, ...__VLS_functionalComponentArgsRest(__VLS_13));
const __VLS_18 = __VLS_resolvedLocalAndGlobalComponents.AppInputtext;
/** @type { [typeof __VLS_components.AppInputtext, typeof __VLS_components.appInputtext, ] } */
// @ts-ignore
const __VLS_19 = __VLS_asFunctionalComponent(__VLS_18, new __VLS_18({ ...{ class: ("mb-3") }, modelValue: ((__VLS_ctx.contactTelegram)), placeholder: ("Telegram (hr)"), type: ("text"), }));
const __VLS_20 = __VLS_19({ ...{ class: ("mb-3") }, modelValue: ((__VLS_ctx.contactTelegram)), placeholder: ("Telegram (hr)"), type: ("text"), }, ...__VLS_functionalComponentArgsRest(__VLS_19));
const __VLS_24 = __VLS_resolvedLocalAndGlobalComponents.AppInputtext;
/** @type { [typeof __VLS_components.AppInputtext, typeof __VLS_components.appInputtext, ] } */
// @ts-ignore
const __VLS_25 = __VLS_asFunctionalComponent(__VLS_24, new __VLS_24({ ...{ class: ("mb-3") }, modelValue: ((__VLS_ctx.contactWhatsapp)), placeholder: ("Whats'app (hr)"), type: ("text"), }));
const __VLS_26 = __VLS_25({ ...{ class: ("mb-3") }, modelValue: ((__VLS_ctx.contactWhatsapp)), placeholder: ("Whats'app (hr)"), type: ("text"), }, ...__VLS_functionalComponentArgsRest(__VLS_25));
const __VLS_30 = __VLS_resolvedLocalAndGlobalComponents.AppInputtext;
/** @type { [typeof __VLS_components.AppInputtext, typeof __VLS_components.appInputtext, ] } */
// @ts-ignore
const __VLS_31 = __VLS_asFunctionalComponent(__VLS_30, new __VLS_30({ ...{ class: ("mb-3") }, modelValue: ((__VLS_ctx.contactPhone)), placeholder: ("Phone number (hr)"), type: ("text"), }));
const __VLS_32 = __VLS_31({ ...{ class: ("mb-3") }, modelValue: ((__VLS_ctx.contactPhone)), placeholder: ("Phone number (hr)"), type: ("text"), }, ...__VLS_functionalComponentArgsRest(__VLS_31));
const __VLS_36 = __VLS_resolvedLocalAndGlobalComponents.AppButton;
/** @type { [typeof __VLS_components.AppButton, typeof __VLS_components.appButton, ] } */
// @ts-ignore
const __VLS_37 = __VLS_asFunctionalComponent(__VLS_36, new __VLS_36({ ...{ 'onClick': {} }, label: ("Create"), disabled: ((__VLS_ctx.disabledSaveBtn)), loading: ((__VLS_ctx.loading)), }));
const __VLS_38 = __VLS_37({ ...{ 'onClick': {} }, label: ("Create"), disabled: ((__VLS_ctx.disabledSaveBtn)), loading: ((__VLS_ctx.loading)), }, ...__VLS_functionalComponentArgsRest(__VLS_37));
let __VLS_42;
const __VLS_43 = {
    onClick: (__VLS_ctx.addNewInterview)
};
let __VLS_39;
let __VLS_40;
const __VLS_41 = __VLS_pickFunctionalComponentCtx(__VLS_36, __VLS_38);
__VLS_styleScopedClasses['flex'];
__VLS_styleScopedClasses['flex-column'];
__VLS_styleScopedClasses['mx-4'];
__VLS_styleScopedClasses['mb-4'];
__VLS_styleScopedClasses['mb-3'];
__VLS_styleScopedClasses['mb-3'];
__VLS_styleScopedClasses['mb-3'];
__VLS_styleScopedClasses['mb-3'];
__VLS_styleScopedClasses['mb-3'];
__VLS_styleScopedClasses['mb-3'];
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
            company: company,
            description: description,
            hrName: hrName,
            contactTelegram: contactTelegram,
            contactWhatsapp: contactWhatsapp,
            contactPhone: contactPhone,
            loading: loading,
            addNewInterview: addNewInterview,
            disabledSaveBtn: disabledSaveBtn,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
});
;
