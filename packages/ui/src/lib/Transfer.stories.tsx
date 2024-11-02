import type { Meta, StoryObj } from '@storybook/react';
import { Transfer } from './Transfer';

const meta: Meta<typeof Transfer> = {
  component: Transfer,
};
export default meta;
type Story = StoryObj<typeof Transfer>;

export const Primary: Story = {
  args: {
    values: {
      download: {
        speed: {
          average: 1000,
          current: 1000,
        },
        limit: 1000,
      },
      downloaded: {
        session: 1000,
        total: 1000,
      },
      shareRatio: 0.59,
      timeActive: {
        total: 3 * 60 * 60 * 1000, // 3 hours
        seeded: 2 * 60 * 60 * 1000, // 2 hours
      }
    }
  },
};

export const Empty: Story = {
  args: {
    values: undefined,
  }
}
