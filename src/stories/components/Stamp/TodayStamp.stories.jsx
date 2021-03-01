import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1

import TodayStamp from './TodayStamp';

export default {
  title: 'Example/Stamp/TodayStamp',
  component: TodayStamp,
};

const Template = (args) => <TodayStamp {...args} />;

export const Sample = Template.bind({});
Sample.args = {...args};
