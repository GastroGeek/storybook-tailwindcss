import Vue from 'vue'
import { configure } from '@storybook/vue';

import { loadComponents } from '@utils/loadComponents'

require('@/assets/css/main.scss')

loadComponents()

function loadStories() {
  const req = require.context('../src/components', true, /\.stories\.js$/);
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);