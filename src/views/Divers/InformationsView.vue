<template>
  <div class="gcontainer">
    <div class="gitem1">
      <h1 class="gtitle">Informations et tarifs</h1>
    </div>
    <div class="gitem2">
      <div class="imgcont">
        <img class="img1" src="@/images/Fleurs-séparateur/Fleur-1.svg" />
      </div>
      <div class="textcont">
        <h2 class="gtitle2">Informations</h2>
        <br />
        <p>
          Nous pouvons nous retrouver à mon cabinet et/ou réaliser des
          consultations en visio. <br />Nous définirons ensemble les modalités
          d'accompagnement qui vous conviennent en fonction des changements que
          vous souhaitez dans votre vie et/ou de la problématique que vous
          rencontrez.
        </p>
        <p>
          Je travaille au cabinet le mardi toute la journée, le mercredi matin
          et le jeudi après-midi.
        </p>
      </div>
    </div>
    <div class="gitem3">
      <div class="imgcont">
        <img class="img1" src="@/images/Fleurs-séparateur/Fleur-2.svg" />
      </div>
      <div class="textcont">
        <h2 class="gtitle2">Tarifs</h2>
        <br />
        <p>
          <em class="italic font-semibold">
            - Consultation individuelle, adulte, enfant ou adolescent :</em
          >
          <br />60€ pour 45 minutes environ. <br /><br />
          <em class="italic font-semibold">
            - Consultation de couple ou de famille :</em
          >
          <br />
          80€ pour une heure environ
        </p>
      </div>
    </div>
    <div class="gitem4">
      <div class="imgcont">
        <img class="img1" src="@/images/Fleurs-séparateur/Fleur-3.svg" />
      </div>
      <div class="textcont">
        <p>
          Toute consultation manquée ou non annulée 48h à l'avance est due, sauf
          cas de force majeure. <br /><em class="font-bold italic"
            >Paiement possible en chèque, par carte bleue, par virement ou en
            espèces.</em
          >
        </p>
      </div>
    </div>
    <div class="gitem5">
      <div class="imgcont">
        <img class="img1" src="@/images/Fleurs-séparateur/Fleur-4.svg" />
      </div>
      <div class="textcont">
        <p>
          Les consultations avec un psychologue ne font pas l'objet d'un
          remboursement par la sécurité sociale, en dehors du service "Mon psy"
          auquel je n'ai pas adhéré, comme nombre de mes collègues.
          <br />
          Cependant, certaines mutuelles prennent en charge un certain nombre de
          consultations. <br />Renseignez-vous auprès de votre mutuelle.
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
  title: "Informations et tarifs",
  meta: [
    {
      name: "description",
      content:
        "Consultez les informations et tarifs pour des consultations en psychothérapie et psychologie clinique avec Céline Allafort. Choisissez entre des consultations en personne ou en visio. Tarifs de 60€ pour une consultation individuelle et de 80€ pour une consultation de couple ou de famille. Paiement possible par chèque, carte bleue, virement ou espèces. Renseignez-vous auprès de votre mutuelle pour une éventuelle prise en charge.",
    },
    {
      name: "keywords",
      content:
        "Cabinet de psychothérapie, psychologie clinique, Céline Allafort, consultations en personne, consultations en visio, tarifs, consultation individuelle, consultation de couple, consultation de famille, paiement, chèque, carte bleue, virement, espèces, mutuelle, prise en charge",
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
  name: "InformationsView",
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
</style>
