<template>
  <div class="gcontainer">
    <div class="gbandeau1"></div>
    <div class="gbandeau2"></div>
    <div class="gitem1">
      <h1 class="gtitle">Page en construction</h1>
    </div>
    <div class="imgcont">
      <img class="img1" src="@/images/Photos/Photo-2.jpg" />
    </div>
    <div class="gbandeau3"></div>
  </div>
</template>

<script></script>

<style scoped>
.gcontainer {
  @apply grid grid-cols-12 bg-pale h-screen w-screen;
}
.gbandeau1 {
  @apply col-span-1 row-span-6 col-start-1 row-start-1;
}
.gbandeau2 {
  @apply col-span-1 row-span-6 col-start-12 row-start-1;
}
.gbandeau3 {
  @apply col-span-10 row-span-1 col-start-2 row-start-3 h-20;
}
.gitem1 {
  @apply col-span-10 row-span-1 row-start-5 col-start-2 md:col-span-5 md:row-span-1 md:col-start-2 md:row-start-4 md:flex justify-center items-center;
}
.gtitle {
  @apply text-vert text-3xl text-center my-8;
}
.imgcont {
  @apply col-span-10 row-span-1 row-start-4 col-start-2 md:col-span-5 md:row-span-1 md:col-start-6 md:row-start-4 items-center justify-center;
}
.img1 {
  @apply h-64 m-auto rounded-3xl;
}
</style>
