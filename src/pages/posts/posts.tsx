import {
  Card,
  CardContent,
  Container,
  Grid,
  Pagination,
  Typography,
} from '@mui/material';
import { usePosts } from './usePosts';

export const Posts = () => {
  const {
    data,
    error,
    isError,
    isMobile,
    isLoading,
    currentPage,
    handleChange,
  } = usePosts();

  if (isLoading) return <Typography variant="h6">Loading...</Typography>;
  if (isError)
    return (
      <Typography variant="h6">
        Oops, something happened! {error?.toString()}
      </Typography>
    );

  return (
    <>
      <Grid
        container
        m={10}
        gap={6}
        flexWrap="wrap"
        display="flex"
        justifyContent="center"
      >
        {data?.data?.map((post) => (
          <Grid size={{ xs: 12, md: 4 }}>
            <Card
              key={post.id}
              sx={{
                display: 'flex',
                justifyContent: 'start',
                alignItems: 'start',
                width: '100%',
                height: '150px',
                p: 2,
              }}
            >
              <CardContent>
                <Typography variant="button">{post.title}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
      <Container
        sx={{
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <Pagination
          count={20}
          page={currentPage}
          onChange={handleChange}
          siblingCount={isMobile ? 1 : 3}
        />
      </Container>
    </>
  );
};
