import { createApp } from 'vue';
import App from './App.vue';

import router from './routes/router.js';
import store from './store/index.js';

import BaseCard from './ui/BaseCard.vue';
import BaseButton from './ui/BaseButton.vue';
import BaseBadge from './ui/BaseBadge.vue';

const app = createApp(App);

app.use(router);
app.use(store);

app.component('base-card', BaseCard);
app.component('base-button', BaseButton);
app.component('base-badge', BaseBadge);

app.mount('#app');
