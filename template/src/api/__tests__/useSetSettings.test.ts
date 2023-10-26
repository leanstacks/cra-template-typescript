import { renderHook, waitFor } from 'test/test-utils';
import { server } from 'test/mocks/server';

import { useSetSettings } from 'api/useSetSettings';
import { Settings } from 'api/useGetSettings';

describe('useSetSettings', () => {
  const originalLocalStorage = global.localStorage;
  const getItemSpy = jest.fn();
  const setItemSpy = jest.fn();

  beforeAll(() => {
    server.listen();

    Object.defineProperty(global, 'localStorage', {
      value: { getItem: getItemSpy, setItem: setItemSpy },
    });
  });

  afterEach(() => {
    server.resetHandlers();

    getItemSpy.mockClear();
    setItemSpy.mockClear();
  });

  afterAll(() => {
    server.close();

    Object.defineProperty(global, 'localStorage', { value: originalLocalStorage });
  });

  it('should update settings', async () => {
    let isSuccess = false;
    const updatedSettings: Settings = { theme: 'dark' };

    const { result } = renderHook(() => useSetSettings());

    await waitFor(() => expect(result.current).not.toBeNull());

    result.current.mutate(updatedSettings, {
      onSuccess: () => {
        isSuccess = true;
      },
    });

    await waitFor(() => expect(result.current.isSuccess).toBe(true));
    expect(setItemSpy).toHaveBeenCalled();
    expect(isSuccess).toBe(true);
  });
});
