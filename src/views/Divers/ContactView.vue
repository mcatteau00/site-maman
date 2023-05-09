<template>
  <div class="gcontainer">
    <div class="gitem1">
      <h1 class="gtitle">Contact</h1>
    </div>
    <div class="gitem2">
      <div class="imgcont">
        <img class="img1" src="@/images/Photos/Photo-13.jpg" />
      </div>
      <div class="textcont">
        <ul>
          <li class="info">
            <img class="icon" src="@/images/adress_icon.png" />
            <p>
              Cabinet Mondésir <br />
              62 Avenue de la Marne - 33700 Mérignac
            </p>
          </li>
          <li class="info">
            <img class="icon" src="@/images/phone_icon.png" />
            <p>06-56-67-62-24</p>
          </li>
          <li class="info">
            <img class="icon" src="@/images/mail_icon.png" />
            <p>celine.allafort.pro@gmail.com</p>
          </li>
          <li class="info">
            <button name="rdv" type="button" class="button">
              <a
                href="https://www.ibookthedate.fr/psychologue-clinicienne/33700-merignac/allafort-celine"
                >Prendre un rdv en ligne</a
              >
            </button>
          </li>
        </ul>
      </div>
    </div>
    <div class="gitem3">
      <div class="imgcont">
        <img class="img1" src="@/images/Photos/Photo-12.jpg" />
      </div>
      <div class="textcont2">
        <p>
          Le cabinet Mondésir est entièrement dédié aux soins psychiques. <br />
          Il réunit cinq psychiatres et quatre psychologues.
        </p>
        <p>
          Les psychiatres sont notamment Jean-Philippe Chaffiol, Armelle
          Quancard et Dorothée Watine.
        </p>
        <p>
          Les psychologues sont Betty Girard Diot, Audrey Gonzales-Ribeiro,
          Laurie Sintes et moi-même.
        </p>
      </div>
    </div>
    <div class="gitem4">
      <div class="imgcont">
        <img class="img1" src="@/images/Photos/Photo-15.png" />
      </div>
      <div class="textcont3">
        <h2 class="titre">Vous pouvez venir en voiture :</h2>
        <p>
          Le cabinet est situé près de la place Mondésir, à 10 minutes en
          voiture du centre de Mérignac et à 15 du centre ville de Bordeaux.
        </p>
        <h2 class="titre">Vous pouvez aussi venir en bus :</h2>
        <ul>
          <li>- Le 1 et vous arrêter à l'arrêt Mac Carthy</li>
          <li>- Le 42 et vous arrêter à l'arrêt Anatole France</li>
        </ul>
        <h2 class="titre">Et en vélo :</h2>
        <ul>
          <li>
            - Des arceaux sont à votre disposition pour attacher votre vélo
            devant le cabinet
          </li>
          <li>- Une station Vcub se situe sur la place Mondésir</li>
        </ul>
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
  title: "Contact",
  meta: [
    {
      name: "description",
      content:
        "Le cabinet Mondésir est entièrement dédié aux soins psychiques. Il réunit cinq psychiatres et quatre psychologues. Les psychiatres sont notamment Jean-Philippe Chaffiol, Armelle Quancard et Dorothée Watine. Les psychologues sont Betty Girard Diot, Audrey Gonzales-Ribeiro, Laurie Sintes et moi-même.",
    },
    {
      name: "keywords",
      content:
        "Cabinet Mondésir, psychiatres, psychologues, soins psychiques, Bordeaux, Mérignac, adresse, téléphone, email, prendre rendez-vous, voiture, bus, vélo",
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
  name: "ContactView",
};
</script>

<style scoped>
.gcontainer {
  @apply relative top-36 grid grid-cols-12 bg-pale;
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
  @apply col-span-10 col-start-2 row-start-1 row-span-1;
}
.gitem2 {
  @apply col-span-10 row-start-2 col-start-2 row-span-1 lg:flex lg:flex-row-reverse m-4;
}
.gitem3 {
  @apply col-span-10 row-start-3 col-start-2 row-span-1 lg:flex m-4;
}
.gitem4 {
  @apply col-span-10 row-span-1 col-start-2 row-start-4 lg:flex lg:flex-row-reverse m-4;
}
.gtitle {
  @apply text-vert text-3xl text-center my-8;
}
.titre {
  @apply font-semibold underline;
}
.textcont {
  @apply text-vert text-justify text-lg p-4 lg:w-1/2 md:px-10 lg:px-20 flex items-center justify-center;
}
.textcont2 {
  @apply text-vert text-justify text-lg p-4 lg:w-3/4 md:px-10 lg:px-20 items-center justify-center my-12;
}
.textcont3 {
  @apply text-vert text-justify indent-4 text-lg p-4 lg:w-1/2 md:px-10 lg:px-20 items-center justify-center;
}
.info {
  @apply flex space-x-2;
}
.imgcont {
  @apply lg:w-1/2 lg:m-auto flex flex-row-reverse;
}
.icon {
  @apply h-4 my-auto;
}
.img1 {
  @apply h-64 m-auto rounded-3xl;
}
.button {
  @apply bg-vert text-orange h-10 w-64 rounded-3xl mt-5 place-items-center hover:bg-bg hover:underline;
}
</style>
