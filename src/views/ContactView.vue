<template>
  <div class="gcontainer">
    <div class="gbandeau1"></div>
    <div class="gitem1">
      <h1 class="gtitle">Contact</h1>
    </div>
    <div class="gitem2">
      <div class="imgcont">
        <img class="img1" src="@/images/salle-attente.jpg" />
        <img class="img1" src="@/images/cabinet.jpg" />
      </div>
      <div class="textcont">
        <ul>
          <li class="info">
            <img class="icon" src="@/images/adress_icon.png" />
            <p>
              Cabinet Mondésir <br />
              62 Avenue de la Marne - 33700 Mérignac
            </p>
          </li>
          <li class="info">
            <img class="icon" src="@/images/phone_icon.png" />
            <p>06-56-67-62-24</p>
          </li>
          <li class="info">
            <img class="icon" src="@/images/mail_icon.png" />
            <p>celine.allafort.pro@gmail.com</p>
          </li>
        </ul>
      </div>
    </div>
    <div class="gbandeau4"></div>
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
.gbandeau3 {
  @apply col-span-10 h-28 row-span-1 col-start-2 row-start-2;
}
.gbandeau4 {
  @apply col-span-10 row-span-1 col-start-2 row-start-4 h-28;
}
.gtitle {
  @apply text-vert text-3xl text-center my-8;
}
.imgcont {
  @apply md:w-1/2 md:m-auto flex;
}
.textcont {
  @apply text-vert text-justify text-lg p-4 md:w-1/2 md:px-10 lg:px-20 flex items-center justify-center;
}
.gitem1 {
  @apply col-span-10 col-start-2 row-start-1 row-span-1;
}
.img1 {
  @apply h-80 m-auto rounded-3xl;
}
.gitem2 {
  @apply col-span-10 row-start-3 col-start-2 row-span-1 md:flex md:flex-row-reverse;
}
.icon {
  @apply h-4 my-auto;
}
.info {
  @apply flex space-x-2;
}
</style>
