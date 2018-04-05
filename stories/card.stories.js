import React from 'react';

import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

import Card from 'Components/Card/Card';

const lorem = 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda autem temporibus laborum deleniti beatae obcaecati, enim accusamus porro itaque? Hic accusamus molestiae optio distinctio explicabo. Officia ipsa libero qui dolore?';
const data = [
  {name: 'Lola', age: '28'},
]

storiesOf('Card', module)
  .add('Card', withInfo(
  )(() => {
    return (
      <React.Fragment>
        <Card
          title='Hola Mundo!'
          content={ lorem }
          data={data}
        />

        <Card
          title='Hola Mundo!'
          content={ lorem }
          data={data}
          red
        />
      </React.Fragment>
    );
  }))
