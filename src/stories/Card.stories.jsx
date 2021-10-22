import React from 'react';

import ProductCard from '../core/compositions/productCard';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Element/ProductCard',
  component: ProductCard,
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <ProductCard {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  title: 'asdasdasdasd',
  description: 'asdas djiasbd iashbdkh basdkbaskd baskdh',
};
