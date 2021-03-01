import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import {TodayStamp,TodayStampProps} from './TodayStamp';

export default {
  title: 'Example/Stamp/TodayStamp',
  component: TodayStamp,
  argTypes: {
  },
} as Meta;

const Template: Story<TodayStampProps> = (args) => <TodayStamp {...args} />

export const Sample = Template.bind({});
