import { useState } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { NTheme } from '@/components/NTheme';
import { THEMES } from '@/components/Types';
import Wrapper from '@/website/helpers/Wrapper';
import { useLocalStorage } from '@/components/NLocalStorage';
import Home from '@/website/home/Home';
import Installation from './website/installation/Installation';
import Accordion from './website/components/Accordion';

const App = () => {
  const [theme] = useLocalStorage('THEME', THEMES.LIGHT);

  return (
    <NTheme theme={theme}>
      <BrowserRouter>
        <Wrapper>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/installation" element={<Installation />} />
            <Route path="/contributions" element={<Home />} />
            <Route path="/components">
              <Route index element={<Accordion />} />
              <Route path="accordion" element={<Accordion />} />
            </Route>
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </Wrapper>
      </BrowserRouter>
    </NTheme>
  );
};

export default App;
