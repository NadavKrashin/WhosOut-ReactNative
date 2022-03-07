<template>
  <v-app-bar app :color="color" dark>
    <div class="d-flex align-center">
      <!-- <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        /> -->
      <v-toolbar-title class="text-h5">Who's Out?</v-toolbar-title>
      <!-- <v-img
          alt="Vuetify Name"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="100"
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
          width="100"
        /> -->
    </div>

    <v-spacer></v-spacer>

    <v-btn @click="changeColor" icon>
      <v-icon>mdi-invert-colors</v-icon>
    </v-btn>
    <v-btn v-show="!userExists" @click="goToLogin" icon>
      <v-icon>mdi-account</v-icon>
    </v-btn>
    <v-btn v-show="userExists" @click="logout" icon>
      <v-icon>mdi-logout</v-icon>
    </v-btn>
  </v-app-bar>
</template>

<script>
import { mapState, mapActions } from "vuex";
import Swal from "sweetalert2";

export default {
  computed: {
    ...mapState(["user", "color"]),
    userExists() {
      return Object.keys(this.user).length;
    },
  },
  methods: {
    ...mapActions(["resetUser", "toggleColor"]),
    fireSwal(icon, title) {
      Swal.fire({
        icon,
        title,
        showConfirmButton: false,
        timer: 1500,
      });
    },
    changeColor() {
      this.toggleColor();
    },
    goToLogin() {
      this.$router.push({ name: "Login" });
    },
    logout() {
      this.fireSwal("success", `GoodBye ${this.user.username}`);
      this.resetUser();
      this.$router.push({ name: "Login" });
    },
  },
};
</script>

<style>
</style>