import React from 'react';

const TestCard = ({ title, description, options }) => {
  return (
    <div className="bg-head p-8 rounded-2xl border border-gray-800 hover:shadow-xl transition-all">
      <h3 className="text-2xl font-bold text-white mb-4">{title}</h3>
      <p className="text-gray-400 mb-6">{description}</p>
      <div className="grid grid-cols-2 gap-4">
        {options.map((option, index) => (
          <div 
            key={index}
            className="bg-gray-800/50 p-4 rounded-lg hover:bg-blue-500/20 transition-all cursor-pointer"
          >
            <div className="flex items-center gap-3 mb-2">
              {option.icon}
              <h4 className="text-white font-semibold">{option.name}</h4>
            </div>
            <p className="text-sm text-gray-400">{option.description}</p>
          </div>
        ))}
      </div>
      <button className="w-full mt-6 button-style py-3 transition-all">
        Start Test
      </button>
    </div>
  );
};

const TestSection = () => {
  const testOptions = [
    {
      title: "Chapter-wise Tests",
      description: "Practice tests organized by specific chapters and topics",
      options: [
        {
          name: "Physics",
          description: "Mechanics, Thermodynamics, and more",
          icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
        },
        {
          name: "Chemistry",
          description: "Organic, Inorganic, Physical Chemistry",
          icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
        }
      ]
    },
    {
      title: "Difficulty-wise Tests",
      description: "Tests categorized by different difficulty levels",
      options: [
        {
          name: "Basic Level",
          description: "Fundamental concepts and problems",
          icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
        },
        {
          name: "Advanced Level",
          description: "Complex problems and analysis",
          icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0f172a] to-[#1e293b] py-16 px-4" id="feature">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">Practice Tests</h1>
          <p className="text-gray-400">Choose your preferred way to practice</p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {testOptions.map((option, index) => (
            <TestCard key={index} {...option} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestSection;