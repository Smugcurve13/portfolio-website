import React from 'react';
import { Code, Database, Globe, Gamepad2 } from 'lucide-react';

const About: React.FC = () => {
  const skills = [
    { name: 'Python', level: 90, icon: <Code className="w-5 h-5" /> },
    { name: 'JavaScript', level: 75, icon: <Globe className="w-5 h-5" /> },
    { name: 'React', level: 80, icon: <Globe className="w-5 h-5" /> },
    { name: 'Data Analysis', level: 85, icon: <Database className="w-5 h-5" /> },
    { name: 'Game Development', level: 70, icon: <Gamepad2 className="w-5 h-5" /> },
    { name: 'Web Development', level: 75, icon: <Globe className="w-5 h-5" /> }
  ];

  return (
    <section id="about" className="py-20 bg-gray-800">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            I'm a passionate Python developer with a love for creating innovative solutions. 
            Currently working on various projects ranging from web applications to automation tools. 
            I enjoy exploring new technologies and turning ideas into reality through code.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Profile Info */}
          <div>
            <div className="bg-gray-900 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-white mb-6">Get to know me</h3>
              <div className="space-y-4 text-gray-300">
                <p>
                  🔭 I'm currently working on Python projects and expanding my expertise in web development.
                </p>
                <p>
                  🌱 I'm constantly learning and exploring advanced Python concepts, web frameworks, and modern development practices.
                </p>
                <p>
                  👯 I'm looking to collaborate on exciting future projects and contribute to open-source initiatives.
                </p>
                <p>
                  💬 Ask me about Games, Coding, Tech News, or anything tech-related!
                </p>
                <p>
                  🎮 When I'm not coding, you'll find me gaming or staying updated with the latest tech trends.
                </p>
              </div>
            </div>
          </div>

          {/* Skills */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-6">Technical Skills</h3>
            <div className="space-y-4">
              {skills.map((skill, index) => (
                <div key={index} className="bg-gray-900 p-4 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center space-x-2">
                      <span className="text-blue-400">{skill.icon}</span>
                      <span className="text-white font-medium">{skill.name}</span>
                    </div>
                    <span className="text-gray-400">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div 
                      className="bg-blue-600 h-2 rounded-full transition-all duration-500"
                      style={{ width: `${skill.level}%` }}
                    ></div>
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
