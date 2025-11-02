import { useState, useEffect, useRef } from 'react';

type ThemeName = 'blue' | 'emerald' | 'violet';

interface ThemeConfig {
  primary: string;
  gradient: string;
  light: string;
  text: string;
  border: string;
  hover: string;
}

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeStat, setActiveStat] = useState(0);
  const [currentTheme, setCurrentTheme] = useState<ThemeName>('blue');
  const sectionRef = useRef(null);
const themes: Record<ThemeName, ThemeConfig> = {
  blue: {
    primary: 'bg-blue-600',
    gradient: 'from-blue-500 to-indigo-600',
    light: 'bg-blue-100',
    text: 'text-blue-600',
    border: 'border-blue-600',
    hover: 'hover:bg-blue-600',
  },
  emerald: {
    primary: 'bg-emerald-600',
    gradient: 'from-emerald-500 to-teal-600',
    light: 'bg-emerald-100',
    text: 'text-emerald-600',
    border: 'border-emerald-600',
    hover: 'hover:bg-emerald-600',
  },
  violet: {
    primary: 'bg-violet-600',
    gradient: 'from-violet-500 to-purple-600',
    light: 'bg-violet-100',
    text: 'text-violet-600',
    border: 'border-violet-600',
    hover: 'hover:bg-violet-600',
  },
};

  const currentThemeConfig = themes[currentTheme];

  const stats = [
    { number: '30%', label: 'Performance Improvement', icon: '⚡', description: 'Optimized system response times' },
    { number: '15K+', label: 'Daily API Requests', icon: '🚀', description: 'Handled high traffic loads' },
    { number: '40%', label: 'Deployment Time Reduced', icon: '🎯', description: 'CI/CD pipeline optimization' },
    { number: '1M+', label: 'Records Processed', icon: '💾', description: 'Large dataset handling' }
  ];

  const technologies = [
    { name: 'Java & Spring Boot', category: 'Backend', icon: '☕' },
    { name: 'Microservices', category: 'Architecture', icon: '🔗' },
    { name: 'Angular', category: 'Frontend', icon: '🅰️' },
    { name: 'Docker & Kubernetes', category: 'DevOps', icon: '🐳' },
    { name: 'AWS Cloud', category: 'Infrastructure', icon: '☁️' },
    { name: 'PostgreSQL', category: 'Database', icon: '🐘' }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  // Auto rotate stats
  useEffect(() => {
    if (isVisible) {
      const interval = setInterval(() => {
        setActiveStat((prev) => (prev + 1) % stats.length);
      }, 2000);
      return () => clearInterval(interval);
    }
  }, [isVisible, stats.length]);

  // Theme rotation for demonstration
  useEffect(() => {
    const themeInterval = setInterval(() => {
      setCurrentTheme(prev => 
        prev === 'blue' ? 'emerald' : 
        prev === 'emerald' ? 'violet' : 'blue'
      );
    }, 5000);
    return () => clearInterval(themeInterval);
  }, []);

  return (
    <section 
      id="about" 
      ref={sectionRef}
      className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 transition-colors duration-500"
    >
      <div className="container mx-auto px-6">

        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className={`inline-flex items-center gap-3 ${currentThemeConfig.light} dark:bg-gray-800 ${currentThemeConfig.text} dark:text-gray-300 px-4 py-2 rounded-full text-sm font-medium mb-4`}>
            <span className="text-lg">👨‍💻</span>
            Professional Overview
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            About <span className={currentThemeConfig.text}>Me</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Passionate Full Stack Developer crafting scalable solutions and optimizing performance
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            
            {/* Left Content - Main Description */}
            <div className={`space-y-6 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}>
              <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-500 border border-gray-100 dark:border-gray-700">
                <div className="flex items-start gap-4 mb-6">
                  <div className={`w-12 h-12 ${currentThemeConfig.primary} rounded-2xl flex items-center justify-center text-white text-xl`}>
                    💼
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                      Professional Journey
                    </h3>
                    <div className={`w-16 h-1 ${currentThemeConfig.primary} rounded-full`}></div>
                  </div>
                </div>

                <div className="space-y-4 text-gray-700 dark:text-gray-300 leading-relaxed">
                  <p className="text-lg">
                    Full Stack Developer with <span className="font-semibold text-gray-900 dark:text-white">1+ years</span> of experience specializing in 
                    <span className={`font-semibold ${currentThemeConfig.text}`}> Java</span>, 
                    <span className={`font-semibold ${currentThemeConfig.text}`}> Spring Boot</span>, 
                    <span className={`font-semibold ${currentThemeConfig.text}`}> Microservices</span>, and 
                    <span className={`font-semibold ${currentThemeConfig.text}`}> Angular</span>.
                  </p>
                  
                  <p className="text-lg">
                    I have a proven track record of building <span className="font-semibold text-gray-900 dark:text-white">REST APIs</span> that handle 
                    <span className={`font-semibold ${currentThemeConfig.text}`}> 15,000+ daily requests</span> and improving system response times by 
                    <span className={`font-semibold ${currentThemeConfig.text}`}> 30%</span>.
                  </p>

                  <p className="text-lg">
                    Passionate about creating <span className="font-semibold text-gray-900 dark:text-white">scalable solutions</span>, optimizing performance, 
                    and implementing secure authentication systems. My expertise includes 
                    <span className="font-semibold text-gray-900 dark:text-white"> CI/CD pipelines</span>, 
                    <span className="font-semibold text-gray-900 dark:text-white"> Docker</span>, 
                    <span className="font-semibold text-gray-900 dark:text-white"> Kubernetes</span>, and 
                    <span className="font-semibold text-gray-900 dark:text-white"> cloud deployment on AWS</span>.
                  </p>
                </div>
              </div>

              {/* Technologies Grid */}
              <div className="bg-white dark:bg-gray-800 rounded-3xl p-6 shadow-2xl border border-gray-100 dark:border-gray-700">
                <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-6 text-center">
                  Core Technologies
                </h4>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {technologies.map((tech, index) => (
                    <div
                      key={index}
                      className={`group p-4 bg-gray-50 dark:bg-gray-700 rounded-2xl text-center transition-all duration-300 transform hover:scale-105 hover:shadow-lg ${
                        isVisible ? 'opacity-100' : 'opacity-0'
                      }`}
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <div className="text-2xl mb-2 group-hover:scale-110 transition-transform duration-300">
                        {tech.icon}
                      </div>
                      <div className="text-sm font-medium text-gray-700 dark:text-gray-300">
                        {tech.name}
                      </div>
                      <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                        {tech.category}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Content - Stats & Visualizations */}
            <div className={`space-y-8 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}>
              {/* Animated Stats Grid */}
              <div className="grid grid-cols-2 gap-6">
                {stats.map((stat, index) => (
                  <div
                    key={index}
                    onClick={() => setActiveStat(index)}
                    className={`bg-white dark:bg-gray-800 rounded-2xl p-6 cursor-pointer transition-all duration-500 transform hover:scale-105 border-2 ${
                      activeStat === index
                        ? `${currentThemeConfig.border} shadow-2xl scale-105`
                        : 'border-gray-100 dark:border-gray-700 shadow-lg hover:shadow-xl'
                    }`}
                  >
                    <div className="text-center">
                      <div className={`text-3xl mb-3 transition-all duration-300 ${
                        activeStat === index ? 'scale-110' : ''
                      }`}>
                        {stat.icon}
                      </div>
                      <div className={`text-3xl font-bold mb-2 ${
                        activeStat === index ? currentThemeConfig.text : 'text-gray-900 dark:text-white'
                      }`}>
                        {stat.number}
                      </div>
                      <div className="font-semibold text-gray-700 dark:text-gray-300 mb-2">
                        {stat.label}
                      </div>
                      <div className="text-sm text-gray-500 dark:text-gray-400">
                        {stat.description}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Active Stat Visualization */}
              <div className={`bg-gradient-to-br ${currentThemeConfig.gradient} rounded-3xl p-8 text-white relative overflow-hidden`}>
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="text-4xl">
                      {stats[activeStat].icon}
                    </div>
                    <div>
                      <h4 className="text-2xl font-bold">
                        {stats[activeStat].label}
                      </h4>
                      <p className="text-blue-200">
                        {stats[activeStat].description}
                      </p>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex justify-between text-sm">
                      <span>Progress</span>
                      <span className="font-bold">{stats[activeStat].number}</span>
                    </div>
                    <div className="w-full bg-white/30 rounded-full h-3">
                      <div
                        className={`h-full rounded-full bg-white transition-all duration-1000 ease-out`}
                        style={{
                          width: isVisible ? 
                            (activeStat === 0 ? '30%' : 
                             activeStat === 1 ? '85%' : 
                             activeStat === 2 ? '40%' : '75%') : '0%'
                        }}
                      ></div>
                    </div>
                  </div>
                </div>

                {/* Floating Elements */}
                <div className="absolute -top-4 -right-4 w-20 h-20 bg-white/20 rounded-full animate-float"></div>
                <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-white/20 rounded-full animate-float animation-delay-2000"></div>
              </div>

              {/* Experience Timeline */}
              <div className="bg-white dark:bg-gray-800 rounded-3xl p-6 shadow-2xl border border-gray-100 dark:border-gray-700">
                <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
                  <span className={currentThemeConfig.text}>📈</span>
                  Career Highlights
                </h4>
                <div className="space-y-4">
                  {[
                    { year: '2024', achievement: 'Joined Radixile as Full Stack Developer', icon: '🚀' },
                    { year: '2024', achievement: 'Intellect Design Arena Internship', icon: '💼' },
                    { year: '2023', achievement: 'Spring Boot Microservices Certification', icon: '🎓' },
                    { year: '2021', achievement: 'NIMCET AIR 309', icon: '🏆' }
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-4 p-3 bg-gray-50 dark:bg-gray-700 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors duration-300 group"
                    >
                      <div className={`w-10 h-10 ${currentThemeConfig.primary} rounded-full flex items-center justify-center text-white text-sm font-bold`}>
                        {item.year}
                      </div>
                      <div className="flex-1">
                        <div className="font-medium text-gray-700 dark:text-gray-300 group-hover:translate-x-1 transition-transform duration-300">
                          {item.achievement}
                        </div>
                      </div>
                      <div className="text-xl">
                        {item.icon}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className={`mt-16 text-center transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <div className="bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-700 rounded-3xl p-8 border border-gray-200 dark:border-gray-600">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Ready to Build Something Amazing?
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
                Let's collaborate to create scalable, high-performance applications that drive business success.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="#contact"
                  className={`px-8 py-3 ${currentThemeConfig.primary} hover:shadow-2xl text-white rounded-xl transition-all duration-300 transform hover:scale-105 font-semibold flex items-center justify-center gap-2`}
                >
                  <span>Get In Touch</span>
                  <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
                </a>
                <a
                  href="#projects"
                  className="px-8 py-3 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-xl hover:shadow-xl transition-all duration-300 transform hover:scale-105 font-semibold flex items-center justify-center gap-2"
                >
                  <span>View Projects</span>
                  <span>🚀</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;