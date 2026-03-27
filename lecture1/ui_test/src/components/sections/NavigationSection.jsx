import { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import MenuIcon from '@mui/icons-material/Menu';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

const MENU_ITEMS = ['홈', '소개', '서비스', '연락처'];

/**
 * NavigationSection 컴포넌트
 * MUI AppBar + Toolbar 기반 반응형 네비게이션
 *
 * Props: 없음
 */
function NavigationSection() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const handleMenuClick = (menu) => {
    alert(`메뉴 클릭: ${menu}`);
  };

  const handleDrawerToggle = () => {
    setIsDrawerOpen((prev) => !prev);
  };

  const handleDrawerMenuClick = (menu) => {
    setIsDrawerOpen(false);
    alert(`메뉴 클릭: ${menu}`);
  };

  return (
    <Box component='section' sx={{ mb: 8 }}>
      <Typography variant='h5' component='h2' sx={{ mb: 1, fontWeight: 600 }}>
        Navigation
      </Typography>
      <Divider sx={{ mb: 4 }} />

      <AppBar position='static' sx={{ borderRadius: 1 }}>
        <Toolbar>
          <Typography variant='h6' component='div' sx={{ flexGrow: 1, fontWeight: 700 }}>
            MyApp
          </Typography>

          {isMobile ? (
            <IconButton
              color='inherit'
              aria-label='메뉴 열기'
              onClick={handleDrawerToggle}
            >
              <MenuIcon />
            </IconButton>
          ) : (
            <Box sx={{ display: 'flex', gap: 1 }}>
              {MENU_ITEMS.map((menu) => (
                <Button
                  key={menu}
                  color='inherit'
                  onClick={() => handleMenuClick(menu)}
                >
                  {menu}
                </Button>
              ))}
            </Box>
          )}
        </Toolbar>
      </AppBar>

      {/* 모바일 드로어 */}
      <Drawer
        anchor='right'
        open={isDrawerOpen}
        onClose={handleDrawerToggle}
      >
        <Box sx={{ width: 220 }} role='presentation'>
          <Typography variant='subtitle1' sx={{ px: 2, py: 2, fontWeight: 700 }}>
            MyApp
          </Typography>
          <Divider />
          <List>
            {MENU_ITEMS.map((menu) => (
              <ListItem key={menu} disablePadding>
                <ListItemButton onClick={() => handleDrawerMenuClick(menu)}>
                  <ListItemText primary={menu} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </Box>
  );
}

export default NavigationSection;
