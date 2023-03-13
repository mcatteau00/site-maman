<template>
  <div class="gcontainer">
    <div class="gitem1">
      <h1 class="gtitle">Ressources</h1>
    </div>
    <div class="gitem2">
      <div class="imgcont">
        <img class="img1" src="@/images/Ressources/ressource1.png" />
      </div>
      <div class="textcont">
        <h2 class="gtitle2">Mémoire traumatique et victimologie</h2>
        <br />
        <p class="">
          Un site très bien fait et plein de ressources pour tous les
          professionnels du soin mais aussi toutes les personnes souffrant de
          psychotraumatisme. Pour mieux se comprendre et aussi savoir comment
          agir. Ils envoient aussi une brochure destinée aux enfants dessinéé
          par Claude Ponti, intitulée "Quand on te fait du mal. Informations sur
          les violences et leurs conséquences". A mettre entre toutes les mains.
        </p>
        <a
          class="text-blue-300"
          href="https://www.memoiretraumatique.org/"
          target="_blank"
          rel="noopener"
          ><em>Cliquez ici</em></a
        >
      </div>
    </div>
    <div class="gitem3">
      <div class="imgcont">
        <img class="img1" src="@/images/Ressources/ressource2.png" />
      </div>
      <div class="textcont">
        <h2 class="gtitle2">
          "Ou peut être une nuit" <br />"Inceste : La guerre du silence" <br />
          Un podcast de Louie Media
        </h2>
        <br />
        <p class="">
          Un podcast passionnant, veritable réflexion et enquête sur l'inceste,
          par Charlotte Pudlowski, une jeune femme qui a découvert à l'âge
          adulte que sa mère en avait été victime. Il permet de comprendre les
          mécanismes psychiques mais aussi le silence social. Il donne le
          vertige!
        </p>
        <a
          class="text-blue-300"
          href="https://louiemedia.com/injustices-2/ou-peut-etre-une-nuit"
          target="_blank"
          rel="noopener"
          ><em>Cliquez ici</em></a
        >
      </div>
    </div>
    <div class="gitem4">
      <div class="imgcont">
        <img class="img1" src="@/images/Ressources/ressource3.png" />
      </div>
      <div class="textcont">
        <h2 class="gtitle2">
          "Vincent, entendeurs de voix" <br />
          une émission "Les pieds sur terre"
        </h2>
        <br />
        <p>
          Une émission de radio qui, plusieurs année après l'avoir entendue, a
          guidé mes pas jusqu'au REV (Réseau français sur l'Entente de Voix,<a
            class="text-blue-300"
            href="https://revfrance.org/"
            target="_blank"
            rel="noopener"
            ><em> https://revfrance.org/</em></a
          >
          ).
        </p>
        <a
          class="text-blue-300"
          href="https://www.radiofrance.fr/franceculture/podcasts/les-pieds-sur-terre/vincent-entendeur-de-voix-3705938"
          target="_blank"
          rel="noopener"
          ><em>Cliquez ici</em></a
        >
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
  @apply col-span-10 row-start-2 md:flex md:flex-row-reverse;
}
.gitem3 {
  @apply col-span-10 row-start-3 md:flex;
}
.gitem4 {
  @apply col-span-10 row-start-4 md:flex md:flex-row-reverse;
}
.gtitle {
  @apply text-vert text-3xl text-center my-8;
}
.gtitle2 {
  @apply text-center text-xl font-bold italic;
}
.textcont {
  @apply text-vert text-justify text-lg pt-4 indent-4 md:w-1/2 md:px-10 lg:px-20;
}
.imgcont {
  @apply md:w-1/2 md:m-auto;
}
.img1 {
  @apply h-auto m-auto;
}
</style>
