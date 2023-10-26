import { renderHook, waitFor } from 'test/test-utils';
import { server } from 'test/mocks/server';

import { useGetUsers } from 'api/useGetUsers';

describe('useGetUsers', () => {
  beforeAll(() => {
    server.listen();
  });

  afterEach(() => {
    server.resetHandlers();
  });

  afterAll(() => {
    server.close();
  });

  it('should query users', async () => {
    const { result } = renderHook(() => useGetUsers());

    await waitFor(() => expect(result.current.isSuccess).toBe(true));

    expect(result.current.data).toBeDefined();
    expect(result.current.data?.length).toBe(10);
  });
});
