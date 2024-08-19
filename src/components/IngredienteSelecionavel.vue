<script lang="ts">
import { defineComponent, ref } from 'vue';
import Tag from './Tag.vue';

export default defineComponent({
  props: {
    ingrediente: { type: String, required: true },
    selecionado: { type: Boolean, default: false }
  },
  setup(props, { emit }) {
    const selecionado = ref(props.selecionado);

    function aoClicar() {
      selecionado.value = !selecionado.value;
      emit(selecionado.value ? 'adicionar-ingrediente' : 'remover-ingrediente', props.ingrediente);
    }

    return {
      selecionado,
      aoClicar
    };
  },
  components: { Tag }
});
</script>

<template>
  <button
    class="ingrediente"
    :class="{ 'selecionado': selecionado }"
    @click="aoClicar"
    :aria-pressed="selecionado"
  >
    <Tag :texto="ingrediente" :ativa="selecionado" />
  </button>
</template>

<style scoped>
.ingrediente {
  cursor: pointer;
}
.ingrediente.selecionado {
  background-color: orange;
}
</style>
