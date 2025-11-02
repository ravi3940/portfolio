import  { useState, useEffect, useRef } from 'react';
type ThemeName = 'blue' | 'emerald' | 'violet';

interface ThemeConfig {
  primary: string;
  light: string;
  text: string;
  border: string;
  gradient: string;
  timeline: string;
  darkTimeline: string;
}

const Experience = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentTheme, setCurrentTheme] = useState<ThemeName >('blue');
  const sectionRef = useRef(null);

const themes: Record<ThemeName, ThemeConfig> = {
    blue: {
      primary: 'bg-blue-600',
      light: 'bg-blue-100',
      text: 'text-blue-600',
      border: 'border-blue-600',
      gradient: 'from-blue-500 to-indigo-600',
      timeline: 'bg-blue-200',
      darkTimeline: 'bg-blue-800/50'
    },
    emerald: {
      primary: 'bg-emerald-600',
      light: 'bg-emerald-100',
      text: 'text-emerald-600',
      border: 'border-emerald-600',
      gradient: 'from-emerald-500 to-teal-600',
      timeline: 'bg-emerald-200',
      darkTimeline: 'bg-emerald-800/50'
    },
    violet: {
      primary: 'bg-violet-600',
      light: 'bg-violet-100',
      text: 'text-violet-600',
      border: 'border-violet-600',
      gradient: 'from-violet-500 to-purple-600',
      timeline: 'bg-violet-200',
      darkTimeline: 'bg-violet-800/50'
    }
  };

  const currentThemeConfig = themes[currentTheme];

  const experiences = [
    {
      title: "Full Stack Developer",
      company: "Radixile Technology Solutions",
      period: "Sep 2024 – Present",
      duration: "6+ months",
      icon: "💻",
      location: "Remote",
      type: "Full-time",
      achievements: [
        "Developed scalable REST APIs with Spring Boot and PostgreSQL/MongoDB, handling 15,000+ daily requests",
        "Improved system response time by 30% through optimization techniques and caching strategies",
        "Built dynamic Angular dashboards with real-time data visualization, enhancing user workflow efficiency by 25%",
        "Implemented CI/CD pipelines using Docker, Kubernetes, and AWS, reducing deployment time by 40%",
        "Optimized data processing algorithms for 1M+ records, cutting computation time by 35%"
      ],
      technologies: ["Java", "Spring Boot", "Angular", "PostgreSQL", "Docker", "AWS", "Kubernetes"]
    },
    {
      title: "SDE Intern",
      company: "Intellect Design Arena",
      period: "Jan 2024 – July 2024",
      duration: "6 months",
      icon: "🚀",
      location: "Hybrid",
      type: "Internship",
      achievements: [
        "Developed Spring Boot microservices to automate business workflows, improving processing efficiency by 20%",
        "Built Angular components for dynamic UIs with real-time updates, increasing user engagement by 15%",
        "Integrated third-party APIs with OAuth2 authentication, securing access for 500+ users",
        "Processed and analyzed large datasets (500K+ records), reducing data processing errors by 25%",
        "Collaborated with cross-functional teams in agile development environment"
      ],
      technologies: ["Spring Boot", "Microservices", "Angular", "OAuth2", "MySQL", "REST APIs"]
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
      id="experience" 
      ref={sectionRef}
      className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-500"
    >
      <div className="container mx-auto px-6">


        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className={`inline-flex items-center gap-3 ${currentThemeConfig.light} dark:${currentThemeConfig.light.replace('bg-', 'bg-').replace('100', '900/30')} ${currentThemeConfig.text} dark:${currentThemeConfig.text.replace('text-', 'text-').replace('600', '400')} px-4 py-2 rounded-full text-sm font-medium mb-4`}>
            <span className="text-lg">💼</span>
            Professional Journey
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Work <span className={currentThemeConfig.text}>Experience</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            My professional growth through impactful roles and challenging projects
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className={`absolute left-6 md:left-1/2 transform md:-translate-x-1/2 w-1 h-full ${currentThemeConfig.timeline} dark:${currentThemeConfig.darkTimeline} rounded-full`}></div>
            
            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <div
                  key={index}
                  className={`flex flex-col md:flex-row items-start gap-8 transition-all duration-700 ${
                    isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
                  }`}
                  style={{ transitionDelay: `${index * 200}ms` }}
                >
                  {/* Timeline Dot & Date */}
                  <div className="flex items-center gap-4 md:gap-0 md:flex-col md:w-1/2 md:pr-12">
                    <div className="relative z-10 flex-shrink-0">
                      <div className={`w-6 h-6 ${currentThemeConfig.primary} dark:${currentThemeConfig.primary.replace('bg-', 'bg-').replace('600', '400')} rounded-full border-4 border-white dark:border-gray-900 shadow-lg`}></div>
                    </div>
                    <div className="md:text-right md:mt-2">
                      <span className={`px-3 py-1 ${currentThemeConfig.light} dark:${currentThemeConfig.light.replace('bg-', 'bg-').replace('100', '900/50')} ${currentThemeConfig.text} dark:${currentThemeConfig.text.replace('text-', 'text-').replace('600', '400')} rounded-full text-sm font-medium`}>
                        {exp.period}
                      </span>
                    </div>
                  </div>

                  {/* Experience Card */}
                  <div className="flex-1 md:pl-12">
                    <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 border border-gray-100 dark:border-gray-700">
                      {/* Header */}
                      <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                        <div className="flex items-start gap-4 mb-4 lg:mb-0">
                          <div className={`w-12 h-12 ${currentThemeConfig.primary} rounded-2xl flex items-center justify-center text-white text-xl`}>
                            {exp.icon}
                          </div>
                          <div>
                            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                              {exp.title}
                            </h3>
                            <p className={`text-xl ${currentThemeConfig.text} dark:${currentThemeConfig.text.replace('text-', 'text-').replace('600', '400')} font-semibold mb-2`}>
                              {exp.company}
                            </p>
                            <div className="flex flex-wrap gap-2">
                              <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-xs font-medium">
                                {exp.type}
                              </span>
                              <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-xs font-medium">
                                {exp.location}
                              </span>
                              <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-xs font-medium">
                                {exp.duration}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Achievements */}
                      <div className="mb-6">
                        <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                          <span className={currentThemeConfig.text}>🎯</span>
                          Key Achievements
                        </h4>
                        <ul className="space-y-3">
                          {exp.achievements.map((achievement, idx) => (
                            <li 
                              key={idx}
                              className="flex items-start gap-3 text-gray-700 dark:text-gray-300 group"
                            >
                              <span className={`w-5 h-5 ${currentThemeConfig.primary} rounded-full flex items-center justify-center text-white text-xs mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                                ✓
                              </span>
                              <span className="leading-relaxed group-hover:translate-x-1 transition-transform duration-300">
                                {achievement}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Technologies */}
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                          <span className={currentThemeConfig.text}>🛠️</span>
                          Technologies Used
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech, idx) => (
                            <span
                              key={idx}
                              className={`px-3 py-1 ${currentThemeConfig.light} dark:${currentThemeConfig.light.replace('bg-', 'bg-').replace('100', '900/50')} ${currentThemeConfig.text} dark:${currentThemeConfig.text.replace('text-', 'text-').replace('600', '400')} rounded-full text-sm font-medium border ${currentThemeConfig.border} dark:border-transparent hover:scale-105 transition-transform duration-300 cursor-default`}
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Career Progress */}
          <div className={`mt-16 bg-gradient-to-r ${currentThemeConfig.gradient} rounded-3xl p-8 text-white text-center transition-all duration-700 ${
            isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}>
            <h3 className="text-2xl font-bold mb-6">Career Progress & Impact</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { label: "Projects Completed", value: "15+", icon: "🚀" },
                { label: "Team Members", value: "20+", icon: "👥" },
                { label: "Code Commits", value: "500+", icon: "💻" },
                { label: "Performance Gain", value: "30%", icon: "⚡" }
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl mb-3">{item.icon}</div>
                  <div className="text-2xl font-bold mb-2">{item.value}</div>
                  <div className="text-blue-100 text-sm">{item.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <div className={`mt-12 text-center transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Interested in working together? Let's build something amazing!
            </p>
            <a
              href="#contact"
              className={`inline-flex items-center gap-2 px-6 py-3 ${currentThemeConfig.primary} hover:shadow-lg text-white rounded-xl transition-all duration-300 transform hover:scale-105 font-semibold`}
            >
              <span>Get In Touch</span>
              <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;