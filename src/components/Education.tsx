import React from 'react';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';

const Education = () => {
  const education = [
    {
      degree: 'Bachelor of Commerce',
      institution: 'Bachelor of Arts and Science',
      location: 'Kuriady, Kerala, India',
      period: 'Jun 2020 – Jan 2023',
      type: 'Bachelor\'s Degree'
    },
    {
      degree: 'PLUS TWO Commerce',
      institution: 'GHSS Kuriady',
      location: 'Kuriady, Kerala, India',
      period: 'Jun 2018 – Mar 2020',
      type: 'Higher Secondary'
    },
    {
      degree: 'SSLC',
      institution: 'GHSS Kuriady',
      location: 'Kuriady, Kerala, India',
      period: 'Jun 2017 – Mar 2018',
      type: 'Secondary Education'
    }
  ];

  return (
    <section id="education" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-800 mb-4">Education</h2>
          <p className="text-lg text-slate-600">My academic background and qualifications</p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            {education.map((edu, index) => (
              <div
                key={index}
                className="relative bg-slate-50 rounded-xl p-8 hover:bg-gradient-to-r hover:from-blue-50 hover:to-teal-50 transition-all duration-300 hover:shadow-md group"
              >
                <div className="flex flex-col lg:flex-row lg:items-center">
                  <div className="flex items-start lg:items-center mb-4 lg:mb-0 lg:mr-8">
                    <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mr-4 group-hover:bg-teal-600 transition-colors duration-300">
                      <GraduationCap className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-grow">
                      <h3 className="text-xl font-bold text-slate-800 mb-1">{edu.degree}</h3>
                      <p className="text-blue-600 font-medium">{edu.institution}</p>
                      <div className="flex flex-col sm:flex-row sm:gap-4 mt-2 text-slate-500 text-sm">
                        <div className="flex items-center">
                          <Calendar size={14} className="mr-1" />
                          {edu.period}
                        </div>
                        <div className="flex items-center">
                          <MapPin size={14} className="mr-1" />
                          {edu.location}
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="lg:ml-auto">
                    <span className="inline-block bg-white text-slate-700 px-4 py-2 rounded-full text-sm font-medium border border-slate-200">
                      {edu.type}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;