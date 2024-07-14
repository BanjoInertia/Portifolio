import { useEffect, useState } from 'react';
import './App.css';
import { Header } from './components/Header/Header';
import { NameDisplaySection } from './components/NameDisplaySection/NameDisplaySection';
import { InformationSection } from './components/InformationSection/InformationSection';
import { ProjectsSection } from './components/ProjectsSection/ProjectsSection';
import backgroundVideo from './assets/video.mp4';

function App() {
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const scrollTo = (section) => {
    document.querySelector(section).scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (videoLoaded) {
      // Optionally, handle visibility change after a certain condition
      setIsVisible(true);
    }
  }, [videoLoaded]);

  return (
    <>
      <div id="section1">
        <section className='section_1'>
          <div className='overlay'></div>
          <video 
            src={backgroundVideo} 
            autoPlay 
            muted 
            onLoadedData={() => setVideoLoaded(true)} 
            style={{ width: '100%', height: 'auto' }} // Ensure video fits container
          />
          <Header 
            scrollTo={scrollTo} 
            aboutSection="#section2" 
            projectsSection="#section3" 
            videoLoaded={videoLoaded} 
          />
          <NameDisplaySection videoLoaded={videoLoaded} />
          <button 
            className={`next_arrow ${isVisible ? 'visible' : ''}`} 
            onClick={() => scrollTo('#section2')} 
          />
        </section>
      </div>

      <div id="section2">
        <section className='section_2'>
          <InformationSection />
          <button 
            className={`next_arrow ${isVisible ? 'visible' : ''}`} 
            onClick={() => scrollTo('#section3')} 
          />
        </section>
      </div>

      <div id="section3">
        <section className='section_3'>
          <ProjectsSection />
        </section>
      </div>
    </>
  );
}

export default App;
