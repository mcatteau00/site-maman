<template>
  <div class="gcontainer">
    <div class="gitem1">
      <div class="titre">
        <h1 class="gtitle">Qui suis je ?</h1>
      </div>
    </div>
    <div class="gitem2">
      <div class="imgcont">
        <h2 class="gtitle2">Aujourd'hui</h2>
        <img class="img1" src="@/images/Fleurs-séparateur/séparateur-2.svg" />
      </div>
      <div class="textcont">
        <p>
          Je suis psychologue clinicienne. Ces expériences, associées aux
          apprentissages universitaires, mais aussi à une psychanalyse
          personnelle, me permettent de construire avec mes patients leurs
          propres réponses et de les aider à sortir du sentiment d'impasse en
          envisageant leur champ des possibles.
        </p>
        <p class="my-4">
          Je travaille à mi-temps dans le service de neuropédiatrie de l'hopital
          des enfants de Bordeaux. J'y accompagne des enfants dont la vie est
          impactée par des pathologies neurologiques mais aussi des familles
          confrontées à la maladie de leur enfant.
        </p>
        <p class="my-4">
          Et j'ai ouvert ce cabinet de soin psychothérapique en libéral, pour
          vous accueillir et vous accompagner sur votre chemin de vie.
        </p>
      </div>
    </div>
    <div class="gbandeau1"></div>
    <div class="gbandeau2"></div>
    <div class="gbandeau3"></div>
  </div>
</template>
<script>
import { useHead } from "@unhead/vue";
useHead({
  title: "Aujourd'hui",
  meta: [
    {
      name: "description",
      content:
        "Je suis psychologue clinicienne à Bordeaux. Découvrez comment je peux vous aider à sortir du sentiment d'impasse et à envisager votre champ des possibles. J'accompagne également des enfants et des familles dans le cadre de pathologies neurologiques.",
    },
    {
      name: "keywords",
      content:
        "psychologue, psychothérapie, neuropédiatrie, pathologies neurologiques, accompagnement thérapeutique, psychodynamie, approches transculturelle, approche narrative, approche thérapeutique familiale, consultation transculturelle, CMPEA",
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
  name: "AuJourdhui",
};
</script>
<style scoped>
.gcontainer {
  @apply relative top-40 grid grid-cols-12 bg-pale;
}
.gbandeau1 {
  @apply col-span-1 row-span-6 col-start-1 row-start-1;
}
.gbandeau2 {
  @apply col-span-1 row-span-6 col-start-12 row-start-1;
}
.gbandeau3 {
  @apply col-span-12 row-span-1 col-start-1 h-28;
}
.gitem1 {
  @apply col-span-10 row-span-1 row-start-1 col-start-2 md:flex md:place-content-center;
}
.gitem2 {
  @apply col-span-10 row-span-1 row-start-2 col-start-2 md:flex md:place-content-center;
}
.gtitle {
  @apply text-vert text-3xl text-center my-12;
}
.gtitle2 {
  @apply text-center text-xl font-bold italic;
}
.titre {
  @apply text-vert text-3xl text-center pt-2 md:self-center md:mx-8;
}
.textcont {
  @apply text-vert text-justify text-lg pt-4 indent-4 md:w-1/2 md:px-10 lg:px-20;
}
.imgcont {
  @apply md:w-1/2 md:m-auto;
}
.img1 {
  @apply h-96 mx-auto my-8;
}
</style>
