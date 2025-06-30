import React from 'react';
import { Calendar, MapPin, TrendingUp } from 'lucide-react';

interface ExperienceItem {
  id: number;
  company: string;
  position: string;
  location: string;
  startDate: string;
  endDate: string;
  current: boolean;
  description: string[];
  technologies: string[];
  achievements: string[];
}

const Experience: React.FC = () => {
  const experiences: ExperienceItem[] = [
    {
      id: 1,
      company: 'Roadzen',
      position: 'Software Engineer',
      location: 'New Delhi, India',
      startDate: '2021-09',
      endDate: '',
      current: true,
      description: [
        'Led US version product development for StrandD - B2B Roadside Assistance Platform',
        'Designed database schema and implemented Recommendation Engine for provider suggestions',
        'Integrated PayPal Payment Gateway and coordinated with product and design teams',
        'Developed Canvas - Cloud-Based SaaS Data Pipeline Platform for ML/DL models',
        'Managed scalable database architecture handling 2.6M+ images with ML-powered processing',
      ],
      technologies: ['JavaScript', 'Node.js', 'PostgreSQL', 'Redis', 'PayPal API', 'PubNub'],
      achievements: [
        '80% improvement in data processing speed',
        '30% improvement in response times',
        '25% reduction in technical debt',
        '35% reduction in database load',
        '40% reduction in processing time',
        '60% improvement in system throughput'
      ],
    },
    {
      id: 2,
      company: 'Google Summer of Code',
      position: 'Student Developer - National Resource for Network Biology',
      location: 'Remote',
      startDate: '2019-05',
      endDate: '2019-08',
      current: false,
      description: [
        'Selected as one of 100 first-time undergraduates to contribute to the program',
        'Unified databases for secondary identifiers in BridgeDb improving protein identification',
        'Developed RDF data extraction tool from metabolite/derby database',
        'Enhanced BridgeDb functionality with secondary identifier support',
        'Increased test coverage and added Java 11 compatibility',
      ],
      technologies: ['Java', 'JUnit5', 'Derby', 'RDF', 'BridgeDb'],
      achievements: [
        '40% improvement in protein identification',
        'Tool used by 30,000+ researchers worldwide',
        '40% expansion in protein database coverage',
        '20% increase in test coverage',
        'Published research paper'
      ],
    },
  ];

  const education = {
    institution: 'University of Delhi',
    degree: 'Bachelor of Technology - Information Technology and Mathematical Innovation',
    location: 'New Delhi, India',
    duration: 'Jul 2017 - Jun 2021',
    minors: 'Computational Biology and Systems Biology',
  };

  const formatDate = (dateString: string) => {
    if (!dateString) return 'Present';
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'short' });
  };

  return (
    <section id="experience" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Experience & Education</h2>
          <div className="w-24 h-1 bg-blue-400 mx-auto rounded-full"></div>
          <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
            My professional journey and educational background that shaped my expertise
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-green-500 transform md:-translate-x-0.5"></div>

          <div className="space-y-12">
            {/* Professional Experience */}
            {experiences.map((experience, index) => (
              <div
                key={experience.id}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-blue-500 rounded-full transform -translate-x-2 md:-translate-x-2 z-10 border-4 border-gray-900"></div>

                {/* Content */}
                <div className={`w-full md:w-5/12 ml-16 md:ml-0 ${
                  index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'
                }`}>
                  <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <div className="flex flex-wrap items-center justify-between mb-4">
                      <h3 className="text-xl font-bold text-white">{experience.position}</h3>
                      {experience.current && (
                        <span className="px-3 py-1 bg-green-600 text-white rounded-full text-xs font-medium">
                          Current
                        </span>
                      )}
                    </div>

                    <h4 className="text-lg font-semibold text-blue-400 mb-2">{experience.company}</h4>

                    <div className="flex flex-wrap gap-4 text-gray-400 text-sm mb-4">
                      <div className="flex items-center space-x-1">
                        <Calendar size={16} />
                        <span>
                          {formatDate(experience.startDate)} - {formatDate(experience.endDate)}
                        </span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <MapPin size={16} />
                        <span>{experience.location}</span>
                      </div>
                    </div>

                    <ul className="space-y-2 mb-4">
                      {experience.description.map((item, itemIndex) => (
                        <li key={itemIndex} className="text-gray-300 text-sm flex items-start">
                          <span className="text-blue-400 mr-2 mt-1.5 flex-shrink-0">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Key Achievements */}
                    <div className="mb-4">
                      <h5 className="text-white font-semibold mb-2 flex items-center">
                        <TrendingUp size={16} className="mr-2 text-green-400" />
                        Key Achievements
                      </h5>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {experience.achievements.map((achievement, achIndex) => (
                          <div key={achIndex} className="text-green-400 text-xs bg-green-400/10 px-2 py-1 rounded">
                            {achievement}
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {experience.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 bg-blue-600/20 text-blue-400 rounded text-xs font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {/* Education */}
            <div className="relative flex items-center md:flex-row">
              <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-green-500 rounded-full transform -translate-x-2 md:-translate-x-2 z-10 border-4 border-gray-900"></div>

              <div className="w-full md:w-5/12 ml-16 md:ml-0 md:mr-8">
                <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <h3 className="text-xl font-bold text-white mb-2">Education</h3>
                  <h4 className="text-lg font-semibold text-green-400 mb-2">{education.institution}</h4>
                  <p className="text-white font-medium mb-2">{education.degree}</p>
                  
                  <div className="flex flex-wrap gap-4 text-gray-400 text-sm mb-4">
                    <div className="flex items-center space-x-1">
                      <Calendar size={16} />
                      <span>{education.duration}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <MapPin size={16} />
                      <span>{education.location}</span>
                    </div>
                  </div>

                  <div className="text-gray-300 text-sm">
                    <p><strong>Minors:</strong> {education.minors}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;