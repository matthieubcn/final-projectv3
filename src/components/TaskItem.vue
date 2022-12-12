<template>
  <div class="whole-task-container">
    <div class="task-container">
      <h3
        :class="
          important ? 'task-title-styling' : 'task-title-styling-important'
        "
      >
        Title: {{ task.title }}
      </h3>
      <h3
        :class="
          important ? 'task-title-styling' : 'task-title-styling-important'
        "
      >
        Description: {{ task.description }}
      </h3>
      <!-- <h3 class="task-title-styling"> Created: {{task.inserted_at}}</h3> -->
    </div>

    <div class="input-field-text-container" v-show="editTask">
      <label class="input-field-text-label"> Edit Title.....</label>
      <input
        class="input-field-text"
        type="text"
        placeholder="Title...."
        v-model="name"
      />
      <label class="input-field-text-label"> Edit Task Description...</label>
      <input
        class="input-field-text"
        type="text"
        placeholder="Description"
        v-model="description"
      />
    </div>

    <div class="button-container">
      <button class="button-task" @click="editStatus">Edit</button>
      
      <button class="button-task" @click="deleteTask">Delete</button>

      <button 
        :class="task.is_complete ? 'button-task-completed' : 'button-task-uncompleted'"
        @click="toogleTask" 
        >
        {{ task.is_complete ? "Task Completed " : " Task on-going" }}
        
      </button>

      <button
        :class="important ? 'button-task' : 'button-task-important'"
        @click="toogleImportant"
      >
        Important
      </button>
    </div>
    <button v-show="editTask" class="button-task-save" @click="updateTask">
      Save
    </button>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useTaskStore } from "../stores/task";
import { supabase } from "../supabase";

const name = ref(props.task.title);
const description = ref(props.task.description);
const taskStore = useTaskStore();
const props = defineProps({
  task: Object,
});

console.log(props.task);

// Función para borrar la tarea a través de la store. El problema que tendremos aquí (y en NewTask.vue) es que cuando modifiquemos la base de datos los cambios no se verán reflejados en el v-for de Home.vue porque no estamos modificando la variable tasks guardada en Home. Usad el emit para cambiar esto y evitar ningún page refresh.

const editStatus = () => {
  editTask.value = !editTask.value;
};

const editTask = ref(false);
const updateTask = async () => {
  editStatus();
  await taskStore.refreshTask(name.value, description.value, props.task.id);
  emit("getTasks");
};

const emit = defineEmits(["deleteTask", "toogleTask", "refreshTask"]);

const deleteTask = async () => {
  await taskStore.deleteTask(props.task.id);
  emit("deleteTask");
};

const toogleTask = async () => {
  await taskStore.toogleTask(props.task.id);
  emit("toogleTask");
};
const refreshTask = async () => {
  await taskStore.toogleTask(props.task.id);
};

const important = ref(true);
const toogleImportant = () => {
  important.value = !important.value;
  console.log(important.value);
};

// Created an alert

const alertSucces = () => {
        alert('Your rock {{username.value}} 1 task is done')
};

console.log(task.is_complete.value)



</script>

<style>
.task-title-styling {
  font-family: "Roboto";
  font-size: 1.4rem;
  color: #042d60;
  margin-left: 20px;
  display: inline-block;
  width: 100%;
  margin-bottom: 5px;
}

.task-title-styling-important {
  font-family: "Roboto";
  font-size: 1.4rem;
  color: #042d60;
  margin-left: 20px;
  display: inline-block;
  width: 100%;
  margin-bottom: 5px;
  color: red;
}

.task-container {
  display: flex;
  flex-direction: column;
}

.button-container {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
}

.whole-task-container {
  display: flex;
  margin: 20px;
  border: 1px solid rgb(216, 221, 230);
  border-radius: 4px;
  width: 40%;
  padding: 20px;
  align-items: center;
}

@media (max-width: 800px) {
  .whole-task-container {
    width: 90%;
  }
}

.input-field-text {
  height: 50px;
  margin-left: 10px;
  border: 0px;
  width: 90%;
  color: rgb(84, 105, 141);
  font-size: 1.4rem;
  margin-top: 10px;
  display: inline-block;
  margin-left: 20px;
  margin-right: 20px;
}

.input-field-text-label {
  color: rgb(84, 105, 141);
  font-size: 1.5rem;
  display: inline-block;
  margin-left: 20px;
}

.button-task {
  font-size: 1.1rem;
  padding: 10px 15px;
  margin: 10px;
  background-color: #3ca1e0;
  border: 1px solid rgb(216, 221, 230);
  border-radius: 4px;
  color: white;
  cursor: pointer;
}
.button-container :nth-child(3) {
  margin-left: 10px;
  margin-right: 10px;
}

@media (max-width: 800px) {
  .button-task {
    width: 100%;
  }
  .button-task-completed, .button-task-uncompleted {
    width: 100%;
  }
  .button-task-save {
    width: 70% !important;
  }
  .input-field-text {
    width: 80%;
  }
}

.button-task-completed {
  font-size: 1.1rem;
  padding: 10px 10px;
  display: block;
  margin: 10px;
  background-color: green;
  border: 1px solid rgb(216, 221, 230);
  border-radius: 4px;
  color: white;
  cursor: pointer;
}


.button-task-uncompleted {
  font-size: 1.1rem;
  padding: 10px 10px;
  display: block;
  margin: 10px;
  background-color: purple;
  border: 1px solid rgb(216, 221, 230);
  border-radius: 4px;
  color: white;
  cursor: pointer;
}
.button-task-important {
  font-size: 1.1rem;
  padding: 10px 10px;
  display: block;
  margin: 10px;
  background-color: red;
  border: 1px solid rgb(216, 221, 230);
  border-radius: 4px;
  color: white;
  cursor: pointer;
}

.title-text {
  color: green;
}

.button-task-save {
  font-size: 1.1rem;
  padding: 10px 10px;
  display: block;
  margin: 10px;
  background-color: green;
  border: 1px solid rgb(216, 221, 230);
  border-radius: 4px;
  color: white;
  width: 80%;
  cursor: pointer;
}

@media (max-width: 800px) {
  .button-task-save {
    width: 65% !important;
  }
}
</style>

<!--
**Hints**
1. ref() or reactive() can be used here to store the following, think if you want to store them either individually or
like an object, up to you.

2. Data properties need here are the following: a boolean to store a false**Important variable, a string to store an error,
a string to store the value of the task that the user can edit, an initial false boolean to hide the inputFIeld used to edit
the new task detail or details[this is in reference of the task title and the task description].

3. Store the custom emit events that will be used to call the functions of the homeView for editing, deleting and toggling the
status[completed, not complted] of the taskItem.

4. Function to handle the error with the data properties used to control the error and the the boolean controlling the boolean
empty variable.

5. Function to handle the edit dialogue where the inputField is displayed and the string used to store the value of the
inputField will be used here to save the value as a prop on this function.

6. Function to emmit a custom event emit() that takes 2 parameters a name for the custom event and the value that will be
send via the prop to the parent component. This function can control the toggle completion of the task on the homeview.

7. Function to edit the task information that you decided that the user can edit. This function's body takes in a conditional
that first checks if the value of the task [either title and description or just title] is empty which if true it runs the
function used to handle the error on hint4. Else, the conditional sets the first mentioned boolean data property on hint2
back to its inital boolean value to hide the error message and repeat the same for the data property mentioned 4th on hint2;
a constant that stores an object that holds the oldValue from the prop item and the value of the task coming from the data
property mentioned 3rd on hint2; a custom event emit() that takes 2 parameters a name for the custom event and the value
from the object used on this part of the conditional and lastly this part of the conditional sets the value of input field
to an empty string to clear it from the ui.

8. Function to emmit a custom event emit() that takes 2 parameters a name for the custom event and the value that will be
send via the prop to the parent component. This function can control the removal of  the task on the homeview.
-->
