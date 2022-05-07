<template>
  <header>
    <div>
      <div>
        <router-link to="/">Feather</router-link>
        <p><span class="accent">V</span>1.0.1</p>
      </div>
      <div>
        <router-link to="/guide">Guide</router-link>
        <a
          href="https://github.com/lukeJEdwards/vue3-feather-icon"
          target="_blank"
          >GitHub</a
        >
        <component :is="store.themeIcon" @click="store.changeTheme()" />
      </div>
    </div>
    <div class="title">
      <h2>Simply beautiful open source icons for</h2>
      <p class="accent">Vue</p>
    </div>
  </header>
</template>

<script setup>
  import { useStore } from '@store'

  const store = useStore()
</script>
