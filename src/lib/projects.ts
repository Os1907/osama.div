import { IProjects } from "@/Interfaces/IProjects";
import Cinema from "./../../public/projects/cinema-base.png";
import nova from "./../../public/projects/nova.png";
import Pizza from "./../../public/projects/pizza.png";
import Estatein from "./../../public/projects/Estatin.png";
import Future from "./../../public/projects/future.png";
import RecipUi from "./../../public/projects/reci.png";

export const projects: Array<IProjects> = [
  {
    name: "Cinema Base",
    subTitle: "(Movies information site)",
    description: `Developed and enhanced a movie database website offering search, ratings, and
  recommendations; integrated APIs for real-time updates on new films and series`,
    live: "https://cinema-base.vercel.app/",
    repo: "https://github.com/Os1907/Cinema-Base",
    image: Cinema,
    tools: "Next.js, TypeScript, Tailwind CSS, TMDB API, Redux Toolkit",
  },
  {
    name: "Nova Store",
    subTitle: "(E-commerce platform)",
    description: `Built an e-commerce platform with product listings, user authentication, shopping cart, and order management functionalities.`,
    live: "https://nova-store.vercel.app/",
    repo: "https://github.com/Os1907/Nova-Store",
    image: nova,
    tools: "React.js, Redux, Node.js, Express, MongoDB",
  },
  {
    name: "Pizza World",
    subTitle: "( A Dual-Functionality Website for Clients and Restaurants)",
    description: `Implemented a pizza ordering system with user and admin functionalities for ordering, reviewing orders, and statistics.`,
    live: "https://pizza-world.vercel.app/",
    repo: "https://github.com/Os1907/pizza-world",
    image: Pizza,
    tools: "React.js, Node.js, Express, MongoDB, Tailwind CSS",
  },
  {
    name: "Estatein",
    subTitle: "(Real estate website)",
    description: `Created a real estate platform for property listings, search, and user inquiries, integrated with Google Maps for location-based property search.`,
    live: "https://estatein.vercel.app/",
    repo: "https://github.com/Os1907/Estatein-",
    image: Estatein,
    tools: "Next.js, TypeScript, Tailwind CSS, Google Maps API",
  },
  {
    name: "Future Tech",
    subTitle: "(Technology blog site)",
    description: `Developed a responsive blog platform for tech news, articles, and updates with user comment and like functionalities.`,
    live: "https://future-tech-blog.vercel.app/",
    repo: "https://github.com/Os1907/Future-Tech-Blog",
    image: Future,
    tools: "Next.js, TypeScript, Tailwind CSS, Firebase",
  },
  {
    name: "RecipUi",
    subTitle: "(Recipe sharing platform)",
    description: `Designed a recipe-sharing platform allowing users to upload, share, and rate recipes.`,
    live: "https://recipui.vercel.app/",
    repo: "https://github.com/Os1907/RecipUi",
    image: RecipUi,
    tools: "React.js, Redux, Node.js, Express, MongoDB",
  },
];
