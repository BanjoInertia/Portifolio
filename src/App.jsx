import { useEffect, useState } from 'react';
import './App.css';
import { Header } from './components/Header/Header';
import { NameDisplaySection } from './components/NameDisplaySection/NameDisplaySection';
import { InformationSection } from './components/InformationSection/InformationSection';
import { ProjectsSection } from './components/ProjectsSection/ProjectsSection';
import backgroundVideo from './assets/video.mp4';

function App() {
  const scrollTo = (section) => {
    document.querySelector(section).scrollIntoView({ behavior: "smooth" });
  };

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timeout1 = setTimeout(() => {
      setIsVisible(true);
    }, 10000);

    return () => {
      clearTimeout(timeout1);
    };
  }, []);

  return (
    <>
      <div id="section1">
        <section className='section_1'>
          <div className='overlay'></div>
          <video src={backgroundVideo} autoPlay muted />
          <Header scrollTo={scrollTo} aboutSection="#section2" projectsSection="#section3" />
          <NameDisplaySection />
          <button className={`next_arrow ${isVisible ? 'visible' : ''}`} onClick={() => scrollTo('#section2')} />
        </section>
      </div>

      <div id="section2">
        <section className='section_2'>
          <InformationSection />
          <button className={`next_arrow ${isVisible ? 'visible' : ''}`} onClick={() => scrollTo('#section3')} />
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
