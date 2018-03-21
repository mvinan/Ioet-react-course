import React from 'react';

import { storiesOf } from '@storybook/react';

import Card from 'Components/Card/Card';

storiesOf('Card', module)
  .add('Card', () => <Card message={ 'message' }/>)
