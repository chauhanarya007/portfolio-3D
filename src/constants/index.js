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
    next,
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
      name: "next",
      icon: next,
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
      website_link: "https://3d-t-shirts-using-dall-e-ai.vercel.app/",
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
      name: "Car Rental Website",
      description:
        "CarHub utilizes Rapid API to fetch real-time car data, Next.js as its base layout framework, and TypeScript. It helps users to see different car models and price per day for booking rentals",
      tags: [
        {
          name: "TypeScript",
          color: "orange-text-gradient",
        },
        {
          name: "Next.js",
          color: "blue-text-gradient",
        },
        {
          name: "RapidAPIs",
          color: "green-text-gradient",
        },
        {
          name: "React",
          color: "pink-text-gradient",
        },
      ],
      image: forthone,
      source_code_link: "https://github.com/chauhanarya007/car-nextjs",
      website_link: "https://car-nextjs-cw5h.vercel.app/",
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