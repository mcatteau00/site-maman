<template>
  <link
    rel="stylesheet"
    href="https://use.fontawesome.com/releases/v5.14.0/css/all.css"
    integrity="sha384-HzLeBuhoNPvSl5KYnjx0BT+WB0QEEqLprO+NBkkk5gbc67FTaL7XIGa2w1L0Xbgc"
    crossorigin="anonymous"
  />
  <div v-show="!mobile" class="bandeau" :style="{ opacity: opacity }">
    <div class="itemb1">
      <a
        class=""
        href="https://fr.linkedin.com/in/c%C3%A9line-allafort-7a4ab5162"
        target="_blank"
        rel="noopener"
        ><img class="imgb1" src="@/images/linkedin-logo.png"
      /></a>
    </div>
    <div class="itemb2"></div>
    <div class="itemb3">
      <img class="imgb2" src="@/images/phone_icon.png" alt="logo-téléphone" />
      <p>06-56-67-62-24</p>
    </div>
    <div class="itemb4">
      <img class="imgb3" src="@/images/mail_icon.png" />
      <p>celine.allafort.pro@gmail.com</p>
    </div>
  </div>
  <header class="scrolledNav" :style="{ opacity: opacity }">
    <nav class="nav">
      <div v-show="mobile" class="item1">
        <img class="imgh2" src="@/images/logo.jpg" />
      </div>
      <div v-show="!mobile" class="navigation">
        <div class="branding">
          <img class="imgh1" src="@/images/logo.jpg" />
          <div v-show="!mobile">
            <RouterLink class="link" :to="{ name: 'Home' }">Accueil</RouterLink>
          </div>
        </div>
        <div v-show="!mobile" class="hitem1">
          <div class="group">
            <h2 class="tlink">Entreprendre une psychothérapie</h2>
            <div class="hdropdown">
              <ul class="drop">
                <li>
                  <RouterLink
                    class="link"
                    :to="{ name: 'LaPsychotherapieAdulte' }"
                    >La psychothérapie individuelle d'adultes</RouterLink
                  >
                </li>
                <li>
                  <RouterLink
                    class="link"
                    :to="{ name: 'LesEntretiensNarratifs' }"
                    >Les entretiens narratifs</RouterLink
                  >
                </li>
                <li>
                  <RouterLink
                    class="link"
                    :to="{ name: 'LaPsychotherapieFamilliale' }"
                    >La psychothérapie familliale</RouterLink
                  >
                </li>
                <li>
                  <RouterLink
                    class="link"
                    :to="{ name: 'LaPsychotherapieEnfants' }"
                    >La psychothérapie d'enfants</RouterLink
                  >
                </li>
                <li>
                  <RouterLink
                    class="link"
                    :to="{ name: 'LaPsychotherapieAdos' }"
                    >La psychothérapie d'adolescents</RouterLink
                  >
                </li>
                <li>
                  <RouterLink
                    class="link"
                    :to="{ name: 'LesModalitesDeLaRencontre' }"
                    >Les modalités de la rencontre</RouterLink
                  >
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div v-show="!mobile" class="hitem2">
          <div class="group">
            <h2 class="tlink">Qui suis je ?</h2>
            <div class="hdropdown">
              <ul class="drop">
                <li>
                  <RouterLink class="link" :to="{ name: 'QuiSuisJe' }"
                    >Mon cheminement</RouterLink
                  >
                </li>
                <li>
                  <RouterLink class="link" :to="{ name: 'Aujourdhui' }"
                    >Aujourd'hui</RouterLink
                  >
                </li>
                <li>
                  <RouterLink class="link" :to="{ name: 'MesFormations' }"
                    >Mes principales formations</RouterLink
                  >
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div v-show="!mobile" class="hitem3">
          <RouterLink class="link" :to="{ name: 'Informations' }"
            >Informations et tarifs</RouterLink
          >
        </div>
        <div v-show="!mobile" class="hitem4">
          <RouterLink class="link" :to="{ name: 'Ressources' }"
            >Ressources</RouterLink
          >
        </div>
        <div v-show="!mobile" class="hitem5">
          <RouterLink class="link" :to="{ name: 'Contact' }"
            >Contact</RouterLink
          >
        </div>
      </div>
      <div class="icon">
        <i
          v-show="mobile"
          class="fa fa-bars"
          :class="{ 'icon-active': mobileNav }"
          @click="toggleMobileNav"
        >
        </i>
      </div>
      <transition name="mobile-nav">
        <ul v-show="mobileNav" class="dropdown-nav">
          <li>
            <RouterLink
              class="link"
              :to="{ name: 'Home' }"
              @click="mobileNav = false"
              >Accueil</RouterLink
            >
          </li>
          <div class="border"></div>
          <li>
            <h2 class="mobiletitle">Entreprendre une psychothérapie</h2>
          </li>
          <li>
            <RouterLink
              class="link"
              :to="{ name: 'LaPsychotherapieAdulte' }"
              @click="mobileNav = false"
              >- La psychothérapie individuelle d'adulte</RouterLink
            >
          </li>
          <li>
            <RouterLink
              class="link"
              :to="{ name: 'LesEntretiensNarratifs' }"
              @click="mobileNav = false"
              >- Les entretiens Narratifs</RouterLink
            >
          </li>
          <li>
            <RouterLink
              class="link"
              :to="{ name: 'LaPsychotherapieFamilliale' }"
              @click="mobileNav = false"
              >- La psychothérapie familliale</RouterLink
            >
          </li>
          <li>
            <RouterLink
              class="link"
              :to="{ name: 'LaPsychotherapieEnfants' }"
              @click="mobileNav = false"
              >- La psychothérapie d'enfants</RouterLink
            >
          </li>
          <li>
            <RouterLink
              class="link"
              :to="{ name: 'LaPsychotherapieAdos' }"
              @click="mobileNav = false"
              >- La psychothérapie d'adolescents</RouterLink
            >
          </li>
          <li>
            <RouterLink
              class="link"
              :to="{ name: 'LesModalitesDeLaRencontre' }"
              @click="mobileNav = false"
              >- Les modalités de la rencontre</RouterLink
            >
          </li>
          <div class="border"></div>
          <li>
            <h2 class="mobiletitle">Qui suis je ?</h2>
          </li>
          <li class="">
            <RouterLink
              class="link"
              :to="{ name: 'QuiSuisJe' }"
              @click="mobileNav = false"
              >- Mon cheminement</RouterLink
            >
          </li>
          <li>
            <RouterLink
              class="link"
              :to="{ name: 'Aujourdhui' }"
              @click="mobileNav = false"
              >- Aujourd'hui</RouterLink
            >
          </li>
          <li>
            <RouterLink
              class="link"
              :to="{ name: 'MesFormations' }"
              @click="mobileNav = false"
              >- Mes principales formations</RouterLink
            >
          </li>
          <div class="border"></div>
          <li>
            <RouterLink
              class="link"
              :to="{ name: 'Informations' }"
              @click="mobileNav = false"
              >Informations et tarifs</RouterLink
            >
          </li>
          <li>
            <RouterLink
              class="link"
              :to="{ name: 'Ressources' }"
              @click="mobileNav = false"
              >Ressources</RouterLink
            >
          </li>
          <li>
            <RouterLink
              class="link"
              :to="{ name: 'Contact' }"
              @click="mobileNav = false"
              >Contact</RouterLink
            >
          </li>
        </ul>
      </transition>
    </nav>
  </header>
  <footer>
    <div class="scrolledNav2" :style="{ opacity: opacity }">
      <div class="test">
        <div v-show="!mobile" class="cont">
          Céline Allafort - Psychologue Clinicienne
        </div>
        <div v-show="!mobile" class="cont">
          Cabinet Mondésir - 62 Avenue de la Marne - 33700 Mérignac
        </div>
        <div v-show="!mobile" class="cont">
          <p>
            &copy; Céline Allafort 2023 |
            <RouterLink :to="{ name: 'MentionsLeg' }"
              >Mentions Légales</RouterLink
            >
            | <RouterLink :to="{ name: 'CGU' }">CGU</RouterLink>
          </p>
        </div>
        <div v-show="mobile" class="cont">
          <p>&copy; Céline Allafort 2023</p>
          <RouterLink :to="{ name: 'MentionsLeg' }"
            >Mentions Légales</RouterLink
          >
          <RouterLink :to="{ name: 'CGU' }">CGU</RouterLink>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "NavigationData",
  data() {
    return {
      mobile: null,
      mobileNav: null,
      windowWidth: null,
      opacity: null,
      lastScrollPosition: 0,
      scrollDirection: null,
      currentScrollPosition: 0,
    };
  },
  created() {
    window.addEventListener("resize", this.checkScreen);
    this.checkScreen();
    this.opacity = 100;
  },
  mounted() {
    window.addEventListener("scroll", this.updateScroll);
  },
  methods: {
    toggleMobileNav() {
      this.mobileNav = !this.mobileNav;
    },

    updateScroll() {
      const currentScrollPosition = window.pageYOffset;
      if (currentScrollPosition > this.lastScrollPosition) {
        this.scrollDirection = "down";
        this.opacity = 1 - currentScrollPosition / 200;
      } else {
        this.scrollDirection = "up";
        this.opacity = 1 - currentScrollPosition / 200;
      }
    },
    checkScreen() {
      this.windowWidth = window.innerWidth;
      if (this.windowWidth <= 1050) {
        this.mobile = true;
        return;
      }
      this.mobile = false;
      this.mobileNav = false;
      return;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.bandeau {
  @apply fixed z-10 grid grid-cols-12 items-center align-middle bg-pale w-full;
}
.itemb1 {
  @apply col-start-1 col-end-4 md:col-start-1 md:col-end-2;
}
.itemb2 {
  @apply col-start-2 col-end-9;
}
.itemb3 {
  @apply col-start-9 col-end-11 flex space-x-2 justify-end px-4;
}
.itemb4 {
  @apply col-start-11 col-span-2 flex space-x-2 justify-end px-4;
}
.imgb1 {
  @apply h-8 w-8 mx-2 aspect-square;
}
.imgb2 {
  @apply h-4 w-3 self-center;
}
.imgb3 {
  @apply h-4 w-4 self-center;
}

.scrolledNav {
  @apply bg-vert z-50 w-full fixed top-8 text-orange text-xl;
}

.nav {
  @apply text-center w-full ease-in-out duration-500 grid grid-cols-12 relative top-8;
}
.navigation {
  @apply grid grid-cols-12 col-span-12 h-28;
}
.branding {
  @apply col-start-1 col-end-2 relative top-1 left-2 flex space-x-12;
}
.imgh1 {
  @apply h-24 relative -top-7;
}
.imgh2 {
  @apply h-24 relative -top-7;
}
.item1 {
  @apply col-start-1 col-end-5 h-28 relative top-1 left-2 flex;
}
.hitem1 {
  @apply col-start-3 col-end-5 relative -top-3;
}
.hitem2 {
  @apply col-start-5 col-end-7;
}
.hitem3 {
  @apply col-start-7 col-end-9;
}
.hitem4 {
  @apply col-start-9 col-end-11;
}
.hitem5 {
  @apply col-start-11 col-end-12;
}
.group {
  @apply relative flex flex-col;
}
.tlink {
  @apply text-center;
}
.hdropdown {
  @apply hidden group-hover:block;
}
.drop {
  @apply flex flex-col bg-vert p-4 space-y-4;
}
.icon {
  @apply items-center absolute top-3 right-12;
}
.icon-active {
  @apply rotate-180 duration-500;
}
.link {
  @apply ease-in-out duration-500 pb-1 border-b-0 font-medium list-none;
}
.link:hover {
  @apply underline text-pale;
}
.dropdown-nav {
  @apply flex flex-col space-y-1 py-2 fixed w-64 h-full bg-vert top-0 left-0;

  .link {
    @apply text-center text-pale;
  }
}
.mobiletitle {
  @apply font-semibold underline;
}
.border {
  @apply border-b-vert;
}
.scrolledNav2 {
  @apply bg-vert z-50 w-full fixed bottom-0 text-orange text-xl;
}
.cont {
  @apply my-2 text-center;
}
</style>
