<template>
  <div class="gcontainer">
    <div class="gbandeau1"></div>
    <div class="gitem1">
      <h1 class="gtitle">Mes formations universitaires</h1>
      <p class="instructions">
        Glissez la souris sur la formation qui vous intéresse pour découvrir où
        je l'ai réalisé.
      </p>
    </div>
    <div class="gitem2">
      <div class="imgcont order-1">
        <img class="img1" src="@/images/Fleurs-séparateur/Fleur-1.svg" />
      </div>
      <div class="group order-2">
        <div class="tlink">
          <h2 class="h2">
            Master 2 en psychopathologie clinique et psychanalyse
          </h2>
        </div>
        <div class="hdropdown">
          <p class="drop">
            Université Lyon 2 Formation à Partir de la Pratique (FPP)
          </p>
        </div>
      </div>
      <div class="group order-3">
        <div class="tlink">
          <h2 class="h2">DU Enfance, Santé, Société</h2>
        </div>
        <div class="hdropdown">
          <p class="drop">Université Bordeaux 2</p>
        </div>
      </div>
      <div class="imgcont order-6">
        <img class="img1" src="@/images/Fleurs-séparateur/Fleur-2.svg" />
      </div>
      <div class="group order-4">
        <div class="tlink">
          <h2 class="h2">DU Psychologie interculturelle</h2>
        </div>
        <div class="hdropdown">
          <p class="drop">Université Bordeaux 2</p>
        </div>
      </div>
      <div class="group order-5">
        <div class="tlink">
          <h2 class="h2">Diplôme d'Etat d'Educatrice Spécialisée</h2>
        </div>
        <div class="hdropdown">
          <p class="drop">IRTS Aquitaine VAE</p>
        </div>
      </div>
    </div>
    <div class="gitem3">
      <h1 class="gtitle">Mes formations professionnalisantes</h1>
    </div>
    <div class="gitem4">
      <div class="imgcont order-1">
        <img class="img1" src="@/images/Fleurs-séparateur/Fleur-3.svg" />
      </div>
      <div class="group order-2">
        <div class="tlink">
          <h2 class="h2">Formation de praticienne en thérapie relationnelle</h2>
        </div>
        <div class="hdropdown">
          <p class="drop">
            Arbre de vie <br />
            Cycle de quatre ans (580h)
          </p>
        </div>
      </div>
      <div class="group order-3">
        <div class="tlink">
          <h2 class="h2">Formation à la thérapie familiale psychanalytique</h2>
        </div>
        <div class="hdropdown">
          <p class="drop">
            APSYFA <br />Cycle de trois ans, en cours de finalisation (120h)
          </p>
        </div>
      </div>
      <div class="imgcont order-5">
        <img class="img1" src="@/images/Fleurs-séparateur/Fleur-4.svg" />
      </div>
      <div class="group order-4">
        <div class="tlink">
          <h2 class="h2">
            Formation à l'observation du nourrisson selon la méthode Esther Bick
          </h2>
        </div>
        <div class="hdropdown">
          <p class="drop">ARIP <br />Cycle de deux ans (128h)</p>
        </div>
      </div>
    </div>
    <div class="gitem5">
      <div class="imgcont order-1">
        <img class="img1" src="@/images/Fleurs-séparateur/Fleur-5.svg" />
      </div>
      <div class="group order-2">
        <div class="tlink">
          <h2 class="h2">Formation de praticienne narrative</h2>
        </div>
        <div class="hdropdown">
          <p class="drop">
            Fabrique narrative <br />
            Cycle d'un an (112h+21h)
          </p>
        </div>
      </div>
      <div class="imgcont order-5">
        <img class="img1" src="@/images/Fleurs-séparateur/Fleur-7.svg" />
      </div>
      <div class="group order-3">
        <div class="tlink">
          <h2 class="h2">Formation au psychodrame individuel en groupe</h2>
        </div>
        <div class="hdropdown">
          <p class="drop">CIRCE (115h)</p>
        </div>
      </div>
      <div class="group order-4">
        <div class="tlink">
          <h2 class="h2">
            Travailler avec les voix et autres expériences dites « psychotiques
            » dans la perspective du rétablissement
          </h2>
        </div>
        <div class="hdropdown">
          <p class="drop">Réseau d'Entendeurs de Voix (21h)</p>
        </div>
      </div>
    </div>
    <div class="gbandeau2"></div>
  </div>
</template>

<script>
import { useHead } from "@unhead/vue";
useHead({
  title: "Mes formations",
  meta: [
    {
      name: "description",
      content:
        "Découvrez mes différentes formations universitaires et professionnalisantes en psychologie et psychothérapie, ainsi que les organismes où je les ai réalisées. Formation à la thérapie relationnelle, formation à la thérapie familiale psychanalytique, formation à l'observation du nourrisson selon la méthode Esther Bick, et bien d'autres.",
    },
    {
      name: "keywords",
      content:
        "formations universitaires, formations professionnalisantes, psychologie, psychothérapie, thérapie relationnelle, thérapie familiale psychanalytique, observation du nourrisson, approche narrative, psychodrame individuel en groupe, approche narrative collective, voix psychotiques, rétablissement, arbre de vie, APSYFA, ARIP, Fabrique Narrative, CIRCE, REV",
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
  name: "MesFormations",
};
</script>

<style scoped>
.gcontainer {
  @apply relative top-36 grid grid-cols-12 gap-3 bg-pale;
}
.gbandeau1 {
  @apply col-span-1 row-span-6 col-start-1 row-start-1;
}
.gbandeau2 {
  @apply col-span-1 row-span-6 col-start-12 row-start-1;
}
.gtitle {
  @apply text-vert text-3xl text-center my-8;
}
.gitem1 {
  @apply col-span-10 col-start-2 row-span-1 row-start-1;
}
.gitem2 {
  @apply col-span-10 col-start-2 row-span-1 row-start-2 lg:flex lg:space-x-8 lg:place-content-center;
}
.gitem3 {
  @apply col-span-10 col-start-2 row-span-1 row-start-3;
}
.gitem4 {
  @apply col-span-10 col-start-2 row-span-1 row-start-4 lg:flex lg:space-x-8 lg:place-content-center;
}
.gitem5 {
  @apply col-span-10 col-start-2 row-span-1 row-start-5 lg:flex lg:space-x-8 lg:place-content-center;
}
.hdropdown {
  @apply hidden group-hover:block place-content-center;
}
.group {
  @apply text-vert text-lg border-2 border-vert h-64 w-64 text-center rounded-3xl mx-auto my-4;
}
.drop {
  @apply border-t-2 border-vert h-32 flex place-content-center items-center;
}
.tlink {
  @apply h-32 text-center flex items-center place-content-center;
}
.instructions {
  @apply text-center text-vert text-xl;
}
.imgcont {
  @apply lg:w-1/12 self-center;
}
.img1 {
  @apply h-40 m-auto aspect-square;
}
</style>
