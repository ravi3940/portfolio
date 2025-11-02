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

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentTheme, setCurrentTheme] = useState<ThemeName>('blue');
  const [activeFilter, setActiveFilter] = useState('all');
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

  const currentThemeConfig = themes[currentTheme];

  const projects = [
    {
      title: "Smart Contract Management System",
      description: "A comprehensive contract management platform with role-based access control, automated workflows, and real-time analytics for enterprise contract lifecycle management.",
      image: "📄",
      category: "fullstack",
      status: "completed",
      duration: "4 months",
      teamSize: "3 developers",
      technologies: ["Spring Boot", "Angular", "JWT", "RBAC", "PostgreSQL", "Docker", "AWS", "Redis"],
      achievements: [
        "Developed REST APIs consumed by Angular frontend with 99.9% uptime",
        "Optimized search/filtering algorithms reducing query time by 40%",
        "Secured 100+ user sessions with JWT authentication and RBAC",
        "Deployed using Docker and AWS ECS for scalable cloud access",
        "Implemented real-time notifications and audit trails"
      ],
      metrics: [
        { label: "Performance", value: "40% faster", icon: "⚡" },
        { label: "Users", value: "100+", icon: "👥" },
        { label: "Uptime", value: "99.9%", icon: "🔄" }
      ],
      liveLink: "#",
      githubLink: "#"
    },
    {
      title: "Employee Management System",
      description: "Enterprise-level employee management platform with comprehensive features for HR operations, payroll processing, attendance tracking, and performance management.",
      image: "👨‍💼",
      category: "fullstack",
      status: "completed",
      duration: "3 months",
      teamSize: "2 developers",
      technologies: ["Spring Boot", "Angular", "MySQL", "REST APIs", "Docker", "AWS", "Bootstrap"],
      achievements: [
        "Built scalable REST APIs and responsive Angular frontend",
        "Advanced filtering and search reduced query time by 40%",
        "Integrated Docker and AWS for automated CI/CD deployment",
        "Implemented role-based access control for different user levels",
        "Added real-time dashboard with analytics and reporting"
      ],
      metrics: [
        { label: "Efficiency", value: "35% improved", icon: "🎯" },
        { label: "Deployment", value: "40% faster", icon: "🚀" },
        { label: "Reliability", value: "99.8%", icon: "🛡️" }
      ],
      liveLink: "#",
      githubLink: "#"
    },
    {
      title: "E-Commerce Microservices Platform",
      description: "Scalable e-commerce platform built with microservices architecture, featuring product catalog, shopping cart, order management, and payment integration.",
      image: "🛒",
      category: "backend",
      status: "in-progress",
      duration: "5 months",
      teamSize: "4 developers",
      technologies: ["Spring Boot", "Microservices", "MongoDB", "Redis", "Docker", "Kubernetes", "AWS"],
      achievements: [
        "Designed and implemented microservices architecture",
        "Integrated multiple payment gateways (Stripe, PayPal)",
        "Implemented distributed caching with Redis",
        "Containerized services using Docker and Kubernetes",
        "Set up comprehensive monitoring and logging"
      ],
      metrics: [
        { label: "Scalability", value: "10K+ users", icon: "📈" },
        { label: "Response Time", value: "<200ms", icon: "⚡" },
        { label: "Availability", value: "99.95%", icon: "🔄" }
      ],
      liveLink: "#",
      githubLink: "#"
    },
    {
      title: "Real-Time Analytics Dashboard",
      description: "Interactive dashboard for real-time data visualization and business intelligence with customizable widgets and advanced filtering capabilities.",
      image: "📊",
      category: "frontend",
      status: "completed",
      duration: "2 months",
      teamSize: "1 developer",
      technologies: ["Angular", "TypeScript", "D3.js", "WebSocket", "Node.js", "MongoDB"],
      achievements: [
        "Built responsive dashboard with real-time data updates",
        "Implemented interactive charts using D3.js",
        "Integrated WebSocket for live data streaming",
        "Added customizable widget system",
        "Optimized performance for large datasets"
      ],
      metrics: [
        { label: "Real-time", value: "<1s updates", icon: "🕒" },
        { label: "Charts", value: "15+ types", icon: "📈" },
        { label: "Users", value: "50+", icon: "👥" }
      ],
      liveLink: "#",
      githubLink: "#"
    }
  ];

  const filters = [
    { key: 'all', label: 'All Projects', icon: '🌟' },
    { key: 'fullstack', label: 'Full Stack', icon: '💻' },
    { key: 'backend', label: 'Backend', icon: '🔧' },
    { key: 'frontend', label: 'Frontend', icon: '🎨' }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

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
      id="projects" 
      ref={sectionRef}
      className="py-20 bg-white dark:bg-gray-900 transition-colors duration-500"
    >
      <div className="container mx-auto px-6">


        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className={`inline-flex items-center gap-3 ${currentThemeConfig.light} dark:${currentThemeConfig.light.replace('bg-', 'bg-').replace('100', '900/30')} ${currentThemeConfig.text} dark:${currentThemeConfig.text.replace('text-', 'text-').replace('600', '400')} px-4 py-2 rounded-full text-sm font-medium mb-4`}>
            <span className="text-lg">🚀</span>
            Featured Projects
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            My <span className={currentThemeConfig.text}>Projects</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Showcasing innovative solutions and cutting-edge technologies in full-stack development
          </p>
        </div>

        <div className="max-w-7xl mx-auto">
          {/* Project Filters */}
          <div className={`flex flex-wrap justify-center gap-4 mb-12 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            {filters.map((filter) => (
              <button
                key={filter.key}
                onClick={() => setActiveFilter(filter.key)}
                className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 transform hover:scale-105 flex items-center gap-2 ${
                  activeFilter === filter.key
                    ? `${currentThemeConfig.primary} text-white shadow-lg`
                    : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                }`}
              >
                <span>{filter.icon}</span>
                {filter.label}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filteredProjects.map((project, index) => (
              <div
                key={index}
                className={`bg-gradient-to-br ${currentThemeConfig.cardGradient} dark:from-gray-800 dark:to-gray-800 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 border border-gray-100 dark:border-gray-700 group ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                {/* Project Header */}
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center gap-4">
                    <div className="text-4xl">{project.image}</div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                        {project.title}
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                          project.status === 'completed' 
                            ? 'bg-green-100 text-green-600 dark:bg-green-900/50 dark:text-green-400'
                            : 'bg-yellow-100 text-yellow-600 dark:bg-yellow-900/50 dark:text-yellow-400'
                        }`}>
                          {project.status === 'completed' ? '✅ Completed' : '🔄 In Progress'}
                        </span>
                        <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-xs font-medium">
                          {project.duration}
                        </span>
                        <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-xs font-medium">
                          {project.teamSize}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Project Description */}
                <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                    <span className={currentThemeConfig.text}>🛠️</span>
                    Technologies
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className={`px-3 py-2 ${currentThemeConfig.light} dark:${currentThemeConfig.light.replace('bg-', 'bg-').replace('100', '900/50')} ${currentThemeConfig.text} dark:${currentThemeConfig.text.replace('text-', 'text-').replace('600', '400')} rounded-lg text-sm font-medium border ${currentThemeConfig.border} dark:border-transparent hover:scale-105 transition-transform duration-300`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Achievements */}
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                    <span className={currentThemeConfig.text}>🎯</span>
                    Key Achievements
                  </h4>
                  <ul className="space-y-2">
                    {project.achievements.map((achievement, idx) => (
                      <li 
                        key={idx}
                        className="flex items-start gap-3 text-gray-700 dark:text-gray-300 group"
                      >
                        <span className={`w-5 h-5 ${currentThemeConfig.primary} rounded-full flex items-center justify-center text-white text-xs mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                          ✓
                        </span>
                        <span className="text-sm leading-relaxed group-hover:translate-x-1 transition-transform duration-300">
                          {achievement}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Metrics & Links */}
                <div className="flex items-center justify-between pt-6 border-t border-gray-200 dark:border-gray-600">
                  {/* Metrics */}
                  <div className="flex gap-4">
                    {project.metrics.map((metric, idx) => (
                      <div key={idx} className="text-center">
                        <div className="text-lg mb-1">{metric.icon}</div>
                        <div className="text-sm font-bold text-gray-900 dark:text-white">{metric.value}</div>
                        <div className="text-xs text-gray-500 dark:text-gray-400">{metric.label}</div>
                      </div>
                    ))}
                  </div>

                  {/* Action Links */}
                  <div className="flex gap-3">
                    <a
                      href={project.liveLink}
                      className={`p-2 ${currentThemeConfig.primary} hover:shadow-lg text-white rounded-lg transition-all duration-300 transform hover:scale-110`}
                      title="View Live Demo"
                    >
                      <span className="text-sm">🌐</span>
                    </a>
                    <a
                      href={project.githubLink}
                      className="p-2 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300 rounded-lg transition-all duration-300 transform hover:scale-110"
                      title="View Source Code"
                    >
                      <span className="text-sm">💻</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Projects Summary */}
          <div className={`mt-16 bg-gradient-to-r ${currentThemeConfig.gradient} rounded-3xl p-8 text-white text-center transition-all duration-700 ${
            isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}>
            <h3 className="text-2xl font-bold mb-6">Projects Impact Summary</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { label: "Total Projects", value: "15+", icon: "🚀" },
                { label: "Technologies", value: "20+", icon: "🛠️" },
                { label: "Team Members", value: "25+", icon: "👥" },
                { label: "Success Rate", value: "100%", icon: "🎯" }
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl mb-3">{item.icon}</div>
                  <div className="text-2xl font-bold mb-2">{item.value}</div>
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

export default Projects;