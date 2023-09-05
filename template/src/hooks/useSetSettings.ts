import { useMutation, useQueryClient } from '@tanstack/react-query';

import { DEFAULT_SETTINGS, QueryKeys, StorageKeys } from 'utils/constants';
import { Settings } from './useGetSettings';

export const useSetSettings = () => {
  const queryClient = useQueryClient();

  const setSettings = async (settings: Settings): Promise<Settings> => {
    return new Promise((resolve, reject) => {
      try {
        // create or update user settings
        const storedSettings = JSON.parse(localStorage.getItem(StorageKeys.Settings) || '{}');
        const updatedSettings = {
          ...DEFAULT_SETTINGS,
          ...storedSettings,
          ...settings,
          updatedAt: new Date().toISOString(),
        };
        localStorage.setItem(StorageKeys.Settings, JSON.stringify(updatedSettings));

        return resolve(updatedSettings);
      } catch (err) {
        return reject(err);
      }
    });
  };

  return useMutation({
    mutationFn: setSettings,
    onSuccess: (data, variables, context) => {
      queryClient.invalidateQueries([QueryKeys.Settings]);
    },
  });
};
