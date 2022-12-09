<template>

 
    <div class="header-free-trial-container">

    <div>

    <h2 class= 'header-free-trial'>{{freeTrial}}</h2>
    <h3 class= 'sub-header-free-trial'>{{freeTrial}}</h3>
    </div> 


   <nav class = menu-list-free-trial-container >
        <ul class='menu-list-free-trial'>
        <li class="list-free-trial"><img  class='green-tick' src="https://cdn.pixabay.com/photo/2013/07/13/10/48/check-157822_960_720.png">Sign in for Free no Credit Card required</li>
        <li class="list-free-trial"><img  class='green-tick' src="https://cdn.pixabay.com/photo/2013/07/13/10/48/check-157822_960_720.png">Preconfigured your account </li>
        <li class="list-free-trial"><img  class='green-tick' src="https://cdn.pixabay.com/photo/2013/07/13/10/48/check-157822_960_720.png">Created edited or deleted your own tasks </li>
        <li class="list-free-trial"><img  class='green-tick' src="https://cdn.pixabay.com/photo/2013/07/13/10/48/check-157822_960_720.png">IronHack is awsome </li>
    </ul>
</nav> 

    <div>

    <button class='button-free-trial'> Start Free trial</button>

    </div>
    <!-- <div class = curved-background__curved> -->
    <img class="background-sububright" src ='https://images.unsplash.com/uploads/141103282695035fa1380/95cdfeef?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1730&q=80'>
    <!-- </div>   -->

    </div>


</template>

<script setup>

import { ref } from "vue";

// Header Freee Trial //

const freeTrial = "Start your free trial. No credit card required, no software to install."

// SubHeader Freee Trial //

const subtFreeTrial = "With your free trial, you get";

</script>

<style>

/* CSS signup -left */



.header-free-trial{
    font-size: 1.9rem;
    color: #042D60;
    margin-top: 5%;
}

.sub-header-free-trial{
    font-size: 1.6rem;
    padding-top: 10px;
    margin-top: 4%;

}


.menu-list-free-trial-container ul{  
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  font-family: "Roboto";
  font-size:2rem;
  padding-left: 0px;
  margin-top: 3%
}

.list-free-trial {
    padding : 10px
}

.green-tick{
    width: 20px;
    height: 20px
}


.header-free-trial-container{
    display: flex;
    flex-direction: column;
}

.strangeblueelement { 
    background:#155FB2;
    border-radius: 25px;
    width: 100%;
    height: 100%;
}

.button-free-trial{

    font-size: 1.4rem;
    padding: 10px 15px;
    display: block;
    margin: 20px;
    background-color:#155FB2;
    border: 1px solid rgb(216, 221, 230);
    border-radius: 4px;
    color: white;
}

.background-sububright {
    width: 110%;
    height: 290px;
}


.curved-background__curved{
background-color: #d1d5db;

/* You can use gradient background color such as */
/* background: linear-gradient(rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.1) 100%); */

/* Curved corners */
border-bottom-left-radius: 50% 40%;
border-bottom-right-radius: 50% 40%;

/* Size */
height: 70%;
width: 100%;
}
</style>