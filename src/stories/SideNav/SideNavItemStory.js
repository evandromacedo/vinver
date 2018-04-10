// React
import React from 'react';

// Stories
import { storiesOf } from '@storybook/react';

// Components
import SideNavItem from '../../components/SideNavItem/SideNavItem';

const decorator = story => (
  <div style={{ width: '300px', margin: '20px' }}>
    { story() }
  </div>
);


const SideNavItemStory = storiesOf('SideNavItem', module)
  .addDecorator(decorator)
  .add('default', () => (
    <SideNavItem title="Home" icon="💩" info="12" active />
  ));

export { SideNavItemStory };
