import { RouterProvider } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import { router } from 'components/routers/Router';
import { ConfigContextProvider } from 'providers/ConfigProvider';
import { AxiosContextProvider } from 'providers/AxiosProvider';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5, // 5 minutes
    },
  },
});

function App() {
  return (
    <div id="app" data-testid="app">
      <ConfigContextProvider>
        <QueryClientProvider client={queryClient}>
          <AxiosContextProvider>
            <RouterProvider router={router} />
          </AxiosContextProvider>
          <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
        </QueryClientProvider>
      </ConfigContextProvider>
    </div>
  );
}

export default App;
