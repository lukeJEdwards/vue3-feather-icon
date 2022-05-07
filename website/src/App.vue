<template>
  <Header />
  <router-view></router-view>
  <Footer />
</template>

<script setup>
  import { useStore } from '@store'
  import Header from '@components/Header.vue'
  import Footer from '@components/Footer.vue'

  const store = useStore()
  const appDiv = document.querySelector('html')

  store.$subscribe((mutation, state) => {
    if (state.darkTheme) {
      appDiv.classList.remove('light')
      appDiv.classList.add('dark')
    } else {
      appDiv.classList.add('light')
      appDiv.classList.remove('dark')
    }
  })

  if (localStorage.getItem('theme')) {
    if (JSON.parse(localStorage.getItem('theme'))) {
      appDiv.classList.add('dark')
    } else {
      appDiv.classList.add('light')
      store.darkTheme = false
    }
  } else {
    appDiv.classList.add('dark')
  }
</script>

<style lang="scss">
  body {
    margin: 0;
  }
</style>
