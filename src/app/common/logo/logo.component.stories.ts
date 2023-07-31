import {Meta, moduleMetadata, StoryObj} from '@storybook/angular';
import {LogoComponent} from './logo.component';

const meta: Meta<LogoComponent> = {
  title: 'Common / App / Logo',
  component: LogoComponent,
};
export default meta;

type Story = StoryObj<LogoComponent>;

export const Default: Story = {
  args: {}
};
