import Vue from 'vue'
import { camelCase, upperFirst } from 'lodash'

const loadComponents = () => {
  // automatically register all components globally
  const componentContext = require.context(
    '../../src/components',
    true,
    /[`a-zA-Z]\w+\.(vue)$/
  )

  componentContext.keys().forEach(fileName => {
    const componentConfig = componentContext(fileName)

    const componentName = upperFirst(
      camelCase(
        fileName
          .split('/')
          .pop()
          .replace(/\.\w+$/, '')
      )
    )
    console.log('Registering: ', componentName)
    Vue.component(componentName, componentConfig.default || componentConfig)
  })
}

export { loadComponents }