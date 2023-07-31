import {setCompodocJson} from "@storybook/addon-docs/angular";
import type {Preview} from "@storybook/angular";
import docJson from "../documentation.json";
import {viewports} from './viewports';

setCompodocJson(docJson);

const preview: Preview = {
  parameters: {
    actions: {argTypesRegex: "^on[A-Z].*"},
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    viewport: {
      viewports,
    },
  },
};

export default preview;
