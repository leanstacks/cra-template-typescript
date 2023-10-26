import {
  render as renderWithoutWrapper,
  renderHook as renderHookWithoutWrapper,
} from '@testing-library/react';

import { renderHook, waitFor } from 'test/test-utils';
import { server } from 'test/mocks/server';

import SettingsContextProvider, { useSettings } from 'providers/SettingsProvider';
import * as UseGetSettings from 'api/useGetSettings';
import { settingsFixture } from '__fixtures__/settings';
import { UseQueryResult } from '@tanstack/react-query';

const useGetSettingsSpy = jest.spyOn(UseGetSettings, 'useGetSettings');

describe('SettingsProvider', () => {
  beforeEach(() => {
    useGetSettingsSpy.mockReturnValue({
      data: settingsFixture,
      isSuccess: true,
    } as unknown as UseQueryResult<UseGetSettings.Settings, Error>);
  });

  it('should render successfully', () => {
    const { getByTestId } = renderWithoutWrapper(
      <SettingsContextProvider>
        <div data-testid="provider-settings"></div>
      </SettingsContextProvider>,
    );

    expect(getByTestId('provider-settings')).toBeDefined();
  });
});

describe('useSettings', () => {
  beforeAll(() => {
    server.listen();
  });

  beforeEach(() => {
    useGetSettingsSpy.mockReturnValue({
      data: settingsFixture,
      isSuccess: true,
    } as unknown as UseQueryResult<UseGetSettings.Settings, Error>);
  });

  afterEach(() => {
    server.resetHandlers();
  });

  afterAll(() => {
    server.close();
  });

  it('should return default value', async () => {
    const { result } = renderHook(() => UseGetSettings.useGetSettings());

    await waitFor(() => expect(result.current.isSuccess).toBe(true));

    expect(result.current.data).toBeDefined();
    expect(result.current.data?.theme).toBe(settingsFixture.theme);
  });

  it('should throw error when not within provider', () => {
    function useContextHook() {
      renderHookWithoutWrapper(() => useSettings());
    }

    expect(useContextHook).toThrow(/hook must be used within/);
  });
});
