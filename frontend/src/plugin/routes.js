import { createRouter, createWebHistory } from 'vue-router';
import inventory from '../views/inventory.vue';
import Member from '../views/Member.vue';
import stockInfomation from '../views/stockInformation.vue';
import purchaseAmount from '../views/purchaseAmount.vue';
import calculator from '../views/calculator.vue';

const routes = [
    { path: '/', component: inventory },
    { path: '/inventory', component: inventory },
    { path: '/stock', component: stockInfomation },
    { path: '/Member', component: Member },
    { path: '/Total-Sales', component: purchaseAmount },
    { path: '/calculator', component: calculator } // Corrected path
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;
