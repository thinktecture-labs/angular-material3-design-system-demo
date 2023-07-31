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
    backgrounds: {
      default: 'surface',
      values: [
        {
          name: 'surface',
          value: 'var(--md-sys-color-surface)',
        },
        {
          name: 'surface variant',
          value: 'var(--md-sys-color-surface-variant)',
        },
        {
          name: 'surface container',
          value: 'var(--md-sys-color-surface-container)',
        },
        {
          name: 'surface container high',
          value: 'var(--md-sys-color-surface-container-high)',
        },
        {
          name: 'surface container highest',
          value: 'var(--md-sys-color-surface-container-highest)',
        },
        {
          name: 'surface container low',
          value: 'var(--md-sys-color-surface-container-low)',
        },
        {
          name: 'surface container lowest',
          value: 'var(--md-sys-color-surface-container-lowest)',
        }
      ],
    },
    viewport: {
      viewports,
    },
  },
};

export default preview;

/*


  --md-sys-color-surface-container-highest: var(--md-ref-neutral-neutral90);
  --md-sys-color-surface-container-high: var(--md-ref-neutral-neutral92);
  --md-sys-color-surface-container: var(--md-ref-neutral-neutral94);
  --md-sys-color-surface-container-low: var(--md-ref-neutral-neutral96);
  --md-sys-color-surface-container-lowest: var(--md-ref-neutral-neutral100);
 */
