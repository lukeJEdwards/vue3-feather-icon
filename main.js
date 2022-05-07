const path = require("path");
const feather = require("feather-icons");
const { pascalCase } = require("pascal-case");
const fs = require("fs-extra");

const componentTemplate = (icon) => `<template>
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
    ${icon.contents}
  </svg>
</template>

<script>
  import { computed, reactive, watch } from 'vue'

  export default {
    name: '${icon.pascalCasedComponentName}',
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
</script>`;

const handleComponentName = (name) => name.replace(/\-(\d+)/, "$1");

Object.values(feather.icons).forEach((icon) => {
  icon.pascalCasedComponentName = pascalCase(
    `${handleComponentName(icon.name)}-icon`
  );
});

Object.values(feather.icons).forEach((icon) => {
  const component = componentTemplate(icon);
  const filepath = `./src/components/${icon.pascalCasedComponentName}.vue`;

  fs.ensureDir(path.dirname(filepath)).then(() =>
    fs.writeFile(filepath, component, "utf8")
  );
});

const main = Object.values(feather.icons)
  .map(
    (icon) =>
      `export { default as ${icon.pascalCasedComponentName} } from './components/${icon.pascalCasedComponentName}.vue'`
  )
  .join("\n\n");

fs.outputFile("./src/index.js", main, "utf8");
