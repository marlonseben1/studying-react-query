import { Typography, Stack, Container, Paper, Divider } from '@mui/material';

export const Home = () => {
  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Stack spacing={4}>
        <header>
          <Typography
            variant="h3"
            component="h1"
            gutterBottom
            fontWeight="bold"
          >
            Welcome!
          </Typography>
          <Typography variant="h5">
            This is a study project for React Query.
          </Typography>
          <Typography variant="subtitle1">
            The project uses React Query, React Router and MUI.
          </Typography>
        </header>

        <Divider />

        <Stack spacing={3}>
          <Paper variant="outlined" sx={{ p: 3, borderRadius: 2 }}>
            <Typography variant="h6" gutterBottom>
              Star Wars Section
            </Typography>
            <Typography variant="body1">
              Uses the <strong>SWAPI</strong> (Star Wars API) to fetch data for
              the Infinite Scroll component.
            </Typography>
          </Paper>

          <Paper variant="outlined" sx={{ p: 3, borderRadius: 2 }}>
            <Typography variant="h6" gutterBottom>
              JSON Placeholder Section
            </Typography>
            <Typography variant="body1">
              Makes use of the <strong>JSON Placeholder API</strong> for the
              Pagination component.
            </Typography>
          </Paper>
        </Stack>
      </Stack>
    </Container>
  );
};
