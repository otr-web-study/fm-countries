import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import DetailsView from '@/views/DetailsView.vue';
import NotFound from '@/views/NotFound.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'home', component: HomeView },
    { name: 'details', path: '/country/:code', component: DetailsView },
    { path: '/:catchAll(.*)*', component: NotFound },
  ],
});

export default router;
