import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import ButtonSection from './components/sections/ButtonSection';
import InputSection from './components/sections/InputSection';
import NavigationSection from './components/sections/NavigationSection';
import CheckboxSection from './components/sections/CheckboxSection';
import MenuSection from './components/sections/MenuSection';

/**
 * App 컴포넌트
 * 16개 UI 섹션을 순차적으로 추가하는 메인 레이아웃
 */
function App() {
  return (
    <Box sx={{
      width: '100%',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      py: { xs: 4, md: 8 },
      bgcolor: 'background.default',
    }}>
      <Container maxWidth='lg'>
        <Typography
          variant='h3'
          component='h1'
          sx={{
            textAlign: 'center',
            mb: { xs: 4, md: 8 },
            fontSize: { xs: '1.8rem', md: '2.5rem' },
            fontWeight: 600,
            color: 'text.primary',
          }}
        >
          MUI UI Components
        </Typography>

        {/* 섹션 추가 영역 - 아래에 순차적으로 섹션 컴포넌트를 추가하세요 */}
        <ButtonSection />
        <InputSection />
        <NavigationSection />
        <CheckboxSection />
        <MenuSection />

      </Container>
    </Box>
  );
}

export default App;
