<template>
  <link
    rel="stylesheet"
    href="https://use.fontawesome.com/releases/v5.14.0/css/all.css"
    integrity="sha384-HzLeBuhoNPvSl5KYnjx0BT+WB0QEEqLprO+NBkkk5gbc67FTaL7XIGa2w1L0Xbgc"
    crossorigin="anonymous"
  />
  <div class="bandeau">
    <div class="itemb1">
      <a
        class=""
        href="https://fr.linkedin.com/in/c%C3%A9line-allafort-7a4ab5162"
        target="_blank"
        rel="noopener"
        ><img class="imgb1" src="@/images/linkedin_logo.png"
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
  <header class="scrolled-nav">
    <nav class="nav">
      <div class="branding">
        <img class="imgh1" src="@/images/logo.jpg" />
      </div>
      <ul v-show="!mobile" class="navigation">
        <li class="hitem1">
          <RouterLink class="link" :to="{ name: 'Home' }">Accueil</RouterLink>
        </li>
        <li class="hitem2">
          <div class="group">
            <h2 class="tlink">Entreprendre une psychothérapie</h2>
            <div class="hdropdown">
              <ul class="drop">
                <li>
                  <RouterLink class="link" :to="{ name: 'LaPsychotherapie' }"
                    >La psychothérapie ?</RouterLink
                  >
                </li>
                <li>
                  <RouterLink class="link" :to="{ name: 'PourQui' }"
                    >Pour qui ?</RouterLink
                  >
                </li>
                <li>
                  <RouterLink class="link" :to="{ name: 'Comment' }"
                    >Comment ?</RouterLink
                  >
                </li>
              </ul>
            </div>
          </div>
        </li>
        <li class="hitem3">
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
                    >Mes formations</RouterLink
                  >
                </li>
              </ul>
            </div>
          </div>
        </li>
        <li>
          <RouterLink class="link" :to="{ name: 'Informations' }"
            >Informations et tarifs</RouterLink
          >
        </li>
        <li>
          <RouterLink class="link" :to="{ name: 'Ressources' }"
            >Ressources</RouterLink
          >
        </li>
        <li>
          <RouterLink class="link" :to="{ name: 'Contact' }"
            >Contact</RouterLink
          >
        </li>
      </ul>
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
            <RouterLink class="link" :to="{ name: 'Home' }">Accueil</RouterLink>
          </li>
          <li>
            <div class="group">
              <h2 class="">La Psychothérapie</h2>
              <div class="hidden group-hover:block">
                <ul class="flex flex-col bg-vert p-4 space-y-4">
                  <li>
                    <RouterLink class="link" :to="{ name: 'LaPsychotherapie' }"
                      >Quelques mots sur la <br />
                      psychologie et la psychothérapie</RouterLink
                    >
                  </li>
                  <li>
                    <RouterLink class="link" :to="{ name: 'PourQui' }"
                      >Pour qui ?</RouterLink
                    >
                  </li>
                  <li>
                    <RouterLink class="link" :to="{ name: 'Comment' }"
                      >Comment ?</RouterLink
                    >
                  </li>
                </ul>
              </div>
            </div>
          </li>
          <li>
            <div class="group">
              <h2>Qui suis je ?</h2>
              <div class="hidden group-hover:block">
                <ul class="flex flex-col bg-vert p-4 space-y-4">
                  <li class="">
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
                      >Mes formations</RouterLink
                    >
                  </li>
                </ul>
              </div>
            </div>
          </li>
          <li>
            <RouterLink class="link" :to="{ name: 'Informations' }"
              >Informations et tarifs</RouterLink
            >
          </li>
          <li>
            <RouterLink class="link" :to="{ name: 'Ressources' }"
              >Ressources</RouterLink
            >
          </li>
          <li>
            <RouterLink class="link" :to="{ name: 'Contact' }"
              >Contact</RouterLink
            >
          </li>
        </ul>
      </transition>
    </nav>
  </header>
</template>

<script>
export default {
  name: "NavigationData",
  data() {
    return {
      scrolledNav: null,
      mobile: null,
      mobileNav: null,
      windowWidth: null,
    };
  },
  created() {
    window.addEventListener("resize", this.checkScreen);
    this.checkScreen();
  },
  mounted() {
    window.addEventListener("scroll", this.updateScroll);
  },
  methods: {
    toggleMobileNav() {
      this.mobileNav = !this.mobileNav;
    },

    updateScroll() {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 50) {
        this.scrolledNav = true;
        return;
      }
      this.scrolledNav = false;
      return;
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
  @apply fixed z-10 grid grid-cols-12 items-center align-middle bg-pale;
}
.itemb1 {
  @apply col-start-1 col-end-2;
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
  @apply h-6 w-6 my-1 mx-2;
}
.imgb2 {
  @apply h-4 w-3 self-center;
}
.imgb3 {
  @apply h-4 w-4 self-center;
}

.scrolled-nav {
  @apply bg-vert z-50 w-full fixed top-8 h-28 ease-in-out duration-500 text-orange text-xl;
}
.nav {
  @apply w-full ease-in-out duration-500 grid grid-cols-11 gap-2;
}
.branding {
  @apply col-start-1 col-end-2 self-center;
}
.imgh1 {
  @apply h-24 self-center;
}
.navigation {
  @apply col-start-2 col-span-11 text-xl flex flex-row place-self-center align-middle;
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
  @apply items-center absolute top-12 right-12;
}
.icon-active {
  @apply rotate-180 duration-500;
}

li {
  @apply relative p-4 ml-4 self-center;
}
.link {
  @apply ease-in-out duration-500 pb-1 border-b-0 font-medium list-none;
}
.link:hover {
  @apply underline text-pale;
}

.dropdown-nav {
  @apply flex flex-col space-y-4 py-4 fixed w-64 h-full bg-vert top-0 left-0;

  .link {
    @apply text-center;
  }
}
.group {
  @apply relative flex flex-col;
}
</style>
