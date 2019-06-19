import Vue from 'vue';
import { storiesOf } from '@storybook/vue';

storiesOf('SomeButton', module)
  .add('with text', () => '<SomeButton>with text</SomeButton>')
  .add('using apply (scoped)', () => `<SomeOtherButton>using apply (in scoped style block)</SomeOtherButton>`)
  .add('using apply (global)', () => `<YetAnotherButton>using apply (in global style)</YetAnotherButton>`)
  .add('using snazzy custom color class', () => `<SnazzyButton>using snazzy custom color</SnazzyButton>`)