import { ThingsIDo } from "@/types";
import { baseUrlTech } from "./techData";

export const profile = {
  summary: ` Final-year Artificial Intelligence & Machine Learning student passionate about building 
              AI-powered applications and solving real-world problems. Experienced in Python, 
              Machine Learning, Deep Learning, SQL, and Full-Stack development. Committed to building 
              production-ready AI projects, solving DSA challenges, and contributing to the open-source community.`,
  gitHub: "https://github.com/mohhdmufeed",
  name: "Mohammed Mufeed",
  title: "AI/ML & Full Stack Developer",
  gitHubUserName: "mohhdmufeed",
  xUserName: "mohhdmufeed",
  linkedin: 'https://www.linkedin.com/in/mohammedmufeed06',
  x: 'https://x.com/mohhdmufeed',
  instagram: "https://www.instagram.com/mohhdmufeed"
};
export const hostedUrl = "https://mohhdmufeed.github.io";
export const canonicalUrl = "https://mohhdmufeed.github.io";

export const TYPEWRITER_WORDS = [
  { text: "I" },
  { text: "Build" },
  { text: "AI-Powered" },
  { text: "And" },
  { text: "Intelligent" },
  { text: "Software" },
  { text: "Solutions" },
  { text: "!" }
];


export const socialMediaLinks = [
  {
    title: 'LinkedIn',
    icon: '/assets/social/linkedin.svg',
    href: 'https://www.linkedin.com/in/mohammedmufeed06',
    smLabel: 'LN',
  },
  {
    title: 'GitHub',
    icon: '/assets/social/github.svg',
    href: 'https://github.com/mohhdmufeed',
    smLabel: 'GH',
  },
  {
    title: 'Email',
    icon: '/assets/social/email.svg',
    href: 'mailto:mohhdmufeed@gmail.com',
    smLabel: 'EM',
  }
];


export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/open-source", label: "Open Source" },
  { href: "/experience", label: "Experience" },
  { href: "/stack", label: "Stack" },
  { href: "/certificates", label: "Certificates" },
  { href: "/contact", label: "Contact Me" },
];

export const openSourceOrganizations = [
  { name: "Strapi", url: "https://strapi.io", logo: "/assets/org/strapi.png" },
  { name: "Impler", url: "https://impler.io", logo: "/assets/org/impler.png" },
  { name: "Origin Ui", url: "https://originui.com", logo: "/assets/org/origin.ico" },
  { name: "OpenCut", url: "https://opencut.app", logo: "/assets/org/opencut.png" },
  { name: "Gemini CLI", url: "https://github.com/google-gemini/gemini-cli", logo: "/assets/org/gemini.png" }
];


export const thingsIDo: ThingsIDo[] = [
  {
    name: "Artificial Intelligence & Machine Learning",
    image: "/assets/images/statics.svg",
    tech: [
      { name: "Python", url: `${baseUrlTech}/python.svg` },
      { name: "TensorFlow", url: `${baseUrlTech}/tensorflow.svg` },
      { name: "scikit-learn", url: `${baseUrlTech}/scikit-learn.svg` },
      { name: "Pandas", url: `${baseUrlTech}/pandas.svg` },
      { name: "NumPy", url: `${baseUrlTech}/numpy.svg` },
      { name: "OpenCV", url: `${baseUrlTech}/opencv.svg` },
    ],
    capabilities: [
      { text: 'Developing predictive ML models using scikit-learn and deep learning models with TensorFlow', icon: '🤖' },
      { text: 'Building Computer Vision applications utilizing OpenCV and YOLO object detection models', icon: '👁️' },
      { text: 'Analyzing data patterns and processing structured data using SQL, Pandas, and NumPy', icon: '📊' }
    ]
  },
  {
    name: "Full Stack Development",
    image: "/assets/images/fullstack.svg",
    tech: [
      { name: "Node JS", url: `${baseUrlTech}/nodejs.svg` },
      { name: "Express JS", url: `${baseUrlTech}/express.svg` },
      { name: "React JS", url: `${baseUrlTech}/react.svg` },
      { name: "Next JS", url: `${baseUrlTech}/nextjs.svg` },
      { name: "TypeScript", url: `${baseUrlTech}/typescript.svg` },
      { name: "Tailwind", url: `${baseUrlTech}/tailwind.svg` },
      { name: "Socket.io", url: `${baseUrlTech}/socket-io.svg` },
    ],
    capabilities: [
      { text: 'Developing modern web applications with React, Next.js, and TypeScript', icon: '💻' },
      { text: 'Building robust backend services and APIs with Node.js and Express', icon: '⚙️' },
      { text: 'Implementing real-time communication systems using Socket.io and WebRTC', icon: '⚡' }
    ]
  },
  {
    name: "DevOps & Utilities",
    image: "/assets/images/devops.svg",
    tech: [
      { name: "Docker", url: `${baseUrlTech}/docker.svg` },
      { name: "GitHub Actions", url: `${baseUrlTech}/github-action.svg` },
      { name: "Nginx", url: `${baseUrlTech}/nginx.svg` },
      { name: "Postman", url: `${baseUrlTech}/postman.svg` },
    ],
    capabilities: [
      { text: 'Configuring and managing version control and continuous integration using Git and GitHub Actions', icon: '🔄' },
      { text: 'Testing APIs and managing backend deployment processes securely', icon: '✅' },
    ]
  }
];

// Audio file path
export const AUDIO_SRC = "/assets/keyboardpress.mp3";

// Timing constants
export const KEY_PRESS_DURATION = 150;

