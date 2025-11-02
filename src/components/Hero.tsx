import  { useState, useEffect } from 'react';
type ThemeName = 'blue' | 'emerald' | 'violet';

interface ThemeConfig {
  primary: string;
  light: string;
  text: string;
  border: string;
  gradient: string;
  darkGradient: string;
  blob1: string;
  blob2: string;
  darkBlob1: string;
  darkBlob2: string;
}
interface FloatingElementProps {
  children: React.ReactNode;
  delay?: number;
}

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [currentTheme, setCurrentTheme] = useState<ThemeName>('blue');
  
  const roles = ['Full Stack Developer', 'Java Specialist', 'Spring Boot Expert', 'Angular Developer'];
  const typingSpeed = 100;
  const deletingSpeed = 50;
  const pauseTime = 2000;


const themes: Record<ThemeName, ThemeConfig> = {
    blue: {
      primary: 'bg-blue-600',
      light: 'bg-blue-100',
      text: 'text-blue-600',
      border: 'border-blue-600',
      gradient: 'from-blue-50 to-indigo-100',
      darkGradient: 'from-gray-900 to-gray-800',
      blob1: 'bg-blue-200',
      blob2: 'bg-indigo-200',
      darkBlob1: 'bg-blue-900/30',
      darkBlob2: 'bg-indigo-900/30'
    },
    emerald: {
      primary: 'bg-emerald-600',
      light: 'bg-emerald-100',
      text: 'text-emerald-600',
      border: 'border-emerald-600',
      gradient: 'from-emerald-50 to-teal-100',
      darkGradient: 'from-gray-900 to-gray-800',
      blob1: 'bg-emerald-200',
      blob2: 'bg-teal-200',
      darkBlob1: 'bg-emerald-900/30',
      darkBlob2: 'bg-teal-900/30'
    },
    violet: {
      primary: 'bg-violet-600',
      light: 'bg-violet-100',
      text: 'text-violet-600',
      border: 'border-violet-600',
      gradient: 'from-violet-50 to-purple-100',
      darkGradient: 'from-gray-900 to-gray-800',
      blob1: 'bg-violet-200',
      blob2: 'bg-purple-200',
      darkBlob1: 'bg-violet-900/30',
      darkBlob2: 'bg-purple-900/30'
    }
  };

  const currentThemeConfig = themes[currentTheme];

  // Typing animation effect
  useEffect(() => {
    const handleTyping = () => {
      const currentRole = roles[loopNum % roles.length];
      
      if (isDeleting) {
        setDisplayText(currentRole.substring(0, currentIndex - 1));
        setCurrentIndex(currentIndex - 1);
      } else {
        setDisplayText(currentRole.substring(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
      }

      if (!isDeleting && currentIndex === currentRole.length) {
        setTimeout(() => setIsDeleting(true), pauseTime);
      } else if (isDeleting && currentIndex === 0) {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleTyping, isDeleting ? deletingSpeed : typingSpeed);
    return () => clearTimeout(timer);
  }, [currentIndex, isDeleting, loopNum, roles]);

  // Auto theme rotation
  useEffect(() => {
    const themeInterval = setInterval(() => {
      setCurrentTheme(prev => 
        prev === 'blue' ? 'emerald' : 
        prev === 'emerald' ? 'violet' : 'blue'
      );
    }, 5000);
    return () => clearInterval(themeInterval);
  }, []);

  // Floating animation for elements
  const FloatingElement: React.FC<FloatingElementProps> = ({ children, delay = 0 }) => (
    <div 
      className="animate-float"
      style={{ animationDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );

  // Stats data
  const stats = [
    { number: '1+', label: 'Years Experience', icon: '⏱️' },
    { number: '15K+', label: 'Daily Requests', icon: '🚀' },
    { number: '30%', label: 'Performance Gain', icon: '⚡' },
    { number: '40%', label: 'Faster Deployment', icon: '🎯' }
  ];

  const socialLinks = [
    { href: "mailto:ravikumar013013@gmail.com", icon: "✉️", label: "Email" },
    { href: "tel:7254002412", icon: "📞", label: "7254002412" },
    { href: "https://github.com/rawi3940", icon: "💼", label: "GitHub" },
    { href: "https://linkedin.com/in/ravi-kumar-b2217a229", icon: "🔗", label: "LinkedIn" }
  ];

  return (
    <section id="home" className={`pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-to-br ${currentThemeConfig.gradient} dark:${currentThemeConfig.darkGradient} min-h-screen flex items-center transition-all duration-1000`}>
      <div className="container mx-auto px-6">


        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Content */}
            <div className="text-center lg:text-left">
              {/* Animated Welcome Text */}
              <FloatingElement delay={200}>
                <div className={`inline-flex items-center gap-2 ${currentThemeConfig.light} dark:${currentThemeConfig.darkBlob1} ${currentThemeConfig.text} dark:${currentThemeConfig.text.replace('text-', 'text-').replace('600', '400')} px-4 py-2 rounded-full text-sm font-medium mb-6`}>
                  <span className={`w-2 h-2 ${currentThemeConfig.primary} dark:${currentThemeConfig.primary.replace('bg-', 'bg-').replace('600', '400')} rounded-full animate-pulse`}></span>
                  Welcome to my portfolio
                </div>
              </FloatingElement>

              {/* Main Heading with Animation */}
              <FloatingElement delay={400}>
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-4 leading-tight">
                  Ravi <span className={currentThemeConfig.text}>Kumar</span>
                </h1>
              </FloatingElement>

              {/* Typing Animation */}
              <FloatingElement delay={600}>
                <div className="text-xl md:text-2xl lg:text-3xl text-gray-600 dark:text-gray-300 mb-6 h-12 flex items-center justify-center lg:justify-start">
                  <span className={`${currentThemeConfig.text} font-semibold`}>
                    {displayText}
                  </span>
                  <span className={`ml-1 w-0.5 h-8 ${currentThemeConfig.primary} dark:${currentThemeConfig.primary.replace('bg-', 'bg-').replace('600', '400')} animate-pulse`}></span>
                </div>
              </FloatingElement>

              {/* Description */}
              <FloatingElement delay={800}>
                <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 max-w-2xl leading-relaxed">
                  Building scalable web applications with <span className={`${currentThemeConfig.text} font-semibold`}>Java</span>, 
                  <span className={`${currentThemeConfig.text} font-semibold`}> Spring Boot</span>, 
                  <span className={`${currentThemeConfig.text} font-semibold`}> Microservices</span>, and 
                  <span className={`${currentThemeConfig.text} font-semibold`}> Angular</span>. 
                  Passionate about creating efficient solutions and optimizing system performance by 30%.
                </p>
              </FloatingElement>

              {/* CTA Buttons */}
              <FloatingElement delay={1000}>
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center mb-8">
                  <a
                    href="#contact"
                    className={`px-8 py-4 ${currentThemeConfig.primary} hover:shadow-2xl text-white rounded-xl transition-all duration-300 transform hover:scale-105 font-medium flex items-center gap-2 group`}
                  >
                    <span>Get In Touch</span>
                    <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
                  </a>
                  <a
                    href="/RaviKumar_CV.pdf"
                    download
                    className={`px-8 py-4 border-2 ${currentThemeConfig.border} ${currentThemeConfig.text} rounded-xl hover:${currentThemeConfig.primary} hover:text-white transition-all duration-300 transform hover:scale-105 font-medium flex items-center gap-2 group`}
                  >
                    <span>Download CV</span>
                    <span className="group-hover:translate-y-0.5 transition-transform duration-300">📥</span>
                  </a>
                </div>
              </FloatingElement>

              {/* Stats Grid */}
              <FloatingElement delay={1200}>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-md mx-auto lg:mx-0">
                  {stats.map((stat, index) => (
                    <div 
                      key={index}
                      className="text-center p-4 bg-white/50 dark:bg-gray-800/50 rounded-xl backdrop-blur-sm border border-white/20 dark:border-gray-700/20 hover:shadow-lg transition-all duration-300 hover:scale-105 group"
                    >
                      <div className="text-2xl mb-2 group-hover:scale-110 transition-transform duration-300">
                        {stat.icon}
                      </div>
                      <div className={`text-2xl font-bold ${currentThemeConfig.text} dark:${currentThemeConfig.text.replace('text-', 'text-').replace('600', '400')}`}>{stat.number}</div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </FloatingElement>
            </div>

            {/* Right Content - Animated Illustration/Image */}
            <div className="relative">
              {/* Main Avatar/Illustration */}
              <FloatingElement delay={400}>
                <div className="relative mx-auto lg:mx-0 max-w-md">
                  {/* Background Blobs */}
                  <div className={`absolute -top-8 -left-8 w-72 h-72 ${currentThemeConfig.blob1} dark:${currentThemeConfig.darkBlob1} rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl opacity-70 animate-pulse`}></div>
                  <div className={`absolute -bottom-8 -right-8 w-72 h-72 ${currentThemeConfig.blob2} dark:${currentThemeConfig.darkBlob2} rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl opacity-70 animate-pulse animation-delay-2000`}></div>
                  
                  {/* Code Illustration */}
                  <div className="relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg rounded-2xl p-8 shadow-2xl border border-white/20 dark:border-gray-700/20 transform rotate-3 hover:rotate-0 transition-transform duration-500">
                    <div className="space-y-4">
                      {/* Code Header */}
                      <div className="flex gap-2">
                        <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                        <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                        <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                      </div>
                      
                      {/* Code Content */}
                      <div className="font-mono text-sm text-gray-700 dark:text-gray-300 space-y-2">
                        <div className="flex gap-4">
                          <span className={currentThemeConfig.text}>const</span>
                          <span className="text-green-600 dark:text-green-400">developer</span>
                          <span>=</span>
                          <span>{`{`}</span>
                        </div>
                        <div className="ml-4">
                          <span className="text-purple-600 dark:text-purple-400">name:</span>
                          <span className="text-yellow-600 dark:text-yellow-400">"Ravi Kumar"</span>,
                        </div>
                        <div className="ml-4">
                          <span className="text-purple-600 dark:text-purple-400">role:</span>
                          <span className="text-yellow-600 dark:text-yellow-400">"Full Stack Developer"</span>,
                        </div>
                        <div className="ml-4">
                          <span className="text-purple-600 dark:text-purple-400">skills:</span>
                          <span className="text-yellow-600 dark:text-yellow-400">["Java", "Spring Boot", "Angular"]</span>
                        </div>
                        <div>{`}`}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </FloatingElement>

              {/* Social Links */}
              <FloatingElement delay={800}>
                <div className="flex justify-center lg:justify-start space-x-6 mt-8">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      className="group p-3 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-110 border border-white/20 dark:border-gray-700/20"
                      aria-label={social.label}
                    >
                      <span className={`text-xl group-hover:${currentThemeConfig.text} transition-colors duration-300`}>
                        {social.icon}
                      </span>
                    </a>
                  ))}
                </div>
              </FloatingElement>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden lg:block">
            <div className="animate-bounce flex flex-col items-center text-gray-500 dark:text-gray-400">
              <span className="text-sm mb-2">Scroll Down</span>
              <div className="w-6 h-10 border-2 border-gray-400 dark:border-gray-600 rounded-full flex justify-center">
                <div className="w-1 h-3 bg-gray-400 dark:bg-gray-600 rounded-full mt-2 animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;