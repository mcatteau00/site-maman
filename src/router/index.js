import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "HomeView",
    component: () =>
      import(/*webpackChunkName: "about" */ "../views/Divers/HomeView.vue"),
  },
  {
    path: "/Contact",
    name: "ContactView",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Divers/ContactView.vue"),
  },
  {
    path: "/LaPsychotherapieAdulte",
    name: "LaPsychotherapieAdulte",
    component: () =>
      import(
        /* webpackChunkName: "about" */ "../views/EntreprendreUnePsychothérapie/LaPsychotherapieAdulteView.vue"
      ),
  },
  {
    path: "/LaPsychotherapieFamiliale",
    name: "LaPsychotherapieFamiliale",
    component: () =>
      import(
        /* webpackChunkName: "about" */ "../views/EntreprendreUnePsychothérapie/LaPsychotherapieFamilialeView.vue"
      ),
  },
  {
    path: "/QuiSuisJe",
    name: "QuiSuisJe",
    component: () =>
      import(
        /* webpackChunkName: "about" */ "../views/QuiSuisJe/QuiSuisJeView.vue"
      ),
  },
  {
    path: "/Informations",
    name: "InformationsView",
    component: () =>
      import(
        /* webpackChunkName: "about" */ "../views/Divers/InformationsView.vue"
      ),
  },
  {
    path: "/Ressources",
    name: "Ressources",
    component: () =>
      import(
        /* webpackChunkName: "about" */ "../views/Divers/RessourcesView.vue"
      ),
  },
  {
    path: "/LesEntretiensNarratifs",
    name: "LesEntretiensNarratifs",
    component: () =>
      import(
        /* webpackChunkName: "about" */ "../views/EntreprendreUnePsychothérapie/LesEntretiensNarratifsView.vue"
      ),
  },
  {
    path: "/Aujourdhui",
    name: "AuJourdhui",
    component: () =>
      import(
        /* webpackChunckName: "about" */ "../views/QuiSuisJe/AujourdhuiView.vue"
      ),
  },
  {
    path: "/MesFormations",
    name: "MesFormations",
    component: () =>
      import(
        /* webpackChunckName: "about" */ "../views/QuiSuisJe/MesFormationsView.vue"
      ),
  },
  {
    path: "/PageEnConstruction",
    name: "PageEnConstruction",
    component: () =>
      import(
        /* webpackChunkName: "about" */ "../views/Divers/PageEnConstructionView.vue"
      ),
  },
  {
    path: "/MentionsLeg",
    name: "MentionsLeg",
    component: () =>
      import(
        /*webpackChunckName : "about" */ "../views/Legal/MentionsLegView.vue"
      ),
  },
  {
    path: "/CGU",
    name: "CGU",
    component: () =>
      import(/*webpackChunckName: "about" */ "../views/Legal/CGUView.vue"),
  },
  {
    path: "/LaPsychotherapieAdos",
    name: "LaPsychotherapieAdos",
    component: () =>
      import(
        /*webpackChunckName: "about" */ "../views/EntreprendreUnePsychothérapie/LaPsychotherapieAdosView.vue"
      ),
  },
  {
    path: "/LaPsychotherapieEnfants",
    name: "LaPsychotherapieEnfants",
    component: () =>
      import(
        /*webpackChunckName: "about"*/ "../views/EntreprendreUnePsychothérapie/LaPsychotherapieEnfantsView.vue"
      ),
  },
  {
    path: "/LesModalitesDeLaRencontre",
    name: "LesModalitesDeLaRencontre",
    component: () =>
      import(
        /*webpackChunckName : "about"*/ "../views/EntreprendreUnePsychothérapie//LesModalitesDeLaRencontreView.vue"
      ),
  },
];
const Router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});
export default Router;
