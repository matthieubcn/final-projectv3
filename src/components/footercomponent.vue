<template>

<div class="footer">

    <div>

    <ul>
        <li>About</li>
        <li>Home</li>
        <li> <router-link to="/terms">Terms and Conditions</router-link></li>
        <li>Job Application</li>
    </ul>

    </div>

    <div class = "picture-container">
        <img class="social-network" src ='https://cdn-icons-png.flaticon.com/512/25/25231.png'>
        <img class="social-network" src ="https://www.pngfind.com/pngs/m/2-23339_black-and-white-instagram-logo-instagram-logo-2018.png">
        <img class="social-network" src ="https://www.pngfind.com/pngs/m/2-23339_black-and-white-instagram-logo-instagram-logo-2018.png">
    </div>

</div>
    
</template>

<script setup>

</script>

<style>
.social-network {
    width:30px;
    height:30px;
    margin: 20px
}


.footer > div {
    display: flex;
    justify-content: center;
}

li{
    text-decoration: none;
    font-size:1.4rem;

}

ul {
  list-style: none;
  padding-inline-start: 20px;
  display: flex;
  align-items: center;
  font-family: "Roboto";
  display: inline block;
}


</style>