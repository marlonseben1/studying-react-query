import { Card, styled } from '@mui/material';
import { colorPalette } from '../../styles/colorPalette';

export const PostCard = styled(Card)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'start',
  alignItems: 'start',
  width: '100%',
  height: '150px',
  padding: theme.spacing(2),
  backgroundColor: colorPalette.blue.main,
  cursor: 'pointer',
  transition: 'all 0.3s ease-in-out',

  '&:hover': {
    backgroundColor: colorPalette.blue.dark,
    transform: 'translateY(-5px)',
    boxShadow: theme.shadows[4],
  },
}));
