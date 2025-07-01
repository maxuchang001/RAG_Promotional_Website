import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import ChipDesign from '../views/Chip-design.vue';

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/chipdesign', name: 'ChipDesign', component: ChipDesign }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
