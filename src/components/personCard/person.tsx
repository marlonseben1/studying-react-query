import { Card, CardContent, Typography } from '@mui/material';
import { colorPalette } from '../../styles/colorPalette';
import { capitalizeString } from '../../utils/capitalizeString/capitalizeString';

interface PersonCardProps {
  name: string;
  gender: string;
  birth_year: string;
}

export const PersonCard = (props: PersonCardProps) => {
  const { name, gender, birth_year } = props;

  return (
    <Card
      key={name}
      variant="outlined"
      sx={{
        borderColor: colorPalette.neutral[0],
        boxShadow: 'none',
      }}
    >
      <CardContent>
        <Typography
          variant="h5"
          sx={{ color: colorPalette.neutral[900], fontWeight: 600 }}
        >
          {name}
        </Typography>
        <Typography sx={{ color: 'text.secondary' }}>
          {gender !== 'n/a' ? capitalizeString(gender) : 'Unknown'} —{' '}
          {birth_year}
        </Typography>
      </CardContent>
    </Card>
  );
};
