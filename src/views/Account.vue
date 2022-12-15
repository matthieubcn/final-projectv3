<template>
  <Nav />
  <div class="account-wrapper">
    <div class="left-account-page-wrapper">
      <h1 class="account-title">Account Information</h1>

      <div class="account-image">
        <!-- <img :src="avatar_url ? avatar_url : 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__480.png'" alt="Profile picture" class="avatar-picture"> -->
        <form class="form-widget" @submit.prevent="updateProfile">
          <Avatar v-model:path="avatar_url" @upload="updateProfile" size="20" />
        </form>

        <div class="contact-info" v-if="showProfileInfo">
          <h1 class="account-name">User Name :{{ username }}</h1>
          <h1 class="account-email">Full Name: {{ fullName }}</h1>
          <h1 class="account-email">Web : {{ website }}</h1>
        </div>
      </div>
    </div>

    <!-- <div class="achievements">
      <achievements />
    </div> -->

    <div class="right-account-page-wrapper">
      <form
        v-if="showEditProfileForm"
        @submit.prevent="submitForm"
        class="form-account"
      >
        <h3>Editing profile ....</h3>
        <div id="user-input-surname-data">
          <label class="account-label" for="fullName">Full Name </label>
          <input
            class="input-field"
            name="fullName"
            id="fullName"
            type="text"
            v-model.trim.lazy="formAccount.fullName"
          />
        </div>
        <div id="user-input-formName-data">
          <label class="account-label" for="userName">User Name</label>
          <input
            class="input-field"
            type="text"
            autocomplete="off"
            id="userName"
            v-model.trim.lazy="formAccount.userName"
          />
        </div>
        <div id="user-input-surname-data">
          <label class="account-label" for="website">Website</label>
          <input
            class="input-field"
            name="website"
            id="website"
            type="text"
            v-model.trim.lazy="formAccount.website"
          />
        </div>
        <!-- <div id="user-input-profileAge-data">
          <label class="account-label" for="profileAge"> Age </label>
          <input
            class="input-field"
            type="number"
            id="profileAge"
            v-model.number="formAccount.formProfileAge"
          />
        </div>

        <div class="address">
          <div id="user-input-adress-data">
            <label class="account-label" for="adress">Adress </label>
            <input
              class="input-field"
              name="adress"
              id="adress"
              type="text"
              v-model.trim.lazy="formAccount.formAdress"
            />
          </div>
          <div>
            <div id="user-input-zipcode-data">
              <label class="account-label" for="Zipcode"> ZipCode </label>
              <input
                class="input-field"
                type="number"
                id="Zipcode"
                v-model.number="formAccount.formZipcode"
              />
            </div>
          </div>
        </div>

        <div id="user-input-Location-data">
          <div>
            <label class="account-label" for="location"> Continent </label>
          </div>
          <div>
            <select
              class="input-field"
              name="location"
              id="location"
              v-model="formAccount.formLocation"
            >
              <option value="">Select your continent</option>

              <option value="North-America">North America</option>
              <option value="Europe">Europe</option>
              <option value="Asia">Asia</option>
              <option value="Africa">Africa</option>
            </select>
          </div>
        </div> -->

        <input class="submit" type="submit" value="Send" />
        <input
          @click="toggleEditProfileForm"
          class="submit"
          type="button"
          value="Cancel"
        />
      </form>
      <button v-else @click="toggleEditProfileForm">Edit Profile</button>
    </div>
  </div>

  <div class="footer">
    <footercomponent id="footercomponent" />
  </div>
</template>

<script setup>
import { supabase } from "../supabase";
import { onMounted, ref, toRefs, reactive, onUpdated } from "vue";
import { useUserStore } from "../stores/user";
import Nav from "../components/Nav.vue";
import Avatar from "../components/avatar.vue";
import footercomponent from "../components/footercomponent.vue";
import achievements from "../components/achievements.vue";

const userStore = useUserStore();

const loading = ref(false);
const username = ref(null);
const website = ref(null);
const avatar_url = ref(null);
const email = ref(null);
const fullName = ref(null);

onMounted(() => {
  getProfile();
});

// onUpdated(() => {
//   userStore.fetchUser();
// });

async function getProfile() {
  await userStore.fetchUser();
  username.value = userStore.profile.username;
  avatar_url.value = userStore.profile.avatar_url;
  email.value = userStore.profile.user_email;
  website.value = userStore.profile.website;
  fullName.value = userStore.profile.full_name;
}

async function signOut() {
  try {
    loading.value = true;
    let { error } = await supabase.auth.signOut();
    if (error) throw error;
  } catch (error) {
    alert(error.message);
  } finally {
    loading.value = false;
  }
}

// ..
// ..
// ..
// Logic for Editing profile data

const formAccount = reactive({
  userName: "",
  website: "",
  fullName: "",
});

const submitForm = async () => {
  if (formAccount.userName === "" || formAccount.website === "") {
    alert("Hey Inputs must be filled... dont be lazy....");
  } else {
    // log info from from inputs
    console.log(
      "Form Account",
      formAccount.userName,
      formAccount.website,
      formAccount.fullName
    );
    // send info to supabase
    await userStore.refreshProfile(
      formAccount.userName,
      formAccount.website,
      formAccount.fullName
    );
    // hides edit component
    showEditProfileForm.value = !showEditProfileForm.value;
    // shows profile information elements
    showProfileInfo.value = !showProfileInfo.value;
    // re-renders the information coming from supabase to sho updated profile info
    getProfile();
    // clear input fields
    (formAccount.userName = ""),
      (formAccount.website = ""),
      (formAccount.fullName = "");
    alert(
      "Thank you very much - Merci - Your personnal Info has been updated !"
    );
    console.log("Form has been sent to supabase");
  }
};

// variable to hold boolean show hide the form :)
const showEditProfileForm = ref(false);
const showProfileInfo = ref(true);
const toggleEditProfileForm = () => {
  showEditProfileForm.value = !showEditProfileForm.value;
  showProfileInfo.value = !showProfileInfo.value;
};
</script>

<style>
.avatar-picture {
  width: 100px;
  border-radius: 25%;
}

.account-name,
.account-email {
  font-size: 1.5rem;
}

.account-name {
  margin-top: 20px;
}

.left-account-page-wrapper > div {
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-left: 2%;
  height: 400px;
}

.left-account-page-wrapper {
  margin-top: 2%;
}

@media (max-width: 500px) {
  .left-account-page-wrapper {
    margin-top: 10% !important;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
  }
  .account-wrapper {
    display: flex;
    flex-direction: column;
  }

  .form-account {
    width: 90%;
  }
  .left-account-page-wrapper > div {
    display: flex;
  }
}

@media (max-width: 800px) {
  .left-account-page-wrapper {
    margin-top: 22% !important;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
  }
  .account-wrapper {
    display: flex;
    flex-direction: column;
  }

  .form-account {
    width: 90%;
  }
  .left-account-page-wrapper > div {
    display: flex;
  }
}

@media (max-width: 500px) {
  .left-account-page-wrapper > div {
    justify-content: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .left-account-page-wrapper {
    display: flex;
    flex-direction: column;
  }
}

.contact-info {
  margin-top: 20px;
}

.right-account-page-wrapper > div {
  display: flex;
}

.account-wrapper {
  display: flex;
  justify-content: space-around;
}

/* Footer style */

.footer > div {
  display: flex;
  flex-direction: row;
}
.footer > .picture-container {
  display: flex;
  flex-direction: row;
}

#footercomponent {
  position: relative !important;
  width: 100%;
  bottom: 0px;
  height: 200px;
  background-color: whitesmoke;
}

@media (max-width: 800px) {
  #footercomponent {
    height: 300px !important;
    background-color: #f4f6f9;
    margin-top: 20px;
  }

  .footer > div {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
  }

  .footer-text {
    padding-inline: 0px;
    margin-top: 5px;
  }
  .contact {
    display: none;
  }
}

.user-input-Location-data {
  display: flex;
}

.right-account-page-wrapper {
  margin-top: 2%;
}

/* CSS form */
.account-label {
  font-size: 1.5em;
  color: green;
}

.submit :hover {
  color: white !important;
  background: linear-gradient(10deg, #3ca1e0, #155fb2);
  cursor: pointer;
}

.submit {
  font-size: 1.1rem;
  padding: 10px 10px;
  display: block;
  margin: 10px;
  background-color: purple;
  border: 1px solid rgb(216, 221, 230);
  border-radius: 4px;
  color: white;
  width: 100%;
  cursor: pointer;
}

input {
  width: 100%;
  height: 30px;
  margin-top: 10px;
}

.form-input {
  margin: 20px;
}

.input-field {
  font-size: 1.4rem;
  border: 1px solid rgb(216, 221, 230);
  border-radius: 4px;
  padding: 10px;
  margin: 5px;
}
.input-field-label {
  color: rgb(84, 105, 141);
  font-size: 1.4rem;
  margin: 10px;
}

.input-field-zip {
  font-size: 1.4rem;
  border: 1px solid rgb(216, 221, 230);
  border-radius: 4px;
}
.address {
  display: flex;
}
.achievements {
  margin-top: 20px;
  display: flex;
}
@media (max-width: 500px) {
  .form-account {
    width: 80% !important;
  }
  .right-account-page-wrapper {
    margin-top: 2%;
    display: flex;
    justify-content: center;
    background-color: #7f53ac;
    margin-left: 2%;
  }

  .account-label {
    font-size: 1.5em;
    color: white;
  }
  #user-input-formName-data,
  #user-input-surname-data,
  #user-input-profileAge-data,
  #user-input-Location-data,
  .address {
    padding-top: 10px;
  }

  .address {
    display: flex;
    flex-direction: column;
  }

  .submit {
    margin-bottom: 20px;
  }
}

@media (max-width: 600px) {
  .form-account {
    width: 80% !important;
  }
  .right-account-page-wrapper {
    margin-top: 2%;
    display: flex;
    justify-content: center;
    background: rgb(95, 10, 135);
    background: linear-gradient(
      90deg,
      rgba(95, 10, 135, 1) 0%,
      rgba(164, 80, 139, 1) 35%
    );
    border-radius: 1rem;

    margin-left: 2%;
  }

  .account-label {
    font-size: 1.5em;
    color: white;
  }
  #user-input-formName-data,
  #user-input-surname-data,
  #user-input-profileAge-data,
  #user-input-Location-data,
  .address {
    padding-top: 10px;
  }

  .address {
    display: flex;
    flex-direction: column;
  }

  .submit {
    margin-bottom: 20px;
  }

  .left-account-page-wrapper > div {
    justify-content: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .left-account-page-wrapper {
    display: flex;
    flex-direction: column;
  }

  .contact-info {
    margin-top: 20px;
  }

  .right-account-page-wrapper > div {
    display: flex;
    background-color: #7f53ac;
  }

  .account-wrapper {
    display: flex;
    justify-content: space-around;
  }
}
</style>
