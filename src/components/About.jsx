import React from "react";

const About = () => {
  return (
    <div className="min-h-screen flex-center py-10 px-4" id="about">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-8 bg-head rounded-xl shadow-xl">
          <div className="md:w-1/2 h-[400px] relative">
            <img 
              src='https://img.freepik.com/free-vector/internet-lessons-searching-remote-university-educational-programs-online-classes-website-high-school-student-with-magnifying-glass-cartoon-character_335657-3269.jpg?uid=R103903684&ga=GA1.1.1242532260.1709135486&semt=ais_hybrid' 
              alt="About Us" 
              className="w-full h-full object-cover rounded-t-xl  md:rounded-l-xl md:rounded-tr-none"
            />
            <div className="absolute inset-0 bg-black/30"></div>
          </div>
          
          <div className="md:w-1/2 p-6">
            <h1 className="text-3xl font-bold text-white mb-4 font-DM">
              About Us
              <div className="w-20 h-1 bg-htext mt-2"></div>
            </h1>
            
            <p className="text-gray-300 text-base mb-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro cumque excepturi 
              error maiores nihil ullam aut incidunt.
            </p>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-white">Mission</h3>
                  <p className="text-xs text-gray-400">Empowering education</p>
                </div>
              </div>
              
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-white">Vision</h3>
                  <p className="text-xs text-gray-400">Future of learning</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;