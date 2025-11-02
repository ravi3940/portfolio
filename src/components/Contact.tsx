import { useState, useEffect, useRef, type ChangeEvent, type FormEvent } from 'react';
type ThemeName = 'blue' | 'emerald' | 'violet';

interface ThemeConfig {
  primary: string;
  light: string;
  text: string;
  border: string;
  gradient: string;
  hover: string;
  cardGradient?: string; // optional, if not used everywhere
}

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [currentTheme, setCurrentTheme] = useState<ThemeName>('blue');
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement | null>(null);

  const themes: Record<ThemeName, ThemeConfig> ={
    blue: {
      primary: 'bg-blue-600',
      light: 'bg-blue-100',
      text: 'text-blue-600',
      border: 'border-blue-600',
      gradient: 'from-blue-500 to-indigo-600',
      hover: 'hover:bg-blue-700'
    },
    emerald: {
      primary: 'bg-emerald-600',
      light: 'bg-emerald-100',
      text: 'text-emerald-600',
      border: 'border-emerald-600',
      gradient: 'from-emerald-500 to-teal-600',
      hover: 'hover:bg-emerald-700'
    },
    violet: {
      primary: 'bg-violet-600',
      light: 'bg-violet-100',
      text: 'text-violet-600',
      border: 'border-violet-600',
      gradient: 'from-violet-500 to-purple-600',
      hover: 'hover:bg-violet-700'
    }
  };

  const currentThemeConfig = themes[currentTheme];

  const contactInfo = [
    {
      icon: "✉️",
      title: "Email",
      value: "ravikumar013013@gmail.com",
      link: "mailto:ravikumar013013@gmail.com",
      description: "Send me an email anytime"
    },
    {
      icon: "📞",
      title: "Phone",
      value: "+91 7254002412",
      link: "tel:+917254002412",
      description: "Call or WhatsApp me"
    },
    {
      icon: "💼",
      title: "GitHub",
      value: "github.com/rawi3940",
      link: "https://github.com/rawi3940",
      description: "Check out my projects"
    },
    {
      icon: "🔗",
      title: "LinkedIn",
      value: "linkedin.com/in/ravi-kumar",
      link: "https://linkedin.com/in/ravi-kumar-b2217a229",
      description: "Let's connect professionally"
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

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 2000)); // simulate delay
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    setIsSubmitting(false);
    setFormData({ name: '', email: '', subject: '', message: '' });
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <section 
      id="contact" 
      ref={sectionRef}
      className="py-20 bg-gray-900 text-white transition-colors duration-500"
    >
      <div className="container mx-auto px-6">

        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className={`inline-flex items-center gap-3 ${currentThemeConfig.primary} px-4 py-2 rounded-full text-sm font-medium mb-4`}>
            <span className="text-lg">📞</span>
            Get In Touch
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Let's <span className={currentThemeConfig.text}>Work Together</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Ready to bring your ideas to life? Let's discuss your project and create something amazing.
          </p>
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Contact Information */}
            <div className={`space-y-8 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}>
              <div>
                <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                  <span className={currentThemeConfig.text}>💬</span>
                  Contact Information
                </h3>
                <p className="text-gray-300 mb-8 leading-relaxed">
                  Feel free to reach out to me for collaboration, job opportunities, or just to say hello. 
                  I'm always open to discussing new projects and opportunities.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {contactInfo.map((contact, index) => (
                  <a
                    key={index}
                    href={contact.link}
                    target={contact.link.startsWith('http') ? '_blank' : '_self'}
                    rel={contact.link.startsWith('http') ? 'noopener noreferrer' : ''}
                    className={`bg-gray-800 rounded-2xl p-6 hover:bg-gray-700 transition-all duration-300 transform hover:scale-105 border border-gray-700 hover:border-${currentTheme.split('-')[0]}-500 group`}
                  >
                    <div className="flex items-start gap-4">
                      <div className={`w-12 h-12 ${currentThemeConfig.primary} rounded-xl flex items-center justify-center text-white text-lg group-hover:scale-110 transition-transform duration-300`}>
                        {contact.icon}
                      </div>
                      <div>
                        <h4 className="font-semibold text-white mb-1">{contact.title}</h4>
                        <p className={`${currentThemeConfig.text} font-medium mb-1`}>{contact.value}</p>
                        <p className="text-gray-400 text-sm">{contact.description}</p>
                      </div>
                    </div>
                  </a>
                ))}
              </div>

              {/* Availability Status */}
              <div className="bg-gray-800 rounded-2xl p-6 border border-gray-700">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-green-400 font-medium">Currently Available</span>
                </div>
                <p className="text-gray-300 text-sm">
                  I'm currently available for freelance work and full-time opportunities. 
                  Response time: within 24 hours.
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className={`transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}>
              {/* Success Message */}
              {isSubmitted && (
                <div className="mb-6 p-4 bg-green-900/50 border border-green-600 rounded-2xl flex items-center gap-3 animate-fade-in">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <div>
                    <p className="text-green-400 font-medium">Message Sent Successfully!</p>
                    <p className="text-green-300 text-sm">I'll get back to you within 24 hours.</p>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2 text-gray-300">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white transition-all duration-300"
                      placeholder="Enter your name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2 text-gray-300">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white transition-all duration-300"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-2 text-gray-300">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white transition-all duration-300"
                    placeholder="What's this about?"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2 text-gray-300">
                    Your Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white transition-all duration-300 resize-none"
                    placeholder="Tell me about your project or inquiry..."
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-4 ${currentThemeConfig.primary} ${currentThemeConfig.hover} text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center justify-center gap-2 ${
                    isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      Sending Message...
                    </>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <span className="group-hover:translate-x-1 transition-transform duration-300">🚀</span>
                    </>
                  )}
                </button>

                <p className="text-gray-400 text-sm text-center">
                  * Required fields. I respect your privacy and will never share your information.
                </p>
              </form>
            </div>
          </div>

          {/* Quick Actions */}
          <div className={`mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            {[
              {
                icon: "📧",
                title: "Quick Email",
                action: "mailto:ravikumar013013@gmail.com",
                description: "Send me a direct email"
              },
              {
                icon: "📞",
                title: "Call Now",
                action: "tel:+917254002412",
                description: "Let's have a quick chat"
              },
              {
                icon: "💼",
                title: "View Resume",
                action: "/RaviKumar_CV.pdf",
                description: "Download my CV"
              }
            ].map((action, index) => (
              <a
                key={index}
                href={action.action}
                download={action.action.includes('.pdf')}
                className="bg-gray-800 rounded-2xl p-6 text-center hover:bg-gray-700 transition-all duration-300 transform hover:scale-105 border border-gray-700 group"
              >
                <div className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-300">
                  {action.icon}
                </div>
                <h4 className="font-semibold text-white mb-2">{action.title}</h4>
                <p className="text-gray-400 text-sm">{action.description}</p>
              </a>
            ))}
          </div>
        </div>
        
        {/* Footer */}
        <div className="mt-16 pt-8 border-t border-gray-700 text-center">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400">
              &copy; 2024 Ravi Kumar. All rights reserved.
            </p>
            <div className="flex gap-4">
              <p className="text-gray-400">
                Built with ❤️ using React & Tailwind CSS
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;