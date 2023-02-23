<template>
  <link
    rel="stylesheet"
    href="https://use.fontawesome.com/releases/v5.14.0/css/all.css"
    integrity="sha384-HzLeBuhoNPvSl5KYnjx0BT+WB0QEEqLprO+NBkkk5gbc67FTaL7XIGa2w1L0Xbgc"
    crossorigin="anonymous"
  />
  <div class="grid grid-cols-12">
    <div class="col-end-2 col-start-1 items-center align-middle">
      <a
        class=""
        href="https://fr.linkedin.com/in/c%C3%A9line-allafort-7a4ab5162"
        target="_blank"
        rel="noopener"
        ><img class="h-6 w-6 my-1 mx-4" src="@/images/linkedin_logo.png"
      /></a>
    </div>
    <div
      class="col-end-11 col-start-9 flex space-x-2 justify-end items-center mx-4"
    >
      <img
        class="h-4 w-3 self-center"
        src="@/images/phone_icon.png"
        alt="logo-téléphone"
      />
      <p>06-56-67-62-24</p>
    </div>
    <div
      class="col-span-2 col-start-11 flex space-x-2 justify-end items-center mx-4"
    >
      <img class="h-4 w-4 self-center" src="@/images/mail_icon.png" />
      <p>celine.allafort.pro@gmail.com</p>
    </div>
  </div>
  <header class="scrolled-nav">
    <nav>
      <div class="branding">
        <img class="h-6" src="@/images/logo.jpg" />
      </div>
      <ul v-show="!mobile" class="navigation">
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
                    >Quelques mots sur la psychologie <br />
                    et la psychothérapie</RouterLink
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
header {
  @apply bg-vert z-50 w-full fixed top-8 ease-in-out duration-500 h-28 text-orange text-xl;

  nav {
    @apply flex flex-row py-0 px-12 w-11/12 my-0 mx-auto ease-in-out duration-500;
    @media (min-width: 1140px) {
      max-width: 1140px;
    }
  }

  ul,
  .link {
    @apply font-medium list-none;
  }
  li {
    @apply relative p-4 ml-4;
  }
  .link {
    @apply text-sm ease-in-out duration-500 pb-1 border-b-0;
  }
}

.link:hover {
  @apply underline text-pale;
}
.navigation {
  @apply flex flex-row space-x-8 text-center relative left-36 top-10;
}
.fa {
  @apply items-center absolute top-12 right-12;
}
.icon-active {
  @apply rotate-180 duration-500;
}

.dropdown-nav {
  @apply flex flex-col space-y-4 py-4 fixed w-64 h-full bg-vert top-0 left-0;

  .link {
    @apply text-center;
  }
}
.branding {
  @apply my-auto;
}
.group {
  @apply relative flex flex-col;
}
</style>
