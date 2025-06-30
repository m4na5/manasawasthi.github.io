import React, { useState, useEffect } from 'react';
import { ChevronDown, Github, Linkedin, Mail, Phone } from 'lucide-react';

const Hero: React.FC = () => {
  const [typedText, setTypedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  
  const roles = ['Software Engineer', 'Backend Developer', 'SaaS Platform Architect'];

  useEffect(() => {
    const currentRole = roles[currentIndex];
    const typingSpeed = isDeleting ? 50 : 100;

    const timeout = setTimeout(() => {
      if (!isDeleting && typedText === currentRole) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && typedText === '') {
        setIsDeleting(false);
        setCurrentIndex((prev) => (prev + 1) % roles.length);
      } else {
        setTypedText(prev => 
          isDeleting 
            ? prev.slice(0, -1)
            : currentRole.slice(0, prev.length + 1)
        );
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [typedText, currentIndex, isDeleting, roles]);

  const scrollToAbout = () => {
    const aboutSection = document.querySelector('#about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 relative overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-green-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Hi, I'm{' '}
            <span className="bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">
              Manas Awasthi
            </span>
          </h1>
          
          <div className="text-2xl md:text-3xl text-gray-300 mb-8 h-12 flex items-center justify-center">
            <span className="mr-2">I'm a</span>
            <span className="text-blue-400 font-semibold min-w-[320px] text-left">
              {typedText}
              <span className="animate-pulse">|</span>
            </span>
          </div>

          <p className="text-xl text-gray-400 max-w-4xl mx-auto mb-12 leading-relaxed">
            Software Engineer with 3.5+ years of experience architecting and developing enterprise-grade 
            SaaS platforms and microservices. Expert in JavaScript, Node.js, Python, and cloud-based solutions 
            with a proven track record of delivering scalable systems and significant performance improvements.
          </p>

          <div className="flex justify-center space-x-6 mb-12">
            <a
              href="https://github.com/manasawasthi"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-gray-800 hover:bg-gray-700 rounded-full transition-all duration-300 hover:scale-110"
            >
              <Github size={24} className="text-white" />
            </a>
            <a
              href="https://linkedin.com/in/manasawasthi"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-blue-600 hover:bg-blue-500 rounded-full transition-all duration-300 hover:scale-110"
            >
              <Linkedin size={24} className="text-white" />
            </a>
            <a
              href="mailto:awasthi.manas@gmail.com"
              className="p-3 bg-green-600 hover:bg-green-500 rounded-full transition-all duration-300 hover:scale-110"
            >
              <Mail size={24} className="text-white" />
            </a>
            <a
              href="tel:+919115050928"
              className="p-3 bg-purple-600 hover:bg-purple-500 rounded-full transition-all duration-300 hover:scale-110"
            >
              <Phone size={24} className="text-white" />
            </a>
          </div>

          <div className="space-x-4">
            <button
              onClick={scrollToAbout}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 shadow-lg"
            >
              Learn More
            </button>
            <a
              href="/Manas_Resume (2).pdf"
              download="Manas_Awasthi_Resume.pdf"
              className="bg-transparent border-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105"
            >
              Download Resume
            </a>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <button onClick={scrollToAbout} className="text-gray-400 hover:text-white transition-colors">
            <ChevronDown size={32} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
