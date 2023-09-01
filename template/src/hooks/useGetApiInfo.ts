import { useQuery } from '@tanstack/react-query';

import { QueryKeys } from 'utils/constants';
import { useAxios } from 'providers/AxiosProvider';

export interface ApiInfo {
  description: string;
  release: string;
  version: string;
}

export const useGetApiInfo = () => {
  const axios = useAxios();

  const getApiInfo = async (): Promise<ApiInfo> => {
    const response = await axios.request({
      url: `/api/info`,
    });

    return response.data;
  };

  return useQuery({
    queryKey: [QueryKeys.ApiInfo],
    queryFn: () => getApiInfo(),
  });
};
