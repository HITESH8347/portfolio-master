import { FaGithub, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import profileImage from "./assets/Profile.jpg";
import profileImage2 from "./assets/Profile2.jpg";
import { HiOutlineMail } from "react-icons/hi";
import { Code, Globe, Palette, Smartphone } from "lucide-react";
import SmartPlay from "./assets/smartPlay.png";
import SmartOdd from "./assets/smartOdd.png";
import Smartb from "./assets/smartb.png";

const timelineItems = [
  {
    title: "NodeJs Developer",
    subtitle: "Jnext Services Pvt. Ltd.",
    year: "Dec 2022 - Aug 2025"
  },
];

const educationItems = [
  {
    title: "Bachelor of Science in Information Technology",
    subtitle: "Shree Swaminarayan College of Computer Science",
    year: "2020 - 2023",
  },
  {
    title: "Higher Secondary Education",
    subtitle: "Shree Ekta High School",
    year: "2018 - 2020",
  },
];

const skill = [
  {
    title: "Bachelor of Science in Information Technology",
    subtitle: "Shree Swaminarayan College of Computer Science",
    year: "2020 - 2023",
  },
  {
    title: "Higher Secondary Education",
    subtitle: "Shree Ekta High School",
    year: "2018 - 2020",
  },
];
const testimonials = [
  {
    name: "Liana Marie",
    role: "Lead Designer Meta",
    image: "/liana.jpg", // replace with actual image
    text: "Financial planners help people gain knowledge about how to invest and save their money. Every plan helps people truly understand financial clarity.",
  },
  {
    name: "Zonathon Doe",
    role: "CEO & Founder X",
    image: "/zonathon.jpg",
    text: "Great to work with Harsh. He delivered a high-quality mobile app with smooth performance and amazing UI. Definitely recommend him!",
  },
  {
    name: "Zonathon Doe",
    role: "CEO & Founder X",
    image: "/zonathon.jpg",
    text: "Great to work with Harsh. He delivered a high-quality mobile app with smooth performance and amazing UI. Definitely recommend him!",
  },
  {
    name: "Zonathon Doe",
    role: "CEO & Founder X",
    image: "/zonathon.jpg",
    text: "Great to work with Harsh. He delivered a high-quality mobile app with smooth performance and amazing UI. Definitely recommend him!",
  },
];

const mockData = {
  personal: {
    name: "Hitesh Solanki",
    title: "NodeJs Developer",
    tagline: "Crafting Digital Experiences",
    description:
      "I'm Hitesh Solanki, a freelance Node.js Developer passionate about building robust backend systems. I specialize in API development, third-party integrations (payments, notifications, uploads), and optimizing database performance. Whether it’s a startup or a large-scale app, I help turn ideas into smooth, production-ready backend solutions.",
    location: "Gujarat, India",
    email: "solankihitesh8347@gmail.com",
    profileImage: profileImage,
    profileImage2: profileImage2,
    availability: "Available for freelance",
    Phone: "+91 8347505467",
    description2: "passionate about designing secure, high-performance APIs with Node.js and Express. I help turn business logic into reliable backend systems that scale with ease.",
    description3: " I specialize in building robust server architectures, handling payment and authentication flows, and ensuring smooth data communication between frontend and backend. Let’s bring your project to life with clean, efficient code. ⚙️"
  },

  skills: [
    { name: "JavaScript (ES6+)", level: 95, icon: Palette },
    { name: "TypeScript", level: 90, icon: Code },
    { name: "Node.js", level: 85, icon: Smartphone },
    { name: "Express.js", level: 88, icon: Globe },
    { name: "MySQL", level: 85, icon: Globe },
    { name: "Redis", level: 75, icon: Globe },
    { name: "Redis Stack", level: 65, icon: Globe },
    { name: "Payment Gateways", level: 80, icon: Globe },
    { name: "Twitter Posting", level: 80, icon: Globe },
    { name: "Third-party API integration", level: 80, icon: Globe },
    { name: "OneSignal", level: 80, icon: Globe },
    { name: "Socket.IO", level: 65, icon: Globe },
  ],

  experience: [
    {
      title: "Senior UI/UX Designer",
      company: "Tech Innovators Inc.",
      period: "2022 - Present",
      description: "Leading design initiatives for mobile and web applications",
    },
    {
      title: "Frontend Developer",
      company: "Digital Solutions LLC",
      period: "2020 - 2022",
      description:
        "Developed responsive web applications using React and Vue.js",
    },
    {
      title: "Junior Designer",
      company: "Creative Studio",
      period: "2019 - 2020",
      description: "Assisted in creating brand identities and digital assets",
    },
  ],

  projects: [
    {
      id: 1,
      title: "SmartB – Sports Betting App & Web Platform",
      category: "Backend Development",
      description:
        "Developed and maintained core features for a comprehensive multi-sport and racing betting platform. Integrated advertisement management systems and third-party libraries to extend platform functionality.",
      image: Smartb,
      tags: ["Node.js", "Express.js", "Stripe"],
      link: "https://smartb.com.au/",
    },
    {
      id: 2,
      title: "SmartPlay – Fantasy Sports App & Web Application",
      category: "Backend Development",
      description:
        "SmartPlay – Fantasy Sports App & Web Application Designed and developed a user-friendly fantasy sports platform, similar to Dream11, for both web and mobile.",
      image: SmartPlay,
      tags: ["Node.js", "Express.js", "Fantasy"],
      link: "https://smartb.com.au/fantasy",
    },
    {
      id: 3,
      title: "SmartOdd – Live Racing & Odds Monitoring Platform",
      category: "Backend Development",
      description:
        "Developed real-time upcoming race notifications system to keep users informed about scheduled events. Implemented watchlist-based notifications using WebSockets for immediate updates on user-selected races",
      image: SmartOdd,
      tags: ["Node.js", "Express.js", "Stripe"],
      link: "https://smartb.com.au/odds-comparison",
    },
    {
      id: 3,
      title: "SmartOdd – Live Sport & Odds Monitoring Platform",
      category: "Backend Development",
      description:
        "Developed real-time upcoming Sport notifications system to keep users informed about scheduled events. Implemented watchlist-based notifications using WebSockets for immediate updates on user-selected Sport",
      image: SmartOdd,
      tags: ["Node.js", "Express.js", "Stripe"],
      link: "https://smartb.com.au/odds-comparison",
    }
  ],
};

const socialLinks = [
  {
    icon: <FaGithub size={24} />,
    href: "https://github.com/HITESH8347",
    label: "GitHub",
    hoverColor: "hover:text-[#6e5494]", // GitHub black
  },
  {
    icon: <FaLinkedinIn size={24} />,
    href: "https://www.linkedin.com/in/hitesh-solanki-31239221a",
    label: "LinkedIn",
    hoverColor: "hover:text-[#0A66C2]", // LinkedIn blue
  },
  {
    icon: <HiOutlineMail size={24} />,
    href: "https://mail.google.com/mail/?view=cm&fs=1&to=solankihitesh8347@gmail.com",
    label: "Email",
    hoverColor: "hover:text-[#EA4335]", // Gmail red
  },
  {
    icon: <FaWhatsapp size={24} />,
    href: "https://wa.me/8347505467",
    label: "WhatsApp",
    hoverColor: "hover:text-[#25D366]", // WhatsApp green
  },
];
const FooterServices = [
  "Backend Development",
  "Web App Development",
  "API Integration",
];
const services = [
  {
    icon: Code,
    title: "Backend Solutions",
    description:
      "Delivering clean, efficient, and maintainable backend solutions that handle complex business logic effortlessly.",
    features: [
      "Custom REST APIs",
      "Database Optimization",
      "Payment & Notification Systems",
      "Server-side Performance",
    ],
  }
];

export {
  timelineItems,
  testimonials,
  mockData,
  socialLinks,
  services,
  FooterServices
};
