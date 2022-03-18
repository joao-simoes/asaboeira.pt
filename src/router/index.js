import Vue from "vue";
import VueRouter from "vue-router";
import Index from "../views/index.vue";
import NossoEspaco from "../views/nossoespaco.vue";
import Servicos from "../views/servicos.vue";
import Contactos from "../views/contactos.vue";

Vue.use(VueRouter);

const routes = [{
        path: "/",
        name: "Index",
        component: Index,
    },
    {
        path: "/nossoespaco",
        name: "ONossoEspaço",
        component: NossoEspaco,
    },
    {
        path: "/servicos",
        name: "Serviços",
        component: Servicos,
    },
    {
        path: "/contactos",
        name: "Contactos",
        component: Contactos,
    },
];

const router = new VueRouter({
    routes,
});

export default router;