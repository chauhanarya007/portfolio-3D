import { BrowserRouter } from "react-router-dom";
//import { useEffect, useState } from "react";
//import { motion } from "framer-motion";
import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas } from "./components";

const App = () => {
//   const [mousePosition, setMousePosition] = useState({
//     x: 0,
//     y: 0,
//   });
//   useEffect(() => {
//     const mouseMove = e => {
//       setMousePosition({
//         x: e.clientX,
//         y: e.clientY
//       })
//     }
//     window.addEventListener("mousemove", mouseMove);
//     return () => {
//       window.removeEventListener('mousemove', mouseMove)
//     }
//   }, []);
//   const variants = {
//     default: {
//       x: mousePosition.x - 16,
//       y: mousePosition.y - 16,
//     }
//   }
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        <Works />
        <Feedbacks />
        <div className='relative z-0'>
          <Contact />
          <StarsCanvas />
        </div>
      </div>
      {/* <motion.div 
      className="cursor"
      variants={variants}
      animate='default'
      ></motion.div> */}
    </BrowserRouter>
  );
}

export default App;
