import { meta, shopify, starbucks, tesla } from "../assets/images";
import {
  car,
  contact,
  css,
  estate,
  express,
  git,
  github,
  html,
  javascript,
  linkedin,
  mongodb,
  motion,
  mui,
  nextjs,
  nodejs,
  pricewise,
  react,
  redux,
  sass,
  snapgram,
  summiz,
  tailwindcss,
  threads,
  typescript,
} from "../assets/icons";

export const skills = [
  {
    imageUrl: css,
    name: "CSS",
    type: "Frontend",
  },
  {
    imageUrl: express,
    name: "Express",
    type: "Backend",
  },
  {
    imageUrl: git,
    name: "Git",
    type: "Version Control",
  },
  {
    imageUrl: github,
    name: "GitHub",
    type: "Version Control",
  },
  {
    imageUrl: html,
    name: "HTML",
    type: "Frontend",
  },
  {
    imageUrl: javascript,
    name: "JavaScript",
    type: "Frontend",
  },
  {
    imageUrl: mui,
    name: "Material-UI",
    type: "Frontend",
  },
  {
    imageUrl: react,
    name: "React",
    type: "Frontend",
  },
  {
    imageUrl: tailwindcss,
    name: "Tailwind CSS",
    type: "Frontend",
  },
];

export const experiences = [
  {
    title: "Frontend Developer",
    company_name: "Rejoiuce",
    icon: tesla,
    iconBg: "#fbc3bc",
    date: "10 Days",
    points: [
      "Developed and maintained the frontend of the Rejoice Website using HTML, CSS, and JS and related technologies as a solo practice project within 10 days.",
      "Implemented responsive design and ensured cross-browser compatibility to deliver a seamless user experience across all devices.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Obys Agency",
    icon: shopify,
    iconBg: "#b7e4c7",
    date: "08 Days",
    points: [
      "Developing and maintaining the frontend of the Obys Agency website using HTML, CSS, JavaScript, and GSAP for advanced animations and smooth interactions.",
"Implementing responsive design and ensuring cross-browser compatibility while creating engaging, visually appealing user experiences with dynamic animations.",

    ],
  },
  
];

export const socialLinks = [
  {
    name: "Contact",
    iconUrl: contact,
    link: "/contact",
  },
  {
    name: "GitHub",
    iconUrl: github,
    link: "https://github.com/radheradhenikhil",
  },
  {
    name: "LinkedIn",
    iconUrl: linkedin,
    link: "https://www.linkedin.com/in/nikhilagarwal99/",
  },
];

export const projects = [
  {
    iconUrl: pricewise,
    theme: "btn-back-red",
    name: "Happy Socks",
    description:
      "Developed Happy Socks, a practice website using HTML and CSS, featuring a clean, responsive design to showcase colorful sock collections with an engaging and user-friendly layout.",
    link: "https://happysocksbyradhe.netlify.app/",
  },
  {
    iconUrl: threads,
    theme: "btn-back-green",
    name: "Premier",
    description:
      'Developed Premier, a practice website using HTML and CSS, focusing on a sleek, responsive design to highlight premium products with an elegant and intuitive user interface.',
    link: "https://premierbehance.netlify.app/",
  },
  {
    iconUrl: car,
    theme: "btn-back-blue",
    name: "Obys Agency",
    description:
      "Developed an Obys Agency clone as a practice project using HTML, CSS, JavaScript, and GSAP, replicating smooth animations, scroll effects, and a modern, responsive design to enhance user interaction and visual appeal.",
    link: "https://obysbyradhe.netlify.app/",
  },
  {
    iconUrl: snapgram,
    theme: "btn-back-pink",
    name: "Rejouice",
    description:
      "Developed Rejouice, a practice website using HTML,CSS, JS , GSAP and related technologies, featuring a responsive design, interactive UI components, and smooth navigation to provide an engaging user experience.",
    link: "https://rejouicebyradhe.netlify.app/",
  }
];
