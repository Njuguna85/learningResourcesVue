import { createApp } from 'vue';

import App from './App.vue';
import BaseCard from './components/UI/BaseCard.vue'
import BaseButton from './components/UI/BaseButton.vue'
import BaseDialog from './components/UI/BaseDialog.vue'

// create a new vue app
const app = createApp(App)

// these are global components and thus can be accessed by
// other components 
app.component('base-card', BaseCard)
app.component('base-button', BaseButton)
app.component('base-dialog', BaseDialog)

// attach the vue app to the html element directly
app.mount('#app');