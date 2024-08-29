import { useState } from 'react';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';


function App() {
  const [selectedPage, setSelectedPage] = useState<string>('Home');

  const renderContent = () => {
    switch (selectedPage) {
      case 'Home':
        return (
          <div>
            <h2>Meet Vineet!</h2>
            <div className='home-header'>
              <img src={`${process.env.PUBLIC_URL}/portfolio.jpg`} alt="Portfolio" className="portfolio-img" />
              <div className='portfolio-highlights'>
                <h3>Loves Coding and Data</h3>
                <h3>Loves Hiking and Skiing</h3>
                <h3>Reliable, Dependable, Teamplayer</h3>
              </div>
            </div>
          </div>
          
        );
      case 'Experience':
        return (
          <div className='experience'>
            <h1>Experience</h1>
            <p>
              I am a software developer with a wide breadth of knowledge and 8+ years of experience. I love creating
               beautiful codebases that are maintainable, extendable, easy to understand, self documenting,
               easy to test, build and deploy. In other words, I will write a codebase for you that would 
               make Martin Fowler and Robert Martin proud.
            </p>
            <h2>Full Stack Development</h2>
            <div>
              <ul>
                <li>ReactJS based single page applications</li>
                <li>Python, NodeJS based backends</li>
                <li>SQL and NoSQL Databases</li>
                <li>Unit testing from user perspective</li>
                <li>Logging, monitoring and outage response</li>
              </ul>
            </div>

            <h2>Data Engineering</h2>
            <div>
              <ul>
                <li>Data ETL, Pipelines</li>
                <li>Optimizing data storage for query patterns</li>
                <li>Tiered data storage, cost optimization</li>
                <li>Automated Backups, disaster recovery</li>
              </ul>
            </div>

            <h2>Machine Learning</h2>
            <div>
              <ul>
                <li>Feature Engineering, ModelTraining and deployment</li>
                <li>ML lifecycle management using ML Flow</li>
                <li>Metrics, Reporting, Explainability</li>
              </ul>
            </div>

            <h2>Dev Ops</h2>
            <div>
              <ul>
                <li>Server and Serverless deployment on AWS</li>
                <li>Containerization, build, deployment and logging</li>
                <li>Autoscaling, cost optimization</li>
              </ul>
            </div>

          </div>
        );
        case 'Contact':
          return (
            <div>
              <h2>Get in touch with me!</h2>
              Best way to reach me is to email me at vineetagarwal[two-zero-eight]@gmail.com.
              Alternatively, message me on LinkedIn!
            </div>
          );
      default:
        return <h2>Welcome to the Home Page</h2>;
    }
  };

  return (
    <div className="app">
      <div className="nav">
        <ul>
          <li onClick={() => setSelectedPage('Home')}>Home</li>
          <li onClick={() => setSelectedPage('Experience')}>Experience</li>
          <li onClick={() => setSelectedPage('Contact')}>Contact</li>
          <li>
            <a href="https://www.linkedin.com/in/vineet-agarwal-3733b961/" target="_blank" rel="noopener noreferrer" className="linkedin-link">
              <FontAwesomeIcon icon={faLinkedin} /> LinkedIn
            </a>
          </li>
        </ul>
      </div>
      <div className="content">
        {renderContent()}
      </div>
    </div>
  );
}

export default App;
