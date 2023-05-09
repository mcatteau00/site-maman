<template>
  <div class="gcontainer">
    <div class="gitem1">
      <h1 class="gtitle">Mentions légales</h1>
    </div>
    <div class="gitem2">
      <div class="textcont">
        <h2 class="gtitle2">Immatriculations</h2>
        <p class="text">SIREN : 947819132</p>
        <p class="text">ADELI : 339333684</p>
        <p class="text">
          Assurance : MACSF numéro de contrat 7993771 96/52 001
        </p>
      </div>
      <div class="textcont">
        <h2 class="gtitle2">Propriétaire</h2>
        <p class="text">
          Céline Allafort, Psychologue clinicienne <br />
          Cabinet Mondésir - 62 Avenue de la Marne - 33700 Mérignac <br />
          06-56-67-62-24 - celine.allafort.pro@gmail.com
        </p>
      </div>
    </div>
    <div class="gitem3">
      <div class="textcont">
        <h2 class="gtitle2">Hébergement Web</h2>
        <p class="text">
          HOSTINGER, UAB Rue Jonavos 60C, Kaunas 44192 Lituanie <br />
          Téléphone : +37064503378 <br />
          E-mail : domains@hostinger.com
        </p>
      </div>
      <div class="textcont">
        <h2 class="gtitle2">Développement Web</h2>
        <p class="text">
          Maël Catteau <br />
          Téléphone : 06-52-57-74-03 <br />
          Email : mael.catteau.pro@gmail.com
        </p>
      </div>
    </div>

    <div class="gitem4">
      <div class="textcont">
        <h2 class="gtitle2">Propriété intellectuelle</h2>
        <p class="text">
          Les photos présentent sur ce site sont la propriété de Céline
          Allafort. Elles ne peuvent pas être utilisées dans un autre contexte.
        </p>
      </div>
      <div class="textcont">
        <h2 class="gtitle2">Conditions générales d'utilisation</h2>
        <p class="text">
          Toute personne qui accède au site www.céline.allafort.com s'engage à
          respecter les conditions générales d'utilisation, disponible ici :<br />
          <RouterLink class="link" :to="{ name: 'CGU' }">CGU</RouterLink>
        </p>
      </div>
    </div>
    <div class="gbandeau1"></div>
    <div class="gbandeau2"></div>
    <div class="gbandeau3"></div>
    <div class="gbandeau4"></div>
    <div class="gbandeau5"></div>
  </div>
</template>

<script>
import { useHead } from "@unhead/vue";
useHead({
  title: "Mentions légales",
  meta: [
    {
      name: "description",
      content:
        "Retrouvez toutes les informations légales et les coordonnées de Céline Allafort, psychologue clinicienne à Mérignac, ainsi que les détails concernant l'immatriculation, l'assurance, l'hébergement web et le développement de son site internet.",
    },
    {
      name: "keywords",
      content:
        "Mentions légales, immatriculations, SIREN, ADELI, assurance, propriétaire, psychologue clinicienne, cabinet, hébergement web, développement web, propriété intellectuelle, photos, illustrations, conditions générales d'utilisation, CGU",
    },
    {
      name: "charset",
      content: "utf-8",
    },
    {
      name: "viewport",
      content: "width=device-width, initial-scale=1.0",
    },
    {
      name: "author",
      content: "Mael CATTEAU/ Celine Allafort",
    },
    {
      name: "robots",
      content: "index, follow",
    },
    {
      name: "format-detection",
      content: "no",
    },
  ],
});
export default {
  name: "MentionsLeg",
};
</script>

<style scoped>
.gcontainer {
  @apply relative top-40 grid grid-cols-12 bg-pale;
  grid-template-rows: repeat(5, auto);
}
.gbandeau1 {
  @apply col-span-1 row-span-5 col-start-1 row-start-1;
}
.gbandeau2 {
  @apply col-span-1 row-span-5 col-start-12 row-start-1;
}
.gbandeau3 {
  @apply col-span-12 row-span-1 row-start-6 h-28 bg-pale;
}
.gitem1 {
  @apply col-span-10 col-start-2 row-start-1;
}
.gitem2 {
  @apply col-span-10 row-start-2 md:flex;
}
.gitem3 {
  @apply col-span-10 row-start-3 md:flex;
}
.gitem4 {
  @apply col-span-10 row-start-4 md:flex;
}
.gtitle {
  @apply text-vert text-3xl text-center m-4;
}
.gtitle2 {
  @apply text-vert text-2xl text-center m-4 font-bold underline;
}
.text {
  @apply text-vert text-lg text-center m-1;
}
.textcont {
  @apply md:w-1/2;
}
.imgb1 {
  @apply h-4 w-3 self-center;
}
.imgb2 {
  @apply h-4 w-4 self-center;
}
.mailtel {
  @apply flex space-x-4;
}
.propriétaire {
  @apply place-content-center;
}
</style>
