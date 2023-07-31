import {Meta, StoryFn} from '@storybook/angular';
import {DashboardComponent} from './dashboard.component';

export default {
  title: 'Pages / Dashboard',
  component: DashboardComponent,
  tags: ['page']
} as Meta;

const Template: StoryFn<DashboardComponent> = (args: DashboardComponent) => ({
  props: {},
});

export const Default = Template.bind({});
Default.args = {};
