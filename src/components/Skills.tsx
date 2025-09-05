import React from 'react';
import { Code, Database, Wrench, Globe } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      icon: <Code className="w-6 h-6" />,
      title: 'Frontend Development',
      color: 'blue',
      skills: [
        'JavaScript', 'TypeScript', 'React.js', 'React Native', 'Next.js', 
        'Redux', 'Gatsby.js', 'Vue.js', 'HTML5', 'CSS3', 'Bootstrap', 
        'Tailwind CSS', 'Material-UI', 'Ant Design'
      ]
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: 'Backend & Database',
      color: 'teal',
      skills: [
        'Node.js', 'Express.js', 'Python', 'FastAPI', 'MongoDB', 
        'PostgreSQL', 'SQL', 'Firebase', 'CMS', 'Strapi'
      ]
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: 'Cloud & DevOps',
      color: 'purple',
      skills: [
        'AWS', 'Hostinger', 'Firebase Hosting', 'CI/CD', 'Git', 'Docker'
      ]
    },
    {
      icon: <Wrench className="w-6 h-6" />,
      title: 'Soft Skills',
      color: 'green',
      skills: [
        'Problem Solving', 'Time Management', 'Critical Thinking', 
        'Adaptability', 'Team Collaboration', 'Project Management'
      ]
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap: { [key: string]: { bg: string; text: string; hover: string } } = {
      blue: { bg: 'bg-blue-600', text: 'text-blue-600', hover: 'hover:bg-blue-50' },
      teal: { bg: 'bg-teal-600', text: 'text-teal-600', hover: 'hover:bg-teal-50' },
      purple: { bg: 'bg-purple-600', text: 'text-purple-600', hover: 'hover:bg-purple-50' },
      green: { bg: 'bg-green-600', text: 'text-green-600', hover: 'hover:bg-green-50' }
    };
    return colorMap[color];
  };

  return (
    <section id="skills" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-800 mb-4">Skills & Technologies</h2>
          <p className="text-lg text-slate-600">Technologies and tools I work with</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => {
            const colors = getColorClasses(category.color);
            return (
              <div
                key={index}
                className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <div className="flex items-center mb-6">
                  <div className={`w-12 h-12 ${colors.bg} rounded-lg flex items-center justify-center mr-4`}>
                    <div className="text-white">
                      {category.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-slate-800">{category.title}</h3>
                </div>
                
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 ${colors.text} bg-slate-50 ${colors.hover} border border-slate-200`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;