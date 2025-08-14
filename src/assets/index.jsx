
import GithubFillIcon from "remixicon-react/GithubFillIcon";
import LinkedinBoxFillIcon from "remixicon-react/LinkedinBoxFillIcon";

export const heroIcons = [
  {
    href: "https://github.com/amith2083",
    icon: (
      <GithubFillIcon className="text-black hover:scale-110 transition-transform" />
    ),
  },
  {
    href: "https://www.linkedin.com/in/amith-k-m/",
    icon: (
      <LinkedinBoxFillIcon className="text-blue-600 hover:scale-110 transition-transform" />
    ),
  },
];

// About Me
import Projector2LineIcon from "remixicon-react/Projector2LineIcon";
import GroupLineIcon from "remixicon-react/GroupLineIcon";

export const aboutData = [
  {
    title: "Github Repos",
    amount: 16,
    icon: <GithubFillIcon />,
  },
  {
    title: "Projects",
    amount: 5,
    icon: <Projector2LineIcon />,
  },
];

import DownloadLineIcon from "remixicon-react/DownloadLineIcon";
import ArrowLeftSFillIcon from "remixicon-react/ArrowLeftSFillIcon";

export const downloadIcon = <DownloadLineIcon />;
export const arrowLeftIcon = <ArrowLeftSFillIcon />;

export const aboutText =
  "Hi, I'm Amith – a MERN Stack Developer passionate about building full-stack web applications. I work with JavaScript, TypeScript, Node.js, Express.js, and MongoDB to develop fast, scalable, and secure back-end systems. On the front end, I use React to create dynamic, responsive user interfaces that deliver smooth experiences across devices. I enjoy turning ideas into functional, user-friendly applications and writing clean, maintainable code that performs well. Always learning, always building.";

// Skills
export const skillsData = [
  {
    name: "HTML",
    icon: "/skills/html.png",
  },
  {
    name: "CSS",
    icon: "/skills/css.png",
  },
  {
    name: "JavaScript",
    icon: "/skills/js.png",
  },
  {
    name: "TailwindCSS",
    icon: "/skills/tailwind.png",
  },
  {
    name: "ReactJS",
    icon: "/skills/react.png",
  },
  {
    name: "TypeScript",
    icon: "/skills/ts.png",
  },
  {
    name: "NextJS",
    icon: "/skills/nextjs.png",
  },
  {
    name: "NodeJS",
    icon: "/skills/nodejs.png",
  },
  {
    name: "MongoDB",
    icon: "/skills/mongodb.png",
  },
  {
    name: "Redux",
    icon: "/skills/redux.png",
  },
  {
    name: "TanStack Query",
    icon: "/skills/query.png",
  },
  {
    name: "Framer Motion",
    icon: "/skills/framer.png",
  },
  {
    name: "ShadCN",
    icon: "/skills/shadcn.png",
  },
  {
    name: "Github",
    icon: "/skills/github.png",
  },
  {
    name: "JWT",
    icon: "/skills/jwt.png",
  },
  {
    name: "OAuth 2.0",
    icon: "/skills/oauth.png",
  },
  {
    name: "Razorpay",
    icon: "/skills/razorpay.jpg",
  },
];

// Projects
export const projectsData = [
  {
    name: "Ecommerce",
    url: "/projects/ecommerce.png",
    github: "https://github.com/amith2083/full_stack_ecommerce_mern",
    demo: "https://trendzcart.vercel.app/",
    tech: ["TailwindCSS", "JavaScript", "NodeJs", "MongoDB", "ReactJs", "Redux"],
  },
  {
    name: "chatSphere",
    url: "/projects/chat.png",
    demo: "https://chatsphere-ai.netlify.app/",
    github: "https://github.com/amith2083/Gemini-Powered-DevTool",
    tech: ["TailwindCSS", "ReactJs", "JavaScript", "Firebase"],
  },
  {
    name: "Learning Management System",
    url: "/projects/lms.png",
    github: "https://github.com/amith2083/todo/tree/master",
    tech: ["TypeScript", "NodeJs", "MongoDB", "NextJs", "TanStack Query"],
  },
  {
    name: "Todo",
    url: "/projects/todo.png",
    github: "https://github.com/amith2083/todo/tree/master",
    demo: "https://amith2083.github.io/todo/",
    tech: ["JavaScript", "TailwindCSS", "ReactJs"],
  },
  {
    name: "Netflix clone",
    url: "/projects/netflix.png",
    github: "https://github.com/amith2083/Netflix_clone_using_react",
    tech: ["ReactJs", "TailwindCSS", "Firebase"],
  },
];

export const projectsButton = [
  "All",
  "JavaScript",
  "NodeJs",
  "MongoDB",
  "ReactJs",
  "Redux",
  "TailwindCSS",
  "TanStack Query",
  "NextJs",
  "TypeScript",
  "Firebase",
];

// Navbar
import CopyrightLineIcon from "remixicon-react/CopyrightLineIcon";

export const copyRightIcon = <CopyrightLineIcon />;

import Home8FillIcon from "remixicon-react/Home8FillIcon";
import UserStarFillIcon from "remixicon-react/UserStarFillIcon";
import BriefcaseFillIcon from "remixicon-react/BriefcaseFillIcon";
import ProjectorFillIcon from "remixicon-react/ProjectorFillIcon";
import ContactsBook2FillIcon from "remixicon-react/ContactsBook2FillIcon";

export const navbarData = [
  {
    id: "home",
    name: "Home",
    icon: <Home8FillIcon />,
  },
  {
    id: "about",
    name: "About",
    icon: <UserStarFillIcon />,
  },
  {
    id: "skills",
    name: "Skills",
    icon: <BriefcaseFillIcon />,
  },
  {
    id: "projects",
    name: "Projects",
    icon: <ProjectorFillIcon />,
  },
  {
    id: "contact",
    name: "Contact",
    icon: <ContactsBook2FillIcon />,
  },
];

// Toggle (for dark mode)
import MoonFoggyFillIcon from "remixicon-react/MoonFoggyFillIcon";
import SunFoggyFillIcon from "remixicon-react/SunFoggyFillIcon";

export const sunIcon = <SunFoggyFillIcon />;
export const moonIcon = <MoonFoggyFillIcon />;