import { defineStore } from 'pinia'
import { computed, reactive, ref, watch } from 'vue'
import { MoonIcon, SunIcon } from '../../../dist/vue3-feather-icons.es'

export const useStore = defineStore('main', () => {
  const darkTheme = ref(
    localStorage.getItem('theme') ? localStorage.getItem('theme') : true
  )
  const themeIcon = computed(() => (darkTheme.value ? MoonIcon : SunIcon))
  watch(darkTheme, newvalue => {
    localStorage.setItem('theme', newvalue)
  })
  function changeTheme() {
    darkTheme.value = !darkTheme.value
    iconInfo.iconColour = darkTheme.value ? '#ffffff' : '#000000'
  }

  const iconInfo = reactive({
    iconSize: '24',
    iconStrokeWeight: '2',
    iconColour: darkTheme.value ? '#ffffff' : '#000000'
  })
  function resetValues() {
    iconInfo.iconSize = '24'
    iconInfo.iconStrokeWeight = '2'
    iconInfo.iconColour = darkTheme.value ? '#ffffff' : '#000000'
  }

  const selectedIcons = ref([])
  function addIcon(iconName) {
    selectedIcons.value.push(iconName)
  }
  function removeIcon(iconName) {
    selectedIcons.value.splice(selectedIcons.value.indexOf(iconName), 1)
  }

  const searchText = ref('')

  return {
    darkTheme,
    changeTheme,
    themeIcon,

    iconInfo,
    resetValues,

    selectedIcons,
    addIcon,
    removeIcon,

    searchText
  }
})
