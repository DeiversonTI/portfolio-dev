<template>
  <section>
    <div class="home__lite">
      <div class=" q-ma-lg">
        <div class="text-center text-h2 text-weight-bold work__title">Trabalhos</div>
      </div>
      <div class=" row flex justify-center items-center  work__box " >
        <div class="col-xs-12 col-sm-12 col-md-auto  work__linkBox">
          <div class="work__hover">
            <div>Caródromo Online</div>
            <div>Quasarjs</div>
          </div>
          <img src="../assets/work01.jpg" style="max-width: 100%;" />

          <!-- <div class="work__box__inter">
            <q-item>
              <q-item-section>
                <q-item-label class="text-h6 text-orange-8">Carodromo Digital 2022 - Quasarjs</q-item-label>
                <q-item-label caption lines="2">Website de apresentação de fotos e nomes dos usuários</q-item-label>
              </q-item-section>
           </q-item>
          </div> -->
        </div>
        <div class="col-xs-12 col-sm-12 col-md-auto  work__linkBox">
          <img src="../assets/work02.jpg"
          style="max-width: 100%;" />
           <!-- <div>
            <q-item>
              <q-item-section>
                <q-item-label class="text-h6 text-orange-8">Website de Agendamento - Vuejs</q-item-label>
                <q-item-label caption lines="2">Agenda serviços internos da empresa</q-item-label>
              </q-item-section>
           </q-item>
          </div> -->
        </div>
         <div class="col-xs-12 col-sm-12 col-md-auto  ">
          <img src="../assets/work03.jpg"
          style="max-width: 100%;" class="work__linkBox" />
           <!-- <div>
            <q-item>
              <q-item-section>
                <q-item-label class="text-h6 text-orange-8">Carodromo Digital 2021 - html, css e js</q-item-label>
                <q-item-label caption lines="2">Website de apresentação de fotos e nomes dos usuários</q-item-label>
              </q-item-section>
           </q-item>
          </div> -->
        </div>
       </div>
    </div>
  </section>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'PageWorks'
})
</script>
<style lang="scss" scoped>
section{
  min-height: 100vh;
  background: $blue-grey-1;
  display: flex;
  align-items: center;
  justify-content: center;
}

.home__lite{
  margin: 0 auto;
  background-color: $blue-grey-1;
  width: 100%;

}
.work__hover{
  display: block;
  &:hover{
     display: block;
  position: relative;
  left: 50%;
  top:0;
  width: 100%;
  height: 100%;
  background: transparent;
  }
}

.work__linkBox{
  position: relative;
}
.work__linkBox:hover{
  background-color: red;
  z-index: 900;
  position: relative;
  max-width: 100%;
}
.work__title{
  color: $blue-grey-8;
}

@media(max-width: $breakpoint-xs-max){
  .work__title{
    font-size: 3em ;
    color: $blue-grey-8;
  }
  .work__box{
    background-color: white;
  }

}

</style>
