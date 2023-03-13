<template>
  <div class="gcontainer">
    <div class="gitem1">
      <h1 class="gtitle">Les entretiens narratifs</h1>
    </div>
    <div class="gitem2">
      <div class="imgcont">
        <img class="img2" src="@/images/Photos/Photo-5.jpg" />
      </div>
      <div class="textcont">
        <p class="">
          Parfois, nous ne souhaitons pas entreprendre une psychothérapie,
          chemin qui nous semble trop long. Mais nous avons besoin d'un appui,
          d'une écoute bienveillante pour dépasser un problème spécifique, un
          événement de vie particulièrement difficile. Un accompagnement
          psychologique plus court est alors possible.
        </p>
      </div>
    </div>
    <div class="gitem3">
      <div class="imgcont">
        <img class="img1" src="@/images/Fleurs-séparateur/séparateur-4.svg" />
      </div>
      <div class="textcont">
        <p class="">
          Pour ma part, je m'appuie dans ce type d'accompagnement sur l'approche
          narrative qui aide à clarifier nos valeurs, à faire des choix et à
          renforcer nos ressources internes.
        </p>
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
  @apply col-span-1 row-span-5 col-start-1 row-start-1;
}
.gbandeau2 {
  @apply col-span-1 row-span-5 col-start-12 row-start-1;
}
.gbandeau3 {
  @apply col-span-12 col-start-1 row-span-1 row-start-5 h-28;
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
.img2 {
  @apply h-48  rounded-3xl aspect-square m-auto;
}
</style>
