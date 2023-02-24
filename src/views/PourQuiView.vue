<template>
  <div class="gcontainer">
    <div class="gbandeau1"></div>
    <div class="gitem1">
      <h1 class="gtitle">Pour qui ?</h1>
    </div>
    <div class="gitem2">
      <div class="imgcont">
        <img class="img1" src="@/images/silhouette1.png" />
      </div>
      <div class="textcont">
        <p class="">
          Les accompagnements que je propose se font en consultation
          individuelle ou familiale. Ils s'adressent à tous, du nourrisson à
          l'adolescent, du jeune adulte au sénior.
        </p>
      </div>
    </div>
    <div class="gitem3">
      <div class="imgcont">
        <img class="img1" src="@/images/silhouette2.png" />
      </div>
      <div class="textcont">
        <p class="">
          J'ai une sensibilité particulière à la famille, espace de sociabilité
          originel où nous tissons nos premiers liens affectifs et où nous nous
          construisons.
        </p>
      </div>
    </div>
    <div class="gitem4">
      <div class="imgcont">
        <img class="img1" src="@/images/silhouette3.png" />
      </div>
      <div class="textcont">
        <p class="">
          Je m'adapte à vos besoins et à vos demandes, en fonction des
          changements que vous souhaitez dans votre vie et face aux
          problématiques que vous rencontrez.
        </p>
      </div>
    </div>
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
  @apply col-span-12 row-span-1 col-start-1 row-start-6 h-36 w-full;
}
.gitem1 {
  @apply col-span-10 col-start-2 row-start-1;
}
.gtitle {
  @apply text-vert text-3xl text-center my-8;
}
.gitem2 {
  @apply col-span-10 row-start-2 md:flex md:flex-row-reverse;
}
.imgcont {
  @apply md:w-1/2 md:m-auto;
}
.img1 {
  @apply h-32 m-auto;
}
.textcont {
  @apply text-vert text-justify text-lg pt-4 indent-4 md:w-1/2 md:px-10 lg:px-20;
}
.gitem3 {
  @apply col-span-10 row-start-3 md:flex;
}
.gitem4 {
  @apply col-span-10 col-start-2 row-start-4 md:flex md:flex-row-reverse;
}
</style>
