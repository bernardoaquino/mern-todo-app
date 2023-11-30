/* eslint-disable react/prop-types */
import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { ThemeProvider } from "styled-components";
import 'react-toastify/dist/ReactToastify.css';

/** Theme */
import { themeConfig } from 'localUtils/theme'

/** Style */
import GlobalStyle from 'localUtils/getGlobalStyle'
import { AuthProvider } from 'providers/Auth';

/** Routes */
import { browserRouterRoutes } from '~/routes/routes'

const router = createBrowserRouter(browserRouterRoutes)

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={themeConfig}>
        <ToastContainer />
        <GlobalStyle />
        <AuthProvider>
          <RouterProvider router={router} />
        </AuthProvider>
      </ThemeProvider>
    </div>
  );
}

export default App;
