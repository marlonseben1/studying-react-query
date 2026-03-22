import axios from 'axios';
import { apiUrls } from '../../../config';
import type { ApiResponse, PeopleItem } from './people.types';

export const peopleApi = {
  fetchPeople(pageParam?: string): Promise<ApiResponse<PeopleItem>> {
    const url = pageParam || apiUrls.swpeople;
    return axios.get(url).then((res) => res.data);
  },
};
