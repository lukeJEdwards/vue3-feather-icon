
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
        iconName: 'PaperclipIcon',
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
          '<path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48"></path>',
        ...data
      })
  }
})


