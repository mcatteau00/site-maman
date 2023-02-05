<eslint-disable></eslint-disable>
<template>
  <div>
    <ContactForm v-model="event.nom" type="text" label="Nom" />
    <ContactForm v-model="event.prenom" type="text" label="Prenom" />
    <br />
    <ContactForm v-model="event.mail" type="text" label="Mail" />
    <ContactForm v-model="event.tel" type="text" label="Numéro de téléphone" />
    <br />
    <ContactForm v-model="event.message" type="text" label="Votre message" />
  </div>
</template>

<script>
import ContactForm from "@/components/ContactForm.vue";
export default {
  components: {
    ContactForm,
  },
  data() {
    return {
      event: {
        nom: "",
        prenom: "",
        message: "",
        mail: "",
        tel: "",
      },
    };
  },
};
</script>
