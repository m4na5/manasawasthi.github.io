import React from 'react';
import { ExternalLink, Github, TrendingUp, Database, Zap } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubUrl: string;
  liveUrl: string;
  featured: boolean;
  achievements?: string[];
  type: 'professional' | 'personal';
}

const Projects: React.FC = () => {
  const projects: Project[] = [
    {
      id: 1,
      title: 'StrandD - B2B Roadside Assistance Platform',
      description: 'Led development of enterprise-grade roadside assistance platform for the US market. Implemented recommendation engine for provider suggestions, PayPal payment gateway integration, and comprehensive REST APIs for web and mobile applications.',
      image: 'https://images.pexels.com/photos/13065690/pexels-photo-13065690.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['JavaScript', 'Node.js', 'PostgreSQL', 'Redis', 'PayPal API', 'PubNub', 'REST APIs'],
      githubUrl: 'https://github.com/manasawasthi',
      liveUrl: '#',
      featured: true,
      type: 'professional',
      achievements: [
        '30% improvement in response times',
        '25% reduction in technical debt',
        'Real-time notifications via PubNub',
        'Cross-platform API support'
      ],
    },
    {
      id: 2,
      title: 'Canvas - SaaS Data Pipeline Platform',
      description: 'Developed enterprise-grade cloud-based SaaS platform revolutionizing data processing for ML/DL models. Managed scalable database architecture handling 2.6M+ images with ML-powered damage detection and vehicle classification.',
      image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Python', 'Node.js', 'PostgreSQL', 'Redis', 'Machine Learning', 'Cloud Architecture'],
      githubUrl: 'https://github.com/manasawasthi',
      liveUrl: '#',
      featured: true,
      type: 'professional',
      achievements: [
        '80% improvement in data processing speed',
        '2.6M+ images processed',
        '40% reduction in processing time',
        '60% improvement in system throughput'
      ],
    },
    {
      id: 3,
      title: 'BridgeDb Enhancement - GSoC Project',
      description: 'Open-source contribution during Google Summer of Code. Unified databases for secondary identifiers in BridgeDb, developed RDF data extraction tool, and enhanced protein identification capabilities used by 30,000+ researchers worldwide.',
      image: 'https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Java', 'JUnit5', 'Derby Database', 'RDF', 'BridgeDb', 'Open Source'],
      githubUrl: 'https://github.com/bridgedb/BridgeDb',
      liveUrl: 'https://bridgedb.github.io/',
      featured: true,
      type: 'personal',
      achievements: [
        '40% improvement in protein identification',
        'Used by 30,000+ researchers',
        '40% expansion in database coverage',
        'Published research paper'
      ],
    },
    {
      id: 4,
      title: 'Database Optimization & Caching Solutions',
      description: 'Implemented comprehensive database optimization strategies and Redis caching solutions across multiple projects, resulting in significant performance improvements and reduced system load.',
      image: 'https://images.pexels.com/photos/8386422/pexels-photo-8386422.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['PostgreSQL', 'MongoDB', 'Redis', 'Elasticsearch', 'Query Optimization'],
      githubUrl: 'https://github.com/manasawasthi',
      liveUrl: '#',
      featured: false,
      type: 'professional',
      achievements: [
        '35% reduction in database load',
        'Optimized PostgreSQL queries',
        'Implemented Redis caching strategies'
      ],
    },
  ];

  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);

  return (
    <section id="projects" className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Featured Projects</h2>
          <div className="w-24 h-1 bg-blue-400 mx-auto rounded-full"></div>
          <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
            Professional projects and open-source contributions showcasing my expertise in enterprise-grade solutions
          </p>
        </div>

        {/* Featured Projects */}
        <div className="space-y-16 mb-16">
          {featuredProjects.map((project, index) => (
            <div
              key={project.id}
              className={`grid md:grid-cols-2 gap-8 items-center ${
                index % 2 === 1 ? 'md:grid-flow-col-dense' : ''
              }`}
            >
              <div className={index % 2 === 1 ? 'md:col-start-2' : ''}>
                <div className="relative group overflow-hidden rounded-lg">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute top-4 right-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      project.type === 'professional' 
                        ? 'bg-blue-600 text-white' 
                        : 'bg-green-600 text-white'
                    }`}>
                      {project.type === 'professional' ? 'Professional' : 'Open Source'}
                    </span>
                  </div>
                </div>
              </div>

              <div className={index % 2 === 1 ? 'md:col-start-1 md:row-start-1' : ''}>
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-white">{project.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{project.description}</p>
                  
                  {/* Key Achievements */}
                  {project.achievements && (
                    <div className="space-y-2">
                      <h4 className="text-white font-semibold flex items-center">
                        <TrendingUp size={16} className="mr-2 text-green-400" />
                        Key Achievements
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {project.achievements.map((achievement, achIndex) => (
                          <div key={achIndex} className="text-green-400 text-sm bg-green-400/10 px-3 py-1 rounded flex items-center">
                            <Zap size={12} className="mr-1 flex-shrink-0" />
                            {achievement}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                  
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-blue-600/20 text-blue-400 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex space-x-4 pt-4">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition-colors duration-300"
                    >
                      <Github size={20} />
                      <span>Code</span>
                    </a>
                    {project.liveUrl !== '#' && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors duration-300"
                      >
                        <ExternalLink size={20} />
                        <span>Live Demo</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Other Projects Grid */}
        {otherProjects.length > 0 && (
          <div>
            <h3 className="text-2xl font-bold text-white text-center mb-8">Other Projects</h3>
            <div className="grid md:grid-cols-2 gap-8">
              {otherProjects.map((project) => (
                <div
                  key={project.id}
                  className="bg-gray-700 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-all duration-300 hover:shadow-xl"
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="text-xl font-bold text-white">{project.title}</h4>
                      <span className={`px-2 py-1 rounded text-xs font-medium ${
                        project.type === 'professional' 
                          ? 'bg-blue-600/20 text-blue-400' 
                          : 'bg-green-600/20 text-green-400'
                      }`}>
                        {project.type === 'professional' ? 'Pro' : 'OSS'}
                      </span>
                    </div>
                    <p className="text-gray-300 mb-4 text-sm leading-relaxed">{project.description}</p>
                    
                    {project.achievements && (
                      <div className="mb-4">
                        <div className="flex flex-wrap gap-1">
                          {project.achievements.slice(0, 2).map((achievement, achIndex) => (
                            <div key={achIndex} className="text-green-400 text-xs bg-green-400/10 px-2 py-1 rounded">
                              {achievement}
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.slice(0, 4).map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 bg-blue-600/20 text-blue-400 rounded text-xs"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex space-x-3">
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-1 text-gray-400 hover:text-white transition-colors"
                      >
                        <Github size={16} />
                        <span className="text-sm">Code</span>
                      </a>
                      {project.liveUrl !== '#' && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center space-x-1 text-blue-400 hover:text-blue-300 transition-colors"
                        >
                          <ExternalLink size={16} />
                          <span className="text-sm">Demo</span>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;