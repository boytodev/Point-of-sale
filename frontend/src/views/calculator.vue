<script setup>
import { ref } from 'vue'

const current = ref('')
const previous = ref('')
const textOperation = ref('')

function clearCalculator() {
    current.value = ''
    previous.value = ''
    textOperation.value = ''
}

function operation(value) {
    switch (value) {
        case '+':
            previous.value = Number(previous.value) + Number(current.value)
            break;
        case '-':
            previous.value = Number(previous.value) - Number(current.value)
            break;
        case '×':
            previous.value = Number(previous.value) * Number(current.value)
            break;
        case '÷':
            previous.value = Number(previous.value) / Number(current.value)
            break;
    }
}

function buttonOperation(value) {
    textOperation.value = value
    if (previous.value === '') {
        previous.value = current.value
        current.value = ''
    } else if (previous.value !== '') {
        operation(value)
        current.value = ''
    }
}

function tantamount() {
    if (previous.value !== '' && current.value !== '') {
        switch (textOperation.value) {
            case '+':
                current.value = Number(previous.value) + Number(current.value)
                previous.value = ''
                textOperation.value = ''
                break;
            case '-':
                current.value = Number(previous.value) - Number(current.value)
                previous.value = ''
                textOperation.value = ''
                break;
            case '×':
                current.value = Number(previous.value) * Number(current.value)
                previous.value = ''
                textOperation.value = ''
                break;
            case '÷':
                current.value = Number(previous.value) / Number(current.value)
                previous.value = ''
                textOperation.value = ''
                break;
        }
    }
}

function clickButton(value) {
    if (value === 'C') {
        clearCalculator()
    }
    else {
        updatedCurrent(value)
    }
}

function updatedCurrent(value) {
    current.value += value
}

</script>

<template>
    <div class="w-4/5 h-screen flex flex-col items-center" @keyup="handleKeyboardInput">
        <div class="w-2/4 m-5 h-full">
            <div
                class="bg-gray-400 h-1/4 flex flex-row justify-between items-center px-2 text-5xl border-2 border-black rounded-md">
                <div>
                    <p>{{ textOperation }}</p>
                </div>
                <div class="flex flex-col justify-end text-end">
                    <p v-if="previous != ''" class="opacity-45 mb-4">{{ previous }}</p>
                    <p v-if="current != ''" class="text-6xl">{{ current }}</p>
                </div>
            </div>
            <div class="h-3/4 mt-1">
                <div class="h-1/5 flex flex-row gap-1 mt-1">
                    <button @click="clickButton('C')"
                        class="w-2/4 h-full text-6xl flex justify-center items-center bg-gray-600 hover:bg-gray-500 active:bg-gray-300">C</button>
                    <button @click="buttonOperation('+')"
                        class="w-2/4 h-full flex justify-center items-center text-6xl bg-gray-600 hover:bg-gray-500 active:bg-gray-300">+</button>
                </div>
                <div class="h-1/5 flex flex-row gap-1 mt-1">
                    <button @click="clickButton('7')"
                        class="w-1/4 h-full text-6xl flex justify-center items-center bg-gray-400 hover:bg-gray-300 active:bg-gray-200">7</button>
                    <button @click="clickButton('8')"
                        class="w-1/4 h-full text-6xl flex justify-center items-center bg-gray-400 hover:bg-gray-300 active:bg-gray-200">8</button>
                    <button @click="clickButton('9')"
                        class="w-1/4 h-full text-6xl flex justify-center items-center bg-gray-400 hover:bg-gray-300 active:bg-gray-200">9</button>
                    <button @click="buttonOperation('-')"
                        class="w-1/4 h-full text-6xl flex justify-center items-center bg-gray-600 hover:bg-gray-500 active:bg-gray-300 pb-10">_</button>
                </div>
                <div class="h-1/5 flex flex-row gap-1 mt-1">
                    <button @click="clickButton('4')"
                        class="w-1/4 h-full text-6xl flex justify-center items-center bg-gray-400 hover:bg-gray-300 active:bg-gray-200">4</button>
                    <button @click="clickButton('5')"
                        class="w-1/4 h-full text-6xl flex justify-center items-center bg-gray-400 hover:bg-gray-300 active:bg-gray-200">5</button>
                    <button @click="clickButton('6')"
                        class="w-1/4 h-full text-6xl flex justify-center items-center bg-gray-400 hover:bg-gray-300 active:bg-gray-200">6</button>
                    <button @click="buttonOperation('×')"
                        class="w-1/4 h-full text-6xl flex justify-center items-center bg-gray-600 hover:bg-gray-500 active:bg-gray-300">×</button>
                </div>
                <div class="h-1/5 flex flex-row gap-1 mt-1">
                    <button @click="clickButton('1')"
                        class="w-1/4 h-full text-6xl flex justify-center items-center bg-gray-400 hover:bg-gray-300 active:bg-gray-200">1</button>
                    <button @click="clickButton('2')"
                        class="w-1/4 h-full text-6xl flex justify-center items-center bg-gray-400 hover:bg-gray-300 active:bg-gray-200">2</button>
                    <button @click="clickButton('3')"
                        class="w-1/4 h-full text-6xl flex justify-center items-center bg-gray-400 hover:bg-gray-300 active:bg-gray-200">3</button>
                    <button @click="buttonOperation('÷')"
                        class="w-1/4 h-full text-6xl flex justify-center items-center bg-gray-600 hover:bg-gray-500 active:bg-gray-300">÷</button>
                </div>
                <div class="h-1/5 flex flex-row gap-1 mt-1">
                    <button @click="clickButton('0')"
                        class="w-1/4 h-full text-6xl flex justify-center items-center bg-gray-400 hover:bg-gray-300 active:bg-gray-200">0</button>
                    <button @click="clickButton('.')"
                        class="w-1/4 h-full text-6xl flex justify-center items-center bg-gray-400 hover:bg-gray-300 active:bg-gray-200">.</button>
                    <button @click="tantamount()"
                        class="w-2/4 h-full text-6xl flex justify-center items-center bg-gray-400 hover:bg-gray-500 active:bg-gray-300">=</button>
                </div>
            </div>
        </div>
    </div>
</template>