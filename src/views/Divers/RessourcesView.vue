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
        <img class="img1" src="@/images/Ressources/ressource4.png" />
      </div>
      <div class="textcont">
        <h2 class="gtitle2">Le haut potentiel intellectuel (HPI)</h2>
        <br />
        <p>
          Souvent, lors des consultations, les parents et les adolescents se
          posent des questions sur les souffrances psychiques des personnes à
          Haut Potentiel Intellectuel (HPI) et leurs capacités. Il y a de
          nombreuses rumeurs qui circulent sur ce sujet. Afin de clarifier cette
          question, je suggère deux podcasts. L'un de ces podcasts est présenté
          par Caroline Goldman, qui est docteur en psychologie de l'enfant. Bien
          que je ne sois pas d'accord avec toutes ses idées sur les soins et
          l'éducation, son podcast sur les HPI est très instructif.
        </p>
        <a
          class="text-blue-300"
          href="https://podcast.ausha.co/caroline-goldman-docteur-en-psychologie-de-l-enfant/le-haut-potentiel-intellectuel"
          target="_blank"
          rel="noopener"
          ><em>Cliquez ici</em></a
        >
        <p>
          Un autre podcast sur ce sujet est animé par une neuropsychologue,
          Stéphanie Aubertin. Elle a été interviewée par la journaliste
          Élisabeth Feytit dans une série de podcasts intitulée "Contes et
          légendes de l'intelligence".
        </p>
        <a
          class="text-blue-300"
          href="https://metadechoc.fr/podcast/contes-et-legendes-de-lintelligence/"
          target="_blank"
          rel="noopener"
          ><em>Cliquez ici</em></a
        >
      </div>
    </div>
    <div class="gitem4">
      <div class="imgcont">
        <img class="img1" src="@/images/Ressources/ressource5.png" />
      </div>
      <div class="textcont">
        <h2 class="gtitle2">
          "L'inconscient" est une émission de France Inter consacrée à la parole
          libre et à l'analyse.
        </h2>
        <br />
        <p>
          Chaque épisode présente la pratique concrète de l'analyse à travers un
          récit de cas, une notion (comme le rêve ou la névrose), ou une
          question (par exemple, "Qu'est-ce que j'ai, docteur ?" ou "A quoi
          sert-il de parler à un enfant ?"). L'émission est centrée sur une
          question clé : quelle est la voix de l'inconscient ? Comment peut-on
          l'écouter, la déchiffrer, la comprendre et la calmer ?
        </p>
        <br />
        <p>
          Si je ne suis pas psychanalyste, mon approche clinique s'origine en
          partie dans cette théorisation du soin. De plus, ces émissions
          contribuent à apprivoiser l'idée d'entamer une démarche du soin
          psychique pour soi-même.
        </p>
      </div>
    </div>
    <div class="gitem5">
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
    <div class="gitem6">
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
          Une émission de radio qui, plusieurs années après l'avoir entendue, a
          guidé mes pas jusqu'à une formation dispensée par le REV (Réseau
          français sur l'Entente de Voix,<a
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

<script>
import { useHead } from "@unhead/vue";
useHead({
  title: "Ressources",
  meta: [
    {
      name: "description",
      content:
        "Découvrez des ressources pour mieux comprendre et agir face au psychotraumatisme, à l'inceste, aux entendeurs de voix, ainsi que des podcasts pour clarifier les questions sur le haut potentiel intellectuel (HPI).",
    },
    {
      name: "keywords",
      content:
        "ressources, psychotraumatisme, victimologie, brochure, Claude Ponti, inceste, silence social, mécanismes psychiques, entendeurs de voix, REV, haut potentiel intellectuel (HPI), Caroline Goldman, podcast",
    },
    {
      name: "charset",
      content: "utf-8",
    },
    {
      name: "viewport",
      content: "width=device-width, initial-scale=1.0",
    },
    {
      name: "author",
      content: "Mael CATTEAU/ Celine Allafort",
    },
    {
      name: "robots",
      content: "index, follow",
    },
    {
      name: "format-detection",
      content: "no",
    },
  ],
});
export default {
  name: "RessourcesView",
};
</script>

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
  @apply col-span-10 row-start-3 my-4 md:flex;
}
.gitem4 {
  @apply col-span-10 row-start-4 my-4 md:flex md:flex-row-reverse;
}
.gitem5 {
  @apply col-span-10 row-start-5 my-4 md:flex;
}
.gitem6 {
  @apply col-span-10 row-start-6 my-4 md:flex md:flex-row-reverse;
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
  @apply h-64 m-auto;
}
</style>
