import React from 'react';
import { Code, Award, BookOpen } from 'lucide-react';

const About: React.FC = () => {
  const highlights = [
    { 
      icon: Code, 
      title: 'Enterprise Solutions', 
      description: 'Architecting scalable SaaS platforms and microservices for enterprise clients' 
    },
    { 
      icon: Award, 
      title: 'Google Summer of Code', 
      description: 'Selected as one of 100 first-time undergraduates, contributing to open-source projects' 
    },
    { 
      icon: BookOpen, 
      title: 'Research & Innovation', 
      description: 'Published research paper and contributed to tools used by 30,000+ researchers worldwide' 
    },
  ];

  return (
    <section id="about" className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <div className="w-24 h-1 bg-blue-400 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="bg-gradient-to-r from-blue-500 to-green-500 w-64 h-64 rounded-full mx-auto md:mx-0 flex items-center justify-center">
              <div className="bg-gray-800 w-60 h-60 rounded-full flex items-center justify-center">
                <div className="text-6xl">👨‍💻</div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="text-gray-300 text-lg leading-relaxed space-y-4">
              <p>
                Hello! I'm Manas Awasthi, a passionate Software Engineer with 3.5+ years of experience 
                in architecting and developing enterprise-grade SaaS platforms and microservices. 
                Currently based in Kanpur, India, I specialize in building scalable cloud-based solutions 
                that deliver significant performance improvements.
              </p>
              <p>
                My expertise spans across JavaScript, Node.js, Python, PostgreSQL, and MongoDB, with 
                strong focus on system optimization and database design. I have a proven track record 
                of improving system performance by up to 80% and reducing technical debt by 25%.
              </p>
              <p>
                I'm also proud to be a Google Summer of Code alumnus, where I contributed to open-source 
                projects used by over 30,000 researchers worldwide. I hold a Bachelor's in Information 
                Technology and Mathematical Innovation from the University of Delhi, with minors in 
                Computational Biology and Systems Biology.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-4 mt-8">
              {highlights.map((highlight, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-4 p-4 bg-gray-700/50 rounded-lg hover:bg-gray-700 transition-colors duration-300"
                >
                  <div className="flex-shrink-0">
                    <highlight.icon size={24} className="text-blue-400" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">{highlight.title}</h4>
                    <p className="text-gray-400 text-sm">{highlight.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;