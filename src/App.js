import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Contact from './components/Contact';
import './App.css';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Project from './components/Project';

function App() {
  const [showProjects, setShowProjects] = useState(false);
  const [showContact, setShowContact] = useState(false);
  const [showAbout, setShowAbout] = useState(false);
  

  const projects = [
    {
      title: 'Project 1',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      imageUrl: 'project1.jpg',
      projectUrl: 'https://example.com/project1',
    },
    {
      title: 'Project 2',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      imageUrl: 'project2.jpg',
      projectUrl: 'https://example.com/project2',
    },
  ];


  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      setShowAbout(hash === '#about');
      setShowProjects(hash === '#portfolio');
      setShowContact(hash === '#contact');
    };

    window.addEventListener('hashchange', handleHashChange);
    handleHashChange();
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  return (
    <div className="App">
      <Header />
      {/* <Navigation /> */}
      {showProjects && (
        <section id="portfolio">
          <h2>Portfolio</h2>
          {projects.map((project, index) => (
            <Project
              key={index}
              title={project.title}
              description={project.description}
              imageUrl={project.imageUrl}
              projectUrl={project.projectUrl}
            />
          ))}
        </section>
      )}
      {showContact && <Contact />}
      {showAbout && (
        <section id="about">
          <h2>About Me</h2>
          <p>My name is George and I am an aspiring software engineer who is ready to tackle any problem.</p>
          <p>I love working with code and creating software out of thin air. To me this is the most magical thing.</p>
          <p>Welcome to my website and feel free to browse around and contact me if you interested in connecting!</p>
        </section>
      )}
      <Footer />
    </div>
  );
};

export default App;
