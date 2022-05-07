<template>
  <div class="customizer">
    <div class="title">
      <h1>Customize</h1>
      <button @click="store.resetValues()">Rest</button>
    </div>
    <h3>Size</h3>
    <div class="input">
      <input
        type="range"
        min="12"
        max="96"
        step="4"
        v-model="store.iconInfo.iconSize"
      />
      {{ store.iconInfo.iconSize }}
    </div>
    <h3>Stroke width</h3>
    <div class="input">
      <input
        type="range"
        min="0.5"
        max="3"
        v-model="store.iconInfo.iconStrokeWeight"
        step="0.5"
      />
      {{ store.iconInfo.iconStrokeWeight }}
    </div>
    <h3>Colour</h3>
    <input
      type="text"
      placeholder="#000000"
      v-model="store.iconInfo.iconColour"
    />
  </div>
</template>

<script setup>
  import { useStore } from '@store'

  const store = useStore()
</script>
