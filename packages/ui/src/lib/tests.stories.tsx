import type { Meta, StoryFn } from '@storybook/react';
import { FormattedMessage } from 'react-intl';
import { Fragment } from 'react';

const meta: Meta<typeof Fragment> = {
  component: Fragment,
};
export default meta;

export const FormattedMessageTest: StoryFn = () => (
  <FormattedMessage id="tests.name" />
);
