import  { useState, useEffect } from 'react';
type ThemeName = 'blue' | 'emerald' | 'violet';

interface ThemeConfig {
  primary: string;
  text: string;
  border: string;
  progress: string;
}

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [scrolled, setScrolled] = useState(false);
 const [currentTheme] = useState<ThemeName>('blue');
  const [showThemePicker, setShowThemePicker] = useState(false);

const themes: Record<ThemeName, ThemeConfig> = {
    blue: {
      primary: 'bg-blue-600',
      text: 'text-blue-600',
      border: 'border-blue-600',
      progress: 'bg-blue-600'
    },
    emerald: {
      primary: 'bg-emerald-600',
      text: 'text-emerald-600',
      border: 'border-emerald-600',
      progress: 'bg-emerald-600'
    },
    violet: {
      primary: 'bg-violet-600',
      text: 'text-violet-600',
      border: 'border-violet-600',
      progress: 'bg-violet-600'
    }
  };

  const currentThemeConfig = themes[currentTheme];

  const navItems = [
    { name: 'Home', href: '#home'  },
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects'},
    { name: 'Skills', href: '#skills' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' }
  ];

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle dark mode
  useEffect(() => {
    if (darkMode) {
      setDarkMode(true)
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
      setDarkMode(false)
    }
  }, [darkMode]);

  // Close mobile menu when clicking on a link
  const handleNavClick = () => {
    setIsMenuOpen(false);
  };

  // Smooth scroll function
  const smoothScroll = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  // Close theme picker when clicking outside
useEffect(() => {
  const handleClickOutside = (event: MouseEvent) => {
    if (showThemePicker && !(event.target as HTMLElement).closest('.theme-picker')) {
      setShowThemePicker(false);
    }
  };
  document.addEventListener('mousedown', handleClickOutside);
  return () => document.removeEventListener('mousedown', handleClickOutside);
}, [showThemePicker]);

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-500 ${
      scrolled 
        ? 'bg-white/95 dark:bg-gray-900/95 backdrop-blur-lg shadow-lg py-2' 
        : 'bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm shadow-sm py-4'
    }`}>
      <nav className="container mx-auto px-6">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <a 
            href="home"
            onClick={(e) => {
              e.preventDefault();
              smoothScroll('home');
            }}
            className={`text-2xl font-bold ${currentThemeConfig.text} dark:${currentThemeConfig.text.replace('text-', 'text-').replace('600', '400')} hover:scale-105 transition-transform duration-300`}
          >
            Ravi Kumar
          </a>

          {/* Desktop Menu & Controls */}
          <div className="flex items-center space-x-4">
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-6">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    smoothScroll(item.href);
                  }}
                  className={`text-gray-700 dark:text-gray-300 hover:${currentThemeConfig.text} dark:hover:${currentThemeConfig.text.replace('text-', 'text-').replace('600', '400')} font-medium transition-all duration-300 relative group flex items-center gap-2`}
                >
                 
                  {item.name}
                  <span className={`absolute -bottom-1 left-0 w-0 h-0.5 ${currentThemeConfig.primary} transition-all duration-300 group-hover:w-full`}></span>
                </a>
              ))}
            </div>





            {/* Mobile Menu Button with Animation */}
            <button
              className="md:hidden relative w-8 h-8 flex flex-col items-center justify-center"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              <div className={`w-6 h-0.5 bg-gray-700 dark:bg-gray-300 transition-all duration-300 ${
                isMenuOpen ? 'rotate-45 translate-y-1.5' : ''
              }`}></div>
              <div className={`w-6 h-0.5 bg-gray-700 dark:bg-gray-300 transition-all duration-300 my-1.5 ${
                isMenuOpen ? 'opacity-0' : 'opacity-100'
              }`}></div>
              <div className={`w-6 h-0.5 bg-gray-700 dark:bg-gray-300 transition-all duration-300 ${
                isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''
              }`}></div>
            </button>
          </div>
        </div>

        {/* Mobile Menu with Animation */}
        <div className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${
          isMenuOpen ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'
        }`}>
          <div className="py-4 border-t border-gray-200 dark:border-gray-700">
            <div className="grid grid-cols-2 gap-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    smoothScroll(item.href);
                    handleNavClick();
                  }}
                  className={`p-3 rounded-xl bg-gray-50 dark:bg-gray-800 hover:${currentThemeConfig.primary} hover:text-white dark:hover:text-white transition-all duration-300 text-center group`}
                >
                  
                  <div className="text-sm font-medium text-gray-700 dark:text-gray-300 group-hover:text-white">
                    {item.name}
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gray-200 dark:bg-gray-700">
        <div 
          className={`h-full ${currentThemeConfig.progress} transition-all duration-300`}
          style={{
            width: `${Math.min((window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100, 100)}%`
          }}
        ></div>
      </div>
    </header>
  );
};

export default Header;