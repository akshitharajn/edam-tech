import { Moon, Sun } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useThemeContext } from '@/components/ThemeProvider';

interface ThemeToggleProps {
  className?: string;
  variant?: 'default' | 'ghost' | 'outline';
  size?: 'default' | 'sm' | 'lg' | 'icon';
}

/**
 * Theme toggle button component that switches between light and dark mode
 * Displays a sun icon for light mode and moon icon for dark mode
 */
export const ThemeToggle = ({ 
  className = '', 
  variant = 'ghost', 
  size = 'icon' 
}: ThemeToggleProps) => {
  const { theme, toggleTheme } = useThemeContext();

  return (
    <Button
      variant={variant}
      size={size}
      onClick={toggleTheme}
      className={`rounded-full transition-all duration-300 hover:bg-primary/10 ${className}`}
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
      title={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
    >
      {theme === 'light' ? (
        <Moon className="h-5 w-5 text-foreground transition-all duration-300" />
      ) : (
        <Sun className="h-5 w-5 text-foreground transition-all duration-300" />
      )}
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
};

export default ThemeToggle;
