import {
  CardContent,
  Container,
  Grid,
  Pagination,
  Typography,
} from '@mui/material';
import { usePosts } from './usePosts';
import { PostCard } from '../../components/postCard';
import { colorPalette } from '../../styles/colorPalette';

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
      <Container
        sx={{
          display: 'flex',
          justifyContent: 'center',
          mt: '3rem',
        }}
      >
        <Pagination
          count={17}
          page={currentPage}
          onChange={handleChange}
          siblingCount={isMobile ? 1 : 3}
          color="primary"
        />
      </Container>

      <Grid
        container
        gap={6}
        flexWrap="wrap"
        display="flex"
        justifyContent="center"
        sx={{ margin: '2rem 10rem 10rem 10rem' }}
      >
        {data?.data?.map((post) => (
          <Grid size={{ xs: 12, md: 4 }} key={post.id}>
            <PostCard>
              <CardContent>
                <Typography variant="button" color={colorPalette.neutral[0]}>
                  {post.title}
                </Typography>
              </CardContent>
            </PostCard>
          </Grid>
        ))}
      </Grid>
    </>
  );
};
