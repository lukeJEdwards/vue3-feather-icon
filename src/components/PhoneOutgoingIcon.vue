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
    <polyline points="23 7 23 1 17 1"></polyline><line x1="16" y1="8" x2="23" y2="1"></line><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
  </svg>
</template>

<script>
  import { computed, reactive, watch } from 'vue'

  export default {
    name: 'PhoneOutgoingIcon',
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