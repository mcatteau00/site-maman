<template>
  <h1 class="text-vert text-center text-3xl m-3 p-64">
    Cabinet de psychothérapie & psychologie clinique
  </h1>
  <div class="flex flex-auto">
    <img class="img w-1/3 p-12" src="@/images/Photo_maman.jpg" />
    <div class="container w-2/3">
      <h2 class="text-vert text-center text-3xl m-3">Bienvenue à vous</h2>
      <div class="text">
        Je suis Céline Allafort, psychologue clinicienne et praticienne
        narrative.
        <br />
      </div>
      <div class="text">
        Je suis ravie de vous accueillir sur ce premier espace de rencontre.
        <br />
      </div>
      <div class="text">
        Je serai heureuse de vous recevoir dans mon cabinet, afin qu'ensemble,
        nous puissions prendre soin de vous.
        <br />
      </div>
      <div class="text">Au plaisir de vous accompagner sur votre chemin.</div>
    </div>
  </div>
</template>

<script></script>

<style scoped>
.text {
  @apply text-xl text-justify text-vert w-64;
}
.container {
  @apply space-y-3 m-3;
}
.img {
  @apply max-w-xl h-auto m-3;
}
</style>
