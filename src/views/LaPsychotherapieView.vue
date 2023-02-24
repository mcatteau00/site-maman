<template>
  <div class="gcontainer">
    <div class="gbandeau1"></div>
    <div class="gitem1">
      <h1 class="gtitle">La Psychothérapie ?</h1>
    </div>
    <div class="gitem2">
      <div class="imgcont">
        <img class="img1" src="@/images/separateur-1.jpg" />
      </div>
      <div class="textcont">
        <p class="">
          Les raisons qui nous amènent à pousser la porte d'un psychologue
          psychothérapeute sont diverses. Mais c'est souvent la sensation
          d'impasse.
        </p>
        <p class="">
          Nous avons alors le sentiment d'être entravés par le poids de notre
          histoire, de notre environnement ou des événements douloureux que nous
          traversons. <br />
          Nous nous sentons alors incapables de poursuivre notre chemin avec ce
          que nous connaissons de nous-mêmes.
        </p>
      </div>
    </div>
    <div class="gitem3">
      <div class="imgcont">
        <img class="img2" src="@/images/separateur-3.jpg" />
      </div>
      <div class="textcont">
        <p>
          La psychothérapie permet d'explorer, accompagné d'un autre, les désirs
          qui nous portent en avant mais aussi les peurs qui nous paralysent
          tant individuellement que dans les liens que nous tissons au sein de
          nos familles. Ainsi la psychothérapie est une rencontre, favorisant la
          poursuite de notre chemin singulier.
        </p>
      </div>
    </div>
    <div class="gitem4">
      <div class="imgcont">
        <img class="img1" src="@/images/separateur-4.jpg" />
      </div>
      <div class="textcont">
        <p class="">
          En lien avec un(e) psychologue bienveillant(e), nous pouvons
          entreprendre un voyage qui nous mène à davantage de liberté et
          d'authenticité. Il nous est alors possible de dépasser les attentes
          des autres, de sortir des répétitions qui nous enferment et d'accéder
          à une vie plus épanouie, malgré les aléas de la vie.
        </p>
      </div>
    </div>
    <div class="gbandeau2"></div>
  </div>
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
.gitem1 {
  @apply col-span-10 col-start-2 row-start-1;
}
.gtitle {
  @apply text-vert text-3xl text-center mt-4;
}
.gitem2 {
  @apply col-span-10 row-start-2 mt-10 md:flex md:flex-row-reverse;
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
.gitem3 {
  @apply col-span-10 row-start-4 md:flex;
}
.img2 {
  @apply h-20 m-auto aspect-square;
}
.gitem4 {
  @apply col-span-10 row-start-5 md:flex md:flex-row-reverse;
}
</style>
