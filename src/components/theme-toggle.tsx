'use client';

import { useTheme } from 'next-themes';

import { ButtonProps } from '@/components/button';
import { Icons } from '@/components/icons';
import { cn } from '@/lib/utils';

export const ThemeToggle = ({ className }: ButtonProps) => {
  const { theme, setTheme } = useTheme();

  const handleClick = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <button
      className={cn(
        'border-input hover:bg-muted/80 focus-visible:ring-ring inline-flex size-11 cursor-pointer items-center justify-center rounded-full border bg-transparent transition-colors focus-visible:outline-none focus-visible:ring-2',
        className
      )}
      aria-label="theme toggle"
      onClick={handleClick}
      type="button"
    >
      <span className="pointer-events-none flex items-center justify-center">
        <Icons.sun className="size-5 dark:hidden" />
        <Icons.moon className="hidden size-5 dark:block" />
      </span>
    </button>
  );
};
