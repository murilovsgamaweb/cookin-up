<script lang="ts">
import { defineComponent, KeepAlive, ref } from "vue";
import SelecionarIngredientes from "./SelecionarIngredientes.vue";
import SuaLista from "./SuaLista.vue";
import MostrarReceitas from "./MostrarReceitas.vue";

type Pagina = "SelecionarIngredientes" | "MostrarReceitas";

export default defineComponent({
  components: { SelecionarIngredientes, SuaLista, MostrarReceitas },
  setup() {
    const ingredientes = ref<string[]>([]);
    const conteudo = ref<Pagina>("SelecionarIngredientes");
    const busca = ref(""); // Adicionando a variável reativa

    function adicionarIngrediente(ingrediente: string) {
      ingredientes.value.push(ingrediente);
    }

    function removerIngrediente(ingrediente: string) {
      ingredientes.value = ingredientes.value.filter((iLista) => ingrediente !== iLista);
    }

    function navegar(pagina: Pagina) {
      conteudo.value = pagina;
    }

    return {
      ingredientes,
      conteudo,
      busca,
      adicionarIngrediente,
      removerIngrediente,
      navegar,
       model: ref(''),
       slide: ref('style')
    };
  },
});
</script>

<template>
  <main class="conteudo-principal">
    
   
    <SuaLista :ingredientes="ingredientes" />

    <KeepAlive include="SelecionarIngredientes">
      <SelecionarIngredientes
        v-if="conteudo === 'SelecionarIngredientes'"
        @adicionar-ingrediente="adicionarIngrediente"
        @remover-ingrediente="removerIngrediente"
        @buscar-receitas="navegar('MostrarReceitas')"
      />

      <MostrarReceitas
        v-else-if="conteudo === 'MostrarReceitas'"
        :ingredientes="ingredientes"
        @editar-receitas="navegar('SelecionarIngredientes')"
      />
    </KeepAlive>
  </main>
</template>

<style scoped>
.q-ma-md{
  color: red;
}
</style>