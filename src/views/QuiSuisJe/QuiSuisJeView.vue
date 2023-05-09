<template>
  <div class="gcontainer">
    <div class="gitem1">
      <h1 class="gtitle">Qui suis je ?</h1>
    </div>
    <div class="gitem2">
      <div class="imgcont">
        <img class="img2" src="@/images/Photos/Photo_maman.jpg" />
      </div>
      <div class="textcont">
        <h2 class="gtitle2">Mon cheminement</h2>
        <br />
        <p>
          Il est souvent difficile de reconnaître que nous avons besoin d'aide.
          Il faut du courage pour parcourir notre histoire et évoquer les
          souffrances qui nous entravent. Il est important alors de se sentir en
          confiance pour oser parcourir ce chemin. C'est pourquoi, faire le
          choix de la personne qui nous accompagnera, nécessite du temps et de
          l'écoute de soi-même. Pour vous aider, au moment où vous devez faire
          ce choix, il m'a semblé important de me présenter.
        </p>
      </div>
    </div>
    <div class="gitem3">
      <div class="imgcont">
        <img class="img1" src="@/images/Fleurs-séparateur/Fleur-1.svg" />
      </div>
      <div class="textcont">
        <p>
          J'ai effectué la première partie de ma carrière comme intervenante
          sociale. Pendant près de 15 ans, j'ai travaillé auprès de demandeurs
          d'asile souffrant des conséquences de traumatismes graves. Je les ai
          accompagnés dans la mise en mots et en récit de leur histoire.
        </p>
      </div>
    </div>
    <div class="gitem4">
      <div class="imgcont">
        <img class="img1" src="@/images/Fleurs-séparateur/Fleur-2.svg" />
      </div>
      <div class="textcont">
        <p>
          Mais plus globalement, je les ai aidés à accepter leurs différences,
          leurs manques ainsi que les deuils qu'ils affrontaient. Ils ont pu
          alors se percevoir comme des survivants plutôt que comme des
          victimes.<br />
          Puis je les ai épaulés afin qu'ils prennent conscience et confortent
          leurs ressources et potentiels, sortent de la honte et puissent
          retisser des liens de confiance avec les autres.
        </p>
      </div>
    </div>
    <div class="gitem5">
      <div class="imgcont">
        <img class="img1" src="@/images/Fleurs-séparateur/Fleur-3.svg" />
      </div>
      <div class="textcont">
        <p>
          J'ai également co-animé des ateliers parents-bébés et parents-enfants,
          ainsi que des groupes de parole avec des intervenants - psychologue,
          psychomotricienne, anthropologues, interprètes - formés à l'approche
          transculturelle du soin. Je m'y suis formée également.
        </p>
      </div>
    </div>
    <div class="gitem6">
      <div class="imgcont">
        <img class="img1" src="@/images/Fleurs-séparateur/Fleur-4.svg" />
      </div>
      <div class="textcont">
        <p>
          Cette expérience passionnante m'a appris à me décaler de mes propres
          représentations du monde. Elle a aussi renforcé ma curiosité et mon
          désir de comprendre la façon de chacun d'être au monde. <br />
        </p>
      </div>
    </div>
    <div class="gitem7">
      <div class="imgcont">
        <img class="img1" src="@/images/Fleurs-séparateur/Fleur-7.svg" />
      </div>
      <div class="textcont">
        <p>
          J'ai alors désiré devenir psychologue clinicienne et j'ai repris des
          études universitaires. Et comme j'aime beaucoup les chemins de
          traverse, plus respectueux de la singularité de chacun, cela a pris un
          peu de temps…
        </p>
        <p>
          En parallèle, j'ai acquis une expérience clinique au sein du service
          de soins transculturels du CHU de Bordeaux. Là, durant environ cinq
          ans, j'ai été co-thérapeute, thérapeute, puis chercheuse-associée.
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
  title: "Qui suis je ?",
  meta: [
    {
      name: "description",
      content:
        "Découvrez l'importance de reconnaître le besoin d'aide et de choisir la bonne approche et personne pour vous accompagner dans votre cheminement personnel. Apprenez-en plus sur l'approche transculturelle du soin et l'expérience clinique de cette psychologue clinicienne.",
    },
    {
      name: "keywords",
      content:
        "Reconnaître le besoin d'aide, courage, parcours personnel, approche thérapeutique, choix de la personne accompagnante, approche transculturelle du soin, expérience clinique, psychologie clinique.",
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
  name: "QuiSuisJe",
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
  @apply col-span-10 row-span-1 row-start-1 col-start-2;
}
.gitem2 {
  @apply col-span-10 row-span-1 row-start-2 col-start-2 my-4 md:flex md:flex-row-reverse;
}
.gitem3 {
  @apply col-span-10 row-span-1 row-start-3 col-start-2 md:flex;
}
.gitem4 {
  @apply col-span-10 row-span-1 row-start-4 col-start-2 md:flex md:flex-row-reverse;
}
.gitem5 {
  @apply col-span-10 row-span-1 col-start-2 row-start-5 my-5 md:flex;
}
.gitem6 {
  @apply col-span-10 row-span-1 col-start-2 row-start-6 md:flex md:flex-row-reverse;
}
.gitem7 {
  @apply col-span-10 row-span-1 row-start-7 col-start-2 md:flex;
}
.gtitle {
  @apply text-vert text-3xl text-center my-8;
}
.gtitle2 {
  @apply text-center text-xl font-bold italic;
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
  @apply h-64 m-auto rounded-3xl;
}
</style>
