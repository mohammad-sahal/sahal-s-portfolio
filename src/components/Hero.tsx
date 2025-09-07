import React from "react";
import { ChevronDown, MapPin, Mail, Phone } from "lucide-react";

const Hero = () => {
  const scrollToAbout = () => {
    document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-blue-50 pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <div className="w-32 h-32 bg-gradient-to-br from-blue-600 to-teal-600 rounded-full mx-auto mb-8 flex items-center justify-center">
              <span className="text-4xl font-bold text-white">MS</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-slate-800 mb-4 leading-tight">
              Mohammad Sahal
            </h1>
            <h2 className="text-2xl md:text-3xl text-blue-600 font-medium mb-6">
              Software Engineer
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto mb-8 leading-relaxed">
              Full-stack developer with 2 years of experience in building
              scalable web and mobile applications. Passionate about leveraging
              modern technologies to drive innovation and deliver high-quality
              solutions.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <div className="flex items-center text-slate-600">
              <MapPin size={18} className="mr-2" />
              <span>Kerala, India</span>
            </div>
            <div className="flex items-center text-slate-600">
              <Phone size={18} className="mr-2" />
              <span>+91 89210 11060</span>
            </div>
            <div className="flex items-center text-slate-600">
              <Mail size={18} className="mr-2" />
              <span>mohammadsahal151@gmail.com</span>
            </div>
          </div>

          <div className="flex gap-4 justify-center">
            <button
              onClick={scrollToAbout}
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-200 shadow-lg hover:shadow-xl"
            >
              Learn More
            </button>
            <button
              onClick={() =>
                document
                  .querySelector("#contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="border border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-medium hover:bg-blue-600 hover:text-white transition-all duration-200"
            >
              Get In Touch
            </button>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <button
            onClick={scrollToAbout}
            className="text-slate-400 hover:text-blue-600 transition-colors duration-200"
          >
            <ChevronDown size={32} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
