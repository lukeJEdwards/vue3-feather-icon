<template>
  <div class="model">
    <span class="key-word">import&nbsp;</span>
    <span class="orange">{&nbsp;</span>
    <span class="code" v-for="(icon, i) in store.selectedIcons" :key="i">
      {{ icon
      }}<span class="white" v-if="i != store.selectedIcons.length - 1"
        >,&nbsp;</span
      >
    </span>
    <span class="orange">&nbsp;}&nbsp;</span>
    <span class="key-word">from&nbsp;</span>
    <span class="string">'vue3-feather-icon'</span>
  </div>
</template>

<script setup>
  import { useStore } from '@store'

  const store = useStore()
</script>
