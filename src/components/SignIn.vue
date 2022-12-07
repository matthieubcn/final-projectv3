<!-- COMPONENTE BOILERPLATE -->
 
  <template>


<div class="big-container">

  <div>

  <div class="container">
    <h3 class="header-title">Log In to : TaskForce</h3>
      
    <form @submit.prevent="signIn" class="form-sign-in">
        <div class="form-input">
          <label class="input-field-label">E-mail*</label>
          <input
            type="email"
            class="input-field"
            placeholder="example@gmail.com"
            id="email"
            v-model="email"
            required
          />
          </div>

          <div class="form-input">
          <label class="input-field-label">Password*</label>
          <input
            type="password"
            class="input-field"
            placeholder="**********"
            id="password"
            v-model="password"
            required
          />
          </div>

     <button class="button-signin" type="submit">Sign In</button>

    </form>
    <p class="signin-account">Do not have an account ? <PersonalRouter :route="route" :buttonText="buttonText" class="sign-up-link"/></p>
    </div>

  </div>
  <div class=" picture">
  <img id="background" src ='https://images.pexels.com/photos/389818/pexels-photo-389818.jpeg'>
  </div>

</div>

</template>

<script setup>
import {ref} from "vue"
import PersonalRouter from "./PersonalRouter.vue";
import { useRouter } from "vue-router";
import { useUserStore } from "../stores/user";

// Route Variables
const route = "/auth/signup";
const buttonText = "Sign Up";


const email = ref('')
const password = ref('')

const redirect = useRouter();


// Arrow function to Signin user to supaBase
const signIn = async () => {
  console.log('We are in sign in')
  try {
    await useUserStore().signIn(email.value, password.value)
    redirect.push({ path: "/" });
  } catch (error) {}
};
</script>

<style>

</style>
