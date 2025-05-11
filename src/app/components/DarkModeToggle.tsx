'use client';
import { useEffect, useState } from 'react';
import { Sun, Moon } from 'lucide-react';

export default function DarkModeToggle() {
  const [mode, setMode] = useState<'light' | 'dark'>('dark');

  useEffect(() => {
    const stored = localStorage.getItem('theme');
    if (stored) setMode(stored as 'light' | 'dark');
    else {
        document.documentElement.classList.add('dark'); // Apply dark mode before user interacts
        localStorage.setItem('theme', 'dark');
      }
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', mode === 'dark');
  
    localStorage.setItem('theme', mode);
  }, [mode]);

  return (
    <button onClick={() => setMode(mode === 'light' ? 'dark' : 'light')} >
      {mode === 'light' ? <Sun /> : <Moon />}
    </button>
  );
}
