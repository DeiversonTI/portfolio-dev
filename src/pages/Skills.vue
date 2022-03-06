<template>
  <q-layout>
    <q-page-container>
      <q-page padding class="bg-grey-1">
          <div class="row " style=" margin-top:15em">
              <div class="flex items-center justify-center col-xs-12 col-sm-12 col-md-5 text-center text-h2 text-indigo-8 text-weight-bold ">
                <div>
                  <span>Habilidades</span>
                </div>
              </div>
              <div class="q-gutter-sm  q-pa-md  col-xs-12 col-md-7 flex justify-center items-center ">
                <div class="row flex items-center justify-center q-gutter-sm q-mr-sm">
                    <div class=" my-card col-xs-6 col-sm-6 col-md bg-blue-grey-1">
                        <div class="q-pt-md">
                          <img src="../assets/html-5.png" alt="">
                        </div>
                        <div class="q-pa-sm text-center">
                          <div class="text-h5">HTML</div>
                        </div>
                    </div>
                </div>
                <div class="row flex items-center justify-center q-gutter-sm q-mr-sm">
                    <div class=" my-card col-xs-6 col-sm-6 col-md bg-blue-grey-1">
                        <div class="q-pt-md">
                          <img src="../assets/css-3.png" alt="">
                        </div>
                        <div class="q-pa-sm text-center">
                          <div class="text-h5">CSS</div>
                        </div>
                    </div>
                </div>
                <div class="row flex items-center justify-center q-gutter-sm q-mr-sm">
                    <div class=" my-card col-xs-6 col-sm-6 col-md bg-blue-grey-1">
                        <div class="q-pt-md">
                          <img src="../assets/js.png" alt="">
                        </div>
                        <div class="q-pa-sm text-center">
                          <div class="text-h5">JAVASCRIPT</div>
                        </div>
                    </div>
                </div>
                <div class="row flex items-center justify-center q-gutter-sm q-mr-sm">
                    <div class=" my-card col-xs-6 col-sm-6 col-md bg-blue-grey-1">
                        <div class="q-pt-md">
                          <img src="../assets/quasar.png" alt="">
                        </div>
                        <div class="q-pa-sm text-center">
                          <div class="text-h5">QUASAR</div>
                        </div>
                    </div>
                </div>
                <div class="row flex items-center justify-center q-gutter-sm q-mr-sm">
                    <div class=" my-card col-xs-6 col-sm-6 col-md bg-blue-grey-1">
                        <div class="q-pt-md">
                          <img src="../assets/vue.png" alt="">
                        </div>
                        <div class="q-pa-sm text-center">
                          <div class="text-h5">VUEJS</div>
                        </div>
                    </div>
                </div>
                <div class="row flex items-center justify-center q-gutter-sm q-mr-sm">
                    <div class=" my-card col-xs-6 col-sm-6 col-md bg-blue-grey-1">
                        <div class="q-pt-md">
                          <img src="../assets/docker.png" alt="">
                        </div>
                        <div class="q-pa-sm text-center">
                          <div class="text-h5">DOCKER</div>
                        </div>
                    </div>
                </div>
                <div class="row flex items-center justify-center q-gutter-sm q-mr-sm">
                    <div class=" my-card col-xs-6 col-sm-6 col-md bg-blue-grey-1">
                        <div class="q-pt-md">
                          <img src="../assets/git.png" alt="">
                        </div>
                        <div class="q-pa-sm text-center">
                          <div class="text-h5">GIT</div>
                        </div>
                    </div>
                </div>
                <div class="row flex items-center justify-center q-gutter-sm q-mr-sm">
                    <div class=" my-card col-xs-6 col-sm-6 col-md bg-blue-grey-1">
                        <div class="q-pt-md">
                          <img src="../assets/firebase.png" alt="">
                        </div>
                        <div class="q-pa-sm text-center">
                          <div class="text-h5">FIREBASE</div>
                        </div>
                    </div>
                </div>
                <div class="row flex items-center justify-center q-gutter-sm q-mr-sm">
                    <div class=" my-card col-xs-6 col-sm-6 col-md bg-blue-grey-1">
                        <div class="q-pt-md">
                          <img src="../assets/supabase.png" alt="">
                        </div>
                        <div class="q-pa-sm text-center">
                          <div class="text-h5">SUPABASE</div>
                        </div>
                    </div>
                </div>
                <div class="row flex items-center justify-center q-gutter-sm q-mr-sm">
                    <div class=" my-card col-xs-6 col-sm-6 col-md bg-blue-grey-1">
                        <div class="q-pt-md">
                          <img src="../assets/sass.png" alt="">
                        </div>
                        <div class="q-pa-sm text-center">
                          <div class="text-h5">SASS</div>
                        </div>
                    </div>
                </div>
                <div class="row flex items-center justify-center q-gutter-sm q-mr-sm">
                    <div class=" my-card col-xs-6 col-sm-6 col-md bg-blue-grey-1">
                        <div class="q-pt-md">
                          <img src="../assets/tailwind.png" alt="">
                        </div>
                        <div class="q-pa-sm text-center">
                          <div class="text-h5">TAILWIND</div>
                        </div>
                    </div>
                </div>
                <div class="row flex items-center justify-center q-gutter-sm q-mr-sm">
                    <div class=" my-card col-xs-6 col-sm-6 col-md bg-blue-grey-1">
                        <div class="q-pt-md">
                          <img src="../assets/node.png" alt="">
                        </div>
                        <div class="q-pa-sm text-center">
                          <div class="text-h5">NODEJS</div>
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
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'PageSkills',
  setup () {
    return {}
  }
})
</script>
<style scoped>
.my-card{
  width: 100%;
  max-width: 150px;
  border-radius: 15px;
  box-shadow: 4px 4px 5px 1px #cccccc;
}

</style>
