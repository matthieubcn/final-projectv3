<template>
    <!-- <PersonalRouter :route="route" :buttonText="buttonText" class="logo-link"/> -->

   
    <div class = nav-container>

      <p class="username"> Welcome {{username}}</p>
      <!-- <nav class="navMenu">
   
   
     <ul>
      <li>
      <router-link class="router-styling" to="/">
      Home
     </router-link>
      </li>

        <li>
          <router-link to="/" class="router-styling">Task Manager</router-link>
        </li>

        <li>
          <router-link to="/account" class="router-styling">Your Account</router-link> 
        </li>

        <li id="log-out-welcome">
        <button @click="signOut" class="button">Log out</button>
        </li>

    </ul> -->


    

  <!-- <div>
      <p class="router-styling"> Welcome IronHacker</p>
      </div> -->

  <meta name="viewport" content="width=device-width, initial-scale=1">
  <section class="top-nav">
   
    <input id="menu-toggle" type="checkbox" />
    <label class='menu-button-container' for="menu-toggle">
    <div class='menu-button'></div>
  </label>
    <ul class="menu">
      <router-link id="router-styling" to="/">
      Home
     </router-link>
     
      <router-link to="/" id="router-styling">Task Manager</router-link> 
      <router-link to="/account" id="router-styling">Your Account</router-link>
  
    </ul>
  </section>
  <div id="log-out-welcome">
  <button @click="signOut" class="button">Log out</button>
  </div>


    </div>




</template>

<script setup>
// import PersonalRouter from "./PersonalRouter.vue";
import { useUserStore } from "../stores/user";
import { computed } from "vue";
import { useRouter } from "vue-router";
import { ref } from 'vue';
import { supabase } from "../supabase";
import { onMounted, toRefs } from 'vue'
  
// Get the value on the home page 
const userStore = useUserStore(); 

  const username = ref(null);
  const email = ref(null);

  onMounted(() => {
    getProfile();
  });

  async function getProfile() {
    await userStore.fetchUser();
    username.value = userStore.profile.username;
};



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



// var sidenav = document.getElementById("mySidenav");
// var openBtn = document.getElementById("openBtn");
// var closeBtn = document.getElementById("closeBtn");

// openBtn.onclick = openNav;
// closeBtn.onclick = closeNav;

/* Set the width of the side navigation to 250px */
// function openNav() {
//   sidenav.classList.add("active");
// }

// /* Set the width of the side navigation to 0 */
// function closeNav() {
//   sidenav.classList.remove("active");
// }
</script>

<style>

 
.nav-container{
  display:flex;
  align-items: center;
  justify-content: space-between;
  background-color: #F4F6F9
}

.username{
  font-size: 1.6rem;
  font-weight: 800;
  margin-left: 5%;


}


nav ul {  
  list-style: none;
  padding-inline-start: 20px;
  display: flex;
  align-items: center;
  font-family: "Roboto";
  font-size:2rem;
}

#router-styling{ 
    text-decoration: none;
    padding-right: 0px;
    font-size: 1.5rem;
    color: #444444;
}


#log-out-welcome :hover {
  color: white !important;
  background: linear-gradient(10deg,#3CA1E0,#155FB2);
  cursor:pointer
}


/* 
@media (max-width : 500px){
.nav-container{
  display: flex;
  flex-direction: column;
}
} */



.top-nav {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: #F4F6F9;
  background: linear-gradient(blue);
  color: #FFF;
  height: 50px;
  padding: 1em;
}

.menu {
  display: flex;
  flex-direction: row;
  list-style-type: none;
  margin: 0;
  padding: 0;
}

.menu > #router-styling {
  margin: 0 1rem;
  overflow: hidden;
}

.menu-button-container {
  display: none;
  height: 100%;
  width: 30px;
  cursor: pointer;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

#menu-toggle {
  display: none;
}

.menu-button,
.menu-button::before,
.menu-button::after {
  display: block;
  background: linear-gradient(10deg,#3CA1E0,#155FB2);
  position: fixed;
  height: 4px;
  width: 30px;
  transition: transform 400ms cubic-bezier(0.23, 1, 0.32, 1);
  border-radius: 2px;
}

.menu-button::before {
  content: '';
  margin-top: -8px;
}

.menu-button::after {
  content: '';
  margin-top: 8px;
}

#menu-toggle:checked + .menu-button-container .menu-button::before {
  margin-top: 0px;
  transform: rotate(405deg);
}

#menu-toggle:checked + .menu-button-container .menu-button {
  background: rgba(255, 255, 255, 0);
}

#menu-toggle:checked + .menu-button-container .menu-button::after {
  margin-top: 0px;
  transform: rotate(-405deg);
}

@media (max-width: 700px) {
  .menu-button-container {
    display: flex;
  }

  .username{
    display:none
  }
  .menu {
    position: fixed;
    top: 0;
    margin-top: 60px;
    left: 0;
    flex-direction: column;
    width: 100%;
    justify-content: center;
    align-items: center;
    margin-bottom: 30px;
  }
  #menu-toggle ~ .menu #router-styling {
    height: 0;
    margin: 0;
    padding: 0rem;
    border: 0;
    transition: height 400ms cubic-bezier(0.23, 1, 0.32, 1);
  }
  #menu-toggle:checked ~ .menu #router-styling {

    height: 1rem;
    padding: 2rem;
    transition: height 400ms cubic-bezier(0.23, 1, 0.32, 1);
  }
  .menu > #router-styling {
    display: flex;
    justify-content: center;
    margin: 0;
    padding: 0;
    width: 100%;
    color:#155FB2;
    font-weight: 600;
    background-color:#F4F6F9;

    z-index:1;
    text-decoration: none;
  }

}


#router-styling{
  background:
    linear-gradient(
      to right,
      rgba(100, 200, 200, 1),
      rgba(100, 200, 200, 1)
    ),
    linear-gradient(
      to right,
      rgba(255, 0, 0, 1),
      rgba(255, 0, 180, 1),
      rgba(0, 100, 200, 1)
  );
  background-size: 100% 3px, 0 3px;
  background-position: 100% 100%, 0 100%;
  background-repeat: no-repeat;
  transition: background-size 400ms;
  padding: 10px
}

#router-styling:hover {
  background-size: 0 3px, 100% 3px;
}


  /* .menu > li:not(:last-child) {
    border-bottom: 1px solid #444;
  }
} */

</style>
