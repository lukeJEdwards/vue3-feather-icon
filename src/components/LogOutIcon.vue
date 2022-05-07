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
    <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path><polyline points="16 17 21 12 16 7"></polyline><line x1="21" y1="12" x2="9" y2="12"></line>
  </svg>
</template>

<script>
  import { computed, reactive, watch } from 'vue'

  export default {
    name: 'LogOutIcon',
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