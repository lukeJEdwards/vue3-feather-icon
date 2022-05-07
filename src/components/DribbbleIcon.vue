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
    <circle cx="12" cy="12" r="10"></circle><path d="M8.56 2.75c4.37 6.03 6.02 9.42 8.03 17.72m2.54-15.38c-3.72 4.35-8.94 5.66-16.88 5.85m19.5 1.9c-3.5-.93-6.63-.82-8.94 0-2.58.92-5.01 2.86-7.44 6.32"></path>
  </svg>
</template>

<script>
  import { computed, reactive, watch } from 'vue'

  export default {
    name: 'DribbbleIcon',
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