import InfiniteScroll from 'react-infinite-scroll-component';
import { usePeople } from './usePeople';
import { Box, Stack, Typography } from '@mui/material';
import { PersonCard } from '../../../components/personCard/person';

export const People = () => {
  const { data, error, isError, isLoading, hasNextPage, fetchNextPage } =
    usePeople();

  if (isLoading) return <h3>Loading...</h3>;
  if (isError) return <h3>Error! {error?.toString()}</h3>;

  return (
    <>
      <InfiniteScroll
        dataLength={
          data?.pages.reduce((total, page) => total + page.results.length, 0) ||
          0
        }
        next={fetchNextPage}
        hasMore={!!hasNextPage}
        loader={
          <Typography align="center" sx={{ p: 2 }}>
            Loading...
          </Typography>
        }
        endMessage={
          <Typography align="center" sx={{ p: 2 }}>
            No more characters to show!
          </Typography>
        }
      >
        <Box display="flex" justifyContent="center" sx={{ p: 2 }}>
          <Stack
            spacing={2}
            sx={{
              width: '100%',
              maxWidth: 600,
            }}
          >
            {data?.pages.map((page) =>
              page.results.map((person) => (
                <PersonCard
                  key={person.name}
                  birth_year={person.birth_year}
                  gender={person.gender}
                  name={person.name}
                />
              )),
            )}
          </Stack>
        </Box>
      </InfiniteScroll>
    </>
  );
};
