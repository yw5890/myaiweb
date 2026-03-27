import { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Chip from '@mui/material/Chip';
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import SettingsIcon from '@mui/icons-material/Settings';
import FavoriteIcon from '@mui/icons-material/Favorite';
import NotificationsIcon from '@mui/icons-material/Notifications';
import LogoutIcon from '@mui/icons-material/Logout';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const MENU_ITEMS = [
  { label: '홈', icon: <HomeIcon fontSize='small' />, color: '#AED6F1' },
  { label: '프로필', icon: <PersonIcon fontSize='small' />, color: '#A9DFBF' },
  { label: '즐겨찾기', icon: <FavoriteIcon fontSize='small' />, color: '#F9A8D4' },
  { label: '알림', icon: <NotificationsIcon fontSize='small' />, color: '#FDE68A' },
  { label: '설정', icon: <SettingsIcon fontSize='small' />, color: '#C5B3E6' },
  { label: '로그아웃', icon: <LogoutIcon fontSize='small' />, color: '#FBBF9A', divider: true },
];

/**
 * MenuSection 컴포넌트
 * 버튼 클릭으로 열리는 MUI Menu, 아이콘 포함 MenuItem
 */
function MenuSection() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [selected, setSelected] = useState(null);

  const isOpen = Boolean(anchorEl);

  const handleOpen = (e) => setAnchorEl(e.currentTarget);

  const handleClose = () => setAnchorEl(null);

  const handleSelect = (label) => {
    setSelected(label);
    handleClose();
  };

  return (
    <Box component='section' sx={{ mb: 8 }}>
      <Typography variant='h5' component='h2' sx={{ mb: 1, fontWeight: 600 }}>
        Menu
      </Typography>
      <Divider sx={{ mb: 4 }} />

      <Box sx={{ display: 'flex', alignItems: 'center', gap: 3, flexWrap: 'wrap' }}>
        <Button
          variant='contained'
          endIcon={<KeyboardArrowDownIcon />}
          onClick={handleOpen}
          aria-controls={isOpen ? 'basic-menu' : undefined}
          aria-haspopup='true'
          aria-expanded={isOpen ? 'true' : undefined}
        >
          메뉴 열기
        </Button>

        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <Typography variant='body2' sx={{ color: 'text.secondary' }}>
            선택된 메뉴:
          </Typography>
          <Chip
            label={selected ?? '없음'}
            color={selected ? 'primary' : 'default'}
            size='small'
          />
        </Box>
      </Box>

      <Menu
        id='basic-menu'
        anchorEl={anchorEl}
        open={isOpen}
        onClose={handleClose}
        MenuListProps={{ 'aria-labelledby': 'menu-button' }}
      >
        {MENU_ITEMS.map(({ label, icon, color, divider }) => [
          divider && <Divider key={`divider-${label}`} />,
          <MenuItem
            key={label}
            onClick={() => handleSelect(label)}
            sx={{
              mx: 1,
              my: 0.5,
              borderRadius: 1,
              '&:hover': { bgcolor: color },
              transition: 'background-color 0.2s',
            }}
          >
            <ListItemIcon sx={{ color: 'text.primary' }}>{icon}</ListItemIcon>
            <ListItemText>{label}</ListItemText>
            <Box sx={{ width: 10, height: 10, borderRadius: '50%', bgcolor: color, ml: 1 }} />
          </MenuItem>,
        ])}
      </Menu>
    </Box>
  );
}

export default MenuSection;
