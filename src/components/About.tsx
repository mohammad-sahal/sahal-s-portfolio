import React from 'react';
import { Code, Users, Lightbulb, Target } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: <Code className="w-6 h-6" />,
      title: 'Full-Stack Development',
      description: 'Proficient in JavaScript, TypeScript, React, Node.js, and React Native'
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: 'Problem Solving',
      description: 'Known for efficient coding practices and innovative solutions'
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: 'Team Collaboration',
      description: 'Effective collaboration within cross-functional teams'
    },
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: 'Innovation',
      description: 'Passionate about leveraging modern technologies'
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-800 mb-4">About Me</h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Software Engineer with 2 years of experience in full-stack development. 
            I specialize in building and optimizing scalable web and mobile applications 
            with a strong foundation in modern technologies.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {highlights.map((item, index) => (
            <div
              key={index}
              className="text-center p-6 rounded-xl bg-slate-50 hover:bg-gradient-to-br hover:from-blue-50 hover:to-teal-50 transition-all duration-300 hover:shadow-lg group"
            >
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-teal-600 transition-colors duration-300">
                <div className="text-white">
                  {item.icon}
                </div>
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-2">{item.title}</h3>
              <p className="text-slate-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;