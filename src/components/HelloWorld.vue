<template>
  <q-page class="flex flex-center">
    <div class="q-pa-md">
      <div class="q-gutter-md">
        <q-carousel
          v-model="slide"
          transition-prev="scale"
          transition-next="scale"
          swipeable
          animated
          control-color="white"
          navigation
          padding
          arrows
          height="300px"
          class="bg-primary text-white shadow-1 rounded-borders"
        >
          <q-carousel-slide name="style" class="column no-wrap flex-center">
            <q-icon name="style" size="56px" />
            <div class="q-mt-md text-center">
              {{ lorem }}
            </div>
          </q-carousel-slide>

          <!-- Adicione mais slides aqui, se necessário -->
          <q-carousel-slide name="second" class="column no-wrap flex-center">
            <q-icon name="star" size="56px" />
            <div class="q-mt-md text-center">
              Another slide content here.
            </div>
          </q-carousel-slide>

        </q-carousel>
      </div>
    </div>

    <img alt="Quasar logo" src="../assets/logo.svg" style="width: 200px; height: 200px">
  </q-page>
</template>

<style>
/* Estilos adicionais, se necessário */
</style>

<script lang="ts">
import { ref } from 'vue'

export default {
  name: 'HelloWorld',
  setup() {
    return {
      slide: ref('style'),
      lorem: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque voluptatem totam, architecto cupiditate officia rerum, error dignissimos praesentium libero ab nemo.'
    }
  }
}
</script>
