<template>
  <nav>
    <!-- <PersonalRouter :route="route" :buttonText="buttonText" class="logo-link"/> -->
    <router-link class="home router-styling" to="/">
      Home
    </router-link>

    <ul>
        <li>
          <router-link to="/" class="router-styling">Task Manager</router-link>
        </li>

        <li>
          <router-link to="/account" class="router-styling">Your Account</router-link>
        </li>
    </ul>

    <div>
      <ul>
        <li class="log-out-welcome">
          <p class="router-styling"> Welcome, user</p>
        </li>
        <li>
          <button @click="signOut" class="button">Log out</button>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script setup>
// import PersonalRouter from "./PersonalRouter.vue";
import { useUserStore } from "../stores/user";
import { computed } from "vue";
import { useRouter } from "vue-router";
import { ref } from 'vue';
import { supabase } from "../supabase";



//constant to save a variable that will hold the use router method
const route = "/";
const buttonText = "Todo app";

// constant to save a variable that will get the user from store with a computed function imported from vue
// const getUser = computed(() => useUserStore().user);
const getUser = useUserStore().user;

// constant that calls user email from the useUSerStore
const userEmail = getUser.email;

// async function that calls the signOut method from the useUserStore and pushes the user back to the Auth view.
const redirect = useRouter();

const signOut = async () => {
  try
  {
    await useUserStore().signOut(userEmail.value)
    redirect.push({ path: "/auth/login" });
  } catch (error) {}
};

</script>

<style>

@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap');
.navbar-img {
  width: 90px;
  border-radius: 50%;
}

nav {
  display: flex;
  width: 100%;
  justify-content: space-around;
  align-items: center;
  font-size: 2rem;
}

nav ul {
  list-style: none;
  padding-inline-start: 20px;
  display: flex;
  align-items: center;
  font-family: "Roboto";
  font-size:2rem;
}

li{
  text-decoration: none;
  padding-right: 20px;
}

.router-styling{
  text-decoration: none;
  font-size: 2rem;
}



</style>
