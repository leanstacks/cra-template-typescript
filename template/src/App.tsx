import { RouterProvider } from 'react-router-dom';

import { router } from 'components/routers/Router';
import { ConfigContextProvider } from 'providers/ConfigProvider';

function App() {
  return (
    <div id="app" data-testid="app">
      <ConfigContextProvider>
        <RouterProvider router={router} />
      </ConfigContextProvider>
    </div>
  );
}

export default App;
