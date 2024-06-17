<template>
  <div class="register_page_container">
    <div class="register_grid_container">
    <h1 class="title">Register</h1>
    <b-form @submit.prevent="onRegister" @reset.prevent="onReset">

      <!-- user name -->
      <b-form-group
        id="input-group-username"
        label-cols-sm="3"
        label="Username:"
        label-for="username"
      >
        <b-form-input
          id="username"
          v-model="$v.form.username.$model"
          type="text"
          :state="validateState('username')"
        ></b-form-input>
        <b-form-invalid-feedback v-if="!$v.form.username.required">
          Username is required
        </b-form-invalid-feedback>
        <b-form-invalid-feedback v-else-if="!$v.form.username.length">
          Username length should be between 3-8 characters long
        </b-form-invalid-feedback>
        <b-form-invalid-feedback v-if="!$v.form.username.alpha">
          Username alpha
        </b-form-invalid-feedback>
      </b-form-group>
      <!-- first name -->
      <b-form-group
        id="input-group-firstName"
        label-cols-sm="3"
        label="First Name:"
        label-for="firstName"
      >
        <b-form-input
          id="firstName"
          v-model="$v.form.firstName.$model"
          type="text"
          :state="validateState('firstName')"
        ></b-form-input>
        <b-form-invalid-feedback v-if="!$v.form.firstName.required">
          First Name is required
        </b-form-invalid-feedback>
      </b-form-group>
      <!-- last name -->
      <b-form-group
        id="input-group-lastName"
        label-cols-sm="3"
        label="Last Name:"
        label-for="lastName"
      >
        <b-form-input
          id="lastName"
          v-model="$v.form.lastName.$model"
          type="text"
          :state="validateState('lastName')"
        ></b-form-input>
        <b-form-invalid-feedback v-if="!$v.form.lastName.required">
          First Name is required
        </b-form-invalid-feedback>
      </b-form-group>

      <!-- country -->
      <b-form-group
        id="input-group-country"
        label-cols-sm="3"
        label="Country:"
        label-for="country"
      >
        <b-form-select
          id="country"
          v-model="$v.form.country.$model"
          :options="countries"
          :state="validateState('country')"
        ></b-form-select>
        <b-form-invalid-feedback>
          Country is required
        </b-form-invalid-feedback>
      </b-form-group>
        
      <!-- password -->
      <b-form-group
        id="input-group-Password"
        label-cols-sm="3"
        label="Password:"
        label-for="password"
      >
        <b-form-input
          id="password"
          type="password"
          v-model="$v.form.password.$model"
          :state="validateState('password')"
        ></b-form-input>
        <b-form-invalid-feedback v-if="!$v.form.password.required">
          Password is required
        </b-form-invalid-feedback>
        <b-form-text v-else-if="$v.form.password.$error" text-variant="info">
          Your password should be <strong>strong</strong>. <br />
          For that, your password should be also:
        </b-form-text>
        <b-form-invalid-feedback
          v-if="$v.form.password.required && !$v.form.password.length"
        >
          Have length between 5-10 characters long<br>
          Have at least 1 number<br>
          Have at least 1 special character
          v
        </b-form-invalid-feedback>
        <b-form-invalid-feedback
          v-else-if="$v.form.password.required && $v.form.password.length"
        >
          Have at least 1 number<br>
          Have at least 1 special character
          v
        </b-form-invalid-feedback>
      </b-form-group>

      <!-- confirm password -->
      <b-form-group
        id="input-group-confirmedPassword"
        label-cols-sm="3"
        label="Confirm Password:"
        label-for="confirmedPassword"
      >
        <b-form-input
          id="confirmedPassword"
          type="password"
          v-model="$v.form.confirmedPassword.$model"
          :state="validateState('confirmedPassword')"
        ></b-form-input>
        <b-form-invalid-feedback v-if="!$v.form.confirmedPassword.required">
          Password confirmation is required
        </b-form-invalid-feedback>
        <b-form-invalid-feedback
          v-else-if="!$v.form.confirmedPassword.sameAsPassword"
        >
          The confirmed password is not equal to the original password
        </b-form-invalid-feedback>
      </b-form-group>

        <!-- Email -->
        <b-form-group
          id="input-group-email"
          label-cols-sm="3"
          label="email:"
          label-for="email"
        >
          <b-form-input
            id="email"
            v-model="$v.form.email.$model"
            type="email"
            :state="validateState('email')"
            class="input-bar"
          ></b-form-input>
          <b-form-invalid-feedback v-if="!$v.form.email.required">
            Email is required
          </b-form-invalid-feedback>
          <b-form-invalid-feedback v-else-if="!$v.form.email.email">
            Enter a valid email
          </b-form-invalid-feedback>
        </b-form-group>
      <div class="button-container">
        <b-button type="reset" variant="danger">Reset</b-button>
        <b-button
          type="submit"
          variant="primary"
          style="width:250px;"
          class="register-button"
          @click="Register"
          >Register</b-button>
      </div>
      <div class="mt-2">
        You have an account already?
        <router-link to="login" class="login_here"> Log in here</router-link>
      </div>
    </b-form>
    <b-alert
      class="mt-2"
      v-if="form.submitError"
      variant="warning"
      dismissible
      show
    >
      Register failed: {{ form.submitError }}
    </b-alert>
  </div>
</div>
</template>

<script>
import countries from "../assets/countries";
import {
  required,
  minLength,
  maxLength,
  alpha,
  sameAs,
  email
} from "vuelidate/lib/validators";
import { mockRegister } from "../services/auth.js";
export default {
  name: "Register",
  data() {
    return {
      form: {
        username: "",
        firstName: "",
        lastName: "",
        country: null,
        password: "",
        confirmedPassword: "",
        email: "",
        submitError: undefined
      },
      countries: [{ value: null, text: "", disabled: true }],
      errors: [],
      validated: false
    };
  },
  validations: {
    form: {
      username: {
        required,
        length: (u) => minLength(3)(u) && maxLength(8)(u),
        alpha
      },
      firstName:{
        required
      },
      lastName:{
        required
      },
      country: {
        required
      },
      password: {
        required,
        length: (p) => minLength(5)(p) && maxLength(10)(p),
        valid: function(value) {
        const containsNumber = /[0-9]/.test(value)
        const containsSpecial = /[#?!@$%^&*-]/.test(value)
        return containsNumber && containsSpecial
        }
      },
      confirmedPassword: {
        required,
        sameAsPassword: sameAs("password")
      },
      email:{
        required,
        email
      },
      containsNumber: function(value) {
        return /[0-9]/.test(value)
      },
      containsSpecial: function(value) {
        return /[#?!@$%^&*-]/.test(value)
      } 
    }
  },
  mounted() {
    // console.log("mounted");
    this.countries.push(...countries);
    // console.log($v);
  },
  methods: {
    validateState(param) {
      const { $dirty, $error } = this.$v.form[param];
      return $dirty ? !$error : null;
    },
    async Register() {
      try {

        // const response = await this.axios.post(
        //   // "https://test-for-3-2.herokuapp.com/user/Register",
        //   this.$root.store.server_domain + "/Register",

        //   {
        //     username: this.form.username,
        //     password: this.form.password
        //   }
        // );

        const userDetails = {
          username: this.form.username,
          password: this.form.password
        };

        const response = mockRegister(userDetails);

        this.$router.push("/login");
        // console.log(response);
      } catch (err) {
        console.log(err.response);
        this.form.submitError = err.response.data.message;
      }
    },

    onRegister() {
      // console.log("register method called");
      this.$v.form.$touch();
      if (this.$v.form.$anyError) {
        return;
      }
      // console.log("register method go");
      this.Register();
    },
    onReset() {
      this.form = {
        username: "",
        firstName: "",
        lastName: "",
        country: null,
        password: "",
        confirmedPassword: "",
        email: ""
      };
      this.$nextTick(() => {
        this.$v.$reset();
      });
    }
  }
};
</script>
<style lang="scss" scoped>
.register_page_container {

  background: url('@/assets/bread_background.jpg') no-repeat  center fixed;
  background-size: cover;
  box-sizing: border-box;
  color: white;
  display: flex;
  overflow: auto; 
  height: 100vh;


}
.register_grid_container{
  box-sizing: border-box;
    width: 30%;
    height: 70%;
    margin-top: 5rem;
    margin-left:  10rem;
}

.button-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.register-button {
  flex: 2;
  margin-left: 0.5rem; 
}
.login_here{
  font-weight: 700; 
  font-size: 1.5em; 
  color: rgb(36, 218, 224);
}
</style>
