import React from "react";

const AboutPage = () => {
  return (
    <div className="bg-teal-100 min-h-screen">
      <div className="container mx-auto pt-20">
        <div className="max-w-3xl mx-auto px-4">
          <h1 className="text-4xl font-bold text-teal-800 mb-6">
            About Book Haven
          </h1>
          <p className="text-lg text-gray-800 leading-relaxed mb-4">
            Welcome to Book Haven, where a world of stories awaits you! We're
            passionate about connecting readers with their next great read and
            helping book enthusiasts buy, sell, and discover new stories.
          </p>
          {/* Other content goes here */}
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
