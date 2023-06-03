import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    reactjs,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    carrent,
    jobit,
    tripguide,
    threejs,
    angular,
    java,
    swift,
    netcore,
    sql,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "projects",
      title: "Projects",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Video Editor",
      icon: creator,
    },
  ];
  
  const technologies = [
    // {
    //   name: "HTML 5",
    //   icon: html,
    // },
    // {
    //   name: "CSS 3",
    //   icon: css,
    // },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    // {
    //   name: "Redux Toolkit",
    //   icon: redux,
    // },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "angular",
      icon: angular,
    },
    {
      name: "Java",
      icon: java,
    },
    {
      name: "Swift",
      icon: swift,
    },
    {
      name: "Net core",
      icon: netcore,
    },
    {
      name: "SQL",
      icon: sql,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    // {
    //   name: "figma",
    //   icon: figma,
    // },
    
  ];
  
  
  const projects = [
    {
      name: "AI Prompt T-shirts",
      description:
        "T-Shirt customization website built using Three.js, OpenAI, and React. The website allows users to create custom images on t-shirts using AI and customize them directly on the website.",
      tags: [
        {
          name: "openAI",
          color: "blue-text-gradient",
        },
        {
          name: "three.js",
          color: "orange-text-gradient",
        },
        {
          name: "tailwindcss",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/chauhanarya007/3d-T-Shirts_using-Dall.E-AI",
      website_link: "https://3dtshirts-using-midjourney-ai-kk7a.vercel.app/",
    },
    {
      name: "Songly",
      description:
        "Web application built using Vite, Rapid APIs and Redux that enables users to listen to music and get top charts and top artists in real time. Users can also see the local favourites near them.",
      tags: [
        {
          name: "vite",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "redux",
          color: "pink-text-gradient",
        },
        {
          name: "tailwindcss",
          color: "orange-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/chauhanarya007/Songly_API",
      website_link: "https://songly-api.vercel.app/",
    },
    {
      name: "Real Estate",
      description:
        "This website is made using ASP.NET, it leverages the power of MongoDB, Node.js, and Google authentication to provide users with a seamless online platform for buying and selling properties. ",
      tags: [
        {
          name: "ASP.net",
          color: "blue-text-gradient",
        },
        {
          name: "MongoDB",
          color: "green-text-gradient",
        },
        {
          name: "Node.js",
          color: "pink-text-gradient",
        },
        {
          name: "GoogleOAuth",
          color: "orange-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/chauhanarya007/estateTracker",
      website_link: "https://estatetracker.onrender.com/",
    },
  ];
  
  export { services, technologies, projects };