import React, { PropsWithChildren, useContext, useMemo } from 'react';

import { Settings, useGetSettings } from 'api/useGetSettings';

const SettingsContext = React.createContext<Settings | undefined>(undefined);

const SettingsContextProvider = ({ children }: PropsWithChildren) => {
  const { data: settings, isLoading } = useGetSettings();

  const value = useMemo(() => settings, [settings]);

  return (
    <SettingsContext.Provider value={value}>
      {!isLoading && <>{children}</>}
    </SettingsContext.Provider>
  );
};

export default SettingsContextProvider;

export const useSettings = (): Settings => {
  const context = useContext(SettingsContext);
  if (!context) {
    throw new Error('useSettings hook must be used within a SettingsContextProvider');
  }

  return context;
};
