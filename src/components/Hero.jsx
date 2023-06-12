import { motion, useAnimation } from "framer-motion";
import Typed from "react-typed"
import { styles } from "../styles";
//import { ComputersCanvas } from "./canvas";
import Spline from '@splinetool/react-spline';
// import { handEmoji } from "../assets";
import { handEmoji } from "../assets";
import { Link as ScrollLink } from "react-scroll";
import { useEffect } from "react";




const Hero = () => {
  const scrollAnimation = useAnimation();

  useEffect(() => {
    const animationControls = async () => {
      while (true) {
        await scrollAnimation.start({
          y: [0, 24, 0],
          transition: { duration: 4.5, repeat: Infinity, repeatType: "loop" },
        });
      }
    };

    animationControls();
  }, [scrollAnimation]);
  return (
    <section className={`relative w-full h-screen mx-auto`}>
    {/* <div className="flex flex-row sm:flex-col"> */}
      <div
        className={`absolute inset-0 top-[120px] max-w-l sm:px-10 px-6 flex flex-row items-start gap-5`}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>

        <div className="min-w-[10rem] md:w-auto p-0">
          <h2 className={`${styles.heroPreText} font-bold text-white-100`}>
          Hi, I&apos;m
          </h2>
          <h1 className={`${styles.heroHeadText} text-white flex`}>
             &nbsp; <span className='text-[#915EFF]'>Arya </span>
            <img className="js-lazy lazy hand is-loaded" src={handEmoji} alt="Hi emoji"></img>
            
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
          {/* I'm a Versatile Programmer <br className='sm:block hidden' />
          Seeking Opportunities in Frontend<br className='sm:block hidden' />
          and Backend Development */}
          I&apos;m&nbsp;
          <Typed strings={[
            'Ambitious.',
            'Adaptable.',
            'Collaborative.',           
            'a Fast learner.',          
            'a Problem solver.',         
            'Resilient.',         
          ]}
            typeSpeed={150}
            backSpeed={50}
            loop
          /> &nbsp; <br />
          
          </p>
          <h4 className="text-gray-400">Seeking Opportunities in Frontend <br className='sm:block hidden' />
          and Backend Development</h4>
        </div>
        
      </div>
      <div className=" flex top-[15rem] ml-0 md:ml-40">
        <Spline className=" absolute md:top-auto md:h-auto top-50" scene="https://prod.spline.design/78Um8c-bj828zAKq/scene.splinecode" />
      </div>

      {/* <ComputersCanvas /> */}
      
        {/* Scroll Button */}
        <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <ScrollLink to="about" smooth={true} duration={500}>
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-gray-300 flex justify-center items-start p-2 cursor-pointer">
            <motion.div
              animate={scrollAnimation}
              className="w-3 h-3 rounded-full bg-gray-300 mb-1"
            />
          </div>
        </ScrollLink>
      </div>
    </section>
  );
};

export default Hero;
