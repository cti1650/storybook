import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import {A4,A4Props} from './A4';

export default {
  title: 'Example/Print/A4',
  component: A4,
  argTypes: {
  },
} as Meta;

const Template: Story<A4Props> = (args) => <A4 {...args} />

export const Sample = Template.bind({});
