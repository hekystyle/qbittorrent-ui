import React from 'react';
import { Preview } from '@storybook/react';
import { IntlProvider } from 'react-intl';

const preview: Preview = {
  decorators: [
    (Story) => (
      <IntlProvider locale="en" messages={{}}>
        <Story />
      </IntlProvider>
    ),
  ],
};

export default preview;
