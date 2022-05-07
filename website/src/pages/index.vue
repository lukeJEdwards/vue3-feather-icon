<template>
  <div class="container">
    <div class="icons-search">
      <SearchBar />
      <Model v-if="modelOpen" />
      <Icons />
    </div>
    <div class="options">
      <Customizer />
      <button class="get-code" @click="modelOpen = !modelOpen">
        {{ modelOpen ? 'Hide Code' : 'Show Code' }}
      </button>
    </div>
  </div>
</template>

<script setup>
  import { ref } from 'vue'
  import { useStore } from '@store'
  import { ArrowRightIcon } from '../../../dist/vue3-feather-icons.es'

  import Icons from '@components/Icons.vue'
  import SearchBar from '@components/SearchBar.vue'
  import Customizer from '@components/Customizer.vue'
  import Model from '@components/CodeModel.vue'

  const store = useStore()

  const modelOpen = ref(false)
</script>
