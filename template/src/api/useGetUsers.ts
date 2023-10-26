import { useQuery } from '@tanstack/react-query';

import { QueryKeys } from 'utils/constants';
import { useAxios } from 'providers/AxiosProvider';

export interface Geolocation {
  lat: string;
  lng: string;
}

export interface Address {
  street: string;
  suite?: string;
  city: string;
  zipcode: string;
  geo: Geolocation;
}

export interface Company {
  name: string;
  catchPhrase: string;
  bs: string;
}

export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
  website: string;
  address: Address;
  company: Company;
}

export const useGetUsers = () => {
  const axios = useAxios();

  const getUsers = async (): Promise<User[]> => {
    const response = await axios.request({
      url: `https://jsonplaceholder.typicode.com/users`,
    });

    return response.data;
  };

  return useQuery({
    queryKey: [QueryKeys.Users],
    queryFn: () => getUsers(),
  });
};
