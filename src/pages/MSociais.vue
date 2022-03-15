<template>
<q-layout >
  <q-page-container>
    <q-page padding class="bg-blue-grey-1">
      <div class=" row  flex justify-center items-center window-height">
        <div class=" q-pa-md q-space-lg col-xs-12 col-sm-12 col-md-5 q-gutter-y-lg ">
          <div class="text-h4 text-weight-bold ">
              Olá, sou Deiverson Chaves<br>
              <span class="text-h3 text-indigo-5">Desenvolvedor Front-End</span>
          </div>
          <div class="text-h5 text-justify text-weight-thin">Projeto e desenvolvo serviços de websites elegantes e modernos e serviços da web.
            Minha paixão é projetar experiências digitais de usuários através de interações
            significativas. Confira meu portfólio.
          </div>
          <div class=" row  flex items-center justify-center ">
             <div class="col-xs-4 flex items-center justify-center">
                <div class="text-h4 text-weight-bold">5+</div>
                <div class="text-caption q-pl-sm">Anos de<br>Experiência</div>
              </div>
              <div class=" col-xs-4 flex items-center justify-center">
                <div class="text-h4 text-weight-bold">3k+</div>
                <div class="text-caption q-pl-sm">Happy<br>Customers</div>
              </div>
              <div class="col-xs-4 flex items-center justify-center ">
                <div class="text-h4 text-weight-bold">5+</div>
                <div class="text-caption q-pl-sm">Projetos bem<br>Sucessido</div>
              </div>
          </div>
          <hr>
          <div class="q-pa-md q-gutter-md">
            <div>
                <span class="skills__port">HTML</span>
                <q-linear-progress  size="18px" :value="progress1" class="colorizar" >
                  <div class="absolute-full flex flex-center">
                    <q-badge  color="white" text-color="accent" :label="progressLabel1" />
                  </div>
                </q-linear-progress>
            </div>
            <div >
               <span class="skills__port">CSS</span>
                <q-linear-progress size="18px" :value="progress2"  class="colorizar">
                  <div class="absolute-full flex flex-center">
                    <q-badge color="white" text-color="accent" :label="progressLabel2" />
                  </div>
                </q-linear-progress>
            </div>
            <div >
              <span class="skills__port">Javascript</span>
                <q-linear-progress size="18px" :value="progress3"  class="colorizar">
                  <div class="absolute-full flex flex-center">
                    <q-badge color="white" text-color="accent" :label="progressLabel3" />
                  </div>
                </q-linear-progress>
            </div>
             <div >
               <span class="skills__port">VueJs</span>
                <q-linear-progress size="18px" :value="progress4"  class="colorizar">
                  <div class="absolute-full flex flex-center">
                    <q-badge color="white" text-color="accent" :label="progressLabel4" />
                  </div>
                </q-linear-progress>
            </div>
          </div>

        </div>

        <div class=" flex justify-center items-center col-xs-12 col-sm-12 col-md-6 " >
          <q-img
            src="../assets/html3.png"
            style="max-width: 45%;"
            />
          </div>

        </div>
       <!-- <div class=" fit bg-grey-5 row " >
            <div class=" col-xs-12 col-sm-12 col-md-6  q-gutter-y-lg q-px-lg " >
                    <div class="space-lg text-left text-weight-bold ">
                        Olá, sou Deiverson Chaves<br>
                      <span class="text-dark text-h4 text-weight-bold ">
                        Desenvolvedor<span class="text-indigo-8"> Front-End</span>
                        </span>
                    </div>
                    <div class="text-weight-thin text-h6 text-justify text-blue-grey-10 " >
                      projeto e desenvolvo serviços de websites elegantes e modernos e serviços da web.
                      Minha paixão é projetar experiências digitais de usuários através de interações
                      significativas. Confira meu portfólio.
                    </div>
                    <hr>
                    <div class="flex items-center justify-evenly">
                        <div class="flex items-center">
                          <div class="text-h3 text-weight-bold">5+</div>
                          <div class="text-caption q-pl-sm">Anos de<br> Experiência</div>
                        </div>
                        <div class="flex items-center">
                          <div class="text-h3 text-weight-bold">3k+</div>
                          <div class="text-caption q-pl-sm">Happy<br> Customers</div>
                        </div>
                        <div class="flex items-center">
                          <div class="text-h3 text-weight-bold">5+</div>
                          <div class="text-caption q-pl-sm">Projetos bem<br> Sucessido</div>
                        </div>
                    </div>
            </div>
            <div class=" flex  justify-center items-center col-xs-12 col-sm-12 col-md-6 " >
              <q-img
              src="../assets/html2.png"
              style="max-width: 70%;"
              />
            </div>
        </div> -->
          <!-- <div class="q-pa-md flex justify-start content-center items-center  text-left fit ">
            <div class="q-pb-sm home_title1">
              Deiverson Chaves
              <br>
            <span class=" home_title2 ">
              Desenvolvedor Front-End
            </span>
            </div>
          <div class=" text-weight-thin text-justify home_title3 ">
           Estabeleçendo novos desafios, saindo da sua zona de conforto,
               enfrentando meus maiores medos todos os dias.
          </div>
          <q-btn
                rounded
                label="Contact"
                color="indigo-7"
                class="btn__contact"
              />
         </div> -->

         <!-- <div class="justify-center items-center" >
           <div class="text-h3 text-center text-weight-bold text-indigo-6" style="padding-top:150px ;">Sobre Mim</div>
           <div class="row fit justify-center items-center">
              <div class="col-xs-12 col-sm-12 col-md-4 ">
                  <img src="../assets/html2.png" alt="" style="max-width:90%; text-center">
              </div>
              <div class="col-xs-12 col-sm-12 col-md-4 ">
                <div class=" col-xs-12 col-sm-12 col-md-4 items-center text-left q-gutter-y-lg q-px-lg " >
                  <div class="text-h3 text-left text-weight-bold home__title1">
                    Olá, sou Deiverson Chaves<br>
                  <span class="text-dark text-h4 text-weight-bold ">
                    Desenvolvedor<span class="text-indigo-8"> Front-End</span>
                    </span>
                  </div>
                  <div class="text-weight-thin text-h6 text-justify text-blue-grey-10 home__title3" >
                  projeto e desenvolvo serviços de websites elegantes e modernos e serviços da web.
                  Minha paixão é projetar experiências digitais de usuários através de interações
                  significativas. Confira meu portfólio.
                  </div>
                  <hr>
                  <div class="flex items-center justify-evenly">
                    <div class="flex items-center">
                      <div class="text-h3 text-weight-bold">5+</div>
                      <div class="text-caption q-pl-sm">Anos de<br> Experiência</div>
                    </div>
                    <div class="flex items-center">
                      <div class="text-h3 text-weight-bold">3k+</div>
                      <div class="text-caption q-pl-sm">Happy<br> Customers</div>
                    </div>
                     <div class="flex items-center">
                      <div class="text-h3 text-weight-bold">5+</div>
                      <div class="text-caption q-pl-sm">Projetos bem<br> Sucessido</div>
                    </div>
                  </div>
                  </div>
              </div>
          </div>
        </div> -->
      <!-- <div class=" bg-grey-1 ">
      <div class="items-center window-height ">
         <div class="justify-center items-center" style="height:70%">
           <div class="text-h3 text-center text-weight-bold text-indigo-6" style="padding-top:150px ;">Sobre Mim</div>
           <div class="row fit justify-center items-center">
              <div class="col-xs-12 col-sm-12 col-md-4 ">
                  <img src="../assets/html2.png" alt="" style="max-width:90%; text-center">
              </div>
              <div class="col-xs-12 col-sm-12 col-md-4 ">
                <div class=" col-xs-12 col-sm-12 col-md-4 items-center text-left q-gutter-y-lg q-px-lg " >
                  <div class="text-h3 text-left text-weight-bold home__title1">
                    Olá, sou Deiverson Chaves<br>
                  <span class="text-dark text-h4 text-weight-bold ">
                    Desenvolvedor<span class="text-indigo-8"> Front-End</span>
                    </span>
                  </div>
                  <div class="text-weight-thin text-h6 text-justify text-blue-grey-10 home__title3" >
                  projeto e desenvolvo serviços de websites elegantes e modernos e serviços da web.
                  Minha paixão é projetar experiências digitais de usuários através de interações
                  significativas. Confira meu portfólio.
                  </div>
                  <hr>
                  <div class="flex items-center justify-evenly">
                    <div class="flex items-center">
                      <div class="text-h3 text-weight-bold">5+</div>
                      <div class="text-caption q-pl-sm">Anos de<br> Experiência</div>
                    </div>
                    <div class="flex items-center">
                      <div class="text-h3 text-weight-bold">3k+</div>
                      <div class="text-caption q-pl-sm">Happy<br> Customers</div>
                    </div>
                     <div class="flex items-center">
                      <div class="text-h3 text-weight-bold">5+</div>
                      <div class="text-caption q-pl-sm">Projetos bem<br> Sucessido</div>
                    </div>
                  </div>
                  </div>
              </div>
          </div>
        </div>
      </div>
    </div> -->
    </q-page>
  </q-page-container>
</q-layout>
</template>

<script>
import { defineComponent, computed, ref } from 'vue'

export default defineComponent({
  name: 'PageMSociais',
  setup () {
    const progress1 = ref(0.9)
    const progress2 = ref(0.95)
    const progress3 = ref(0.65)
    const progress4 = ref(0.95)

    return {
      progress1,
      progressLabel1: computed(() => (progress1.value * 100).toFixed(2) + '%'),

      progress2,
      progressLabel2: computed(() => (progress2.value * 100).toFixed(2) + '%'),

      progress3,
      progressLabel3: computed(() => (progress3.value * 100).toFixed(2) + '%'),

      progress4,
      progressLabel4: computed(() => (progress4.value * 100).toFixed(2) + '%')
    }
  }
})
</script>
