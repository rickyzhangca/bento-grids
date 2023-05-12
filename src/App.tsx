import { BaseStyles, ThemeProvider, theme, themeGet } from '@primer/react';
import deepmerge from 'deepmerge';
import { Toaster } from 'react-hot-toast';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import styled from 'styled-components';
import { Header } from './components/Header/Header';
import { fromTheme } from './theme/fromTheme';

const withNavigation = (Component: any) => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        width: '100vw',
        maxWidth: '100%',
        height: '100vh',
        maxHeight: '100%',
      }}
    >
      <Header />
      {Component}
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: '*',
    element: withNavigation(<>hello world</>),
  },
]);

const ExtendedBaseStyles = styled(BaseStyles)`
  font-family: 'Inter', ${themeGet(fromTheme.fonts.normal)};
  div {
    transition: 0.1s ${themeGet(fromTheme.animation.easeOutCubic)};
  }
`;

function App() {
  const bentoGridsTheme = deepmerge(theme, {});

  return (
    <ThemeProvider theme={bentoGridsTheme}>
      <ExtendedBaseStyles>
        <RouterProvider router={router} />
        <Toaster />
      </ExtendedBaseStyles>
    </ThemeProvider>
  );
}

export default App;
