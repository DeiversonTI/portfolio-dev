<template>
<q-layout >
  <q-page-container>
    <q-page padding class="bg-grey-2 " >
      <div class=" row  flex justify-center items-center " >
          <div class=" q-pa-md q-space-lg col-xs-12 col-sm-12 col-md-12  "  >
              <div class="text-h6 text-weight-bold text-center text-blue-grey-7 sobre__sobre sobre__title">
                SOBRE
              </div>
              <div class="text-blue-grey-8 text-center q-mb-md sobre__sobre sobre__text__header" >
                Um pouco sobre meu trabalho...
              </div>
              <div class="text-h5 text-center text-weight-thin sobre__sobre sobre__text1" >
                Projeto e desenvolvo serviços de websites elegantes e modernos e serviços da web.
                Minha paixão é projetar experiências digitais de usuários através de interações
                significativas. Confira meu portfólio.
              </div>

          </div>
          <div class=" col-md-12 col-sm-12  flex justify-center items-center sobre__sobre  q-pa-xs ">
              <div class="row  full-width ">
                <!-- ************************* -->
                <!-- PERFIL -->
                <div class="col-xs-12 col-sm-12 col-md ">
                          <div class="q-pa-md q-gutter-lg">
                            <div>
                              <span class="text-blue-grey-8 sobre__title__skills">Perfil</span>
                            </div>
                            <div>
                              <span class="text-blue-grey-8 sobre__title__skills2">Amo o que faço, pois faço com prazer!</span>
                            </div>
                            <div >
                              <div>
                               <span class="text-blue-grey-8 sobre__title__skills3">NOME:</span>
                              </div>
                              <div>
                                <span class="text-grey-8 sobre__title__skills4">Deiverson Chaves</span>
                              </div>
                            </div>
                             <div>
                              <div>
                                <span class="text-blue-grey-8 sobre__title__skills3">NASCIMENTO:</span>
                              </div>
                              <div>
                                <span class="text-grey-8 sobre__title__skills4">22 de Agosto de 1977</span>
                              </div>

                            </div>
                              <div >
                              <div>
                               <span class="text-blue-grey-8 sobre__title__skills3">CARGO:</span>
                              </div>
                              <div>
                                <span class="text-grey-8 sobre__title__skills4">Freelancer e Front End</span>
                              </div>
                            </div>
                             <div >
                              <div>
                               <span class="text-blue-grey-8 sobre__title__skills3">WEBSITE:</span>
                              </div>
                              <div>
                                <span class="text-grey-8 sobre__title__skills4">deiversonti.github.io/portfolio</span>
                              </div>
                            </div>
                             <div >
                              <div>
                               <span class="text-blue-grey-8 sobre__title__skills3">EMAIL:</span>
                              </div>
                              <div>
                                <span class="text-grey-8 sobre__title__skills4">deiverson.dtg@gmail.com</span>
                              </div>
                            </div>
                          </div>
                          <div class="flex justify-evenly full-width items-center q-mt-lg ">
                            <div>
                              <a href="#contact">
                                <q-btn outline color="blue-grey-8"  label="Contato" style="width:150px" />
                              </a>
                            </div>
                             <div>
                              <q-btn  color="blue-grey-8"  label="Curriculun" style="width:150px" />
                            </div>
                          </div>
                </div>
                <!-- ************************* -->
                <!-- SKILLS PROGRESS BAR -->
                <div class="col-xs-12 col-sm-12 col-md">
                          <div class=" q-my-md q-gutter-md">
                            <div >
                              <span class="text-blue-grey-8 sobre__title__skills">Skills</span>
                            </div>
                            <div>
                              <span class="text-blue-grey-8 sobre__title__skills2">Mais Usadas</span>
                            </div>
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
                            <div >
                              <span class="skills__port">QuasarJs</span>
                                <q-linear-progress size="18px" :value="progress5"  class="colorizar">
                                  <div class="absolute-full flex flex-center">
                                    <q-badge color="white" text-color="accent" :label="progressLabel5" />
                                  </div>
                                </q-linear-progress>
                            </div>
                            <div >
                              <span class="skills__port">TailWindCss</span>
                                <q-linear-progress size="18px" :value="progress6"  class="colorizar">
                                  <div class="absolute-full flex flex-center">
                                    <q-badge color="white" text-color="accent" :label="progressLabel6" />
                                  </div>
                                </q-linear-progress>
                            </div>
                            <div >
                              <span class="skills__port">Docker</span>
                                <q-linear-progress size="18px" :value="progress7"  class="colorizar">
                                  <div class="absolute-full flex flex-center">
                                    <q-badge color="white" text-color="accent" :label="progressLabel7" />
                                  </div>
                                </q-linear-progress>
                            </div>
                            <div >
                              <span class="skills__port">Firebase</span>
                                <q-linear-progress size="18px" :value="progress8"  class="colorizar">
                                  <div class="absolute-full flex flex-center">
                                    <q-badge color="white" text-color="accent" :label="progressLabel8" />
                                  </div>
                                </q-linear-progress>
                            </div>
                          </div>
                </div>
              </div>
          </div>
        </div>
    </q-page>
  </q-page-container>
</q-layout>
</template>

<script>
import { defineComponent, computed, ref } from 'vue'

export default defineComponent({
  name: 'PageMSociais',
  setup () {
    const progress1 = ref(0.9) // html
    const progress2 = ref(0.95) // css
    const progress3 = ref(0.55) // js
    const progress4 = ref(0.75) // vue
    const progress5 = ref(0.85) // quasarJs
    const progress6 = ref(0.80) // tailWindCss
    const progress7 = ref(0.50) // docker
    const progress8 = ref(0.80) // Firebase

    return {
      progress1,
      progressLabel1: computed(() => (progress1.value * 100).toFixed(2) + '%'),

      progress2,
      progressLabel2: computed(() => (progress2.value * 100).toFixed(2) + '%'),

      progress3,
      progressLabel3: computed(() => (progress3.value * 100).toFixed(2) + '%'),

      progress4,
      progressLabel4: computed(() => (progress4.value * 100).toFixed(2) + '%'),

      progress5,
      progressLabel5: computed(() => (progress5.value * 100).toFixed(2) + '%'),

      progress6,
      progressLabel6: computed(() => (progress6.value * 100).toFixed(2) + '%'),

      progress7,
      progressLabel7: computed(() => (progress7.value * 100).toFixed(2) + '%'),

      progress8,
      progressLabel8: computed(() => (progress8.value * 100).toFixed(2) + '%')

    }
  }
})
</script>
<style lang="sass" scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,300;0,400;1,500;1,700&display=swap')
@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,600;1,300;1,700;1,900&display=swap')
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,400;0,500;0,600;0,900;1,200;1,700&display=swap')
@import url('https://fonts.googleapis.com/css2?family=Fredoka:wght@300;400;600;700&display=swap')
@import url('https://fonts.googleapis.com/css2?family=Prompt:ital,wght@0,100;0,200;0,400;0,700;0,800;1,500;1,900&display=swap')

.sobre__sobre
  margin: 0 auto
  max-width: 50%
.sobre__title

.sobre__text__header
  font-family: Poppins
  padding-bottom: 0.5em
  font-weight: 600
  font-size: 2.5em

.sobre__text1
  margin-bottom: 2em
  color: grey-10

.sobre__title__skills
  font-family: Poppins
  font-size: 1.8em
  text-transform: uppercase
  font-weight: 600

.sobre__title__skills2
  font-family: Montserrat
  font-size: 1.5em

.sobre__title__skills3
  font-family: Poppins
  font-size: 1.3em
  text-transform: uppercase
  font-weight: 600

.sobre__title__skills4
  font-family: Fredoka
  font-size: 1.3em

@media screen and (max-width: 1115px)
  .sobre__sobre
    max-width: 100%
  .sobre__text__header
    font-size: 1.5em
  .sobre__text1
    font-size: 1.3em
</style>
