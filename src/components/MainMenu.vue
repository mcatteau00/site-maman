<template>
  <header :class="{ 'scrolled-nav': scrollPosition }">
    <nav>
      <div class="branding">
        <img class="h-6" src="@/images/linkedin_logo.png" />
        <p>Céline Allafort</p>
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
          class="far fa-bars"
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
      scrollPosition: null,
      mobile: null,
      mobileNav: null,
      windowWidth: null,
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
header {
  @apply bg-pale z-50 w-full fixed top-0 ease-in-out duration-500;
  nav {
    @apply bg-vert flex flex-row py-0 px-12 w-11/12 my-0 mx-auto ease-in-out duration-500;
    @media (min-width: 1140px) {
      max-width: 1140px;
    }
  }
}

ul {
  @apply flex flex-row;
}
.link {
  @apply font-[500] text-orange list-none hover:underline hover:uppercase hover:text-pale;
}
.icon {
  @apply flex items-center absolute top-0 right-6 h-full;
}
</style>
