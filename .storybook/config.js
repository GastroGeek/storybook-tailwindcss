import Vue from 'vue'
import { configure } from '@storybook/vue';

import { loadComponents } from '@utils/loadComponents'

loadComponents()

require('../src/assets/css/main.scss')

function loadStories() {
  const req = require.context('../src/components', true, /\.stories\.js$/);
  console.log(req.keys())
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);