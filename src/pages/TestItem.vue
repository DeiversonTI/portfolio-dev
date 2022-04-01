<template>
 <div class="flex justify-center items-center" style="height:100vh ">
   <div class="flex justify-center items-center bg-primary">
     <div class="b1 tipo1">Box01</div>
     <div class="b2 tipo1">box02</div>
     <div class="b3 tipo1">Box03</div>
     <div class="b4 tipo1">Box04</div>
     <div class="b5 tipo1">Box05</div>
   </div>

 </div>
</template>
<style scoped>
.tipo1{
  background-color: brown;
  width: 300px;
  height:300px;
  display: grid;
  margin: 10px 5px;
  grid-template-rows: repeat(8, 1fr) ;
  grid-template-rows: repeat(8, 5vw);

}

.b1{
  grid-column: 1 / 5;
  grid-row: 1 /  5;
}

</style>
