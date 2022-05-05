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
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
  >
    ${icon.contents}
  </svg>
</template>

<script>
  import { watch } from '@vue/runtime-core'

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
      const size =
        props.size.slice(-1) === 'x'
          ? props.size.slice(0, props.size.length - 1) + 'em'
          : parseInt(props.size) + 'px'

      const data = {}
      data.width = attrs.width || size
      data.height = attrs.height || size

      watch(
        () => props.size,
        newSize => {
          data.width = newSize
          data.height = newSize
        }
      )
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
