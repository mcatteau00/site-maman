<template>
  <div class="gcontainer">
    <div class="gbandeau1"></div>
    <div class="gitem1">
      <h1 class="gtitle">Comment ?</h1>
    </div>
    <div class="gitem2">
      <div class="imgcont">
        <img class="img1" src="@/images/separateur-1.jpg" />
      </div>
      <div class="textcont">
        <p>
          C'est au travers de l'espace de la rencontre, de la conscience du vécu
          dans l'instant, de l'association libre que peut advenir
          transformation, libération et mieux-être.
        </p>
      </div>
    </div>
    <div class="gitem3">
      <div class="imgcont">
        <img class="img2" src="@/images/separateur-2.jpg" />
      </div>
      <div class="textcont">
        <p>
          Aussi, le temps des consultations est précieux car il permet
          d'exprimer une parole libérée des injonctions sociales ou des
          considérations morales.
        </p>
      </div>
    </div>
    <div class="gitem4">
      <div class="imgcont">
        <img class="img3" src="@/images/photo_5.jpg" />
      </div>
      <div class="textcont">
        <p>
          Dans cet espace protecteur de la rencontre, nous ne sommes ni jugés,
          ni étiquetés. Il est possible d'entamer un questionnement plus intime,
          dégageant une voie par délà nos émotions et nos souffrances. Nous
          pouvons alors retrouver le sens de ce qui est bon et juste pour nous.
        </p>
      </div>
    </div>
    <div class="gitem5">
      <div class="imgcont">
        <img class="img1" src="@/images/separateur-4.jpg" />
      </div>
      <div class="textcont">
        <p>
          Avec les enfants, les médiations thérapeutiques et créatives telles
          que le jeu, le dessin, le chant sont un support à la rencontre et à
          l'expression de leur univers intérieur.
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
  @apply col-span-1 row-span-5 col-start-1 row-start-1;
}
.gbandeau2 {
  @apply col-span-1 row-span-5 col-start-12 row-start-1;
}
.gtitle {
  @apply text-vert text-3xl text-center my-8;
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
.img3 {
  @apply h-40 rounded-3xl m-auto;
}
</style>
