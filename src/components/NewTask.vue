<template>
  <div class="container-new-task">
  <div class="container-task">
    <h1 class="new-task-title">Create a new task!</h1>
  </div>

  <div v-if="showErrorMessage">
    <p class="error-text">{{ errorMessage }}</p>
  </div>

  <div>
    <div class="input-field-task">
      <input
        class="input-field-label-task"
        type="text"
        placeholder="Add a Task Title "
        v-model="name"
      />
    </div>
    <div class="input-field-task">
      <input
        class="input-field-label-task-sub"
        type="text"
        placeholder="Add a Task Description..."
        v-model="description"
      />
      <button @click="addTask" class="button-addTask">Add it on your Deck</button>
    </div>
    
  </div>
  

  </div>
</template>

<script setup>
import { ref } from "vue";
import { useTaskStore } from "../stores/task";

const taskStore = useTaskStore();

// variables para los valors de los inputs
const name = ref("");
const description = ref("");

// constant to save a variable that holds an initial false boolean value for the errorMessage container that is conditionally displayed depending if the input field is empty
const showErrorMessage = ref(false);
const emit = defineEmits(["getTasks"]);

// const constant to save a variable that holds the value of the error message
const errorMessage = ref(null);

// Arrow function para crear tareas.
const addTask = async () => {
  if (name.value.length === 0 || description.value.length === 0) {
    // Primero comprobamos que ningún campo del input esté vacío y lanzamos el error con un timeout para informar al user.

    showErrorMessage.value = true;
    errorMessage.value =
      "Please create a task before clicking on the add button";
    setTimeout(() => {
      showErrorMessage.value = false;
    }, 5000);
  } else {
    // Aquí mandamos los valores a la store para crear la nueva Task. Esta parte de la función tenéis que refactorizarla para que funcione con emit y el addTask del store se llame desde Home.vue.
    await taskStore.addTask(name.value, description.value);
    name.value = "";
    description.value = "";
    emit("getTasks");
  }
};
</script>

<style>
/* Styling new task */

.new-task-title {
  font-size: 2rem;
  color: #3ca1e0;
  margin: 20px;
}

.input-field-label-task {
  width: 90%;
  height: 30px;
  margin-left: 20px;
  border: 0px;
  color: rgb(84, 105, 141);
  font-size: 1.4rem;
  border-radius:1rem;
}

.input-field-label-task-sub {
  width: 90%;
  height: 90px;
  margin-left: 20px;
  border: 0px;
  color: rgb(84, 105, 141);
  font-size: 1.4rem;
  font-family: "roboto";
  text-align: top;
  border-radius:0.5rem;

}

.container-task {
  display: flex;
  flex-direction: column;
}

.container-new-task{
  border: 1px solid rgb(216, 221, 230);
  background: rgb(159,164,196);
  background: linear-gradient(10deg, rgba(159,164,196,1) 0%, rgba(179,205,209,1) 35%);
  width: 30%;
  border-radius: 0.5rem;
}

@media (max-width : 800px){
    .container-new-task{
      width: 90% !important;
    }

  }


.error-text {
  font-size: 1.4rem;
  font-family: "Roboto";
  color: red;
  padding: 10px;
}

.container-header {
  display: flex;
  justify-content: center;
  flex-direction: column;
  border-radius: 4px;
  width: 30%;
}

.button-addTask {
  font-size: 1.1rem;
  padding: 10px 25px;
  display: block;
  background-color: #3ca1e0;
  border: 1px solid rgb(216, 221, 230);
  border-radius: 4px;
  color: white;
  margin: 20px;
  cursor: pointer;
}


</style>
