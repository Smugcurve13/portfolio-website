import React from 'react';


const About: React.FC = () => {
  

  return (
    <section id="about" className="py-20 bg-gray-800">
      <div className="max-w-4xl mx-auto px-6">
        <div className="bg-gray-900 p-8 rounded-lg shadow-lg">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-8 text-left">About Me</h2>
          <p className="text-gray-300 text-lg md:text-xl leading-relaxed mb-10 text-left italic">
            "I've got a great idea, but I have no idea if it's a good one." — Doctor Strange, Marvel Comics
          </p>
          <p className="text-gray-300 text-lg md:text-xl leading-relaxed mb-10 text-left">
            I'm a Python developer who is passionate about creating elegant, modular solutions. I build systems with a focus on clean architecture, because I believe the best code is adaptable and easy to work with.
          </p>
          <div className="space-y-6 text-gray-300 text-left">
            <p><span role="img" aria-label="rocket">🚀</span> My projects range from web applications to powerful automation tools.</p>
            <p><span role="img" aria-label="seedling">🌱</span> I'm always exploring new technologies and advanced concepts, from Python to modern web frameworks.</p>
            <p><span role="img" aria-label="people">🤝</span> Let's collaborate! I'm looking for exciting projects and open-source initiatives to contribute to.</p>
            <p><span role="img" aria-label="speech bubble">💬</span> Let's talk! Ask me about Games, Tech News, or anything code-related.</p>
            <p><span role="img" aria-label="joystick">🎮</span> When I'm not building things, I'm usually gaming or diving into the latest tech trends.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
