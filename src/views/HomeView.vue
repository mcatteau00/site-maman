<template>
  <div class="gcontainer">
    <div class="gitem2">
      <h1 class="gtitle">Cabinet de psychothérapie & psychologie clinique</h1>
    </div>
    <div class="gitem3">
      <div class="">
        <img class="logo" src="@/images/logo.jpg" />
      </div>
      <div class="citation">
        <p class="">
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
          une rencontre."
          <br />
          <br />
          Fernando Pessoa,
          <br />
          Le livre de l'intranquillité
        </p>
      </div>
    </div>
    <div class="gitem4">
      <h2 class="gtitle">Bienvenue à vous</h2>
    </div>
    <div class="gitem6">
      <div class="textcont">
        <p>
          Je m'appelle Céline Allafort, je suis psychologue clinicienne et
          praticienne narrative et je suis ravie de pouvoir vous accueillir sur
          ce premier espace de rencontre.
        </p>
        <br />
        <p>
          Je serais heureuse de vous recevoir dans mon cabinet afin qu'ensemble,
          nous puissions prendre soin de vous.
        </p>
        <br />
        <p>Au plaisir de vous accompagner sur votre chemin.</p>
      </div>
    </div>
    <div class="gbandeau1"></div>
    <div class="gbandeau2"></div>
    <div class="gbandeau3"></div>
  </div>
</template>

<script></script>

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
  @apply col-span-12 col-start-1 row-span-1 row-start-6 h-28;
}

.gitem2 {
  @apply col-span-10 row-start-1 row-span-1;
}
.gtitle {
  @apply text-vert text-4xl text-center m-5;
}
.gitem3 {
  @apply row-start-2 row-span-1 col-span-10 m-4 py-10 md:p-0 md:flex md:place-content-center;
}
.logo {
  @apply h-auto md:h-72;
}
.citation {
  @apply text-vert text-lg text-center pt-2 italic md:text-right md:align-middle;
}
.gitem4 {
  @apply row-start-3 row-span-1 col-start-2 col-span-10;
}
.gitem5 {
  @apply row-start-4 row-span-1 col-start-2 col-span-10 md:flex md:flex-row-reverse md:place-content-center;
}
.gitem6 {
  @apply row-start-5 row-span-1 col-start-2 col-span-10 md:flex md:place-content-center;
}
.gtext {
  @apply text-vert text-xl indent-4 text-center p-5 md:mx-4 place-self-center;
}
.textcont {
  @apply text-vert text-center text-xl pt-4 indent-4 md:px-10 lg:px-20;
}
.imgcont {
  @apply md:w-1/6 md:m-auto;
}

.img1 {
  @apply h-32 m-auto;
}
</style>
