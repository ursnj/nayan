import React, { useEffect, useState } from 'react';
import { AlignJustify, Github, MoonStar, Package, Sun } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { useLocalStorage } from '@/components/NLocalStorage';
import { THEMES } from '@/components/Types';
import { NButton } from '@/components/NButton';
import { NSheet } from '@/components/NSheet';

const HeaderMenu = () => {
  const [theme, setTheme] = useLocalStorage('THEME', THEMES.LIGHT);

  const toggleTheme = () => {
    setTheme(theme === THEMES.DARK ? THEMES.LIGHT : THEMES.DARK);
  };

  return (
    <div className="w-full flex flex-col md:flex-row justify-between items-center">
      <ul className="w-full md:w-auto flex flex-col md:flex-row items-center">
        <li className="w-full md:w-auto">
          <Link className="text-base font-medium text-text px-4 py-3 block md:inline" to="/">
            Home
          </Link>
        </li>
        <li className="w-full md:w-auto">
          <Link className="text-base font-medium text-text px-4 py-3 block md:inline" to="/installation">
            Installation
          </Link>
        </li>
        <li className="w-full md:w-auto">
          <Link className="text-base font-medium text-text px-4 py-3 block md:inline" to="/components">
            Components
          </Link>
        </li>
        <li className="w-full md:w-auto">
          <Link className="text-base font-medium text-text px-4 py-3 block md:inline" to="/contributions">
            Contributions
          </Link>
        </li>
      </ul>
      <div className="w-full md:w-auto form-inline md:text-center md:justify-center items-center mt-3 md:mt-0">
        <Link to="https://www.npmjs.com/package/nayan" target="_blank" className="mr-5 ml-3 md:ml-0">
          <Package className="w-6 h-6 text-text inline" />
        </Link>
        <Link to="https://www.github.com/ursnj/nayan" target="_blank" className="mr-5">
          <Github className="w-6 h-6 text-text inline" />
        </Link>
        <span tabIndex={0} className="text cursor-pointer" onClick={toggleTheme} title="Theme Switch">
          {theme !== THEMES.DARK && <MoonStar className="w-6 h-6 text-text inline" />}
          {theme === THEMES.DARK && <Sun className="w-6 h-6 text-text inline" />}
        </span>
      </div>
    </div>
  );
};

const Header = () => {
  const [menu, setMenu] = useState(false);

  return (
    <header className="bg-card fixed top-0 left-0 right-0 z-10">
      <div className="container mx-auto">
        <NSheet isOpen={menu} title="Nayan UI" onCloseSheet={() => setMenu(false)}>
          <HeaderMenu />
        </NSheet>
        <nav className="flex flex-row py-2.5 justify-between items-center">
          <Link to="/">
            <img src="/nayan.png" className="d-inline-block align-top main-logo mr-6" alt="Surgy Logo" loading="lazy" width={50} height={50} />
          </Link>
          <div className="block md:hidden p-2" onClick={() => setMenu(true)}>
            <AlignJustify className="w-6 h-6 text-text" />
          </div>
          <div className="w-full hidden md:block">
            <HeaderMenu />
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
