import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web And Application Development",
    icon: web,
  },
  {
    title: "AI Solution",
    icon: mobile,
  },
  {
    title: "Data Engineering",
    icon: backend,
  },
  {
    title: "StartUp Suport",
    icon: creator,
  },
  {
    title: "Healthcare Solution",
    icon: web,
  },
  {
    title: "EdTech solution",
    icon: mobile,
  },
  {
    title: "Cloud Solutions",
    icon: backend,
  },
  {
    title: "NGo/InGO  support",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
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
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
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
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Investigate",
    company_name: "",
    icon: starbucks,
    iconBg: "#383E56",
    date: "March 2020 - April 2021",
    points: [
      " Discovery Problem",
      "Process you idea.",
      "Question & Answer.",
      "Market Research.",
      " Goal Setting.",
      "Product Blueprint.",
      "Legal Aggrement.",
    ],
  },
  {
    title: "Design",
    company_name: "",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
    points: ["UI/UX.", "Present your product Prototypes.", "Brand Identity."],
  },
  {
    title: " Development ",
    company_name: "",
    icon: shopify,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Web Development.",
      "Mobile Development.",
      " AI & ML intregation",
      " Algorithm intregation.",
      " Database management.",
    ],
  },
  {
    title: "Launch",
    company_name: "",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      " Cloud Operations.",
      " Data Operations.",
      "Security",
      " Monitoring and Deployment",
      " Quality Assurance.",
    ],
  },
  {
    title: "Scale",
    company_name: "",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Product Analytics.",
      " Business Intelligence.",
      "Continuous Integration",
      " Automation",
    ],
  },
  {
    title: "Support",
    company_name: "",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: ["1 yrs free Support.", "24/7 support.", "Maintanance"],
  },
];

const testimonials = [
  {
    testimonial:
      "Sisnovate took the time to understand our needs and delivered a high-quality design that was better than expected,  within Time & budget. As the founder of Homeplex, I would highly recommend Sisnovate services.",
    name: "Predeep sth",
    designation: "Founder",
    company: "Homeplex",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "Sisnovate team has ability to deliver a high-quality website ,they  create my website within a week & budgets.Their commitment to providing excellent service and support is truly impressive, that bring me in  no doubt that they will continue to exceed expectations for their clients in the future.",

    name: "Pawan shah",
    designation: "CEO",
    company: "Buddha Notes",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
