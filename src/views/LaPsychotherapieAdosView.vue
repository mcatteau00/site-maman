<template>
  <div class="gcontainer">
    <div class="gitem1">
      <h1 class="gtitle">La psychothérapie d'adolescents</h1>
    </div>
    <div class="gitem2">
      <div class="imgcont">
        <img class="img1" src="@/images/Silhouette/Silhouette-4.svg" />
      </div>
      <div class="textcont">
        <p class="">
          L'adolescence et le début de l'âge adulte sont des moments de
          profondes transformations tant corporelles que psychiques, qu'il peut
          être difficile de traverser seul quand ils provoquent un trop plein de
          souffrance. La psychothérapie offre à l'odolescent un chemin de
          compréhension de lui-même mais aussi d'expression de ses émotions face
          à l'autre qui peut apaiser sa souffrance et ses symptômes.
        </p>
      </div>
    </div>
    <div class="gitem3">
      <div class="imgcont">
        <img class="img1" src="@/images/Fleurs-séparateur/séparateur-4.svg" />
      </div>
      <div class="textcont">
        <p>
          La première séance se déroule généralement avec l'adolesent et ses
          parents. Puis, si la famille et l'adolescent sont d'accord,
          l'adolescent est rencontré seul lors d'une seconde séance afin qu'il
          puisse s'exprimer plus librement. Si l'adolescent n'est pas demandeur,
          nous pouvons explorer ensemble d'autres possibilités de soins.
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
  @apply col-span-10 row-start-2 mt-10 md:flex md:flex-row-reverse;
}
.gitem3 {
  @apply col-span-10 row-start-4 md:flex;
}
.gtitle {
  @apply text-vert text-3xl text-center mt-4;
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
