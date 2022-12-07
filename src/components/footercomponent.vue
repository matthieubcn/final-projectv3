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
        <img class="social-network" src ='https://www.facebook.com/images/fb_icon_325x325.png'>
        <img class="social-network" src ="https://cdn-icons-png.flaticon.com/512/3621/3621435.png">
        <img class="social-network" src ="https://www.maryville.edu/wp-content/uploads/2015/11/Linkedin-logo-1-550x550-300x300.png">
    </div>

</div>
    
</template>

<script setup>

</script>

<style>
.social-network {
    width:40px;
    height:40px;
    padding: 20px;
    text-align: center;
}

.footer {
    position: absolute;
    bottom: 0px;
    text-align: center;
    margin-left: 40%;
}

.footer > div {
    display: flex;
    justify-content: space-around;
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