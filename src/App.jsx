import { useEffect, useRef, useState } from 'react'
import './App.css'
import { Header } from './components/Header/Header'
import { Section1 } from './components/Section1/Section1'
import { Section2 } from './components/Section2/Section2'
import { Section3 } from './components/Section3/Section3'
import backgroundVideo from './assets/video.mp4'

function App() {
  const section1 = useRef();
  const section2 = useRef();
  const section3 = useRef();

  function scrollTo(section) {
    section.current.scrollIntoView({ behavior: "smooth"});
  }

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
      <div ref={section1}>
        <section className='section_1'>
            <div className='overlay'></div>
            <video src={backgroundVideo} autoPlay muted />
            <Header scrollTo={scrollTo} aboutSection={section2} projectsSection={section3} />
            <Section1 />
            <button className={`next_arrow ${isVisible ? 'visible' : ''}`} onClick={() => scrollTo(section2)} />
        </section>
      </div>

      <div ref={section2}>
        <section className='section_2'>
            <Section2 />
            <button className='next_arrow' onClick={() => scrollTo(section3)} />
        </section>
      </div>

      <div ref={section3}>
        <section className='section_3'>
            <Section3 />
        </section>
      </div>
    </>
  )
}

export default App
