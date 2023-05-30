import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import "../index.css";

import { styles } from "../styles";
//import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import Spline from '@splinetool/react-spline';
//template_42cw56b
//service_wiohz8l
//cNubhhnhV9YPryeUD
const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
       'service_wiohz8l',
       'template_a7zr4p3',
        {
          from_name: form.name,
          to_name: "Arya Chauhan",
          from_email: form.email,
          to_email: "fabspire7@gmail.com",
          message: form.message,
        },
        'ukZOqv0lFL5qNStKo'
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);

          alert("Ahh, something went wrong. Please try again.");
        }
      );
  };

  return (
    <div
      className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden `}
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='flex-[0.75] bg-gray-800 p-8 rounded-2xl'
      >
      
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.contactHeadText}>Contact Me</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className='mt-12 flex flex-col gap-8'
        >
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Name</span>
            <input
              type='text'
              name='name'
              value={form.name}
              onChange={handleChange}
              placeholder="Name"
              className='bg-gray-700 py-4 px-6 placeholder:text-gray-600 text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your email</span>
            <input
              type='email'
              name='email'
              value={form.email}
              onChange={handleChange}
              placeholder="Email"
              className='bg-gray-700 py-4 px-6 placeholder:text-gray-600 text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Message</span>
            <textarea
              rows={7}
              name='message'
              value={form.message}
              onChange={handleChange}
              placeholder='Say Anything!'
              className='bg-gray-700 py-4 px-6 placeholder:text-gray-600 text-white rounded-lg outline-none border-none font-medium'
            />
          </label>

          <button
            type='submit'
            className='bg-gray-500 py-3 transition duration-350 ease-out hover:ease-in px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary
            hover:bg-gradient-to-r from-violet-800 to-violet-500 
            '
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
      >
        {/* <EarthCanvas /> */}
        <div className="absolute z-10 flex items-end -top-[50px] md:top-[20px] md:-left-[70px] w-[550px] h-[540px] md:w-[850px] md:h-[840px]  m-0">
        <Spline scene="https://prod.spline.design/aJFrngneqsI3yqAe/scene.splinecode" />
        </div>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
