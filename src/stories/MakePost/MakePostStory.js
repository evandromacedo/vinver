// React
import React from 'react';

// Stories
import { storiesOf } from '@storybook/react';

// Components
import MakePost from '../../components/MakePost/MakePost';

const decorator = story => (
  <div style={{ width: '500px', margin: '20px' }}>
    { story() }
  </div>
);

const MakePostStory = storiesOf('MakePost', module)
  .addDecorator(decorator)
  .add('default', () => (
    <MakePost />
  ));

export { MakePostStory };
