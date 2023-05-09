<template>
  <div class="gcontainer">
    <div class="gitem1">
      <h1 class="gtitle">La psychothérapie d'enfant</h1>
    </div>
    <div class="gitem2">
      <div class="imgcont">
        <img class="img1" src="@/images/Silhouette/Silhouette-3.svg" />
      </div>
      <div class="textcont">
        <p class="">
          Dans sa vie de tous les jours, l'enfant peut manifester des
          difficultés que ce soit des troubles du sommeil, de l'agressivité, de
          l'agitation ou encore de la tristesse.
        </p>
        <p class="">
          La thérapie offre à l'enfant un espace sécurisant où il peut déployer
          son monde interne et ses difficultés afin d'apprivoiser ses peurs et
          ses angoisses, puis de transformer son rapport à lui-même et aux
          autres.
        </p>
      </div>
    </div>
    <div class="gitem3">
      <div class="imgcont">
        <img class="img2" src="@/images/Photos/Photo-14.png" />
      </div>
      <div class="textcont">
        <p>
          Avec les enfants, l'axe principal de la thérapie est l'attention
          portée aux petits détails qui émergent de façon inattendue dans le jeu
          ou dans la communication verbale. Ce sont des indications permettant
          la compréhension de son monde interne et de ses conflits psychiques
          intérieurs, mais aussi dans ses relations aux autres.
        </p>
      </div>
    </div>
    <div class="gitem4">
      <div class="imgcont">
        <img class="img1" src="@/images/Silhouette/Silhouette-17.png" />
      </div>
      <div class="textcont">
        <p class="">
          Lorsque j'accompagne un enfant, un premier rendez-vous se déroule avec
          les parents qui portent la demande de soin. Puis, l'enfant est reçu
          trois fois seul, si c'est possible pour lui. Un bilan projectif
          permettant de mieux cerner ses difficultés peut lui être proposé dans
          ce cadre. Enfin une proposition de traitement psychothérapique ou de
          thérapie familiale, si besoin, est proposée lors d'un entretien de
          restitution .
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
  title: "La psychothérapie d'enfant",
  meta: [
    {
      name: "description",
      content:
        "La psychothérapie d'enfant : découvrez comment aider votre enfant à apprivoiser ses peurs et angoisses grâce à une thérapie adaptée. Découvrez mon approche centrée sur l'attention aux détails qui émergent dans le jeu ou dans la communication verbale.",
    },
    {
      name: "keywords",
      content:
        "psychothérapie, enfant, thérapie, peurs, angoisses, détails, jeu, communication verbale, accompagnement, parents, bilan projectif, traitement psychothérapique, thérapie familiale",
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
  name: "LaPsychotherapieEnfants",
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
  @apply col-span-10 col-start-2 row-start-1;
}
.gitem2 {
  @apply col-span-10 row-start-2 mt-10 md:flex md:flex-row-reverse;
}
.gitem3 {
  @apply col-span-10 row-start-4 md:flex;
}
.gitem4 {
  @apply col-span-10 row-start-5 md:flex md:flex-row-reverse;
}
.gtitle {
  @apply text-vert text-3xl text-center mt-4;
}
.textcont {
  @apply text-vert text-justify text-lg pt-4 indent-4 md:w-1/2 md:px-10 lg:px-20;
}
.imgcont {
  @apply md:w-1/2 md:m-auto;
}
.img1 {
  @apply h-40 m-auto aspect-square;
}
.img2 {
  @apply h-40 rounded-3xl mx-auto my-14;
}
</style>
