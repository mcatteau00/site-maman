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
    path: "/LaPsychotherapie",
    name: "LaPsychotherapie",
    component: () =>
      import(
        /* webpackChunkName: "about" */ "../views/LaPsychotherapieView.vue"
      ),
  },
  {
    path: "/Comment",
    name: "Comment",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/CommentView.vue"),
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
  {
    path: "/PourQui",
    name: "PourQui",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/PourQuiView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
