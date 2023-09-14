import { useState } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { NTheme } from '@/components/NTheme';
import { THEMES } from '@/components/Types';
import Wrapper from '@/website/helpers/Wrapper';
import { useLocalStorage } from '@/components/NLocalStorage';
import Home from '@/website/home/Home';

const App = () => {
  const [theme] = useLocalStorage('THEME', THEMES.LIGHT);

  return (
    <NTheme theme={theme}>
      <BrowserRouter>
        <Wrapper>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/installation" element={<Home />} />
            <Route path="/contributions" element={<Home />} />
            <Route path="/components">
              <Route index element={<Home />} />
            </Route>
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </Wrapper>
      </BrowserRouter>
    </NTheme>
  );
};

export default App;
