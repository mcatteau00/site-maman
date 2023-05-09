<template>
  <div class="gcontainer">
    <div class="gitem1">
      <h1 class="gtitle">La Psychothérapie individuelle d'adulte</h1>
    </div>
    <div class="gitem2">
      <div class="imgcont">
        <img class="img1" src="@/images/Silhouette/Silhouette-10.svg" />
      </div>
      <div class="textcont">
        <p class="">
          Les raisons qui nous amènent à pousser la porte d'un psychologue
          psychothérapeute sont diverses. Mais c'est souvent la sensation
          d'impasse, le sentiment d'être entravés par le poids de notre
          histoire, de notre environnement ou des événements douloureux que nous
          traversons.
        </p>
        <p class="">
          Nous nous sentons alors incapables de poursuivre notre chemin avec ce
          que nous connaissons de nous-mêmes.
        </p>
      </div>
    </div>
    <div class="gitem3">
      <div class="imgcont">
        <img class="img1" src="@/images/Silhouette/Silhouette-19.png" />
      </div>
      <div class="textcont">
        <p>
          La psychothérapie permet d'explorer, accompagné d'un autre, les désirs
          qui nous portent en avant mais aussi les peurs qui nous paralysent
          tant individuellement que dans les liens que nous tissons au sein de
          nos familles. Ainsi la psychothérapie est une rencontre, favorisant la
          poursuite de notre chemin singulier.
        </p>
      </div>
    </div>
    <div class="gitem4">
      <div class="imgcont">
        <img class="img1" src="@/images/Silhouette/Silhouette-11.png" />
      </div>
      <div class="textcont">
        <p class="">
          En lien avec un(e) psychologue bienveillant(e), nous pouvons
          entreprendre un voyage qui nous mène à davantage de liberté et
          d'authenticité. Il nous est alors possible de dépasser les attentes
          des autres, de sortir des répétitions qui nous enferment et d'accéder
          à une vie plus épanouie, malgré les aléas de la vie.
        </p>
      </div>
    </div>
    <div class="gitem5">
      <div class="imgcont">
        <img class="img2" src="@/images/Silhouette/Silhouette-12.png" />
      </div>
      <div class="textcont">
        <p class="">
          C'est au travers de l'espace de la rencontre, de la conscience du vécu
          dans l'instant, de l'association libre que peuvent advenir
          transformation, libération et mieux être.
        </p>
        <p>
          Aussi, le temps des consultations est précieux car il permet
          d'exprimer une parole libérée des injonctions sociales ou des
          considérations morales.
        </p>
      </div>
    </div>
    <div class="gitem6">
      <div class="imgcont">
        <img class="img1" src="@/images/Silhouette/Silhouette-6.svg" />
      </div>
      <div class="textcont">
        <p class="">
          Dans cet espace protecteur de la rencontre, nous ne sommes ni jugés,
          ni étiquetés. Il est possible d'entamer un questionnement plus intime,
          dégageant une voie par-delà nos émotions et nos souffrances. Nous
          pouvons alors retrouver le sens de ce qui est bon et juste pour nous.
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
  title: "La psychothérapie d'adulte",
  meta: [
    {
      name: "description",
      content:
        "La psychothérapie individuelle permet d'explorer les désirs et les peurs qui nous portent en avant, tout en nous offrant un espace protecteur de rencontre. Découvrez comment dépasser les répétitions qui nous enferment et accéder à une vie plus épanouie.",
    },
    {
      name: "keywords",
      content:
        "Psychothérapie individuelle, exploration personnelle, liberté, authenticité, transformation, mieux être, espace de rencontre, jugement, questionnement intime",
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
  name: "LaPsychotherapieAdulte",
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
.gbandeau4 {
  @apply col-span-1 col-start-1 row-span-1 row-start-7;
}
.gbandeau5 {
  @apply col-span-1 col-start-12 row-span-1 row-start-7;
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
.gitem5 {
  @apply col-span-10 row-start-6 md:flex;
}
.gitem6 {
  @apply col-span-10 row-start-7 md:flex md:flex-row-reverse;
}
.gtitle {
  @apply text-vert text-3xl text-center mt-4;
}
.imgcont {
  @apply md:w-1/2 md:m-auto;
}
.textcont {
  @apply text-vert text-justify text-lg pt-4 indent-4 md:w-1/2 md:px-10 lg:px-20;
}
.img1 {
  @apply h-40 m-auto aspect-square;
}
.img2 {
  @apply h-28 m-auto aspect-square;
}
</style>
