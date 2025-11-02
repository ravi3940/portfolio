import  { useState, useEffect, useRef } from 'react';


type ThemeName = 'blue' | 'emerald' | 'violet';

// Define the structure for each theme
interface ThemeConfig {
  primary: string;
  light: string;
  text: string;
  border: string;
  gradient: string;
  darkGradient: string;
}

const Education = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentTheme, setCurrentTheme] = useState<ThemeName>('blue');
  const sectionRef = useRef(null);

const themes: Record<ThemeName, ThemeConfig> = {
    blue: {
      primary: 'bg-blue-600',
      light: 'bg-blue-100',
      text: 'text-blue-600',
      border: 'border-blue-600',
      gradient: 'from-blue-50 to-indigo-50',
      darkGradient: 'from-blue-900/30 to-indigo-900/30'
    },
    emerald: {
      primary: 'bg-emerald-600',
      light: 'bg-emerald-100',
      text: 'text-emerald-600',
      border: 'border-emerald-600',
      gradient: 'from-emerald-50 to-teal-50',
      darkGradient: 'from-emerald-900/30 to-teal-900/30'
    },
    violet: {
      primary: 'bg-violet-600',
      light: 'bg-violet-100',
      text: 'text-violet-600',
      border: 'border-violet-600',
      gradient: 'from-violet-50 to-purple-50',
      darkGradient: 'from-violet-900/30 to-purple-900/30'
    }
  };

  const currentThemeConfig = themes[currentTheme];

  const education = [
    {
      degree: "Master of Computer Applications (MCA)",
      institution: "National Institute of Technology, Warangal",
      period: "2021–2024",
      icon: "🎓",
      description: "Specialized in advanced computer applications, software engineering, and system design at one of India's premier technical institutions.",
      highlights: ["Advanced Algorithms", "Software Engineering", "Database Systems", "Web Technologies"]
    },
    {
      degree: "Bachelor of Computer Applications (BCA)",
      institution: "Gaya College, Gaya",
      period: "2016–2019",
      icon: "📚",
      description: "Foundation in computer science fundamentals, programming languages, and software development principles.",
      highlights: ["Programming Fundamentals", "Data Structures", "Web Development", "Database Management"]
    }
  ];

  const achievements = [
    {
      title: "Java Spring Boot Microservices",
      issuer: "Udemy",
      year: "2023",
      icon: "☕",
      badge: "Professional",
      description: "Comprehensive certification in building microservices architecture using Spring Boot and cloud-native technologies."
    },
    {
      title: "All India Rank 309",
      issuer: "NIMCET MCA National-Level Entrance Exam",
      year: "2021",
      icon: "🏆",
      badge: "Elite",
      description: "Secured top rank among 2 lakh+ aspirants in the national-level entrance examination for MCA programs."
    }
  ];

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
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

  return (
    <section 
      id="education" 
      ref={sectionRef}
      className="py-20 bg-white dark:bg-gray-900 transition-colors duration-500"
    >
      <div className="container mx-auto px-6">


        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className={`inline-flex items-center gap-3 ${currentThemeConfig.light} dark:${currentThemeConfig.light.replace('bg-', 'bg-').replace('100', '900/30')} ${currentThemeConfig.text} dark:${currentThemeConfig.text.replace('text-', 'text-').replace('600', '400')} px-4 py-2 rounded-full text-sm font-medium mb-4`}>
            <span className="text-lg">📖</span>
            Academic Journey
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Education & <span className={currentThemeConfig.text}>Achievements</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            My academic background and professional certifications that shaped my technical expertise
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Education Timeline */}
          <div className="mb-20">
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center flex items-center justify-center gap-3">
              <span className={currentThemeConfig.text}>🎓</span>
              Education Timeline
            </h3>
            
            <div className="relative">
              {/* Timeline Line */}
              <div className={`absolute left-1/2 transform -translate-x-1/2 w-1 h-full ${currentThemeConfig.light.replace('bg-', 'bg-').replace('100', '200')} dark:${currentThemeConfig.light.replace('bg-', 'bg-').replace('100', '800/50')} rounded-full hidden lg:block`}></div>
              
              <div className="space-y-12 lg:space-y-0">
                {education.map((edu, index) => (
                  <div
                    key={index}
                    className={`flex flex-col lg:flex-row items-center gap-8 ${
                      index % 2 === 0 ? 'lg:flex-row-reverse' : ''
                    } transition-all duration-700 ${
                      isVisible ? 'opacity-100 translate-x-0' : index % 2 === 0 ? 'opacity-0 translate-x-20' : 'opacity-0 -translate-x-20'
                    }`}
                    style={{ transitionDelay: `${index * 200}ms` }}
                  >
                    {/* Timeline Dot */}
                    <div className="relative z-10 flex-shrink-0">
                      <div className={`w-6 h-6 ${currentThemeConfig.primary} dark:${currentThemeConfig.primary.replace('bg-', 'bg-').replace('600', '400')} rounded-full border-4 border-white dark:border-gray-900 shadow-lg`}></div>
                    </div>

                    {/* Content Card */}
                    <div className={`flex-1 ${
                      index % 2 === 0 ? 'lg:text-right' : 'lg:text-left'
                    }`}>
                      <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 border border-gray-100 dark:border-gray-700">
                        <div className="flex items-center gap-4 mb-4">
                          <div className="text-3xl">{edu.icon}</div>
                          <div className={index % 2 === 0 ? 'lg:ml-auto' : ''}>
                            <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                              {edu.degree}
                            </h4>
                            <p className={`${currentThemeConfig.text} dark:${currentThemeConfig.text.replace('text-', 'text-').replace('600', '400')} font-semibold text-lg`}>
                              {edu.institution}
                            </p>
                            <span className={`inline-block mt-2 px-4 py-1 ${currentThemeConfig.light} dark:${currentThemeConfig.light.replace('bg-', 'bg-').replace('100', '900/50')} ${currentThemeConfig.text} dark:${currentThemeConfig.text.replace('text-', 'text-').replace('600', '400')} rounded-full text-sm font-medium`}>
                              {edu.period}
                            </span>
                          </div>
                        </div>
                        
                        <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                          {edu.description}
                        </p>
                        
                        <div className="flex flex-wrap gap-2">
                          {edu.highlights.map((highlight, idx) => (
                            <span
                              key={idx}
                              className="px-3 py-1 bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium border border-gray-200 dark:border-gray-600"
                            >
                              {highlight}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Achievements Grid */}
          <div>
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center flex items-center justify-center gap-3">
              <span className={currentThemeConfig.text}>🏅</span>
              Certifications & Achievements
            </h3>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {achievements.map((achievement, index) => (
                <div
                  key={index}
                  className={`bg-gradient-to-br ${currentThemeConfig.gradient} dark:${currentThemeConfig.darkGradient} rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 border ${currentThemeConfig.border.replace('border-', 'border-')} dark:border-gray-700 group ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                  style={{ transitionDelay: `${index * 200 + 600}ms` }}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-4">
                      <div className="text-4xl group-hover:scale-110 transition-transform duration-300">
                        {achievement.icon}
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                          {achievement.title}
                        </h4>
                        <p className={`${currentThemeConfig.text} dark:${currentThemeConfig.text.replace('text-', 'text-').replace('600', '400')} font-semibold`}>
                          {achievement.issuer}
                        </p>
                      </div>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-sm font-bold ${
                      achievement.badge === 'Professional' 
                        ? 'bg-green-100 text-green-600 dark:bg-green-900/50 dark:text-green-400'
                        : 'bg-yellow-100 text-yellow-600 dark:bg-yellow-900/50 dark:text-yellow-400'
                    }`}>
                      {achievement.badge}
                    </span>
                  </div>
                  
                  <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                    {achievement.description}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-gray-500 dark:text-gray-400 font-medium">
                      {achievement.year}
                    </span>
                    <div className={`w-12 h-1 bg-gradient-to-r ${currentThemeConfig.primary.replace('bg-', 'from-')} ${currentThemeConfig.text.replace('text-', 'to-')} rounded-full group-hover:w-16 transition-all duration-300`}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Additional Stats */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { number: "309", label: "National Rank", icon: "🥇" },
              { number: "2L+", label: "Competitors", icon: "👥" },
              { number: "100%", label: "Course Completion", icon: "✅" }
            ].map((stat, index) => (
              <div
                key={index}
                className={`text-center p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 transform hover:scale-105 border border-gray-100 dark:border-gray-700 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 100 + 1000}ms` }}
              >
                <div className="text-3xl mb-3">{stat.icon}</div>
                <div className={`text-3xl font-bold ${currentThemeConfig.text} dark:${currentThemeConfig.text.replace('text-', 'text-').replace('600', '400')} mb-2`}>
                  {stat.number}
                </div>
                <div className="text-gray-600 dark:text-gray-300 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          {/* Progress Visualization */}
          <div className={`mt-12 bg-gradient-to-r ${currentThemeConfig.primary.replace('bg-', 'from-')} ${currentThemeConfig.text.replace('text-', 'to-')} rounded-3xl p-8 text-white text-center transition-all duration-700 ${
            isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}>
            <h3 className="text-2xl font-bold mb-6">Academic Excellence Journey</h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {[
                { label: "Academic Performance", value: 95, icon: "📊" },
                { label: "Technical Skills", value: 90, icon: "💻" },
                { label: "Certifications", value: 100, icon: "🏆" },
                { label: "Projects Completed", value: 85, icon: "🚀" }
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl mb-3">{item.icon}</div>
                  <div className="text-2xl font-bold mb-2">{item.value}%</div>
                  <div className="text-blue-100 text-sm">{item.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;