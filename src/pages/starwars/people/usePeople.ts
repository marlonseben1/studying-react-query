import { useInfiniteQuery } from '@tanstack/react-query';
import { apiUrls } from '../../../config';
import { peopleApi } from '../../../api/starwarsApi/people';

export const usePeople = () => {
  const {
    data,
    error,
    isError,
    isLoading,
    isFetching,
    hasNextPage,
    fetchNextPage,
  } = useInfiniteQuery({
    queryKey: ['sw-people'],
    initialPageParam: apiUrls.swpeople,
    queryFn: ({ pageParam }) => peopleApi.fetchPeople(pageParam),
    getNextPageParam: (lastPage) => lastPage.next ?? undefined,
  });

  return {
    data,
    error,
    isError,
    isLoading,
    isFetching,
    hasNextPage,
    fetchNextPage,
  };
};
