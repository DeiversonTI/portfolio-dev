<template>
  <section>
    <div class="home__lite">
      <div class=" q-ma-lg">
        <div class="text-center text-h2 text-weight-bold work__title">Trabalhos</div>
      </div>
      <div class=" flex justify-center items-center row" >
        <div class="col-xs-12 col-sm-12 col-md  work__linkBox">

          <div class="img__primeiro">
              <img src="../assets/img-01.jpg" style="max-width: 100%;" />
            <div class="text__segundo text__segundo__blur ">
              <div>
                <div class="text-h5 text-grey-1 text-center">Caródromo Online 2022</div>
                <div class="text-subtitle text-grey-1 text-center flex items-center justify-center q-gutter-x-sm">Tecnologias usadas:
                  <img src="../assets/quasar.png " alt="" style="max-width:6%" title="quasarJs">
                  <img src="../assets/supabase.png " alt="" style="max-width:6%" title="supabase">
                  <img src="../assets/git.png " alt="" style="max-width:6%" title="git">
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xs-12 col-sm-12 col-md  work__linkBox">
          <div class="img__primeiro">
              <img src="../assets/img-02.jpg" style="max-width: 100%;" />
            <div class="text__segundo text__segundo__blur ">
              <div>
                <div class="text-h5 text-grey-1 text-center">Sistema Interno de Agendamentos</div>
                <div class="text-subtitle text-grey-1 text-center flex items-center justify-center q-gutter-x-sm">Tecnologias usadas:
                  <img src="../assets/vue.png " alt="" style="max-width:6%" title="VueJs">
                  <img src="../assets/tailwind.png " alt="" style="max-width:6%" title="tailwindCss">
                  <img src="../assets/firebase.png " alt="" style="max-width:6%" title="firebase">
                </div>
              </div>
            </div>
          </div>
        </div>
         <div class="col-xs-12 col-sm-12 col-md  work__linkBox">
            <div class="img__primeiro">
              <img src="../assets/img-3.jpg" style="max-width: 100%;" />
            <div class="text__segundo text__segundo__blur ">
              <div>
                <div class="text-h5 text-grey-1 text-center">Caródromo Online 2021</div>
                <div class="text-subtitle text-grey-1 text-center flex items-center justify-center q-gutter-x-sm">Tecnologias usadas:
                  <img src="../assets/html-5.png " alt="" style="max-width:6%" title="HTML">
                  <img src="../assets/css-3.png " alt="" style="max-width:6%" title="CSS">
                  <img src="../assets/js.png " alt="" style="max-width:6%" title="javascript">
                </div>
              </div>
            </div>
          </div>
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
  justify-items: center;

}

.home__lite{

  background-color: $blue-grey-1;
  width: 65%;
  margin:0 auto;

}
.work__box{
  display: flex;
  justify-content: space-evenly;
  width: 100%;
  align-items: center;
}

.text__segundo{
  display: flex;
  align-items: center;
  justify-items: center;
  background-color: rgba($color: #080808, $alpha: 0.7);
  opacity: 0;
  transition: opacity 0.25s;
  width: 400px;
  height: 600px;

}
.text__segundo__blur{
  backdrop-filter: blur(1px) ;
}
.text__segundo > *{
  transform: translateY(20px);
  transition: transform 0.25s;
}
.img__primeiro .text__segundo{
  position: absolute;
  top: 0;
  left: 0;
  width: 400px;
  height: 600px;

}
.img__primeiro .text__segundo:hover{
position: absolute;
  top: 0;
  left: 0;
  width: 400px;
  height: 600px;
  opacity: 1;

}
.img__primeiro .text__segundo:hover > *{
  transform: translateY(0);
}
.img__primeiro{
  position: relative;

}
.work__title{
  color: $blue-grey-8;
}

@media screen and (max-width: 1115px){
  .work__title{
    font-size: 3em ;
    color: $blue-grey-8;
  }
  // .work__box{
  //   background-color: white;
  // }
  .home__lite{
    width: 100%;
  }

}

</style>
