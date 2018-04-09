// React
import React from 'react';

// Stories
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

// Components
import InputSearch from '../../components/Input/InputSearch';

const decorator = story => (
  <div style={{ width: '500px', margin: '20px' }}>
    { story() }
  </div>
);

const InputSearchStory = storiesOf('Common/Input/Default', module)
  .addDecorator(decorator)
  .add('default', () => (
    <InputSearch onChange={action('change')} placeholder="Buscar no Vinver por..." />
  ));

export { InputSearchStory };
