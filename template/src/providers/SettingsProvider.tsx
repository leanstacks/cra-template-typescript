import React, { PropsWithChildren, useContext, useMemo } from 'react';

import { Settings, useGetSettings } from 'hooks/useGetSettings';

const SettingsContext = React.createContext<Settings | undefined>(undefined);

export function SettingsContextProvider({ children }: PropsWithChildren) {
  const { data: settings, isLoading } = useGetSettings();

  const value = useMemo(() => settings, [settings]);

  return (
    <SettingsContext.Provider value={value}>
      {!isLoading && <>{children}</>}
    </SettingsContext.Provider>
  );
}

export const useSettings = () => {
  const context = useContext(SettingsContext);
  if (!context) {
    throw new Error('useSettings hook must be used within a SettingsContextProvider');
  }

  return context;
};
