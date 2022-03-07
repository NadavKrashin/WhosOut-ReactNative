<template>
  <v-app>
    <Navbar />
    <v-main class="d-md-none">
      <router-view />
    </v-main>
    <Footer />
  </v-app>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import Footer from "@/components/Footer.vue";
import { mapState, mapActions } from "vuex";

export default {
  name: "App",
  data: () => ({
    //
  }),
  computed: {
    ...mapState(["user"]),
    userExists() {
      return Object.keys(this.user).length;
    },
  },
  mounted() {
    if (!this.userExists) {
      this.$router.push({ name: "Login" });
    }
    const color = localStorage.getItem("color");
    if (color) {
      this.updateColor(color);
    }
  },
  methods: {
    ...mapActions(["updateColor"]),
  },
  components: {
    Navbar,
    Footer,
  },
};
</script>
