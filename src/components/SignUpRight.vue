<template>

 
    <div class="header-free-trial-container">

    <div>

    <h2 class= 'header-free-trial'>{{freeTrial}}</h2>
    <h3 class= 'sub-header-free-trial'>{{subtFreeTrial}}</h3>
    </div> 


   <nav class = menu-list-free-trial-container >
        <ul class='menu-list-free-trial'>
        <li class="list-free-trial"><img  class='green-tick' src="https://cdn.pixabay.com/photo/2013/07/13/10/48/check-157822_960_720.png">Sign in for Free and choose your credit card later</li>
        <li class="list-free-trial"><img  class='green-tick' src="https://cdn.pixabay.com/photo/2013/07/13/10/48/check-157822_960_720.png">Preconfigured your account </li>
        <li class="list-free-trial"><img  class='green-tick' src="https://cdn.pixabay.com/photo/2013/07/13/10/48/check-157822_960_720.png">Created edited or deleted your own tasks </li>
        <li class="list-free-trial"><img  class='green-tick' src="https://cdn.pixabay.com/photo/2013/07/13/10/48/check-157822_960_720.png">IronHack is awesome </li>
    </ul>
</nav> 
    

    


    <div>

    <button class='button-free-trial'> Start Free trial</button>

    </div>

    <div class="image-logo">
        <img class="image-logo-sign-up" src="../assets/image/card-2.png">
    </div>
    <div class="image-logo">
        <img class="image-logo-sign-in" src="../assets/image/card-1.png">
    </div>

    <div class = curved-background__curved></div>

    <div class =container-picture>
    <div>
    <img class="background-sububright" src ='https://images.unsplash.com/uploads/141103282695035fa1380/95cdfeef?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1730&q=80'>
    </div>
    </div>

    </div>


</template>

<script setup>

import { ref } from "vue";



// Header Freee Trial //

const freeTrial = "Start your free trial. No Credit Credit card required now, no software to install."

// SubHeader Freee Trial //

const subtFreeTrial = "With your trial, you get: ";

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

.header-free-trial-container{
    max-height:950px;
    position: relative;

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
    width: 108%;
    height: 290px;
    border-radius: 2%;
    margin-left: 10px;
}



.container-picture{
    position: relative;
}

.curved-background__curved{
/* background-color:#3CA1E0; */
background : linear-gradient(10deg,#3CA1E0,#155FB2);
z-index: 0;
position: absolute;
height: 300px;
width:500px;
border-top-left-radius: 180%;
left: 40%;
bottom:29%;
box-shadow: 1px ;
border: 1px solid rgb(216, 221, 230);

}

@media (max-width : 700px) {
    .curved-background__curved{
        display:none;
}
    .container-picture{
        display: none;
    }

}


.image-logo-sign-up{
    width: 30%;
    height: 30%;
    position: absolute;
    top:27%;
    left: 50%;
    z-index: 2;
    rotate: 20%
}


.image-logo-sign-in{
    width: 30%;
    height: 30%;
    position: absolute;
    top:18%;
    left: 82%;
    z-index: 2;
    rotate: 20%
}

</style>