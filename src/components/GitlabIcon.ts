
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
    const size: String =
      props.size.slice(-1) === 'x'
        ? props.size.slice(0, props.size.length - 1) + 'em'
        : parseInt(props.size) + 'px'

    const data: { width?: any; height?: any } = {}
    data.width = attrs.width || size
    data.height = attrs.height || size

    return () =>
      h('svg', {
        iconName: 'GitlabIcon',
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
          '<path d="M22.65 14.39L12 22.13 1.35 14.39a.84.84 0 0 1-.3-.94l1.22-3.78 2.44-7.51A.42.42 0 0 1 4.82 2a.43.43 0 0 1 .58 0 .42.42 0 0 1 .11.18l2.44 7.49h8.1l2.44-7.51A.42.42 0 0 1 18.6 2a.43.43 0 0 1 .58 0 .42.42 0 0 1 .11.18l2.44 7.51L23 13.45a.84.84 0 0 1-.35.94z"></path>',
        ...data
      })
  }
})


