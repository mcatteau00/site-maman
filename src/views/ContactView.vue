<template>
  <div class="Contact"><TrueContactForm /></div>
</template>

<script>
import TrueContactForm from "@/components/TrueContactForm.vue";
export default {
  components: {
    TrueContactForm,
  },
};
</script>

<style scoped>
.input {
  @apply m-4;
}
.Contact {
  @apply m-4 p-4 text-xl;
}
</style>
