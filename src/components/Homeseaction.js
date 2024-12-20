import React from "react";

const HomeSection = () => {
  return (
    <div className="desktop-view relative h-lvh content-center">
      <div className="flex justify-center mt-12 md:mt-0 relative">
        <div className="text-center">
          <h1 className="text-6xl font-bold mt-8 md:mt-0">Bhumika Pandey</h1>
          <div id="typeWritten" className="mt-4">
            <h2 className="text-2xl"></h2>
            <div className="typed-text hidden">
              Web Designer, Web Developer, Front End Developer, Apps Developer, Graphic Designer
            </div>
          </div>
          <ul className="inline-flex space-x-6 mt-6">
            <li>
              <a
                href="https://linkedin.com/"
                aria-label="LinkedIn"
                className="text-2xl text-gray-700 hover:text-blue-600"
              >
                <i className="fab fa-linkedin"></i>
              </a>
            </li>
            <li>
              <a
                href="https://github.com/"
                aria-label="GitHub"
                className="text-2xl text-gray-700 hover:text-blue-600"
              >
                <i className="fab fa-github"></i>
              </a>
            </li>
            <li>
              <a
                href="https://x.com/pandeyBhumika34"
                aria-label="Twitter"
                className="text-2xl text-gray-700 hover:text-blue-600"
              >
                <i className="fab fa-twitter"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default HomeSection;
