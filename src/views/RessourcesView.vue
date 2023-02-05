<template>
  <div class="Ressources">
    <h1 class="titre1">Ressources</h1>
    <p class="texte">
      Sur cette page, je vous présente les différentes ressources qui peuvent
      vous êtres utiles ou vous intéressez.
    </p>
    <h2 class="titre2">Podcast</h2>
    <ul>
      <li class="texte">
        <dl>
          <dt>
            Un podcast passionnant, veritable réflexion et enquête sur
            l'inceste, par Charlotte Pudlowski, une jeune femme qui a découvert
            à l'âge adulte que sa mère en avait été victime. Il permet de
            comprendre les mécanismes psychiques mais aussi le silence social.
            Il donne le vertige!
          </dt>
          <dd>
            Pour y accéder
            <a
              href="https://louiemedia.com/injustices-2/ou-peut-etre-une-nuit"
              target="_blank"
              rel="noopener"
              ><em class="lien">cliquez ici</em></a
            >
          </dd>
        </dl>
        <br />
      </li>
    </ul>
    <h2 class="titre2">Emission de radio</h2>
    <ul>
      <li class="texte">
        <dl>
          <dt>
            Une émission de radio qui, plusieurs année après l'avoir entendue, a
            guidé mes pas jusqu'au REV (Réseau français sur l'Entente de Voix,
            <a href="https://revfrance.org/" target="_blank" rel="noopener"
              >https://revfrance.org/</a
            >)
          </dt>
          <dd>
            Pour y accéder
            <a
              href="https://www.radiofrance.fr/franceculture/podcasts/les-pieds-sur-terre/vincent-entendeur-de-voix-3705938"
              target="_blank"
              rel="noopener"
              ><em class="lien">cliquez ici</em></a
            >
          </dd>
        </dl>
        <br />
      </li>
    </ul>
    <h2 class="titre2">Sites internet</h2>
    <ul>
      <li class="texte">
        <dl>
          <dt>
            Un site très bien fait et plein de ressources pour tous les
            professionnels du soin mais aussi toutes les personnes souffrant de
            psychotraumatisme. Pour mieux se comprendre et aussi savoir comment
            agir. Ils envoient aussi une brochure destinée aux enfants dessinéé
            par Claude Ponti, intitulée "Quand on te fait du mal. Informations
            sur les violences et leurs conséquences". A mettre entre toutes les
            mains.
          </dt>
          <dd>
            Pour y accéder
            <a
              href="https://www.memoiretraumatique.org/"
              target="_blank"
              rel="noopener"
              ><em class="lien">cliquez ici</em></a
            >
          </dd>
        </dl>
      </li>
    </ul>
  </div>
</template>

<script></script>

<style scoped>
.texte {
  @apply m-2 text-center;
}
.titre1 {
  @apply text-2xl m-2 text-center text-blue-500;
}
.titre2 {
  @apply text-xl m-2 text-center;
}
.lien {
  @apply italic m-2 text-blue-300 hover:underline;
}
</style>
