export default ({ app }: { app: any }, inject: any) => {
    const setDarkMode = (isDark: any) => {
      if (isDark) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    };
  
    const toggleDarkMode = () => {
      const isDark = document.documentElement.classList.toggle('dark');
      localStorage.setItem('darkMode', isDark ? 'enabled' : 'disabled');
    };
  
    const initializeDarkMode = () => {
      const darkModePreference = localStorage.getItem('darkMode');
      if (darkModePreference === 'enabled') {
        setDarkMode(true);
      } else if (darkModePreference === 'disabled') {
        setDarkMode(false);
      } else {
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        setDarkMode(prefersDark);
      }
    };
  
    initializeDarkMode();
    
    inject('darkMode', { toggle: toggleDarkMode });
  };
  