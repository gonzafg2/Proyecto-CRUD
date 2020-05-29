import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Logeo",
    component: () =>
      import(/* webpackChunkName: "logeo" */ "../views/Logeo.vue")
  },
  {
    path: "/usuarios",
    name: "Crud",
    component: () => import(/* webpackChunkName: "crud" */ "../views/Crud.vue")
  },
  {
    path: "/registro",
    name: "Registro",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Registro.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
