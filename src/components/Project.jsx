import React from 'react';

const Project = () => {
  const projects = [
    { name: "BiblioByte",
      description: "BiblioByte is an online bookstore where users can read both free and paid books. Authorized users can read paid book. It offers a smooth reading experience across various categories and titles.",
      tech: "MongoDB, Express, React, Node.js",
      liveDemo: "https://bibliobyte11.netlify.app",
      repo: "https://github.com/Rupabharti/project/tree/main/Bibliobyte",
     
    },
    {name: "Portfolio",
      description: "Portfolio highlights my work as a web developer, specializing in the MERN stack.  I am focused on building user-friendly applications and continuously improving my skills while seeking new opportunities to contribute to impactful projects.",
      tech: "MongoDB, Express, React, Node.js",
      liveDemo: "https://bibliobyte.com",
      repo: "https://github.com/yourusername/bibliobyte",
      
    },
     {name: "rock paper scissors game",
      description: " In the Rock Paper Scissors game, the user selects an option (Rock, Paper, or Scissors), and the computer randomly chooses one. If both choices match, the user wins; otherwise, the computer wins. ",
      tech: "html,css,javascript",
      liveDemo: "https://rockpaperscissorsgame111.netlify.app/",
      repo: "https://github.com/yourusername/rockpaperscissors",
      
    },
     {name: "Corrency convter",
      description: "A simple tool to convert currencies in real-time. Just select the currencies, enter the amount, and get the converted value instantly using live exchange rates. ",
      tech: "html,css,javascript,API",
      liveDemo: "https://lighthearted-strudel-bc7814.netlify.app/",
      repo: "https://github.com/Rupabharti/Corrency-convter",
      
    },
    {
       
        name: "StudyNotion",
        description: "An e-learning platform where users can access various courses, track progress, and interact with instructors instructor can  perform CURD opretion.",
        tech: "MongoDB, Express, React, Node.js",
        liveDemo: "https://studynotion.com",
        repo: "https://github.com/yourusername/studynotion",
      },
  ];

  return (
    <div name="Project" className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-24"> 
    <section id="projects">
      <h2 className="text-4xl font-bold text-gray-800 mb-8 border-b-2 border-gray-700 pb-5">Projects</h2>
      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <div key={index} className="bg-white shadow-lg rounded-lg p-6 transition hover:shadow-2xl">
            <h3 className="text-2xl font-semibold mb-3">{project.name}</h3>
            <p className="text-gray-700 mb-4">{project.description}</p>
            <p className="text-sm text-gray-500 mb-4">Technologies: {project.tech}</p>
            <div className="flex space-x-4">
              <a href={project.liveDemo} target="_blank" rel="noopener noreferrer" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                Live Demo
              </a>
              <a href={project.repo} target="_blank" rel="noopener noreferrer" className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-900">
                GitHub Repo
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
    </div>
  );
};

export default Project;
