import  { useState, useEffect, useRef } from 'react';

type ThemeName = 'blue' | 'emerald' | 'violet';

interface ThemeConfig {
  primary: string;
  light: string;
  text: string;
  border: string;
  gradient: string;
  cardGradient: string;
}
const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentTheme, setCurrentTheme] = useState<ThemeName>('blue');
  const [activeCategory, setActiveCategory] = useState(0);
  const sectionRef = useRef(null);

   const themes: Record<ThemeName, ThemeConfig> = {
    blue: {
      primary: 'bg-blue-600',
      light: 'bg-blue-100',
      text: 'text-blue-600',
      border: 'border-blue-600',
      gradient: 'from-blue-500 to-indigo-600',
      cardGradient: 'from-blue-50 to-indigo-50'
    },
    emerald: {
      primary: 'bg-emerald-600',
      light: 'bg-emerald-100',
      text: 'text-emerald-600',
      border: 'border-emerald-600',
      gradient: 'from-emerald-500 to-teal-600',
      cardGradient: 'from-emerald-50 to-teal-50'
    },
    violet: {
      primary: 'bg-violet-600',
      light: 'bg-violet-100',
      text: 'text-violet-600',
      border: 'border-violet-600',
      gradient: 'from-violet-500 to-purple-600',
      cardGradient: 'from-violet-50 to-purple-50'
    }
  };

  // const currentThemeConfig = themes[currentTheme];
   const currentThemeConfig = themes[currentTheme];

  const skillCategories = [
    {
      title: "Languages & Frameworks",
      icon: "💻",
      skills: [
        { name: "Java", level: 90, icon: "☕", experience: "2 years" },
        { name: "Spring Boot", level: 88, icon: "🌱", experience: "1.5 years" },
        { name: "C++", level: 85, icon: "🔷", experience: "3 years" },
        { name: "Microservices", level: 82, icon: "🔗", experience: "1 year" },
        { name: "REST APIs", level: 92, icon: "🌐", experience: "2 years" },
        { name: "Spring Security", level: 80, icon: "🔒", experience: "1 year" },
        { name: "Hibernate", level: 82, icon: "💾", experience: "1.5 years" },
        { name: "Spring JPA", level: 85, icon: "🛢️", experience: "1.5 years" }
      ]
    },
    {
      title: "Frontend Technologies",
      icon: "🎨",
      skills: [
        { name: "Angular", level: 88, icon: "🅰️", experience: "1.5 years" },
        { name: "TypeScript", level: 85, icon: "📘", experience: "1.5 years" },
        { name: "HTML5", level: 95, icon: "🌐", experience: "3 years" },
        { name: "CSS3", level: 90, icon: "🎨", experience: "3 years" },
        { name: "Bootstrap", level: 85, icon: "💎", experience: "2 years" },
        { name: "React", level: 75, icon: "⚛️", experience: "6 months" },
        { name: "Tailwind CSS", level: 88, icon: "💨", experience: "1 year" }
      ]
    },
    {
      title: "Databases",
      icon: "🗄️",
      skills: [
        { name: "PostgreSQL", level: 85, icon: "🐘", experience: "1.5 years" },
        { name: "MongoDB", level: 80, icon: "🍃", experience: "1 year" },
        { name: "MySQL", level: 85, icon: "🐬", experience: "2 years" },
        { name: "Redis", level: 75, icon: "🔴", experience: "6 months" }
      ]
    },
    {
      title: "Tools & DevOps",
      icon: "🛠️",
      skills: [
        { name: "Docker", level: 85, icon: "🐳", experience: "1 year" },
        { name: "Kubernetes", level: 75, icon: "⚓", experience: "8 months" },
        { name: "Git", level: 90, icon: "📚", experience: "3 years" },
        { name: "AWS", level: 78, icon: "☁️", experience: "1 year" },
        { name: "CI/CD", level: 82, icon: "🔄", experience: "1 year" },
        { name: "Maven", level: 80, icon: "📦", experience: "2 years" },
        { name: "Jenkins", level: 75, icon: "🤖", experience: "8 months" }
      ]
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

  // Auto rotate categories
  useEffect(() => {
    if (isVisible) {
      const interval = setInterval(() => {
        setActiveCategory((prev) => (prev + 1) % skillCategories.length);
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [isVisible, skillCategories.length]);

  return (
    <section 
      id="skills" 
      ref={sectionRef}
      className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-500"
    >
      <div className="container mx-auto px-6">


        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className={`inline-flex items-center gap-3 ${currentThemeConfig.light} dark:${currentThemeConfig.light.replace('bg-', 'bg-').replace('100', '900/30')} ${currentThemeConfig.text} dark:${currentThemeConfig.text.replace('text-', 'text-').replace('600', '400')} px-4 py-2 rounded-full text-sm font-medium mb-4`}>
            <span className="text-lg">🛠️</span>
            Technical Expertise
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Skills & <span className={currentThemeConfig.text}>Technologies</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Comprehensive expertise across full-stack development, cloud technologies, and modern frameworks
          </p>
        </div>

        <div className="max-w-7xl mx-auto">
          {/* Category Navigation */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {skillCategories.map((category, index) => (
              <button
                key={index}
                onClick={() => setActiveCategory(index)}
                className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 transform hover:scale-105 flex items-center gap-2 ${
                  activeCategory === index
                    ? `${currentThemeConfig.primary} text-white shadow-lg`
                    : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 shadow-md'
                }`}
              >
                <span className="text-lg">{category.icon}</span>
                {category.title}
              </button>
            ))}
          </div>

          {/* Skills Visualization */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {/* Skills Progress Bars */}
            <div className={`space-y-6 transition-all duration-500 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
                <span className={`text-3xl ${currentThemeConfig.text}`}>
                  {skillCategories[activeCategory].icon}
                </span>
                {skillCategories[activeCategory].title}
              </h3>
              
              <div className="space-y-4">
                {skillCategories[activeCategory].skills.map((skill, index) => (
                  <div
                    key={skill.name}
                    className="group"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-3">
                        <span className="text-xl">{skill.icon}</span>
                        <div>
                          <span className="font-medium text-gray-700 dark:text-gray-300 group-hover:scale-105 transition-transform duration-300">
                            {skill.name}
                          </span>
                          <div className="text-xs text-gray-500 dark:text-gray-400">
                            {skill.experience}
                          </div>
                        </div>
                      </div>
                      <span className="text-sm font-bold text-gray-500 dark:text-gray-400">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3 overflow-hidden">
                      <div
                        className={`h-full rounded-full ${currentThemeConfig.primary} transition-all duration-1000 ease-out group-hover:scale-105 transform origin-left`}
                        style={{
                          width: isVisible ? `${skill.level}%` : '0%',
                          transitionDelay: `${index * 100}ms`
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Skills Overview Cards */}
            <div className={`grid grid-cols-2 gap-4 transition-all duration-500 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}>
              {skillCategories.map((category, index) => (
                <div
                  key={index}
                  onClick={() => setActiveCategory(index)}
                  className={`bg-white dark:bg-gray-800 rounded-2xl p-6 cursor-pointer transition-all duration-300 transform hover:scale-105 border-2 ${
                    activeCategory === index
                      ? `${currentThemeConfig.border} shadow-lg`
                      : 'border-transparent hover:shadow-md'
                  }`}
                >
                  <div className="text-center">
                    <div className={`text-4xl mb-3 ${activeCategory === index ? currentThemeConfig.text : 'text-gray-400'}`}>
                      {category.icon}
                    </div>
                    <h4 className="font-semibold text-gray-700 dark:text-gray-300 mb-2">
                      {category.title}
                    </h4>
                    <div className={`text-2xl font-bold ${currentThemeConfig.text}`}>
                      {category.skills.length}
                    </div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                      Skills
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* All Skills Grid */}
          <div className={`transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <h3 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-8">
              Complete Skills Overview
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {skillCategories.map((category, categoryIndex) => (
                <div
                  key={categoryIndex}
                  className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 border border-gray-100 dark:border-gray-700"
                >
                  <div className="text-center mb-6">
                    <div className={`text-4xl ${currentThemeConfig.text} mb-3`}>
                      {category.icon}
                    </div>
                    <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                      {category.title}
                    </h4>
                    <div className={`w-12 h-1 ${currentThemeConfig.primary} rounded-full mx-auto`}></div>
                  </div>
                  
                  <div className="space-y-3">
                    {category.skills.map((skill, skillIndex) => (
                      <div
                        key={skillIndex}
                        className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors duration-300 group"
                      >
                        <div className="flex items-center gap-3">
                          <span className="text-lg">{skill.icon}</span>
                          <span className="font-medium text-gray-700 dark:text-gray-300">
                            {skill.name}
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-xs text-gray-500 dark:text-gray-400">
                            {skill.experience}
                          </span>
                          <div className={`px-2 py-1 rounded-full text-xs font-bold ${currentThemeConfig.primary} text-white`}>
                            {skill.level}%
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Stack Progress */}
          <div className={`mt-16 bg-gradient-to-r ${currentThemeConfig.gradient} rounded-3xl p-8 text-white text-center transition-all duration-700 ${
            isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}>
            <h3 className="text-2xl font-bold mb-4">Overall Tech Stack Mastery</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { label: "Backend Development", value: 88, icon: "🔧" },
                { label: "Frontend Development", value: 85, icon: "🎨" },
                { label: "Database Management", value: 83, icon: "🗄️" },
                { label: "DevOps & Cloud", value: 80, icon: "🚀" }
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl mb-2">{item.icon}</div>
                  <div className="text-3xl font-bold mb-1">{item.value}%</div>
                  <div className="text-blue-100 font-medium">{item.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Skills Progress Chart */}
          <div className={`mt-12 bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-lg border border-gray-100 dark:border-gray-700 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <h3 className="text-2xl font-bold text-center text-gray-900 dark:text-white mb-8">
              Skills Progress Distribution
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { range: "90-100%", count: 4, color: "bg-green-500" },
                { range: "80-89%", count: 8, color: "bg-blue-500" },
                { range: "70-79%", count: 3, color: "bg-yellow-500" },
                { range: "60-69%", count: 2, color: "bg-orange-500" }
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <div className={`w-16 h-16 ${item.color} rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-3`}>
                    {item.count}
                  </div>
                  <div className="text-lg font-bold text-gray-900 dark:text-white">{item.range}</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">Proficiency</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;