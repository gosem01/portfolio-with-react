import Header from './components/Header';
import Contact from './components/Contact';
import './App.css';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Project from './components/Project';

function App() {
  const [showProjects, setShowProjects] = useState(false);

  const projects = [
    {
      title: 'Turn Up',
      description: 'Find local events and meetups near you.',
      imageUrl: 'logo192.png',
      projectUrl: 'https://example.com/project1',
    },
    {
      title: 'National Park Reviewer 5000',
      description: 'Write and read about national parks. Find out if they are worth visiting.',
      imageUrl: 'logo192.png',
      projectUrl: 'https://example.com/project2',
    },
  ];

  useEffect(() => {
    if (window.location.hash === '#portfolio') {
      setShowProjects(true);
    }

    window.onhashchange = () => {
      if (window.location.hash === '#portfolio') {
        setShowProjects(true);
      } else {
        setShowProjects(false);
      }
    };
  }, []);

  if (!showProjects) {
    return null;
  }

  return (
    <>
      <Header />
      <Navigation />
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
      <Contact />
      <Footer />
    </>
  );
}

export default App;
