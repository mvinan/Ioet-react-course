import React from 'react';

import { storiesOf } from '@storybook/react';

import Card from 'Components/Card/Card';

const lorem = 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda autem temporibus laborum deleniti beatae obcaecati, enim accusamus porro itaque? Hic accusamus molestiae optio distinctio explicabo. Officia ipsa libero qui dolore?';

storiesOf('Card', module)
  .add('Card', () => {
    return (
      <Card
        title='Hola Mundo!'
        image='http://via.placeholder.com/350x150'
        content={ lorem }
      />
    );
  })
