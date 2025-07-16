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
import Customize from '../blogs/Customize.vue';
import BeginnerGuide from '../docs/BeginnerGuide.vue';
import DataPipeline from '../blogs/DataPipeline.vue';
import RetrievalGeneration from '../blogs/RetrievalGeneration.vue';

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
  { path: '/finregcompliance', name: 'FinregCompliance', component: FinregCompliance },
  { path: '/blog/customizing-dataset-agents', name: 'Customize', component: Customize },
  { path: '/blog/data-pipeline', name: 'DataPipeline', component: DataPipeline },
  { path: '/blog/retrieval-generation', name: 'RetrievalGeneration', component: RetrievalGeneration },
  { path: '/docs/beginner-guide', name: 'BeginnerGuide', component: BeginnerGuide }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
