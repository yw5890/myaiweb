import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';

const VARIANTS = ['contained', 'outlined', 'text'];
const COLORS = ['primary', 'secondary', 'error'];

/**
 * ButtonSection 컴포넌트
 * MUI Button의 variant, color 조합을 격자 형태로 표시
 */
function ButtonSection() {
  const handleClick = (variant, color) => {
    alert(`variant: ${variant} / color: ${color}`);
  };

  return (
    <Box component='section' sx={{ mb: 8 }}>
      <Typography variant='h5' component='h2' sx={{ mb: 1, fontWeight: 600 }}>
        Button
      </Typography>
      <Divider sx={{ mb: 4 }} />

      {VARIANTS.map((variant) => (
        <Box key={variant} sx={{ mb: 4 }}>
          <Typography
            variant='subtitle2'
            sx={{ mb: 2, color: 'text.secondary', textTransform: 'uppercase', letterSpacing: 1 }}
          >
            {variant}
          </Typography>
          <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
            {COLORS.map((color) => (
              <Button
                key={color}
                variant={variant}
                color={color}
                onClick={() => handleClick(variant, color)}
              >
                {color}
              </Button>
            ))}
          </Box>
        </Box>
      ))}
    </Box>
  );
}

export default ButtonSection;
