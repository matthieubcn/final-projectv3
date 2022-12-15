<template>
  <div class="wrapper">
    <Nav />

    <!-- <div class="content"> 
      <h3>Your account:</h3>
      <router-link to="/account">Account</router-link>
    </div> -->
    <div class="task-container-button">
      <button class="toogle-button" @click="toggle">TaskForce</button>
      <h3 id="head-title">{{ headTitle }}</h3>
    </div>

    <div class="newtask-container" v-if="addTaskShow">
      <NewTask @getTasks="getTasks" />
      <charts />
    </div>
    <div class="tasks-list-container">
      <TaskItem
        @getTasks="getTasks"
        @deleteTask="deleteTask"
        class="task-container"
        v-for="task in tasks"
        :key="task.id"
        :task="task"
        @toogleTask="toogleTask"
      />
    </div>
  </div>


  <div class="footer" v-if="addTaskShow">
    <footercomponent id="footercomponent"  />
  </div> 
</template>

<script setup>
import { ref } from "vue";
import { useTaskStore } from "../stores/task";
import { useRouter } from "vue-router";
import Nav from "../components/Nav.vue";
import NewTask from "../components/NewTask.vue";
import TaskItem from "../components/TaskItem.vue";
import footercomponent from "../components/footercomponent.vue";
import charts from "../components/charts.vue"



const taskStore = useTaskStore();

// Variable para guardar las tareas de supabase
const tasks = ref([]);

//fonction pour faire apparaitre le add task area//
const addTaskShow = ref(false);
const toggle = () => {
  addTaskShow.value = !addTaskShow.value;
  console.log(addTaskShow.value);
};

// const addMoreTasks = ()

const headTitle = "Create your own task";
// Creamos una función que conecte a la store para conseguir las tareas de supabase
const getTasks = async () => {
  tasks.value = await taskStore.fetchTasks();
  console.log(tasks.value);
};
getTasks();

const deleteTask = async () => {
  tasks.value = await taskStore.fetchTasks();
};

deleteTask();

const toogleTask = async () => {
  tasks.value = await taskStore.fetchTasks();
  console.log(tasks.value);
};
toogleTask("completed");
</script>

<style>
.tasks-list-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
.newtask-container {
  display: flex;
  flex-direction: row;
  justify-content: center;
  animation-duration: 3s;
  animation-name: slidein;
  margin-left: 0%;
  margin-bottom: 40px;
}

@keyframes slidein {
  from {
    margin-left: 100%;
    width: 300%;
  }

  to {
    margin-left: 2%;
    width: 100%;
  }
}

@media (max-width: 500px) {
  .newtask-container {
    display: flex;
    align-items: center;
    flex-direction: column;
  }
  .toogle-button {
  margin: 10px !important;
  
}
}

@media (max-width: 800px) {
  .newtask-container {
    display: flex;
    align-items: center;
    flex-direction: column;
  }
}

.input-field-text-container{
  margin-left: 20px
}

.task-container-button {

    margin-left: 2.8%;
  }

@media (max-width: 800px) {
  .tasks-list-container {
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
  }
  .task-container-button {
    margin-top: 90px;
    margin-left: 2.3%;
  }

  .footer > .picture-container {
    display: flex;
    flex-direction: row;
  }
}

.task-container-button {
  display: flex;
  flex: row;
  align-content: center;
  align-items: center;
  margin-left: 0.5%;
}

.toogle-button {
  font-size: 1.4rem;
  padding: 10px 15px;
  display: block;
  margin: 32px;
  background-color: green;
  border: 1px solid rgb(216, 221, 230);
  border-radius: 4px;
  color: white;
}

#footercomponent {
  position: relative !important;
  width: 100%;
  bottom: 0px;
  height: 100px;
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
    display: none;
  }
  .contact {
    display: none;
  }
}


</style>
