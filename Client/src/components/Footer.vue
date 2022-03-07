<template>
  <v-footer :color="color" padless>
    <v-row justify="center" no-gutters>
      <v-col
        :class="[color, 'py-1 text-center d-flex justify-space-around']"
        cols="12"
        v-if="userExists"
      >
        <v-btn @click="goToCalendar" icon>
          <v-icon>mdi-calendar</v-icon>
        </v-btn>
        <v-btn @click="goHome" icon>
          <v-icon>mdi-home</v-icon>
        </v-btn>
        <v-btn icon>
          <v-icon>mdi-map-marker-check</v-icon>
        </v-btn>
        <v-btn icon>
          <v-icon>mdi-account</v-icon>
        </v-btn>
      </v-col>
    </v-row>
  </v-footer>
</template>

<script>
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState(["user", "color"]),
    userExists() {
      return Object.keys(this.user).length;
    },
  },
  methods: {
    goHome() {
      this.$router.push({ name: "Home" });
    },
    goToCalendar() {
      this.$router.push({ name: "Calendar" });
    },
  },
};
</script>

<style scoped>
</style>