
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
        iconName: 'ApertureIcon',
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
          '<circle cx="12" cy="12" r="10"></circle><line x1="14.31" y1="8" x2="20.05" y2="17.94"></line><line x1="9.69" y1="8" x2="21.17" y2="8"></line><line x1="7.38" y1="12" x2="13.12" y2="2.06"></line><line x1="9.69" y1="16" x2="3.95" y2="6.06"></line><line x1="14.31" y1="16" x2="2.83" y2="16"></line><line x1="16.62" y1="12" x2="10.88" y2="21.94"></line>',
        ...data
      })
  }
})


