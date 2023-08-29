import { renderHook as renderHookWithoutWrapper } from '@testing-library/react';

import { render, renderHook, waitFor } from 'test/test-utils';
import { server } from 'test/mocks/server';

import { ConfigContextProvider, useConfig } from 'providers/ConfigProvider';

describe('ConfigProvider', () => {
  beforeAll(() => {
    server.listen();
  });

  afterEach(() => {
    server.resetHandlers();
  });

  afterAll(() => {
    server.close();
  });

  it('should render successfully', async () => {
    const { getByTestId } = render(
      <ConfigContextProvider>
        <div data-testid="provider-config"></div>
      </ConfigContextProvider>,
    );

    await waitFor(() => expect(getByTestId('provider-config')).toBeDefined());

    expect(getByTestId('provider-config')).toBeDefined();
  });
});

describe.skip('ConfigProvider error', () => {
  const originalEnv = process.env;

  beforeAll(() => {
    server.listen();

    process.env = { NODE_ENV: 'test', PUBLIC_URL: 'localhost' };
  });

  afterEach(() => {
    server.resetHandlers();
  });

  afterAll(() => {
    server.close();

    process.env = originalEnv;
  });

  it('should throw configuration validation error', () => {
    function renderContextProvider() {
      render(
        <ConfigContextProvider>
          <div data-testid="provider-config"></div>
        </ConfigContextProvider>,
      );
    }

    expect(renderContextProvider).toThrow(/is a required field/);
  });
});

describe('useConfig', () => {
  beforeAll(() => {
    server.listen();
  });

  afterEach(() => {
    server.resetHandlers();
  });

  afterAll(() => {
    server.close();
  });

  it('should return the context', () => {
    const { result } = renderHook(() => useConfig());

    expect(result.current).toBeDefined();
    expect(result.current.REACT_APP_VERSION_ID).toBeDefined();
  });

  it('should throw error when not within provider', () => {
    function useContextHook() {
      renderHookWithoutWrapper(() => useConfig());
    }

    expect(useContextHook).toThrow(/hook must be used within/);
  });
});
