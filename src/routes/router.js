import { createRouter, createWebHistory } from 'vue-router';

import CoachesList from '../pages/coaches/CoachesList.vue';
import CoachDetail from '../pages/coaches/CoachDetail.vue';
import CoachRegister from '../pages/coaches/CoachRegister';
import ContactCoach from '../pages/requests/ContactCoach.vue';
import RequestsList from '../pages/requests/RequestsList.vue';
import PageNotFound from '../pages/PageNotFound.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/coaches' },
    { path: '/coaches', component: CoachesList },
    {
      path: '/coaches/:id',
      component: CoachDetail,
      children: [{ path: 'contact', component: ContactCoach }],
    },
    { path: '/register', component: CoachRegister },
    { path: '/requests', component: RequestsList },
    { path: '/:notFound(.*)', component: PageNotFound },
  ],
});

export default router;
