import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';

/** Theme */
import { themeConfig } from 'localUtils/theme';

const renderWithTheme = (children: any) => render(
    <ThemeProvider theme={themeConfig}>
        {children}
    </ThemeProvider>
);

export default renderWithTheme;
