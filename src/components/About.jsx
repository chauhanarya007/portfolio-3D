import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className="xs:w-[250px] w-full">
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
      >
        <img
          src={icon}
          alt="web-development"
          className="w-16 h-16 object-contain"
        />

        <h3 className="text-white text-[20px] font-bold text-center">
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-4xl leading-[30px]"
      >
        <b>Languages and Frameworks:</b> I have experience and proficiency in
        the following languages and frameworks:<span className="font-semibold"> ASP.NET, C#, Java, Swift,
        JavaScript, HTML5, CSS3, SQL, PHP, Node.js, Bootstrap, Ruby, Angular,
        Typescript, React, Laravel, Next.js,</span> I am confident in my ability to
        work with these languages and frameworks, and I am continuously
        expanding my knowledge and skills in order to stay up-to-date with the
        latest advancements in web development. <br />
        <b>Database:</b> I have a strong understanding of database management
        systems such as <span className="font-semibold">MySQL, MongoDB,</span> and <span className="font-semibold">MS SQL Server.</span>
        <br />
        <b>Development Tools:</b> I am well-versed in various development tools
        and technologies, including<span className="font-semibold"> Git, GitHub, SDLC (Software Development Life
        Cycle), Visual Studio Code, Visual Studio 2019, IntelliJ, XCode, Atom,
        NetBeans, Eclipse, and phpMyAdmin.</span>
        <br />
        <b>Graphic Designing:</b> I have experience in graphic designing using
        tools such as<span className="font-semibold"> Figma, Webflow,</span> and <span className="font-semibold">Adobe Suite,</span> including <span className="font-semibold">Photoshop and
        Premier Pro.</span> Additionally, I am skilled in video editing.
        <br />
        <b>Social Media:</b> I possess comprehensive knowledge and hands-on expertise in effectively managing diverse social media platforms, including Facebook, Snapchat, TikTok, and Instagram. Furthermore, I excel in growth strategies and adeptly manage advertising campaigns utilizing the Shopify Backend, as demonstrated by my accomplishments in generating substantial online sales and collaborating with both small and large brands to achieve impressive sales figures
        <br />
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
