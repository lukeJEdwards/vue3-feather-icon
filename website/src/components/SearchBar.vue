<template>
  <div class="search-bar">
    <span class="search-bar-icon"> <SearchIcon /> </span>
    <input
      class="search-bar-input"
      v-model="store.searchText"
      placeholder="Search 287 icons"
    />
  </div>
</template>

<script setup>
  import { SearchIcon } from '../../../dist/vue3-feather-icons.es.js'
  import { useStore } from '@/store'

  const store = useStore()
</script>
