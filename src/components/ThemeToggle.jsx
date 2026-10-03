import { useTheme } from './ThemeContext';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  const isDark = theme === 'dark';

  return (
    <button
      onClick={toggleTheme}
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
      title={`Switch to ${isDark ? 'Light' : 'Dark'} Mode`}
      className="theme-toggle relative flex items-center justify-center w-10 h-10 rounded-full border transition-all duration-300 hover:scale-110 active:scale-95"
    >
      {isDark ? (
        // Sun
        <svg
          className="w-4.5 h-4.5"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
        >
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2v2" />
          <path d="M12 20v2" />
          <path d="M4.93 4.93l1.42 1.42" />
          <path d="M17.65 17.65l1.42 1.42" />
          <path d="M2 12h2" />
          <path d="M20 12h2" />
          <path d="M4.93 19.07l1.42-1.42" />
          <path d="M17.65 6.35l1.42-1.42" />
        </svg>
      ) : (
        // Moon
        <svg
          className="w-4.5 h-4.5"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
        >
          <path d="M21 12.79A9 9 0 1 1 11.21 3
            7 7 0 0 0 21 12.79Z"
          />
        </svg>
      )}

      <span className="sr-only">
        Switch to {isDark ? 'light' : 'dark'} mode
      </span>
    </button>
  );
};

export default ThemeToggle;
