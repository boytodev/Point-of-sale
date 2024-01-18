<script setup>
import { ref } from 'vue'
const product = ref([
    {
        id: 1,
        name: 'react',
        price: 3000,
        code: '3322534',
        count: 1
    },
    {
        id: 2,
        name: 'react',
        price: 3000,
        code: '3322534',
        count: 15
    },
    {
        id: 3,
        name: 'react',
        price: 3000,
        code: '3322534',
        count: 4
    },
    {
        id: 4,
        name: 'react',
        price: 3000,
        code: '3322534',
        count: 6
    },
])
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
                    <th class="w-1/4 text-start">ราคาสินค้า</th>
                    <th class="w-2/12 text-center">จำนวนที่ขาย</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="products in product"
                    class="text-center cursor-pointer even:bg-slate-100 hover:bg-slate-200 transition h-9">
                    <td>{{ products.id }}</td>
                    <td class="text-start">{{ products.code }}</td>
                    <td class="text-start">{{ products.name }}</td>
                    <td class="text-start">{{ products.price }}</td>
                    <td class="text-center">{{ products.count }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>