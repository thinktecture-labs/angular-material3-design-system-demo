import {Meta, StoryObj} from '@storybook/angular';
import {ActiveProjectCardComponent} from './active-project-card.component';

const meta: Meta<ActiveProjectCardComponent> = {
  title: 'Common / Cards / Active Project',
  component: ActiveProjectCardComponent,
  argTypes: {
    progress: {
      control: {type: 'range', min: 0, max: 100, step: 3}
    }
  }
};
export default meta;

type Story = StoryObj<ActiveProjectCardComponent>;

export const Default: Story = {
  args: {
    item: {id: '1', title: 'Active Card', preview: ''},
    progress: 42,
  }
};
