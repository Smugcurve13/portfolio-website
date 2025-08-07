import React from 'react';


const About: React.FC = () => {
  

  return (
    <section id="about" className="py-20 bg-gray-800">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">About Me</h2>
          <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
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

          
        </div>
      </div>
    </section>
  );
};

export default About;
