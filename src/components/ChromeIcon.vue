<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    :width="data.width"
    :height="data.height"
    viewBox="0 0 24 24"
    :fill="data.fill"
    :stroke="data.stroke"
    :stroke-width="data.strokeWidth"
    stroke-linecap="round"
    stroke-linejoin="round"
  >
    <circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="4"></circle><line x1="21.17" y1="8" x2="12" y2="8"></line><line x1="3.95" y1="6.06" x2="8.54" y2="14"></line><line x1="10.88" y1="21.94" x2="15.46" y2="14"></line>
  </svg>
</template>

<script>
  import { computed, reactive, watch } from 'vue'

  export default {
    name: 'ChromeIcon',
    props: {
      size: {
        type: String,
        default: '24',
        validator(s) {
          return (
            !isNaN(s) ||
            (s.length >= 2 &&
              !isNaN(s.slice(0, s.length - 1)) &&
              s.slice(-1) === 'x')
          )
        }
      }
    },
    setup(props, { attrs }) {
      const size = computed(() =>
        props.size.slice(-1) === 'x'
          ? props.size.slice(0, props.size.length - 1) + 'em'
          : parseInt(props.size) + 'px'
      )

      const data = reactive({
        width: attrs.width || size.value,
        width: attrs.height || size.value,
        fill: attrs.fill || 'none',
        stroke: attrs.stroke || 'currentColor',
        strokeWidth: attrs.strokeWidth || '2'
      })

      watch(
        () => [props.size, attrs],
        () => {
          data.width = attrs.width || size.value
          data.width = attrs.height || size.value
          data.fill = attrs.fill || 'none'
          data.stroke = attrs.stroke || 'currentColor'
          data.strokeWidth = attrs.strokeWidth || '2'
        }
      )
      return { data }
    }
  }
</script>