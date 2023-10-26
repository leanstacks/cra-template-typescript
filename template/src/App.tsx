import { RouterProvider } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import ConfigContextProvider from 'providers/ConfigProvider';
import SettingsContextProvider from 'providers/SettingsProvider';
import AxiosContextProvider from 'providers/AxiosProvider';
import { router } from 'components/Router/Router';
import Theme from 'components/Theme/Theme';

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
          <SettingsContextProvider>
            <Theme>
              <AxiosContextProvider>
                <RouterProvider router={router} />
              </AxiosContextProvider>
              <ReactQueryDevtools initialIsOpen={false} />
            </Theme>
          </SettingsContextProvider>
        </QueryClientProvider>
      </ConfigContextProvider>
    </div>
  );
}

export default App;
