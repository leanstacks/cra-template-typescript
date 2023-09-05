import { Settings } from "hooks/useGetSettings";

export enum QueryKeys {
  ApiInfo = 'ApiInfo',
  Settings = 'Settings'
}

export enum StorageKeys  {
  Settings = 'leanstacks.appName.settings'
}

export const DEFAULT_SETTINGS: Settings = {
  theme: 'dark',
};
