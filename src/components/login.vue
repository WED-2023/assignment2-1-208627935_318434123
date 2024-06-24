<template>
    <div class="login-page">
      <div class="login_component_container"></div>
        <b-form @submit.prevent="onLogin">
          <h1 class="title">Login</h1>
          <b-form-group
            id="input-group-Username"
            label-cols-sm="3"
            label="Username:"
            label-for="Username"
            class="form-group"
          >
            <b-form-input
              class="input_bar"
              id="Username"
              v-model="$v.form.username.$model"
              type="text"
              :state="validateState('username')"
            ></b-form-input>
            <b-form-invalid-feedback>
              Username is required
            </b-form-invalid-feedback>
          </b-form-group>
  
          <b-form-group
            id="input-group-Password"
            label-cols-sm="3"
            label="Password:"
            label-for="Password"
            class="form-group"
          >
            <b-form-input
              class="input_bar"
              id="Password"
              type="password"
              v-model="$v.form.password.$model"
              :state="validateState('password')"
            ></b-form-input>
            <b-form-invalid-feedback>
              Password is required
            </b-form-invalid-feedback>
          </b-form-group>
  
          <b-button
            type="submit"
            variant="primary"
            style="width:100px;display:block;"
            class="mx-auto w-100"
            >Login</b-button
          >
          <div class="mt-2">
            Do not have an account yet?
            <router-link to="register"> Register in here</router-link>
          </div>
        </b-form>
        <b-alert
          class="mt-2"
          v-if="form.submitError"
          variant="warning"
          dismissible
          show
        >
          Login failed: {{ form.submitError }}
        </b-alert>
    </div>

  </template>
  
  <script>
  import { required } from "vuelidate/lib/validators";
  import {mockLogin} from "../services/auth.js"
  export default {
    name: "Login",
    data() {
      return {
        form: {
          username: "",
          password: "",
          submitError: undefined
        }
      };
    },
    validations: {
      form: {
        username: {
          required
        },
        password: {
          required
        }
      }
    },
    methods: {
      validateState(param) {
        const { $dirty, $error } = this.$v.form[param];
        return $dirty ? !$error : null;
      },
      async Login() {
        try {
          
          // const response = await this.axios.post(
          //   this.$root.store.server_domain +"/Login",
  
  
          //   {
          //     username: this.form.username,
          //     password: this.form.password
          //   }
          // );
  
          const success = true; // modify this to test the error handling
          const response = mockLogin(this.form.username, this.form.password, success);
  
          // console.log(response);
          // this.$root.loggedIn = true;
          console.log(this.$root.store.login);
          this.$root.store.login(this.form.username);
          if (this.$route.path !== "/"){
            this.$router.push("/");
          }
        } catch (err) {
          console.log(err.response);
          this.form.submitError = err.response.data.message;
        }
      },
  
      onLogin() {
        // console.log("login method called");
        this.form.submitError = undefined;
        this.$v.form.$touch();
        if (this.$v.form.$anyError) {
          return;
        }
        // console.log("login method go");
  
        this.Login();
      }
    }
  };
  </script>
  <style lang="scss" scoped>
  
  .login-page {
    color: yellow;
    display: flex;
    overflow: auto;
    justify-content: center;
    align-items: center;
    height: 100vh;
    margin-top: 0%;
  }
  
  .login-container h2 {
    margin-bottom: 20px;
  }
  
  .form-group {
    margin-bottom: 15px;
    width: 100%;
  }
  
  .form-group label {
    display: block;
    margin-bottom: 5px;
  }
  
  .form-group input {
    width: 100%;
    padding: 8px;
    box-sizing: border-box;
  }
  
  button {
    width: 100%;
    padding: 10px;
    background-color: #0056b3;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  
  button:hover {
    background-color: #083a6e;
  }
  .input_bar{
    margin-left: 1rem;
    width: 100%;
  
  }
  .form-group {
    margin-bottom: 20px;
    width: 100%;
  }
  .title{
    margin-left: 6rem;
    margin-bottom: 1rem;
  }
  </style>
  