import {Meta, StoryFn} from '@storybook/angular';
import {PreviewCardComponent} from './preview-card.component';

export default {
  title: 'Common / Cards / Preview',
  component: PreviewCardComponent,
} as Meta;

const Template: StoryFn<PreviewCardComponent> = (args: PreviewCardComponent) => ({
  props: {...args},
});

export const Default = Template.bind({});
Default.args = {
  item: {id: '1', title: 'Title 1', preview: 'assets/images/project-1.png'},
};
