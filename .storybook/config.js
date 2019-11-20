import { configure, addParameters } from '@storybook/angular';
import { themes } from '@storybook/theming';

addParameters({
    options: {
        theme: themes.dark,
    },
});
configure(require.context('../src', true, /\.stories\.[tj]s$/), module);
