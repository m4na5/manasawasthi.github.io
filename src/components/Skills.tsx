import React, { useState, useEffect, useRef } from 'react';

interface Skill {
  name: string;
  level: number;
  category: 'languages' | 'databases' | 'tools' | 'frameworks';
}

const Skills: React.FC = () => {
  const [visibleSkills, setVisibleSkills] = useState<Set<string>>(new Set());
  const sectionRef = useRef<HTMLDivElement>(null);

  const skills: Skill[] = [
    { name: 'JavaScript (ES6+)', level: 95, category: 'languages' },
    { name: 'TypeScript', level: 90, category: 'languages' },
    { name: 'Python', level: 85, category: 'languages' },
    { name: 'Java', level: 80, category: 'languages' },
    { name: 'Node.js', level: 95, category: 'frameworks' },
    { name: 'Express.js', level: 90, category: 'frameworks' },
    { name: 'React', level: 85, category: 'frameworks' },
    { name: 'GraphQL', level: 80, category: 'frameworks' },
    { name: 'PostgreSQL', level: 90, category: 'databases' },
    { name: 'MongoDB', level: 85, category: 'databases' },
    { name: 'Redis', level: 85, category: 'databases' },
    { name: 'Elasticsearch', level: 75, category: 'databases' },
    { name: 'Git', level: 95, category: 'tools' },
    { name: 'Docker', level: 80, category: 'tools' },
    { name: 'JUnit5', level: 85, category: 'tools' },
    { name: 'PubNub', level: 80, category: 'tools' },
  ];

  const categories = {
    languages: 'Languages',
    frameworks: 'Frameworks & Libraries',
    databases: 'Databases & Storage',
    tools: 'Tools & Platforms',
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const skillName = entry.target.getAttribute('data-skill');
            if (skillName) {
              setTimeout(() => {
                setVisibleSkills(prev => new Set([...prev, skillName]));
              }, Math.random() * 500);
            }
          }
        });
      },
      { threshold: 0.5 }
    );

    const skillElements = sectionRef.current?.querySelectorAll('[data-skill]');
    skillElements?.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const getSkillsByCategory = (category: keyof typeof categories) => 
    skills.filter(skill => skill.category === category);

  return (
    <section id="skills" className="py-20 bg-gray-900" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Skills & Technologies</h2>
          <div className="w-24 h-1 bg-blue-400 mx-auto rounded-full"></div>
          <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
            Technologies I've mastered through 3.5+ years of professional experience and continuous learning
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {Object.entries(categories).map(([categoryKey, categoryName]) => (
            <div key={categoryKey} className="space-y-6">
              <h3 className="text-xl font-semibold text-white text-center mb-6">
                {categoryName}
              </h3>
              <div className="space-y-4">
                {getSkillsByCategory(categoryKey as keyof typeof categories).map((skill) => (
                  <div
                    key={skill.name}
                    className="bg-gray-800 p-4 rounded-lg hover:bg-gray-700 transition-colors duration-300"
                    data-skill={skill.name}
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-white font-medium text-sm">{skill.name}</span>
                      <span className="text-blue-400 text-sm">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-600 rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-blue-500 to-green-500 h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{
                          width: visibleSkills.has(skill.name) ? `${skill.level}%` : '0%',
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;