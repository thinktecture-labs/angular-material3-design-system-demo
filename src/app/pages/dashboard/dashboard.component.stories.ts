import {Meta, Story} from '@storybook/angular';
import {DashboardComponent} from './dashboard.component';

export default {
  title: 'Pages / Dashboard',
  component: DashboardComponent,
} as Meta;

const Template: Story<DashboardComponent> = (args: DashboardComponent) => ({
  props: {},
});

export const Default = Template.bind({});
Default.args = {};
