<template>

    <div class=" chart">
    <h2 class=chart-font> Weekly - Number of created Tasks </h2>
<column-chart 
:data="[['Monday', 4], 
['Tuesday', 3],
 ['Wednesday', 6],
 ['Thursday',10],
['Friday', 1]]"
:colors="['#39811D','#39811D','#3CA1E0','#3CA1E0']">
</column-chart>
</div>

<div class=" chart">

<h2 class="chart-font"> Weekly - Number of completed Tasks</h2>
<bar-chart class="chart"
:data="[['Monday', 2], 
['Tuesday', 3],
 ['Wednesday', 3],
 ['Thursday',6],
['Friday', 1]]"
:colors="['#39811D','#39811D','#812b80','#812b80']">


</bar-chart>
</div>



</template>

<script setup>


// const dataColumn = reactive([
// [['Monday', 4], 
// ['Tuesday', 3],
//  ['Wednesday', 6],
//  ['Thursday',10],
// ['Friday', 1]]
// ])


</script>

<style>

.chart {
    width: 30%;
    margin-left: 2%;
}
.chart-font{
    font-size: 1.6rem;
}

@media (max-width:500px) {
    .chart{
        width: 90%;
        margin-top: 10px;
    }

}
@media (max-width:800px) {
    .chart{
        width: 90%;
        margin-top: 10px;
    }

}
</style>