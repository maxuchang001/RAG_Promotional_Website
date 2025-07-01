import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import ChipDesign from '../views/Chip-design.vue';
import Pricing from '../views/Pricing.vue';
import Blog from '../views/Blogs.vue';
import Docs from '../views/Docs.vue';

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/chipdesign', name: 'ChipDesign', component: ChipDesign },
  { path: '/pricing', name: 'Pricing', component: Pricing },
  { path: '/blog', name: 'Blog', component: Blog },
  { path: '/docs', name: 'Docs', component: Docs }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
