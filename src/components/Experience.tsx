import React from "react";
import { Calendar, MapPin, Building } from "lucide-react";

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-800 mb-4">Experience</h2>
          <p className="text-lg text-slate-600">
            My professional journey and achievements
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-blue-200"></div>

            <div className="relative">
              <div className="flex items-start mb-8">
                <div className="flex-shrink-0 w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center relative z-10">
                  <Building className="w-8 h-8 text-white" />
                </div>
                <div className="ml-8 bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300 flex-grow">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-slate-800">
                        Software Engineer
                      </h3>
                      <p className="text-blue-600 font-medium">Bairuha Tech</p>
                    </div>
                    <div className="flex flex-col lg:items-end text-slate-500 text-sm">
                      <div className="flex items-center">
                        <Calendar size={16} className="mr-1" />
                        Sep 2023 - Present
                      </div>
                      <div className="flex items-center mt-1">
                        <MapPin size={16} className="mr-1" />
                        Calicut, India
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3 text-slate-600">
                    <div className="flex items-start">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <p>
                        Managed UI with expertise in React, Redux, Next.js,
                        Gatsby.js, and Vue.js; HTML and CSS; skilled in
                        JavaScript
                      </p>
                    </div>
                    <div className="flex items-start">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <p>
                        Built React Native mobile application and API
                        integration for dynamic content
                      </p>
                    </div>
                    <div className="flex items-start">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <p>
                        UI framework for React, styled APIs with Node.js,
                        Next.js, Express.js, and Python FastAPI; managed MongoDB
                        and PostgreSQL databases
                      </p>
                    </div>
                    <div className="flex items-start">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <p>
                        UI frameworks: Proficient with React Native, Three.js
                        for 3D graphics, and styling with Sass and Tailwind CSS
                      </p>
                    </div>
                    <div className="flex items-start">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <p>
                        Mobile & DevOps: Created cross-platform apps with React
                        Native; implemented CI/CD pipelines and deployment
                        automation
                      </p>
                    </div>
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
