import { Settings } from 'api/useGetSettings';

export enum QueryKeys {
  Settings = 'Settings',
  Users = 'Users',
}

export enum StorageKeys {
  Settings = 'leanstacks.appName.settings',
}

export const DEFAULT_SETTINGS: Settings = {
  theme: 'dark',
};
