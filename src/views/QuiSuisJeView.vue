<template>
  <body class="">
    <div class="gcontainer">
      <div class="gbandeau1"></div>
      <div class="gbandeau2"></div>
      <div class="gitem1">
        <h1 class="gtitle">Qui suis je ?</h1>
      </div>
      <div class="gitem2">
        <div class="imgcont">
          <img class="img3" src="@/images/Photo_maman.jpg" />
        </div>
        <div class="textcont">
          <h2 class="gtitle2">Mon cheminement</h2>
          <br />
          <p>
            Chacun sait qu'il est souvent difficile d'entamer un soin psychique
            et de faire face à ses souffrances, à son histoire qui parfois nous
            enferme dans des schémas répétitifs. Il faut du courage et surtout
            se sentir en confiance pour oser parcourir ce chemin. Il est donc
            important de prendre du temps pour faire le choix de la personne qui
            vous accompagnera. Pour vous y aider, il m'a semblé important de
            vous donner un aperçu de qui je suis.
          </p>
        </div>
      </div>
      <div class="gitem3">
        <div class="imgcont">
          <img class="img1" src="@/images/separateur-1.jpg" />
        </div>
        <div class="textcont">
          <p>
            J'ai effectué la première partie de ma carrière comme intervenante
            sociale. Pendant près de 15 ans, j'ai travaillé auprès de demandeurs
            d'asile souffrant des conséquences de traumatismes graves. Je les ai
            accompagnés dans la mise en mots et en récit de leur histoire.
          </p>
        </div>
      </div>
      <div class="gitem4">
        <div class="imgcont">
          <img class="img2" src="@/images/separateur-2.jpg" />
        </div>
        <div class="textcont">
          <p>
            Mais plus globalement, je les ai aidés à accepter leurs différences,
            leurs manques ainsi que les deuils qu'ils affrontaient, ainsi qu'à
            se percevoir comme des survivants plutôt que comme des victimes.<br />
            Puis je les ai épaulés afin qu'ils prennent conscience et confortent
            leurs ressources et potentiels, sortent de la honte et puissent
            retisser des liens de confiance aux autres.
          </p>
        </div>
      </div>
      <div class="gitem5">
        <div class="imgcont">
          <a
            class=""
            href="https://www.dailymotion.com/video/x5jsh2e"
            target="_blank"
            rel="noopener"
            ><img class="img4" src="@/images/documentaire.png"
          /></a>
        </div>
        <div class="textcont">
          <p>
            J'ai également co-animé des ateliers parents-bébés et
            parents-enfants, ainsi que des groupes de parole avec des
            intervenants - psychologue, psychomotricienne, anthropologues,
            interprètes - formés à l'approche transculturelle du soin. Je m'y
            suis formée également.
          </p>
        </div>
      </div>
      <div class="gitem6">
        <div class="imgcont">
          <img class="img2" src="@/images/separateur-3.jpg" />
        </div>
        <div class="textcont">
          <p>
            Cette expérience passionnante m'a appris à me décaler de mes propres
            représentations du monde. Elle a aussi renforcé ma curiosité et mon
            désir de comprendre la façon de chacun d'être au monde. <br />
            A un moment de ma vie, plus difficile que les autres, j'ai entamé
            une psychothérapie puis une psychanalyse personnelle.
          </p>
        </div>
      </div>
      <div class="gitem7">
        <div class="imgcont">
          <img class="img2" src="@/images/separateur-4.jpg" />
        </div>
        <div class="textcont">
          <p>
            J'ai alors désiré devenir psychologue clinicienne et j'ai repris des
            études universitaires. Et comme j'aime beaucoup les chemins de
            traverse, plus respectueux de la singularité de chacun, cela a pris
            un peu de temps… <br />
            En parallèle, j'ai acquis une expérience clinique au sein du service
            de soins transculturels du CHU de Bordeaux. Là, durant environ cinq
            ans, j'ai été co-thérapeute, thérapeute, puis chercheuse-associée.
          </p>
        </div>
      </div>
    </div>
  </body>
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
.img3 {
  @apply h-64 m-auto rounded-3xl;
}
.img4 {
  @apply h-32 m-auto rounded-3xl;
}
.gitem1 {
  @apply col-span-10 row-span-1 row-start-1 col-start-2;
}
.gitem2 {
  @apply col-span-10 row-span-1 row-start-2 col-start-2 my-4 md:flex md:flex-row-reverse;
}
.gitem3 {
  @apply col-span-10 row-span-1 row-start-3 col-start-2 md:flex;
}
.gitem4 {
  @apply col-span-10 row-span-1 row-start-4 col-start-2 md:flex md:flex-row-reverse;
}
.gitem5 {
  @apply col-span-10 row-span-1 col-start-2 row-start-5 md:flex;
}
.gitem6 {
  @apply col-span-10 row-span-1 col-start-2 row-start-6 md:flex md:flex-row-reverse;
}
.gitem7 {
  @apply col-span-10 row-span-1 row-start-7 col-start-2 md:flex;
}
</style>
