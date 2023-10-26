import React, { PropsWithChildren, useContext, useEffect, useState } from 'react';
import axios, { AxiosError, AxiosInstance, InternalAxiosRequestConfig } from 'axios';

const logRequestInterceptor = async (
  config: InternalAxiosRequestConfig,
): Promise<InternalAxiosRequestConfig> => {
  console.debug(`request:${JSON.stringify(config, null, 2)}`);
  return config;
};

const logErrorInterceptor = async (error: AxiosError) => {
  console.debug(`error:${JSON.stringify(error.response, null, 2)}`);
  return Promise.reject(error);
};

const customAxios = axios.create({
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

const AxiosContext = React.createContext<AxiosInstance>(customAxios);

const AxiosContextProvider = ({ children }: PropsWithChildren) => {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const requestInterceptors = customAxios.interceptors.request.use(async (config) =>
      logRequestInterceptor(config),
    );

    const responseInterceptors = customAxios.interceptors.response.use(
      (response) => response,
      async (error) => logErrorInterceptor(error),
    );

    setIsReady(true);

    return () => {
      customAxios.interceptors.request.eject(requestInterceptors);
      customAxios.interceptors.response.eject(responseInterceptors);
    };
  }, []);

  return (
    <AxiosContext.Provider value={customAxios}>{isReady && <>{children}</>}</AxiosContext.Provider>
  );
};

export default AxiosContextProvider;

export const useAxios = (): AxiosInstance => {
  const context = useContext(AxiosContext);
  if (!context) {
    throw new Error('useAxios hook must be used within an AxiosContextProvider');
  }

  return context;
};
