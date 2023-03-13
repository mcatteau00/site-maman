<template>
  <div class="gcontainer">
    <div class="gitem1">
      <h1 class="gtitle">Mentions Légales</h1>
    </div>
    <div class="gitem2">
      <div class="imgcont order-1">
        <img class="img1" src="@/images/Fleurs-séparateur/Fleur-1.svg" />
      </div>
      <div class="cont order-2">
        <h2 class="gtitle2">Immatriculations</h2>
        <h3 class="gtitle3">SIREN</h3>
        <p class="text">947819132</p>
        <h3 class="gtitle3">ADELI</h3>
        <p class="text">339333684</p>
        <h3 class="gtitle3">Assurance</h3>
      </div>
      <div class="imgcont order-4">
        <img class="img1" src="@/images/Fleurs-séparateur/Fleur-2.svg" />
      </div>
      <div class="cont order-3">
        <h2 class="gtitle2">Propriétaire</h2>
        <h3 class="gtitle3">Céline Allafort</h3>
        <p class="text">
          Psychologue clinicienne <br />
          Cabinet Mondésir <br />
          62 Avenue de la Marne - 33700 Mérignac <br />
          06-56-67-62-24 <br />
          celine.allafort.pro@gmail.com
        </p>
      </div>
    </div>
    <div class="gitem3">
      <div class="imgcont order-1">
        <img class="img1" src="@/images/Fleurs-séparateur/Fleur-3.svg" />
      </div>
      <div class="cont order-2">
        <h2 class="gtitle2">Hébergement Web</h2>
        <h3 class="gtitle3">Hostinger</h3>
        <p class="text">
          HOSTINGER, UAB Rue Jonavos 60C, Kaunas 44192 Lituanie <br />
          Téléphone : +37064503378 <br />
          E-mail : domains@hostinger.com
        </p>
      </div>
      <div class="imgcont order-4">
        <img class="img1" src="@/images/Fleurs-séparateur/Fleur-4.svg" />
      </div>
      <div class="cont order-3">
        <h2 class="gtitle2">Développement Web</h2>
        <h3 class="gtitle3">Maël Catteau</h3>
        <p class="text">
          Téléphone : 06-52-57-74-03 <br />
          Email : mael.catteau.pro@gmail.com
        </p>
      </div>
    </div>
    <div class="gitem4">
      <div class="imgcont order-1">
        <img class="img1" src="@/images/Fleurs-séparateur/Fleur-5.svg" />
      </div>
      <div class="cont order-2">
        <h2 class="gtitle2">Propriété intellectuelle</h2>
        <p class="text">
          Les photos et illustrations présentent sur ce site sont la propriété
          de Céline Allafort. Elle ne peuvent pas être utilisé dans un autre
          contexte.
        </p>
      </div>
      <div class="imgcont order-4">
        <img class="img1" src="@/images/Fleurs-séparateur/Fleur-7.svg" />
      </div>
      <div class="cont order-3">
        <h2 class="gtitle2">Conditions Générales d'Utilisation</h2>
        <p class="text">
          Toute personne qui accède au site www.céline.allafort.com s'engage à
          respecter les conditions générales d'utilisation, disponible ici :<br />
          <RouterLink class="link" :to="{ name: 'CGU' }">CGU</RouterLink>
        </p>
      </div>
    </div>
    <div class="gbandeau1"></div>
    <div class="gbandeau2"></div>
    <div class="gbandeau3"></div>
    <div class="gbandeau4"></div>
    <div class="gbandeau5"></div>
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
.gbandeau4 {
  @apply col-span-1 col-start-1 row-span-1 row-start-7;
}
.gbandeau5 {
  @apply col-span-1 col-start-12 row-span-1 row-start-7;
}
.gitem1 {
  @apply col-span-10 col-start-2 row-start-1;
}
.gitem2 {
  @apply col-span-10 row-start-2 mt-10 md:flex md:space-x-8 md:place-content-center md:my-4;
}
.gitem3 {
  @apply col-span-10 row-start-4 md:flex md:space-x-8 md:place-content-center md:my-4;
}
.gitem4 {
  @apply col-span-10 row-start-5 md:flex md:space-x-8 md:place-content-center md:my-4;
}
.gitem5 {
  @apply col-span-10 row-start-6 md:flex;
}
.gitem6 {
  @apply col-span-10 row-start-7 md:flex;
}
.gtitle {
  @apply text-vert text-3xl text-center m-4;
}
.gtitle2 {
  @apply text-vert text-2xl text-center m-3;
}
.gtitle3 {
  @apply text-vert text-xl text-center m-2;
}
.text {
  @apply text-bg text-lg text-center m-1;
}
.cont {
  @apply md:w-1/3 h-auto my-4 border-4 border-vert;
}
.imgcont {
  @apply place-content-center md:w-1/6 self-center;
}
.link {
  @apply text-vert hover:underline hover:text-bg;
}
.img1 {
  @apply h-40 m-auto aspect-square;
}
</style>
