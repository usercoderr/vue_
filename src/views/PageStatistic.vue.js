import { ref, onMounted } from "vue";
import { getFirestore, collection, getDocs, orderBy, query } from 'firebase/firestore';
import { useUserStore } from "@/stores/auth";
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const userStore = useUserStore();
const db = getFirestore();
const interviews = ref([]);
const chartData = ref();
const chartOptions = ref();
onMounted(async () => {
    interviews.value = await getAllInterviews();
    chartData.value = setChartData();
    chartOptions.value = setChartOptions();
});
const getAllInterviews = async () => {
    const getData = query(collection(db, `users/${userStore.userId}/interviews`), orderBy('company'));
    const listDocs = await getDocs(getData);
    return listDocs.docs.map((doc) => doc.data());
};
const setChartData = () => {
    const data = [0, 0, 0];
    interviews.value.forEach((interview) => {
        if (interview.result === 'Offer') {
            data[0]++;
        }
        else if (interview.result === 'Refusal') {
            data[1]++;
        }
        else {
            data[2]++;
        }
    });
    return {
        labels: ['Offer', 'Refusal ', 'Not Specified'],
        datasets: [
            {
                data,
                backgroundColor: ['rgb(249,115,22)', 'rgba(6, 122, 212, 2)', 'rgb(107, 114, 128, 0.2)', 'rgba(139, 92, 246 0.2)'],
                borderColor: ['rgb(249, 115, 22)', 'rgb(6, 182, 212)', 'rgb(107, 114, 128)', 'rgb(139, 92, 246)'],
                borderWidth: 1
            }
        ]
    };
};
const setChartOptions = () => {
    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue('--p-text-color');
    const textColorSecondary = documentStyle.getPropertyValue('--p-text-muted-color');
    const surfaceBorder = documentStyle.getPropertyValue('--p-content-border-color');
    return {
        plugins: {
            legend: {
                labels: {
                    color: textColor
                }
            }
        },
        scales: {
            x: {
                ticks: {
                    color: textColorSecondary
                },
                grid: {
                    color: surfaceBorder
                }
            },
            y: {
                beginAtZero: true,
                ticks: {
                    color: textColorSecondary
                },
                grid: {
                    color: surfaceBorder
                }
            }
        }
    };
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
__VLS_elementAsFunction(__VLS_intrinsicElements.h1, __VLS_intrinsicElements.h1)({ ...{ class: ("mx-4") }, });
__VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("card mx-4 flex justify-content-center align-items-center") }, });
const __VLS_0 = __VLS_resolvedLocalAndGlobalComponents.AppChart;
/** @type { [typeof __VLS_components.AppChart, typeof __VLS_components.appChart, ] } */
// @ts-ignore
const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ ...{ class: ("w-full md:w-30rem") }, type: ("pie"), data: ((__VLS_ctx.chartData)), options: ((__VLS_ctx.chartOptions)), }));
const __VLS_2 = __VLS_1({ ...{ class: ("w-full md:w-30rem") }, type: ("pie"), data: ((__VLS_ctx.chartData)), options: ((__VLS_ctx.chartOptions)), }, ...__VLS_functionalComponentArgsRest(__VLS_1));
__VLS_styleScopedClasses['mx-4'];
__VLS_styleScopedClasses['card'];
__VLS_styleScopedClasses['mx-4'];
__VLS_styleScopedClasses['flex'];
__VLS_styleScopedClasses['justify-content-center'];
__VLS_styleScopedClasses['align-items-center'];
__VLS_styleScopedClasses['w-full'];
__VLS_styleScopedClasses['md:w-30rem'];
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
            chartData: chartData,
            chartOptions: chartOptions,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
});
;
