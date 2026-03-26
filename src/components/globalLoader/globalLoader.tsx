import { LinearProgress } from '@mui/material';
import { useIsFetching } from '@tanstack/react-query';

const GlobalLoader = () => {
  const isFetching = useIsFetching();

  return (
    isFetching && (
      <LinearProgress
        sx={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 2000 }}
      />
    )
  );
};

export default GlobalLoader;
