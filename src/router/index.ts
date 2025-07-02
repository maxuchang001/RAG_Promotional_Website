import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import ChipDesign from '../views/Chip-design.vue';
import Pricing from '../views/Pricing.vue';
import Blog from '../views/Blogs.vue';
import Docs from '../views/Docs.vue';
import Accuracy from "../views/Accuracy.vue";
import ChipDesignCase from "../views/ChipDesignCase.vue";
import AutonomousVehicles from "../views/AutonomousVehicles.vue";
import MedicalRobotics from "../views/MedicalRobotics.vue";
import FinregCompliance from "../views/FinregCompliance.vue";


const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/chipdesign', name: 'ChipDesign', component: ChipDesign },
  { path: '/pricing', name: 'Pricing', component: Pricing },
  { path: '/blog', name: 'Blog', component: Blog },
  { path: '/docs', name: 'Docs', component: Docs },
  { path: '/accuracy', name: 'Accuracy', component: Accuracy },
  { path: '/chipdesigncase', name: 'ChipDesignCase', component: ChipDesignCase },
  { path: '/autonomousvehicles', name: 'AutonomousVehicles', component: AutonomousVehicles },
  { path: '/medicalrobotics', name: 'MedicalRobotics', component: MedicalRobotics },
  { path: '/finregcompliance', name: 'FinregCompliance', component: FinregCompliance }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
