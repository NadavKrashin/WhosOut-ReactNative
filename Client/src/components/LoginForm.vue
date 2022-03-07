<template>
  <div class="login d-flex align-center">
    <v-container>
      <v-card ref="form">
        <v-card-title>Login</v-card-title>
        <v-card-text>
          <v-text-field
            ref="username"
            v-model="username"
            prepend-icon="mdi-account"
            label="Username"
            name="username"
            :rules="[rules.username]"
            filled
            rounded
            dense
          ></v-text-field>

          <v-text-field
            ref="password"
            v-model="password"
            prepend-icon="mdi-lock"
            :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
            :type="showPassword ? 'text' : 'password'"
            label="Password"
            name="password"
            @click:append="showPassword = !showPassword"
            :rules="[rules.password]"
            filled
            rounded
            dense
          ></v-text-field>
        </v-card-text>

        <v-divider class="mt-12"></v-divider>

        <v-card-actions>
          <v-btn text @click="goHome"> Cancel </v-btn>
          <v-spacer></v-spacer>
          <v-btn :color="color" text @click="submit"> Submit </v-btn>
        </v-card-actions>
      </v-card>
    </v-container>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import api from "../api/api";
import Swal from "sweetalert2";

export default {
  name: "Login",
  data() {
    return {
      username: "",
      password: "",
      showPassword: false,
      formHasErrors: false,
      rules: {
        username: (username) => !!username || "Username is required",
        password: (password) => !!password || "Password is required",
      },
    };
  },
  computed: {
    ...mapState(["user", "color"]),
    form() {
      return {
        username: this.username,
        password: this.password,
      };
    },
    userExists() {
      return Object.keys(this.user).length;
    },
  },
  methods: {
    ...mapActions(["updateUser"]),
    fireSwal(icon, title) {
      Swal.fire({
        icon,
        title,
        showConfirmButton: false,
        timer: 1500,
      });
    },
    goHome() {
      if (this.userExists) {
        this.$router.push({ name: "Home" });
      }
    },
    async submit() {
      this.formHasErrors = false;

      Object.keys(this.form).forEach((input) => {
        if (!this.form[input]) this.formHasErrors = true;

        this.$refs[input].validate(true);
      });

      if (!this.formHasErrors) {
        const user = (await api.users().login(this.username, this.password))
          .data;

        if (user) {
          this.fireSwal("success", `Hello ${user.username}`);
          this.updateUser(user);
          this.$router.push({ name: "Home" });
        } else {
          this.fireSwal("error", "User doesn't exist");
        }
      }
    },
  },
};
</script>

<style scoped>
.login {
  height: 80%;
}
</style>