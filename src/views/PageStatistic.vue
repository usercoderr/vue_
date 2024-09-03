<template>
    <h1>sds</h1>
    <div class="card mx-4 flex justify-content-center align-items-center">
        <app-chart
                class="w-full md:w-30rem"
                type="pie"
                :data="chartData"
                :options="chartOptions"/>
    </div>
</template>

<script setup lang="ts">
import {ref, onMounted} from "vue";
import {
    getFirestore,
    collection,
    deleteDoc,
    doc,
    getDocs,
    orderBy,
    query,
    where
} from 'firebase/firestore'
import {useUserStore} from "@/stores/auth";
import type {IInterview} from "@/interfaces";


const userStore = useUserStore()
const db = getFirestore()
const interviews = ref<IInterview[]>([])
const chartData = ref();
const chartOptions = ref();


onMounted(async () => {
    interviews.value = await getAllInterviews()
    chartData.value = setChartData();
    chartOptions.value = setChartOptions();
});

const getAllInterviews = async <T extends IInterview>(): Promise<T[]> => {
    const getData = query(
        collection(db, `users/${userStore.userId}/interviews`),
        orderBy('company')
    )
    const listDocs = await getDocs(getData)
    return listDocs.docs.map((doc) => doc.data() as T)
}
const setChartData = () => {
    const data: number[] = [0, 0, 0]
    interviews.value.forEach((interview:IInterview) =>{
        if(interview.result === 'Offer'){
            data[0]++
        }else if(interview.result === 'Refusal'){
            data[1]++
        }else {
            data[2]++
        }
    })
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
}
</script>
