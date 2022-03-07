<template>
  <q-layout view="hHh lpR fFf">
    <q-header reveal  class="bg-blue-grey-1 text-blue-grey-10">
      <q-toolbar>
        <q-toolbar-title>
          <div class="row items-center bg-blue-grey-1">
            <div class="col text-left q-ml-md">
              <a href="#Home">
                <span class="font__topo">Deiverson<span class="text-indigo-5">Chaves</span></span>
              </a>
            </div>
         </div>
        </q-toolbar-title>
          <q-btn dense flat round size="xl" icon="menu" @click="toggleRightDrawer" />
       </q-toolbar>
    </q-header>
    <q-drawer v-model="rightDrawerOpen" side="right" behavior="mobile" bordered>
       <div class="q-pa-xs links__site" style="max-width: 350px;">
            <q-list padding class="rounded-borders link__link">
              <a href="#Home">
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
              </a>
            </q-list>
      </div>
    </q-drawer>
    <q-page-container  >
        <q-page padding class="row" >
        <div class=" flex justify-center items-center col-xs-12 col-sm-12 col-md-6 " >
          <q-img
          src="../assets/65.png"
          style="max-width: 70%;"
          />
        </div>
        <div class="  justify-center items-center col-xs-12 col-sm-12 col-md-6 " >
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
        </q-page>
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
