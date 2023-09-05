import { useQuery } from '@tanstack/react-query';

import { DEFAULT_SETTINGS, QueryKeys, StorageKeys } from 'utils/constants';

export interface Settings {
  theme?: string;
  updatedAt?: string;
}

export const useGetSettings = () => {
  const getSettings = (): Promise<Settings> => {
    return new Promise((resolve, reject) => {
      try {
        const storedSettings = JSON.parse(localStorage.getItem(StorageKeys.Settings) || '{}');
        const settings = {
          ...DEFAULT_SETTINGS,
          ...storedSettings,
        };
        return resolve(settings);
      } catch (err) {
        return reject(err);
      }
    });
  };

  return useQuery({
    queryKey: [QueryKeys.Settings],
    queryFn: getSettings,
  });
};
