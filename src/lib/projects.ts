import { IProjects } from "@/Interfaces/IProjects";
import Cinema from "./../../public/projects/cinema-base.png";
import nova from "./../../public/projects/nova.png";
import Pizza from "./../../public/projects/pizza.png";
import Estatein from "./../../public/projects/Estatin.png";
import Future from "./../../public/projects/future.png";
import RecipUi from "./../../public/projects/reci.png";
import Lemo from "./../../public/projects/lemo.png";

export const projects: Array<IProjects> = [
  {
    name: "Cinema Base",
    subTitle: "(Movies information site)",
    description: `Developed and enhanced a movie database website offering search, ratings, and
  recommendations; integrated APIs for real-time updates on new films and series`,
    live: "https://cinema-base.vercel.app/",
    repo: "https://github.com/Os1907/Cinema-Base",
    image: Cinema,
    status:"FINISHED",
    tools: "Next.js, TypeScript, Tailwind CSS, TMDB API",
  },
  {
    name: "Nova Store",
    subTitle: "(E-commerce platform)",
    description: `Built an e-commerce platform with product listings, user authentication, shopping cart, and order management functionalities.`,
    live: "https://os1907.github.io/Nova-shop/",
    repo: "https://github.com/Os1907/Nova-shop",
    image: nova,
    status:"FINISHED",
    tools: "React.js,Tailwind CSS, Context API, Formik, Yup , Axios , React Query ",
  },
  {
    name: "Pizza World",
    subTitle: "( A Dual-Functionality Website for Clients and Restaurants)",
    description: `Implemented a pizza ordering system with user and admin functionalities for ordering, reviewing orders, and statistics.`,
    live: "https://pizza-world-two.vercel.app",
    repo: "https://github.com/Os1907/pizza-world",
    image: Pizza,
    status:"FINISHED",
    tools: "Next.js, Tailwind CSS ,TypeScript,ReduxTool Kit",
  },
  {
    name: "lemo Travel",
    subTitle: "(Tourist company)",
    description: `Lemo Travel is a premier travel company specializing in unique and unforgettable trips to Dahab, Egypt. `,
    live: "https://lemo-travel.vercel.app/",
    repo: "https://github.com/Os1907/lemo-travel",
    image: Lemo,
    status:"under development",
    tools: "Next.js, Tailwind CSS ,TypeScript" ,
  },
  {
    name: "Estatein",
    subTitle: "(Real estate website)",
    description: `Created a real estate platform for property listings, search, and user inquiries, integrated with Google Maps for location-based property search.`,
    live: "https:os1907.github.io/Estatein-/",
    repo: "https://github.com/Os1907/Estatein-",
    image: Estatein,
    status:"FINISHED",
    tools: "React.js, Tailwind CSS",
  },
  {
    name: "Future Tech",
    subTitle: "(Technology blog site)",
    description: `Developed a responsive blog platform for tech news, articles, and updates with user comment and like functionalities.`,
    live: "https://future-tech-liart.vercel.app",
    repo: "https://github.com/Os1907/Future-Tech",
    image: Future,
    status:"FINISHED",
    tools: "Next.js, Tailwind CSS",
  },
  {
    name: "RecipUi",
    subTitle: "(Recipe sharing platform)",
    description: `Designed a recipe-sharing platform allowing users to upload, share, and rate recipes.`,
    live: "https://https://recip-ui.vercel.app//",
    repo: "https://github.com/Os1907/RecipUi",
    image: RecipUi,
    status:"FINISHED",
    tools: "React.js, Tailwind CSS",
  },
];
