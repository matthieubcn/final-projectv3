<template>

<div class="footer">

<div class=" footer-menu">

    <ul>
        <li id="router-styling">About us</li> 
        <router-link id="router-styling" to="/terms">Terms and Conditions</router-link>
        <li id="router-styling">Job Application</li> 
    </ul>
</div>

    <div class ="contact">
        <div>
        <span class="footer-text">TaskForce</span>
         </div>
         <div>
        <address class="footer-text">17 Carrer de Portugal <br>08193 Barcelone
        </address>
        </div>

         <div>
        <span class="footer-text">+34986876575</span>
        </div>  
    

    </div>


    <div class = "picture-container">
        <img class="social-network" src ='https://cdn-icons-png.flaticon.com/512/25/25231.png'>
        <img class="social-network" src ="https://www.freepnglogos.com/uploads/twitter-logo-png/black-and-white-twitter-logo-png-hq-download-25.png">
        <img class="social-network" src ="https://www.pngfind.com/pngs/m/2-23339_black-and-white-instagram-logo-instagram-logo-2018.png">
    </div>


        <div class="topic">

        <div class=" sub-topic">

            <div>
            <p class=" topic-text">Reedeem your reward</p>
            </div>

            <div>
            <img src="https://cdn-icons-png.flaticon.com/512/837/837993.png" 
            class='footer-image'>
            </div>
        </div>
        
       <form @submit.prevent="submitForm">
         <input id="inputfooter" type="email" name="inputfooter"             v-model="footerValues.inputfooter"
        placeholder='Enter email address'>
         <input id ="inputfooter1" type="submit" name="" value="Send" required>
        </form>

    </div>

</div>
  
</template>

<script setup>
import { useUserStore } from "../stores/user";
import { onMounted, ref, reactive } from 'vue'


const emailFooter = ref('');

const footerValues = reactive({
    inputfooter: '',
})

const submitForm = () => {
    alert(`
     ${footerValues.inputfooter
            ? " Amazing:Thanks you are going to receive your email to reedeem your voucher very soon!"
            : "Please enter your email before clicking on it!"
        }
`)
};

</script>

<style>
.social-network {
    width:30px;
    height:30px;
    margin: 20px
}

.footer-image{
    width: 30px;
}

.footer {
    height: 150px;
    background-color: #F4F6F9;
}

.footer > div {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
}
.footer-menu > ul {
    display: flex;
    flex-direction: column;
}

.footer > .contact {
    display: flex;
    flex-direction: column;
    align-items: flex-start
}

.contact{
    display: flex;
}

.footer-text {
    padding: 5px;
    font-size: 1.5rem;
    color: #444444;
}

.topic-text {
    font-size: 1.9rem;
    font-weight: 400;
    display: inline-block;
    width:100%;
    color: #444444;

}

.footer > .topic {
    display: flex;
    flex-direction: column;

}

.sub-topic{
    display: flex;
    flex-direction: row;
    align-items: center;


}

li{
    text-decoration: none;
    font-size:1.4rem;

}

ul {
  list-style: none;
  padding-inline-start: 20px;
  display: flex;
  font-family: "Roboto";
  display: inline block;
}

@media (max-width:500px){
    ul {
        padding-inline-start: 0px;

}

.topic-text {
    font-size: 1.9rem;
    font-weight: 400;
    display: inline-block;
    text-align: left;
    /* text-align: center; */

}
#head-title{
    font-size: 2.4rem !important
}
}

#inputfooter{
  height: 35px;
  width: 100%;
  outline: none;
  color: #d9d9d9;
  background: #000;
  border-radius: 5px;
  padding-left: 10px;
  font-size: 17px;
  border: 2px solid #222222;
}

#inputfooter1 {
  height: 35px;
  width: 100%;
  font-size: 18px;
  color: #d9d9d9;
  background: #3CA1E0;
  outline: none;
  border-radius: 5px;
  letter-spacing: 1px;
  cursor: pointer;
  margin-top: 12px;
  border: 2px solid white;
  transition: all 0.3s ease-in-out;
}



</style>