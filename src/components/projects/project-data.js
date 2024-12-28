import * as images from "../../assets/project-img";

const { img2, img4, img5, img6, img7 } = images;

const prod = [
  {
    id: 1,
    name: "Blogger Platform",
    description:
      "Built a dynamic and responsive blogging platform using ReactJS and Redux for state management. TailwindCSS ensured a sleek and modern UI, while MongoDB, NodeJS, and ExpressJS powered the backend and database. Deployed seamlessly on Render for live accessibility.",
    src: img7,
    btn1: "Code",
    btn2: "Live Demo",
    tech: "ReactJS - Redux - ReduxToolkit - TailwindCSS - MongoDB - NodeJS - ExpressJS",
    code: "",
    live: "https://bolger.onrender.com/",
  },
  {
    id: 2,
    name: "MERNMart",
    description:
      "Developed a fully functional e-commerce platform using the MERN stack. Integrated PayPal for secure transactions, ReduxToolkit for efficient state management, and TailwindCSS for a responsive design. Deployed on Render for scalability.",
    src: img6,
    btn1: "Code",
    btn2: "Live Demo",
    tech: "ReactJS - Redux - ReduxToolkit - TailwindCSS - MongoDB - NodeJS - ExpressJS - PayPal",
    code: "",
    live: "https://oneble.onrender.com/",
  },
  {
    id: 3,
    name: "FreelancePro",
    description:
      "Created an interactive freelancing portfolio using ReactJS and Framer Motion for smooth animations and dynamic user experience. Optimized for performance and deployed for live use.",
    src: img2,
    btn1: "Code",
    btn2: "Live Demo",
    tech: "ReactJS, FramerMotion",
    code: "",
    live: "https://freelancerportfolio.onrender.com",
  },
  {
    id: 4,
    name: "Country Explorer",
    description:
      "Built a ReactJS application that consumes REST APIs to fetch and display real-time data about countries. Ensured a user-friendly interface with responsive design and smooth navigation.",
    src: img5,
    btn1: "Code",
    btn2: "Live Demo",
    tech: "ReactJS, RestAPI",
    code: "",
    live: "https://country-api-c5eg.onrender.com/",
  },
];

export default prod;
