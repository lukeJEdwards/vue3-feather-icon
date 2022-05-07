<template>
  <li class="icon" :class="{ selected: isSelected }" @click="handleClick">
    <component
      :is="icon"
      :size="store.iconInfo.iconSize"
      :stroke-width="store.iconInfo.iconStrokeWeight"
      :stroke="store.iconInfo.iconColour"
    />
    {{ icon.name }}
  </li>
</template>

<script setup>
  import { useStore } from '@store'
  import { ref } from '@vue/reactivity'

  const props = defineProps(['icon'])
  const store = useStore()
  const isSelected = ref(store.selectedIcons.includes(props.icon.name))

  const handleClick = () =>
    isSelected.value
      ? (store.removeIcon(props.icon.name), (isSelected.value = false))
      : (store.addIcon(props.icon.name), (isSelected.value = true))
</script>
