
import { defineComponent, h } from 'vue'

export default defineComponent({
  props: {
    size: {
      type: String,
      default: '24',
      validator(s: any) {
        return (
          !isNaN(s) ||
          (s.length >= 2 &&
            !isNaN(s.slice(0, s.length - 1)) &&
            s.slice(-1) === 'x')
        )
      }
    }
  },

  setup(props: { size: string }, { attrs }) {
    const name = 'StarIcon'

    const size: String =
      props.size.slice(-1) === 'x'
        ? props.size.slice(0, props.size.length - 1) + 'em'
        : parseInt(props.size) + 'px'

    const data: { width?: any; height?: any } = {}
    data.width = attrs.width || size
    data.height = attrs.height || size

    return () =>
      h('svg', {
        xmlns: 'http://www.w3.org/2000/svg',
        width: '24',
        height: '24',
        viewBox: '0 0 24 24',
        fill: 'none',
        stroke: 'currentColor',
        'stroke-width': '2',
        'stroke-linecap': 'round',
        'stroke-linejoin': 'round',
        innerHTML:
          '<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>',
        ...data
      })
  }
})

