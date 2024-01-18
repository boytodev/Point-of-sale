<script setup>
import { ref } from 'vue'
const product = ref([])
</script>

<template>
    <div class="w-4/5 flex flex-col justify-between h-screen">
        <table class="table-auto  w-full text-lg">
            <thead class="bg-gray-400">
                <tr class="h-9">
                    <th class="w-1/12">รายการ</th>
                    <th class="text-start w-1/4">
                        <form>
                            <input class=" focus:outline-none px-2 w-10/12" type="text" placeholder="รหัสสินค้า">
                        </form>
                    </th>
                    <th class="w-1/4 text-start">ชื่อสินค้า</th>
                    <th class="w-1/12 text-center">ราคาสินค้า</th>
                    <th class="w-2/12 text-center">จำนวน</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="products in product"
                    class="text-center cursor-pointer even:bg-slate-100 hover:bg-slate-200 transition h-9">
                    <td>{{ products.id }}</td>
                    <td class="text-start">{{ products.code }}</td>
                    <td class="text-start">{{ products.name }}</td>
                    <td class="text-center">{{ products.price }}</td>
                    <td class="text-center">{{ products.count }}</td>
                </tr>
            </tbody>
        </table>
        <div class="flex  w-full text-center text-lg bg-gray-300">
            <p class="w-4/6 border-t border-l border-r border-black py-2">รวมยอดทั้งหมด</p>
            <p class="w-1/6 border-t border-r border-black py-2">0</p>
            <button
                class="w-1/6 h-full bg-red-700 hover:bg-red-500 active:bg-red-300 border-t border-black border-r">รีเซ็ต</button>
            <button
                class="w-1/6 h-full bg-green-700 hover:bg-green-500 active:bg-green-300 border-t border-black">ชำระ</button>
        </div>
    </div>
</template>

<style scoped></style>