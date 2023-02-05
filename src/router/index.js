import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Home",
    component: () =>
      import(/*webpackChunkName: "about" */ "../views/HomeView.vue"),
  },
  {
    path: "/Contact",
    name: "Contact",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/ContactView.vue"),
  },
  {
    path: "/LaVocationDuCabinet",
    name: "LaVocationDuCabinet",
    component: () =>
      import(
        /* webpackChunkName: "about" */ "../views/LaVocationDuCabinetView.vue"
      ),
  },
  {
    path: "/MonApproche",
    name: "MonApproche",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/MonApprocheView.vue"),
  },
  {
    path: "/QuiSuisJe",
    name: "QuiSuisJe",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/QuiSuisJeView.vue"),
  },
  {
    path: "/Informations",
    name: "Informations",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/InformationsView.vue"),
  },
  {
    path: "/Ressources",
    name: "Ressources",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/RessourcesView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
