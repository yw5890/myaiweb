import { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';

const VARIANTS = ['standard', 'outlined', 'filled'];

/**
 * InputSection 컴포넌트
 * MUI TextField의 variant 3가지와 입력값 실시간 표시
 */
function InputSection() {
  const [values, setValues] = useState({ standard: '', outlined: '', filled: '' });

  const handleChange = (variant) => (e) => {
    setValues((prev) => ({ ...prev, [variant]: e.target.value }));
  };

  return (
    <Box component='section' sx={{ mb: 8 }}>
      <Typography variant='h5' component='h2' sx={{ mb: 1, fontWeight: 600 }}>
        Input
      </Typography>
      <Divider sx={{ mb: 4 }} />

      <Box sx={{ display: 'flex', gap: 4, flexWrap: 'wrap' }}>
        {VARIANTS.map((variant) => (
          <Box key={variant} sx={{ display: 'flex', flexDirection: 'column', gap: 1, minWidth: 220 }}>
            <Typography
              variant='subtitle2'
              sx={{ color: 'text.secondary', textTransform: 'uppercase', letterSpacing: 1 }}
            >
              {variant}
            </Typography>
            <TextField
              variant={variant}
              label={`${variant} label`}
              placeholder={`${variant} 입력...`}
              value={values[variant]}
              onChange={handleChange(variant)}
            />
            <Typography variant='body2' sx={{ color: 'text.secondary', minHeight: 20 }}>
              입력값: {values[variant] || '—'}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
}

export default InputSection;
