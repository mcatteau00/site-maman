<template>
  <body class="">
    <div class="gcontainer">
      <div class="gbandeau1"></div>
      <div class="gitem1">
        <h1 class="gtitle">Qui suis je ?</h1>
      </div>
      <div class="gitem2">
        <div class="imgcont">
          <img class="img1" src="@/images/separateur-5.jpg" />
        </div>
        <div class="textcont">
          <h2 class="gtitle2">Aujourd'hui</h2>
          <br />
          <p>
            Je suis psychologue clinicienne. Mes expériences, associées aux
            apprentissages universitaires, me permettent de construire avec mes
            patients leurs propres réponses et de les aider à sortir du
            sentiment d'impasse en envisageant leur champ des possibles.
          </p>
        </div>
      </div>
      <div class="gitem3">
        <div class="imgcont">
          <img class="img1" src="@/images/separateur-6.jpg" />
        </div>
        <div class="textcont">
          <p>
            Je travaille à mi-temps dans le service de neuropédiatrie de
            l'hopital des enfants de Bordeaux. J'y accompagne des enfants dont
            la vie est impactée par des pathologies neurologiques mais aussi des
            familles confrontées à la maladie de leur enfant.
          </p>
        </div>
      </div>
      <div class="gitem4">
        <div class="textcont">
          <p>
            Et j'ai ouvert ce cabinet de soin psychothérapique en libéral, pour
            vous accueillir et vous accompagner sur votre chemin de vie.
          </p>
        </div>
      </div>
      <div class="gbandeau2"></div>
    </div>
  </body>
</template>

<script></script>

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
.gtitle {
  @apply text-vert text-3xl text-center my-8;
}
.gtitle2 {
  @apply text-center text-xl font-bold italic;
}
.imgcont {
  @apply md:w-1/2 md:m-auto;
}
.img1 {
  @apply h-32 m-auto aspect-square;
}
.textcont {
  @apply text-vert text-justify text-lg pt-4 indent-4 md:w-1/2 md:px-10 lg:px-20;
}
.img2 {
  @apply h-20 m-auto aspect-square;
}
.gitem1 {
  @apply col-span-10 row-span-1 row-start-1 col-start-2;
}
.gitem2 {
  @apply col-span-10 row-span-1 row-start-2 col-start-2 md:flex md:flex-row-reverse;
}
.gitem3 {
  @apply col-span-10 row-span-1 row-start-3 col-start-2 md:flex;
}
.gitem4 {
  @apply col-span-10 row-span-1 row-start-4 col-start-2 md:flex;
}
</style>
