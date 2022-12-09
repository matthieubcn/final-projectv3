<template>
  <div class="wrapper">
    <Nav />

    <!-- <div class="content"> 
      <h3>Your account:</h3>
      <router-link to="/account">Account</router-link>
    </div> -->
    <div class= 'task-container-button'>


    <button class='toogle-button' @click="toggle">TaskForce</button>
    <h3 class="head-title"> {{headTitle}} </h3>
    </div>    


    <div class="newtask-container" v-if="addTaskShow">
      <NewTask @getTasks="getTasks" />
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
  <div class="footer">
    <footercomponent v-if="addTaskShow" />
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

const taskStore = useTaskStore();

// Variable para guardar las tareas de supabase
const tasks = ref([]);

//fonction pour faire apparaitre le add task area//
const addTaskShow = ref(false);
const toggle = () => {
  addTaskShow.value = !addTaskShow.value;
  console.log(addTaskShow.value);
};

const headTitle = "Create your own task"
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
  flex-direction: column;
  justify-content: center;
  animation-duration: 3s;
  animation-name: slidein;
  margin-left:2%
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

@media (max-width: 500px){
  .newtask-container{
    display: flex;
    align-items: center;
  }
}

@media (max-width: 700px){
  .newtask-container{
    display: flex;
    align-items: center;
  }
}

@media (max-width: 800px) {
  .tasks-list-container {
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
  }

}

.footer {
  display: flex;
  flex-direction: column;
}

.task-container-button{
  display: flex;
  flex: row;
  align-content: center;
  align-items: center;
  margin-left: 0.5%;
}


.toogle-button{
    font-size: 1.4rem;
    padding: 10px 15px;
    display: block;
    margin: 20px;
    background-color: green;
    border: 1px solid rgb(216, 221, 230);
    border-radius: 4px;
    color: white;
}





</style>
