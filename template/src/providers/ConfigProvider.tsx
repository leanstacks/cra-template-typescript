import React, { PropsWithChildren, useContext, useEffect, useState } from 'react';
import * as Yup from 'yup';
import { ObjectSchema } from 'yup';

export interface Config {
  REACT_APP_VERSION_ID: string;
}

const configSchema: ObjectSchema<Config> = Yup.object({
  REACT_APP_VERSION_ID: Yup.string().default('local'),
});

const ConfigContext = React.createContext<Config | undefined>(undefined);

const ConfigContextProvider = ({ children }: PropsWithChildren) => {
  const [isReady, setIsReady] = useState<boolean>(false);
  const [config, setConfig] = useState<Config>();

  useEffect(() => {
    try {
      const validatedConfig = configSchema.validateSync(process.env, {
        abortEarly: false,
        stripUnknown: true,
      });
      setConfig(validatedConfig);
      setIsReady(true);
    } catch (err) {
      if (err instanceof Error) throw new Error(`Configuration error: ${err.message}`);
      throw err;
    }
  }, []);

  return (
    <ConfigContext.Provider value={config}>{isReady && <>{children}</>}</ConfigContext.Provider>
  );
};

export default ConfigContextProvider;

export const useConfig = (): Config => {
  const context = useContext(ConfigContext);
  if (!context) {
    throw new Error('useConfig hook must be used within a ConfigContextProvider');
  }

  return context;
};
