<template>
  <q-layout view="hHh lpR fFf">
    <q-header reveal class="bg-blue-grey-1"  elevated >
      <q-toolbar>
        <q-toolbar-title>
          <div class="row items-center">
            <div class="col text-left q-ml-md">
              <a href="#Home">
                <span class="font__topo">Deiverson Chaves</span>
              </a>
            </div>
         </div>
        </q-toolbar-title>
          <q-btn dense flat color="black" round size="xl" icon="menu" @click="toggleRightDrawer" />
       </q-toolbar>
    </q-header>
    <q-drawer v-model="rightDrawerOpen" side="right" behavior="mobile" bordered   >
       <div class="q-pa-xs links__site link__link" style="max-width: 350px; ">
            <q-list padding class="rounded-borders ">
              <!-- <a href="#Home">
                <q-expansion-item expand-separator icon="mdi-home-outline" label="Home" />
              </a>
              <a href="#msociais">
                <q-expansion-item expand-separator icon="mdi-web" label="Sociais" />
              </a>
              <a href="#skills">
                <q-expansion-item expand-separator icon="mdi-cog-outline" label="Habilidades" />
              </a>
              <a href="#works">
                <q-expansion-item expand-separator icon="mdi-briefcase-outline" label="Trabalhos" />
              </a>
              <a href="#contact">
                <q-expansion-item expand-separator icon="mdi-account-box-outline" label="Contatos" />
              </a> -->
              <div class="hamb__link">
                <a href="#Home" >
                  <q-icon name="mdi-home-outline" class="icon_n" />
                  <span>Home</span>
                </a>
              </div>
              <div class="hamb__link">
                <a href="#msociais" >
                  <q-icon name="mdi-web" class="icon_n" />
                  <span>Sociais</span>
                </a>
              </div>
              <div class="hamb__link">
                <a href="#skills" >
                  <q-icon name="mdi-cog-outline" class="icon_n" />
                  <span>Habilidades</span>
                </a>
              </div>
              <div class="hamb__link">
                <a href="#works" >
                  <q-icon name="mdi-briefcase-outline" class="icon_n" />
                  <span>Trabalhos</span>
                </a>
              </div>
              <div class="hamb__link">
                <a href="#contact" >
                  <q-icon name="mdi-account-box-outline" class="icon_n" />
                  <span>Contatos</span>
                </a>
              </div>
            </q-list>
      </div>
    </q-drawer>
    <q-page-container  >
        <q-page padding id="Home" class="row  flex justify-center items-center bg-portifolio">
                  <div class="col-md-12 q-pa-xl animar2" >
                    <div class=" text-center home_title1">Portifólio</div>
                    <div class=" text-center home_title2">Deiverson Chaves</div>
                    <div class=" text-weight-thin text-center home_title3 ">
                      |  DEVELOPER FRONT END  |  UI/UX DESIGNER  |
                    </div>
                   <a href="#msociais">
                      <div class="q-pa-md flex justify-center items-center ">
                        <div class="btn__home">
                          <span class=" btn__font">SOBRE MIM</span>
                          <q-icon name="mdi-chevron-down" class="btn__icon" />
                        </div>
                       </div>
                    </a>
                  </div>
                  <div class="col-md-12 flex items-center flex-center q-gutter-x-md animar1 ">
                    <q-item manual-focus href="https://www.linkedin.com/in/deiverson-chaves-de-araujo/" target="blank">
                     <q-icon title="linkedin" name="mdi-linkedin" color="blue-grey-3" size="md" />
                    </q-item>
                    <q-item manual-focus href="https://github.com/DeiversonTI/" target="blank">
                      <q-icon title="github" name="mdi-github" color="blue-grey-3" size="md" />
                    </q-item>

                  </div>
          </q-page>

       <!-- <q-page padding class="row" id="Home" >
         <div class=" flex justify-center items-center col-xs-12 col-sm-12 col-md-6 animar1 " >
          <q-img
          src="../assets/65.png"
          style="max-width: 70%;"
          />
        </div>
         <div class="  justify-center items-center col-xs-12 col-sm-12 col-md-6 animar2" >
            <div class="q-pa-md flex justify-start content-center items-center  text-left fit ">
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
            </div>
        </div>
        </q-page> -->
      </q-page-container>
    <!--Fim da Página Index -->
    <!-- ******************* -->
    <!-- ******************* -->
    <!-- Página Rede Social -->
    <q-page>
      <div id="msociais">
        <social />
      </div>
    </q-page>
    <!-- Fim Página Rede Social -->
    <!-- ******************* -->
    <!-- ******************* -->
    <!-- Página Habilidades -->
    <q-page>
      <div id="skills">
        <skill />
      </div>
    </q-page>
    <!-- Fim Página Habilidades -->
    <!-- ******************* -->
    <!-- ******************* -->
    <!-- Página Trabalhos -->
    <q-page>
      <div id="works">
        <work />
      </div>
    </q-page>
    <!-- Fim Página Trabalhos -->
    <!-- ******************** -->
    <!-- ******************** -->
    <!-- Página Contact -->
    <q-page>
      <div id="contact">
        <contatos />
      </div>
    </q-page>
    <!--Fim Página Contact -->
    <!-- ******************** -->
    <!-- ******************** -->
    <q-page-scroller position="bottom-right" :scroll-offset="150" :offset="[18, 18]">
      <q-btn fab icon="keyboard_arrow_up" color="indigo-8" />
    </q-page-scroller>
  </q-layout>
</template>
<script>
import { defineComponent, ref } from 'vue'
import social from '../pages/MSociais.vue'
import skill from '../pages/Skills.vue'
import work from '../pages/Works.vue'
import contatos from '../pages/Contact.vue'

export default defineComponent({
  name: 'home',
  components: {
    social,
    skill,
    contatos,
    work
  },
  setup () {
    const rightDrawerOpen = ref(false)
    return {
      rightDrawerOpen,
      toggleRightDrawer () {
        rightDrawerOpen.value = !rightDrawerOpen.value
      }
    }
  }
})
</script>
<style lang="sass" scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,300;0,400;1,500;1,700&display=swap')
@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,600;1,300;1,700;1,900&display=swap')
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,400;0,500;0,600;0,900;1,200;1,700&display=swap')
@import url('https://fonts.googleapis.com/css2?family=Fredoka:wght@300;400;600;700&display=swap')
.animar1
  animation: fadeInDown
  animation-duration: 2s

.animar2
  animation: fadeInDown
  animation-duration: 2s

.link__link
  display: block

.hamb__link
  padding: 10px 0px
  margin: 10px 0px

.hamb__link .icon_n
  font-size: 1.5em
  margin-right: 0.5em

.hamb__link span
  font-size: 1em
  font-family: Poppins
  font-weight: 500
  text-transform: uppercase

  &:hover
    animation-name: texto
    animation-duration: 0.5s
    animation-timing-function: ease-in-out
    animation-direction: alternate

  @keyframes texto
    0%
      margin-left: 0

    50%
      margin-left: 0.8em

    100%
      margin-left: 0

.icon_n  span
  background-color: #ccc

.btn__home
  border: 1px solid #fff
  border-radius: 5px
  width: 20%
  padding: 10px 0
  text-align: center
  margin-top: 30px

  &:hover
    border: 2px solid $blue-grey-9
    color: $blue-grey-12

.btn__font
  font-family: Montserrat
  font-size: 0.9em
  color: $grey-1
  text-align: center
.btn__icon
  font-size: 1.5em
  color: $grey-1
  padding-left: 10px
@media screen and (max-width: 699px)
  .btn__home
    width: 50%
@media screen and (min-width: 700px) and (max-width: 1280px)
  .btn__home
    width: 50%

</style>
