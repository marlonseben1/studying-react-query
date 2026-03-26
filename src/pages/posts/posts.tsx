import {
  CardContent,
  Container,
  Grid,
  Pagination,
  Typography,
} from '@mui/material';
import { usePosts } from './usePosts';
import { colorPalette } from '../../styles/colorPalette';
import { PostCard } from '../../components/postCard/postCard';

export const Posts = () => {
  const { data, error, isError, isMobile, currentPage, handleChange } =
    usePosts();

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
          mb: '2rem',
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
        spacing={4}
        flexWrap="wrap"
        display="flex"
        justifyContent="center"
      >
        {data?.data?.map((post) => (
          <Grid size={{ xs: 10, md: 4, lg: 3 }} key={post.id}>
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
