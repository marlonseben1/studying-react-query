import { useQuery, useQueryClient } from '@tanstack/react-query';
import { useEffect, useState } from 'react';
import { useIsMobile } from '../../hooks/useIsMobile';
import { postsApi } from '../../api/jsonPlaceholderApi/posts';
import { QUERY_KEYS } from '../../api/queryKeys';

export const usePosts = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const queryClient = useQueryClient();
  const isMobile = useIsMobile();

  const handleChange = (e: React.ChangeEvent<unknown>, value: number) => {
    setCurrentPage(value);
  };

  const { data, isLoading, isError, error } = useQuery({
    queryKey: [QUERY_KEYS.posts, currentPage],
    queryFn: () => postsApi.fetchPosts(currentPage),
  });

  useEffect(() => {
    const nextPage = currentPage + 1;
    queryClient.prefetchQuery({
      queryKey: [QUERY_KEYS.posts, nextPage],
      queryFn: () => postsApi.fetchPosts(nextPage),
    });
  }, [currentPage, queryClient]);

  return {
    data,
    error,
    isError,
    isMobile,
    isLoading,
    currentPage,
    handleChange,
  };
};
