import React from 'react';

import CssBaseline from '@material-ui/core/CssBaseline';
import AppLayout from "./app-layout/AppLayout";
import AppRouter from "./app-router/AppRouter";

function App() {
  return (
      <>
        <CssBaseline />

        <AppLayout>
          <AppRouter />
        </AppLayout>
      </>
  );
}

export default App;
