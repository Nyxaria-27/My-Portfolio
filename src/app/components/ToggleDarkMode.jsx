'use client';

import { useState, useEffect } from 'react';
import { SunIcon, MoonIcon } from '@heroicons/react/24/solid'; // Import ikon matahari dan bulan

export default function ToggleDarkMode() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [mounted, setMounted] = useState(false);

  // Cek saat komponen di-mount
  useEffect(() => {
    setMounted(true);
  }, []);

  // Ambil status dark mode dari localStorage
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('theme');
      if (savedTheme === 'dark') {
        setIsDarkMode(true);
        document.documentElement.classList.add('dark');
      } else {
        setIsDarkMode(false);
        document.documentElement.classList.remove('dark');
      }
    }
  }, []);

  // Fungsi untuk toggle dark mode
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    if (!isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  // Pastikan tidak ada masalah hydration
  if (!mounted) return null;

  return (
    <button
      onClick={toggleDarkMode}
      className='p-2 rounded-full bg-gray-300 dark:bg-gray-700 text-black dark:text-white transition-colors duration-500 absolute top-4 right-4'
      aria-label='Toggle Dark Mode'>
      {isDarkMode ? (
        <SunIcon className='h-6 w-6 text-yellow-500' /> // Ikon matahari untuk light mode
      ) : (
        <MoonIcon className='h-6 w-6 text-gray-700' /> // Ikon bulan sabit untuk dark mode
      )}
    </button>
  );
}
