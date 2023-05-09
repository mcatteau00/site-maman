<template>
  <div class="gcontainer">
    <div class="gitem1">
      <h1 class="gtitle">La Psychothérapie Familiale</h1>
    </div>
    <div class="gitem2">
      <div class="imgcont">
        <img class="img1" src="@/images/Silhouette/Silhouette-2.svg" />
      </div>
      <div class="textcont">
        <p>
          J'ai une sensibilité particulière à la famille, espace de sociabilité
          originel où nous tissons nos premiers liens affectifs et où nous nous
          construisons. Parfois, des histoires douloureuses, la maladie, la mort
          ou les difficultés de la vie rendent difficile l'établissement des
          premiers liens ou leur développement harmonieux au fil des ans.
        </p>
      </div>
    </div>
    <div class="gitem3">
      <div class="imgcont">
        <img class="img1" src="@/images/Fleurs-séparateur/séparateur-1.svg" />
      </div>
      <div class="textcont">
        <p>
          Parfois la famille traverse un bouleversement qui modifie les
          équilibres familiaux. Cela peut être un déménagement, une maladie, un
          deuil et bien d'autres événements encore.
        </p>
        <p>
          La naissance d'un enfant est l'un de ces bouleversements.En effet,
          tisser les premiers liens avec un enfant qui naît, n'est pas toujours
          simple. Parfois, on l'avait rêvé différent. L'instinct
          maternel/paternel peut ne pas être aussi fort que ce qu'on avait
          imaginé.
        </p>
      </div>
    </div>
    <div class="gitem4">
      <div class="imgcont">
        <img class="img1" src="@/images/Silhouette/Silhouette-1.svg" />
      </div>
      <div class="textcont">
        <p>
          En France, on peut se retrouver isolé, loin de sa famille, et
          désemparé pendant la grossesse et les premiers temps de la vie. La
          psychothérapie peut alors soutenir la mère, mais aussi le père dans
          l'accueil de leur enfant. La psychothérapie est l'ouverture d'un
          espace protecteur pour explorer les questionnements et les émotions
          que la naissance suscite.
        </p>
      </div>
    </div>
    <div class="gitem5">
      <div class="imgcont">
        <img class="img1" src="@/images/Silhouette/Silhouette-16.png" />
      </div>
      <div class="textcont">
        <p>
          D'autres fois, la souffrance d'un enfant ou d'un parent a des
          répercussions sur l'ensemble des membres de la famille. Elle peut même
          être liée à une souffrance plus globale du groupe familial qui se
          traduit principalement chez l'un de ses membres. La famille vit une
          crise ou au contraire se replie sur un fonctionnement figé,
          insatisfaisant pour chacun. Certains des membres de la famille
          s'isolent et désinvestissent la sphère familiale. D'autres sont
          irritables ou expriment leur souffrance par des problèmes scolaires,
          des troubles du sommeil ou alimentaires ou encore des difficultés de
          séparation. C'est alors les liens qui sont en souffrance.
        </p>
      </div>
    </div>
    <div class="gitem6">
      <div class="imgcont">
        <img class="img1" src="@/images/Silhouette/Silhouette-15.png" />
      </div>
      <div class="textcont">
        <p>
          Ces manifestations de souffrance si elles semblent parfois n'émaner
          que d'un membre de la famille peuvent être transformées grâce aux
          modifications des interactions au sein du groupe familial. Dans ce
          cas-là, la thérapie familiale est indiquée car elle peut soutenir et
          favoriser la transformation des interactions au sein de la famille.
          Elle donne l'opportunité de prendre conscience des dysfonctionnements
          et des difficultés de chacun afin que des réaménagements des liens
          soient possibles. Mais parfois, il est préférable d'offrir un espace
          individuel à l'enfant comme à l'adolescent.
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
  title: "La psychothérapie familiale",
  meta: [
    {
      name: "description",
      content:
        "La psychothérapie familiale peut aider à surmonter les difficultés liées aux relations familiales et à la naissance d'un enfant. Cette thérapie peut soutenir et favoriser la transformation des interactions au sein de la famille, permettant des réaménagements des liens. Découvrez comment la thérapie peut aider votre famille à traverser les périodes difficiles.",
    },
    {
      name: "keywords",
      content:
        "Psychothérapie familiale, relations familiales, naissance, enfant, thérapie, interactions familiales, réaménagement des liens, périodes difficiles",
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
  name: "LaPsychotherapieFamilliale",
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
  @apply col-span-10 row-start-2 md:flex md:flex-row-reverse;
}
.gitem3 {
  @apply col-span-10 row-start-3 md:flex;
}
.gitem4 {
  @apply col-span-10 row-start-4 md:flex md:flex-row-reverse;
}
.gitem5 {
  @apply col-span-10 row-start-5 md:flex;
}
.gitem6 {
  @apply col-span-10 row-start-6 md:flex md:flex-row-reverse;
}
.gtitle {
  @apply text-vert text-3xl text-center my-8;
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
</style>
