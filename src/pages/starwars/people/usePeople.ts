import { useInfiniteQuery } from '@tanstack/react-query';
import { apiUrls } from '../../../config';
import { peopleApi } from '../../../api/starwarsApi/people';
import { QUERY_KEYS } from '../../../api/queryKeys';

export const usePeople = () => {
  const { data, error, isError, isFetching, hasNextPage, fetchNextPage } =
    useInfiniteQuery({
      queryKey: [QUERY_KEYS.swpeople],
      initialPageParam: apiUrls.swpeople,
      queryFn: ({ pageParam }) => peopleApi.fetchPeople(pageParam),
      getNextPageParam: (lastPage) => lastPage.next ?? undefined,
    });

  return {
    data,
    error,
    isError,
    isFetching,
    hasNextPage,
    fetchNextPage,
  };
};
