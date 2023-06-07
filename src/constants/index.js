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
    forthone,
    thirdone,
    carrent,
    jobit,
    tripguide,
    threejs,
    angular,
    java,
    swift,
    netcore,
    sql,
    secondone,
    laravel,
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
      name: "Laravel",
      icon: laravel,
    },
    {
      name: "Swift",
      icon: swift,
    },
    {
      name: "Java",
      icon: java,
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
    {
      name: "DALL-E Clone",
      description:
        "Web Application made using Vite, OpenAI, MongoDB, and Cloudinary, this website generates captivating images through the magic of AI. Also share your masterpieces within the community.",
      tags: [
        {
          name: "OpenAI",
          color: "blue-text-gradient",
        },
        {
          name: "MongoDB",
          color: "green-text-gradient",
        },
        {
          name: "Cloudinary",
          color: "pink-text-gradient",
        },
      ],
      image: secondone,
      source_code_link: "https://github.com/chauhanarya007/midjourney_clone/tree/master/server",
      website_link: "https://midjourney-clone-beta.vercel.app/",
    },
    {
      name: "User Data Laravel App",
      description:
        "Web application built with PHP Laravel, React, and Context API. Experience user management with seamless sign-in and sign-up functionalities, coupled with personalized data that can be easily modified once logged in.",
      tags: [
        {
          name: "PHP",
          color: "green-text-gradient",
        },
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "Laravel",
          color: "orange-text-gradient",
        },
        {
          name: "contextAPI",
          color: "pink-text-gradient",
        },
      ],
      image: thirdone,
      source_code_link: "https://github.com/chauhanarya007/laravel-react-database-app",
      website_link: "https://grocecheetah.com/",
    },
    {
      name: "Nike website overhaul",
      description:
        "Website made using HTML, CSS and Js this website is a redesign of the original nike website with added features like custom cursor and animations.",
      tags: [
        {
          name: "HTML",
          color: "blue-text-gradient",
        },
        {
          name: "CSS",
          color: "green-text-gradient",
        },
        {
          name: "JS",
          color: "pink-text-gradient",
        },
      ],
      image: forthone,
      source_code_link: "https://github.com/chauhanarya007/Nike-Website",
      website_link: "https://nike-website-beryl.vercel.app/",
    }
  ];
  
  export { services, technologies, projects };