import { renderHook, waitFor } from 'test/test-utils';
import { server } from 'test/mocks/server';

import { useGetSettings } from 'hooks/useGetSettings';
import { settingsFixture } from '__fixtures__/settings';

describe('useGetSettings', () => {
  const originalLocalStorage = global.localStorage;
  const getItemSpy = jest.fn();

  beforeAll(() => {
    server.listen();

    Object.defineProperty(global, 'localStorage', { value: { getItem: getItemSpy } });
  });

  beforeEach(() => {
    getItemSpy.mockReturnValue(JSON.stringify(settingsFixture));
  });

  afterEach(() => {
    server.resetHandlers();
  });

  afterAll(() => {
    server.close();

    Object.defineProperty(global, 'localStorage', { value: originalLocalStorage });
  });

  it('should query settings', async () => {
    const { result } = renderHook(() => useGetSettings());

    await waitFor(() => expect(result.current.isSuccess).toBe(true));

    expect(result.current.data).toBeDefined();
    expect(result.current.data?.theme).toBeDefined();
  });
});
