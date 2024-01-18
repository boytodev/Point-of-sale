<script setup>
import { ref } from 'vue'

let id = ref(0)

const Member = ref([
    {
        id: id.value += 1,
        fname: 'jonh',
        lname: 'doe',
        contact: '012-345-6789',
        stam: 1
    },
    {
        id: id.value += 1,
        fname: 'jane',
        lname: 'doe',
        contact: '012-345-6789',
        stam: 3
    },
    {
        id: id.value += 1,
        fname: 'jame',
        lname: 'doe',
        contact: '012-345-6789',
        stam: 4
    },
    {
        id: id.value += 1,
        fname: 'jack',
        lname: 'doe',
        contact: '012-345-6789',
        stam: 29
    },
])
</script>

<template>
    <div class="w-4/5 flex flex-col justify-between h-screen">
        <table class="table-auto  w-full text-lg">
            <thead class="bg-gray-400">
                <tr class="h-9">
                    <th class="w-1/12">ลำดับ</th>
                    <th class="w-2/12 text-start">ชื่อ</th>
                    <th class="w-2/12 text-start">นามสกุล</th>
                    <th class="text-start w-1/4">
                        <form>
                            <input class=" focus:outline-none px-2 w-10/12" type="text" placeholder="เบอร์โทรศัพท์">
                        </form>
                    </th>
                    <th class="w-2/12 text-center">สแต็ม</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="Members in Member"
                    class="text-center cursor-pointer even:bg-slate-100 hover:bg-slate-200 transition h-9">
                    <td>{{ Members.id }}</td>
                    <td class="text-start">{{ Members.fname }}</td>
                    <td class="text-start">{{ Members.lname }}</td>
                    <td class="text-start">{{ Members.contact }}</td>
                    <td class="text-center">{{ Members.stam }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>