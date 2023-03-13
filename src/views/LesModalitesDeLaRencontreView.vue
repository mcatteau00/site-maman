<template>
  <div class="gcontainer">
    <div class="gitem1">
      <h1 class="gtitle">Les modalités de la rencontre</h1>
    </div>
    <div class="gitem2">
      <div class="imgcont">
        <img class="img1" src="@/images/Photos/Photo-7.jpg" />
      </div>
      <div class="textcont">
        <p>
          Les accompagnements que je propose se font en consultation
          individuelle ou familiale. Ils s'adressent à tous, du nourrisson à
          l'adolescent, du jeune adulte au sénior. Je propose plusieurs formes
          d'accompagnements : la psychothérapie individuelle, les entretiens
          narratifs et la thérapie familiale.
        </p>
      </div>
    </div>
    <div class="gitem3">
      <div class="imgcont">
        <img class="img1" src="@/images/Photos/Photo-2.jpg" />
      </div>
      <div class="textcont">
        <p class="">
          La durée d’un suivi psychologique peut être très variable. De quelques
          semaines, sur un suivi hebdomadaire quand il s’agit de débloquer une
          situation ponctuelle qui nécessite un bref accompagnement, une écoute
          attentive dans un cadre contenant.
        </p>
        <p>
          Mais la durée varie de quelques mois à quelques années suivant la
          difficulté rencontrée, les attentes et surtout les motivations à
          sortir de ses zones de confort et donc à se confronter à soi-même.
        </p>
      </div>
    </div>
    <div class="gitem4">
      <div class="imgcont">
        <img class="img1" src="@/images/Photos/Photo-3.jpg" />
      </div>
      <div class="textcont">
        <p>
          Ainsi, après un premier temps de rencontre nous permettant de faire
          connaissance et de bien comprendre votre demande, je vous fais part
          d'une proposition thérapeutique possible à partir de ma compréhension
          de vos difficultés.
        </p>
        <p>
          Nous échangeons sur cette proposition puis nous définissons ensemble
          les modalités de l'accompagnement thérapeutique que nous faisons le
          choix d'engager.
        </p>
      </div>
    </div>
    <div class="gitem5">
      <div class="imgcont">
        <img class="" src="" />
      </div>
      <div class="textcont">
        <p class="">
          Ainsi, face aux problématiques que vous rencontrez, nous pouvons
          construire ensemble le cadre qui vous convient en s'adaptant à vos
          besoins mais aussi à vos demandes.
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
  @apply col-span-10 row-start-2 my-10 md:flex md:flex-row-reverse;
}
.gitem3 {
  @apply col-span-10 row-start-4 md:flex;
}
.gitem4 {
  @apply col-span-10 row-start-5 md:flex md:flex-row-reverse;
}
.gitem5 {
  @apply col-span-10 row-start-6 md:flex my-10;
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
  @apply h-40 m-auto rounded-3xl;
}
</style>
