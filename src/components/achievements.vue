<template>

<div class="award-big-container ">

    <div class="sub-award-container">
    <div class ='award-container'>
        <h3 class="award-title">#Tasks Created</h3>
        <span class="award-number">34</span>
    </div>
    <div class = 'award-container'>
        <h3 class="award-title">#Tasks Completed</h3>
        <span class="award-number">22</span>
    </div>

    </div>

    <div class="sub-award-container">

    <div class = 'award-container'>
        <h3 class="award-title">#Importants Tasks</h3>
        <span class="award-number">78</span>
    </div>
    <div class = 'award-container'>
        <h3 class="award-title">#Tasks Saved </h3>
        <span class="award-number">456</span>
    </div>

    </div>

</div>

    
</template>



<script>

</script>

<style>

.award-big-container > .sub-award-container{
    display: flex;
    width: 100%;
}

.sub-award-container >div{
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-wrap: wrap;
}

.award-container {
    width: 200px;
    height: 100px;
    background-color:b;
    padding: 20px;
    border: 1px solid rgb(216, 221, 230);
    border-radius: 1rem;
    margin: 25px;
    background: -webkit-linear-gradient(70deg, green 40%, #3CA1E0 40%);
  background: -o-linear-gradient(70deg,green 40%, #3CA1E0 40%);
  background: -moz-linear-gradient(70deg,green 40%,#3CA1E0 40%);
  background: linear-gradient(70deg, green 40%,#3CA1E0 40%);
 

}
.award-title {
    font-size: 1.6rem;
    display:inline-block;
}

.award-number {
    font-size: 1.5rem;
    text-align: center;
    display: block;
    padding-top: 20px

}


.bg-news {
  background: -webkit-linear-gradient(70deg, #ff6464 40%, #5ac8fa 40%);
  background: -o-linear-gradient(70deg, #ff6464 40%, #5ac8fa 40%);
  background: -moz-linear-gradient(70deg, #ff6464 40%, #5ac8fa 40%);
  background: linear-gradient(70deg, #ff6464 40%, #5ac8fa 40%);
}


@media (max-width: 450px) {

    .achievements {
    margin-top: 20px;
    display: flex;
    justify-content: center;
    align-items: flex-start;
}
.award-big-container > .sub-award-container{
    display: flex;
    flex-direction: column;
}
}
    
</style>


