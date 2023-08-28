import { RouterProvider } from 'react-router-dom';

import { router } from 'components/routers/Router';

function App() {
  return (
    <div id="app" data-testid="app">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
