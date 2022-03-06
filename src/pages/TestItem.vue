<template>
  <div class="bg-blue-grey-2">
    <div class="bg-blue-grey-3" >
      <!-- <div class="row items-center" v-bind:style="$q.screen.lt.md ? {'width': '80%'} : {'width': '50%'}"> -->
      <q-layout >
      <q-page-container  >
        <q-page padding class="row" >
        <div class=" flex justify-center items-center col-xs-12 col-sm-12 col-md-6 bg-orange-5 " >
          <q-img
          src="../assets/65.png"
          style="max-width: 80%;"
          />
        </div>
        <div class="  justify-center items-center col-xs-12 col-sm-12 col-md-6 bg-blue-5" >
          <div class="q-pa-md flex justify-start content-center items-center  text-left fit bg-positive">
            <div class="q-pb-sm text-h2 text-weight-bold">
              I´m Deiverson Chaves
              <br>
            <span class="text-h3 ">
              Sou Desenvolvedor Front-End
            </span>
            </div>
            <div class="text-h6 text-weight-thin text-justify ">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Aspernatur id, illo laboriosam enim sint alias aperiam
                praesentium possimus itaque eveniet eos delectus
                ullam quaerat.
            </div>
         </div>
        </div>
        </q-page>
      </q-page-container>
      </q-layout>
    </div>
  </div>
  <transition-group
  appear
  enter-active-class="animated fadeIn"
  leave-active-class="animated fadeOut"
>
  <!-- We wrap a "p" tag and a QBtn -->
  <p key="text">
     Lorem Ipsum
  </p>
  <q-btn
    key="email-button"
    color="secondary"
    icon="mail"
    label="Email"
  />
</transition-group>
</template>
