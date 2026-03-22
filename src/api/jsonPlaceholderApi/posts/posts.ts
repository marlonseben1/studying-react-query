import axios from 'axios';
import type { ApiResponse, PostItem } from './posts.types';
import { apiUrls } from '../../../config';

export const postsApi = {
  fetchPosts(pageNum: number): Promise<ApiResponse<PostItem[]>> {
    return axios.get(`${apiUrls.posts}?_limit=6&_page=${pageNum}`);
  },
};
