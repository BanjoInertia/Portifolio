import { useEffect, useState } from 'react';
import './App.css';
import { Header } from './components/Header/Header';
import { NameDisplaySection } from './components/NameDisplaySection/NameDisplaySection';
import { InformationSection } from './components/InformationSection/InformationSection';
import { ProjectsSection } from './components/ProjectsSection/ProjectsSection';
import backgroundVideo from './assets/video.mp4';

function App() {
  const [videoLoaded, setVideoLoaded] = useState(false);

  const scrollTo = (section) => {
    document.querySelector(section).scrollIntoView({ behavior: "smooth" });
  };

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
          />
          <Header 
            scrollTo={scrollTo} 
            aboutSection="#section2" 
            projectsSection="#section3" 
            videoLoaded={videoLoaded} 
          />
          <NameDisplaySection videoLoaded={videoLoaded} />
        </section>
      </div>

      <div id="section2">
        <section className='section_2'>
          <InformationSection />
          <button 
            className='next_arrow' 
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
