<template>
  <ul class="icons">
    <icon v-for="(icon, i) in filteredIcons" :key="i" :icon="icon" />
  </ul>
</template>

<script setup>
  import { computed } from 'vue'
  import { useStore } from '@store'

  import * as Icons from '../../../dist/vue3-feather-icons.es.js'

  import icon from './icon.vue'
  import tags from '@assets/tags.json'

  const store = useStore()
  const IconsArray = Object.values(Icons)

  const filteredIcons = computed(() =>
    IconsArray.filter(icon => {
      const text = store.searchText.toLowerCase()
      if (tags[icon.name]) {
        return tags[icon.name].includes(text)
      }

      return icon.name.toLowerCase().includes(text)
    })
  )
</script>
