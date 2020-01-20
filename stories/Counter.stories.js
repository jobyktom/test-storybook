import React from 'react';
import { storiesOf } from '@storybook/react';
import Counter from './../src/components/Counter';

storiesOf('Components', module)
    .addParameters({
        info: {
            inline: true,
            header: false
        }
    })
    .add(
        'Counter',
        () =>
            <Counter />
    );

    //testing