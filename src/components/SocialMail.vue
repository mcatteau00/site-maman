<template>
  <div class="bg-pale w-20 h-2">
    <div class="absolute left-2 top-2"><ProNetwork /></div>
    <div class="absolute right-2 top-2"><MailTel /></div>
  </div>
</template>

<script>
import ProNetwork from "@/components/ProNetwork.vue";
import MailTel from "@/components/MailTel.vue";

export default {
  components: {
    ProNetwork,
    MailTel,
  },
};
</script>
