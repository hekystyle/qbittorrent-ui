import type { Meta, StoryObj } from '@storybook/react';
import { FormattedBytes } from './FormattedBytes.js';

const meta: Meta<typeof FormattedBytes> = {
  component: FormattedBytes,
  args: {
    value: 56_789_000_000_000_000,
  },
};
export default meta;
type Story = StoryObj<typeof FormattedBytes>;

export const Primary: Story = {
  args: {},
};

export const WithoutValue: Story = {
  args: {
    value: undefined,
  },
};

export const PerSecond: Story = {
  args: {
    per: 's',
  },
};
