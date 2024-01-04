import { ReactNode } from 'react';
import { render } from '@testing-library/react';
import { I18nextProvider } from 'react-i18next';
import { MemoryRouter } from 'react-router-dom';
import { ReducersMapObject } from '@reduxjs/toolkit';
import i18nForTests from '@/shared/config/i18n/i18nForTests';
import { StateSchema, StoreProvider } from '@/app/providers/StoreProvider';
import { Theme } from '@/shared/consts/theme';
// eslint-disable-next-line nazar-plugin/layer-imports
import { ThemeProvider } from '@/app/providers/ThemeProvider';
// eslint-disable-next-line nazar-plugin/layer-imports
import '@/app/styles/index.scss';

export interface ComponentRenderOptions {
    route?: string;
    initialState?: DeepPartial<StateSchema>;
    theme?: Theme;
    asyncReducers?: DeepPartial<ReducersMapObject<StateSchema>>
}

interface TestProviderProps {
    children: ReactNode;
    options?: ComponentRenderOptions
}

export function TestProvider(props: TestProviderProps) {
    const { children, options = {} } = props;
    const {
        route = '/',
        initialState,
        asyncReducers,
        theme = Theme.LIGHT,
    } = options;

    return (
        <StoreProvider asyncReducers={asyncReducers} initialState={initialState as StateSchema}>
            <MemoryRouter initialEntries={[route]}>
                <I18nextProvider i18n={i18nForTests}>
                    <ThemeProvider initialTheme={theme}>
                        <div className={`app ${theme}`}>
                            {children}
                        </div>
                    </ThemeProvider>
                </I18nextProvider>
            </MemoryRouter>
        </StoreProvider>
    );
}

export function ComponentRender(component: ReactNode, options: ComponentRenderOptions = {}) {
    return render(<TestProvider options={options}>{component}</TestProvider>);
}
