import { useState } from 'react';
import Box from '@mui/material/Box';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Chip from '@mui/material/Chip';

const ITEMS = ['React', 'TypeScript', 'MUI', 'Vite', 'Node.js'];

/**
 * CheckboxSection 컴포넌트
 * 전체 선택/해제 포함, 다중 선택 체크박스 목록
 */
function CheckboxSection() {
  const [checked, setChecked] = useState([]);

  const isAllChecked = checked.length === ITEMS.length;
  const isIndeterminate = checked.length > 0 && checked.length < ITEMS.length;

  const handleAllChange = () => {
    setChecked(isAllChecked ? [] : [...ITEMS]);
  };

  const handleItemChange = (item) => {
    setChecked((prev) =>
      prev.includes(item) ? prev.filter((v) => v !== item) : [...prev, item]
    );
  };

  return (
    <Box component='section' sx={{ mb: 8 }}>
      <Typography variant='h5' component='h2' sx={{ mb: 1, fontWeight: 600 }}>
        Checkbox
      </Typography>
      <Divider sx={{ mb: 4 }} />

      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
        {/* 전체 선택 */}
        <FormControlLabel
          label={
            <Typography variant='subtitle2' sx={{ fontWeight: 700 }}>
              전체 선택
            </Typography>
          }
          control={
            <Checkbox
              checked={isAllChecked}
              indeterminate={isIndeterminate}
              onChange={handleAllChange}
            />
          }
        />

        <Divider sx={{ my: 1 }} />

        {/* 개별 항목 */}
        {ITEMS.map((item) => (
          <FormControlLabel
            key={item}
            label={item}
            control={
              <Checkbox
                checked={checked.includes(item)}
                onChange={() => handleItemChange(item)}
              />
            }
            sx={{ ml: 2 }}
          />
        ))}

        {/* 선택 개수 표시 */}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mt: 2 }}>
          <Typography variant='body2' sx={{ color: 'text.secondary' }}>
            선택된 항목:
          </Typography>
          <Chip
            label={`${checked.length} / ${ITEMS.length}`}
            color={checked.length > 0 ? 'primary' : 'default'}
            size='small'
          />
          {checked.length > 0 && (
            <Typography variant='body2' sx={{ color: 'text.secondary' }}>
              ({checked.join(', ')})
            </Typography>
          )}
        </Box>
      </Box>
    </Box>
  );
}

export default CheckboxSection;
