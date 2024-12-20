import React from 'react';

function ProjectsSection() {
  const projects = [
    {
      imageSrc: 'https://res.cloudinary.com/dswf2lsf4/image/upload/f_auto,q_auto/v1/portfolio/projects/its4bnhjkesoqskqypbt',
      altText: 'Rock-Paper-Scissors',
      date: 'April 12, 2024',
      description: 'This Rock-Paper-Scissors game is a digital version of the classic hand game, implemented using HTML, CSS, and JavaScript. Players compete against the computer by selecting Rock, Paper, or Scissors.',
    },
    {
      imageSrc: 'https://res.cloudinary.com/dswf2lsf4/image/upload/f_auto,q_auto/v1/portfolio/projects/nmdlxxgog1pvevrfonnz',
      altText: 'Capital Quiz App',
      date: 'May 16, 2024',
      description: 'The Capital Quiz App is an interactive, educational game designed to test and enhance users\' knowledge of world capitals.',
    },
    {
      imageSrc: 'https://res.cloudinary.com/dswf2lsf4/image/upload/f_auto,q_auto/v1/portfolio/projects/q7ibl9x5sm31kvn4wxdq',
      altText: 'E-commerce Website',
      date: 'July 10, 2024',
      description: 'The Women\'s Clothing E-commerce Website is a comprehensive online shopping platform tailored for women who seek the latest fashion trends, stylish apparel, and accessories.',
    },
  ];

  return (
    <div id="project" className="section">
      <div className="bg-white py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900">Projects</h2>
          <p className="mt-4 text-gray-600">Explore our featured projects that showcase innovation, creativity, and technical expertise.</p>
        </div>

        <div className="container mx-auto mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-2xl">
              <div className="flex justify-center">
                <img
                  className="object-cover transition-opacity duration-300 hover:opacity-80"
                  style={{ width: index === 2 ? '290px' : '192px' }}
                  src={project.imageSrc}
                  alt={project.altText}
                />
              </div>
              <div className="p-6">
                <div className="flex items-center text-gray-600 text-sm mb-4">
                  <span>{project.date}</span>
                  <span className="mx-2">•</span>
                </div>
                <h3 className="text-md font-semibold text-gray-900 transition-colors duration-300 hover:text-indigo-500">
                  {project.description}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProjectsSection;
