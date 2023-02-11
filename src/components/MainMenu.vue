<template>
  <link
    rel="stylesheet"
    href="https://use.fontawesome.com/releases/v5.14.0/css/all.css"
    integrity="sha384-HzLeBuhoNPvSl5KYnjx0BT+WB0QEEqLprO+NBkkk5gbc67FTaL7XIGa2w1L0Xbgc"
    crossorigin="anonymous"
  />
  <header :class="{ 'scrolled-nav': scrolledNav }">
    <nav>
      <div class="branding">
        <img class="h-6" src="@/images/logo.jpg" />
      </div>
      <ul v-show="!mobile" class="navigation">
        <li>
          <RouterLink class="link" :to="{ name: 'LaVocationDuCabinet' }"
            >La vocation du Cabinet</RouterLink
          >
        </li>
        <li>
          <RouterLink class="link" :to="{ name: 'MonApproche' }"
            >Mon approche</RouterLink
          >
        </li>
        <li>
          <RouterLink class="link" :to="{ name: 'QuiSuisJe' }"
            >Qui suis je ?</RouterLink
          >
        </li>
        <li>
          <RouterLink class="link" :to="{ name: 'Informations' }"
            >Informations</RouterLink
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
            <RouterLink class="link" :to="{ name: 'LaVocationDuCabinet' }"
              >La vocation du Cabinet</RouterLink
            >
          </li>
          <li>
            <RouterLink class="link" :to="{ name: 'MonApproche' }"
              >Mon approche</RouterLink
            >
          </li>
          <li>
            <RouterLink class="link" :to="{ name: 'QuiSuisJe' }"
              >Qui suis je ?</RouterLink
            >
          </li>
          <li>
            <RouterLink class="link" :to="{ name: 'Informations' }"
              >Informations</RouterLink
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
      if (this.windowWidth <= 1250) {
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
  @apply bg-vert z-50 w-full fixed top-0 ease-in-out duration-500 h-24 text-orange text-2xl;

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
    @apply p-4 ml-4;
  }
  .link {
    @apply text-sm ease-in-out duration-500 pb-1 border-b-0;
  }
}

.link:hover {
  @apply underline uppercase text-pale;
}
img {
  @apply h-24 absolute top-0 left-0;
}
ul {
  @apply flex flex-row space-x-8 justify-items-end relative left-52 top-8;
}
.fa {
  @apply h-full items-center absolute top-8 right-12;
}
.icon-active {
  @apply rotate-180;
}

.dropdown-nav {
  @apply flex flex-col space-y-3 fixed w-full max-w-xs h-full bg-vert top-0 left-0;

  .link {
    @apply relative left-3;
  }
}
</style>
