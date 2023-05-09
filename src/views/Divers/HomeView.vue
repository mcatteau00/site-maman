<template>
  <div class="gcontainer">
    <div class="gitem2">
      <h1 class="gtitle">Cabinet de psychothérapie & psychologie clinique</h1>
      <p class="test">
        Je m'appelle Céline Allafort. Je vous souhaite la bienvenue sur mon site
        internet, en attendant d'avoir le plaisir de vous rencontrer et de vous
        accompagner.
      </p>
    </div>
    <div class="gitem3">
      <div class=""></div>
      <div class="imgcont2">
        <img class="logo" src="@/images/logo.png" />
      </div>
      <div class="textcont">
        <p class="test2">Ensemble, nous pourrons tenter de<br /></p>
        <p class="citation">
          "Faire de l’interruption, un nouveau chemin,
          <br />
          faire de la chute, un pas de danse,
          <br />
          faire de la peur, un escalier,
          <br />
          du rêve, un pont,
          <br />
          de la recherche…
          <br />
          une rencontre",<br />
        </p>
        <p class="test2">
          comme nous y invite <br />
          Fernando Pessoa dans <br />"Le livre de l'intranquillité"
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
  title: "Accueil",
  meta: [
    {
      name: "description",
      content:
        "Sur le site du Cabinet de psychothérapie & psychologie clinique dirigé par Céline Allafort, découvrez notre approche pour vous accompagner dans votre cheminement personnel. Nous vous proposons une citation inspirante de Fernando Pessoa et vous invitons à nous rencontrer.",
    },
    {
      name: "keywords",
      content:
        "Cabinet de psychothérapie, psychologie clinique, Céline Allafort, accompagnement personnel, cheminement, Fernando Pessoa",
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
  name: "HomeView",
};
</script>

<style scoped>
.gcontainer {
  @apply relative top-40 grid grid-cols-12 bg-pale;
}

.gbandeau1 {
  @apply col-start-1 row-start-1 row-span-6 col-span-1;
}
.gbandeau2 {
  @apply col-span-1 col-start-12 row-start-1 row-span-6;
}
.gbandeau3 {
  @apply col-span-12 col-start-1 row-span-1 md:h-64 lg:h-28 row-start-6;
}

.gitem2 {
  @apply col-span-10 row-start-1 row-span-1;
}
.gtitle {
  @apply text-vert text-4xl text-center m-5;
}
.gitem3 {
  @apply row-start-2 row-span-1 col-span-10 md:p-0 md:flex md:place-content-center;
}
.logo {
  @apply h-auto md:h-96;
}
.citation {
  @apply text-vert text-lg text-center italic md:text-right md:align-middle;
}
.textcont {
  @apply text-vert text-center text-xl indent-4 md:px-10 lg:px-20 place-self-center;
}
.imgcont {
  @apply md:w-1/6 md:m-auto;
}
.img1 {
  @apply h-32 m-auto;
}
.test {
  @apply text-center text-2xl text-vert;
}
.test2 {
  @apply text-right text-lg text-vert;
}
</style>
