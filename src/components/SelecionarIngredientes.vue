<script lang="ts">
import { defineComponent, ref, computed } from 'vue';
import { ObterCategorias } from '@/http/index';
import type ICategoria from '@/interfaces/ICategoria';
import CardCategoria from './CardCategoria.vue';
import BotaoPrincipal from './BotaoPrincipal.vue';
import Rodape from './Rodape.vue';

export default defineComponent({
  components: {
    CardCategoria,
    BotaoPrincipal,
    Rodape
  },
  name: 'SelecionarIngredientes',
  data() {
    return {
      categorias: [] as ICategoria[],
      pesquisa: ''  // Adiciona uma propriedade para armazenar o termo de pesquisa
    };
  },
  async created() {
    try {
      this.categorias = await ObterCategorias();
    } catch (error) {
      console.error('Erro ao carregar categorias:', error);
    }
  },
  computed: {
    categoriasFiltradas() {
      return this.categorias.filter(categoria =>
        categoria.nome.toLowerCase().includes(this.pesquisa.toLowerCase())
      );
    }
  },
  emits: ['adicionar-ingrediente', 'remover-ingrediente', 'BuscarReceitas']
});
</script>

<template>
  <section class="selecionar-ingredientes">
    <h1 class="cabecalho titulo-ingredientes">Ingredientes</h1>
    <p class="paragrafo-lg instrucoes">Selecione abaixo os ingredientes que você quer usar nesta receita:</p>
    <!-- Adiciona o QInput para pesquisa -->
    <q-input 
      filled 
      v-model="pesquisa" 
      placeholder="Buscar categorias..." 
      class="input-pesquisa"
    />
    <ul class="categorias">
      <li v-for="categoria in categoriasFiltradas" :key="categoria.nome">
        <CardCategoria
          :categoria="categoria"
          @adicionar-ingrediente="$emit('adicionar-ingrediente', $event)"
          @remover-ingrediente="$emit('remover-ingrediente', $event)"
        />
      </li>
    </ul>
    <p class="paragrafo dica">*Atenção: Consideramos que você tem em casa, sal, pimenta e água.</p>
    <BotaoPrincipal texto="Buscar receitas!" @click="$emit('BuscarReceitas')" />
  </section>
</template>

<style scoped>
.selecionar-ingredientes {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.titulo-ingredientes {
  color: var(--verde-medio, #3D6D4A);
  display: block;
  margin-bottom: 1.5rem;
}
.instrucoes {
  margin-bottom: 2rem;
}
.categorias {
  margin-bottom: 1rem;
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  flex-wrap: wrap;
}
.dica {
  align-self: flex-start;
  margin-bottom: 3.5rem;
}
.input-pesquisa {
  margin-bottom: 1rem;
  width: 100%;
  max-width: 400px;
}
@media only screen and (max-width: 767px) {
  .dica {
    margin-bottom: 2.5rem;
  }
}
</style>
