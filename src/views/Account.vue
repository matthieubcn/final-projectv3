<template>
  <Nav />
  <div class="account-wrapper">
    <div class="left-account-page-wrapper">
      <div class="account-image">
        <!-- <img :src="avatar_url ? avatar_url : 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__480.png'" alt="Profile picture" class="avatar-picture"> -->
        <form class="form-widget" @submit.prevent="updateProfile">
          <Avatar v-model:path="avatar_url" @upload="updateProfile" size="20" />
        </form>

        <div class="contact-info">
          <h1 class="account-title">Account Information</h1>
          <h1 class="account-name">Name :{{ username }}</h1>
          <h1 class="account-email">Email : {{ email }}</h1>
        </div>
      </div>
    </div>

    <div class="right-account-page-wrapper">
      <form @submit.prevent="submitForm" class="form-account">
        <div id="user-input-formName-data">
          <label class="account-label" for="firstname">First Name</label>
          <input
            class="input-field"
            type="text"
            autocomplete="off"
            id="firstname"
            v-model.trim.lazy="formAccount.formName"
          />
        </div>
        <div id="user-input-surname-data">
          <label class="account-label" for="surname">Surname </label>
          <input
            class="input-field"
            name="surname"
            id="surname"
            type="text"
            v-model.trim.lazy="formAccount.formFamilyName"
          />
        </div>

        <div id="user-input-profileAge-data">
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
        </div>

        <input class="submit" type="submit" value="Send" />
      </form>
    </div>
  </div>

  <div class="footer">
    <footercomponent id="footercomponent" />
  </div>
</template>

<script setup>
import { supabase } from "../supabase";
import { onMounted, ref, toRefs, reactive } from "vue";
import { useUserStore } from "../stores/user";
import Nav from "../components/Nav.vue";
import Avatar from "../components/avatar.vue";
import footercomponent from "../components/footercomponent.vue";
import { useProfileStore } from "../stores/profile";

const userStore = useUserStore();

const loading = ref(false);
const username = ref(null);
const website = ref(null);
const avatar_url = ref(null);
const email = ref(null);

onMounted(() => {
  getProfile();
});

async function getProfile() {
  await userStore.fetchUser();
  username.value = userStore.profile.username;
  avatar_url.value = userStore.profile.avatar_url;
  email.value = userStore.profile.email;
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

const useProfile = useProfileStore()

const formAccount = reactive({
  formName: "",
  formFamilyName: "",
  formAdress: "",
  formZipcode: null,
  formProfileAge: null,
  formLocation: [],
});
console.log(useProfileStore().fetchProfile());



const submitForm = () => {
  console.log("Form Account", formAccount);
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
</style>
