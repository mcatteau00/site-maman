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
    path: "/LaPsychotherapieAdulte",
    name: "LaPsychotherapieAdulte",
    component: () =>
      import(
        /* webpackChunkName: "about" */ "../views/LaPsychotherapieAdulteView.vue"
      ),
  },
  {
    path: "/LaPsychotherapieFamilliale",
    name: "LaPsychotherapieFamilliale",
    component: () =>
      import(
        /* webpackChunkName: "about" */ "../views/LaPsychotherapieFamillialeView.vue"
      ),
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
    path: "/LesEntretiensNarratifs",
    name: "LesEntretiensNarratifs",
    component: () =>
      import(
        /* webpackChunkName: "about" */ "../views/LesEntretiensNarratifsView.vue"
      ),
  },
  {
    path: "/Aujourdhui",
    name: "Aujourdhui",
    component: () =>
      import(/* webpackChunckName: "about" */ "../views/AujourdhuiView.vue"),
  },
  {
    path: "/MesFormations",
    name: "MesFormations",
    component: () =>
      import(/* webpackChunckName: "about" */ "../views/MesFormationsView.vue"),
  },
  {
    path: "/PageEnConstruction",
    name: "PageEnConstruction",
    component: () =>
      import(
        /* webpackChunkName: "about" */ "../views/PageEnConstructionView.vue"
      ),
  },
  {
    path: "/MentionsLeg",
    name: "MentionsLeg",
    component: () =>
      import(/*webpackChunckName : "about" */ "../views/MentionsLegView.vue"),
  },
  {
    path: "/CGU",
    name: "CGU",
    component: () =>
      import(/*webpackChunckName: "about" */ "../views/CGUView.vue"),
  },
  {
    path: "/LaPsychotherapieAdos",
    name: "LaPsychotherapieAdos",
    component: () =>
      import(
        /*webpackChunckName: "about" */ "../views/LaPsychotherapieAdosView.vue"
      ),
  },
  {
    path: "/LaPsychotherapieEnfants",
    name: "LaPsychotherapieEnfants",
    component: () =>
      import(
        /*webpackChunckName: "about"*/ "../views/LaPsychotherapieEnfantsView.vue"
      ),
  },
  {
    path: "/LesModalitesDeLaRencontre",
    name: "LesModalitesDeLaRencontre",
    component: () =>
      import(
        /*webpackChunckName : "about"*/ "../views/LesModalitesDeLaRencontreView.vue"
      ),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
