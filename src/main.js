import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import VuePageTransition from "vue-page-transition";
import VueCarousel from 'vue-carousel';



/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import specific icons */
import { faLongArrowAltRight, faEnvelope, faPhoneAlt, faHome } from '@fortawesome/free-solid-svg-icons'

/* import brands icons */
import { faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'



/* add icons to the library */
library.add(faLongArrowAltRight, faEnvelope, faPhoneAlt, faHome, faInstagram, faFacebook)

/* add font awesome icon component */
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.use(VuePageTransition);
Vue.use(VueCarousel);

Vue.config.productionTip = false;

new Vue({
    router,
    render: (h) => h(App),
}).$mount("#app");