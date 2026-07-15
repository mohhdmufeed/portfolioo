import { Project } from "@/types";

/**
 * Add these indexes to your project according to technologies you used.
 */
//eslint-disable-next-line
const INDEXES = {
    "TypeScript": 0,
    "Next.js": 1,
    "Nest.js": 2,
    "React": 3,
    "Redux": 4,
    "React Query": 5,
    "Vite": 6,
    "AWS": 7,
    "Stripe": 8,
    "WebRTC": 9,
    "Socket.io": 10,
    "Google AI": 11,
    "OpenAI": 12,
    "MongoDB": 13,
    "PostgreSQL": 14,
    "Zod": 15,
    "Clean Architecture": 16,
    "SOLID Principles": 17,
    "Node.js": 18,
    "Express.js": 19,
    "Tailwind CSS": 20,
    "Vercel": 21,
    "Firebase": 22,
    "Razorpay": 23,
    "Google Analytics": 24,
    "Vercel Analytics": 25,
    "Styled Components": 26,
    "Radix UI": 27,
    "Axios": 28,
    "JWT": 29,
    "OAuth": 30,
    "Joi": 31,
    "Winston": 32,
    "Shadcn UI": 33,
    "Recharts": 34,
    "Prettier": 35,
    "ESLint": 36,
    "GitHub Actions": 37,
    "Nginx": 38,
    "Render": 39,
    "Cloudflare": 40,
    "V0": 41,
    "React Hook Form": 42,
    "Context API": 43,
    "JavaScript": 44,
    "MySQL": 45,
    "Bootstrap": 46,
    "jQuery": 47,
    "NPM": 48,
    "Nodemon": 49,
    "Postman": 50,
    "Figma": 51,
    "Framer": 52,
    "PDFKit": 53,
    "Sharp": 54,
    "PDF Viewer": 55,
    "Cookies": 56,
    "EJS": 57,
    "Nuqs": 58,
    "Cloudinary": 59,
    "Next.js 15": 60,
    "React 19": 61,
    "Hostinger": 62,
    "Multer": 63,
    "Jest": 64,
    "Redis": 65,
    "Passport": 66,
    "Geolocation": 67,
    "Framer Motion": 68,
    "Chalk": 69,
    "Commander": 70,
    "Execa": 71,
    "Inquirer": 72,
    "Ora": 73,
    "Lucide Icons": 74,
    "Zustand": 75,
    "Inversify": 76,
    "bcryptjs": 77,
    "Nodemailer": 78,
    "Python": 79,
    "Flask": 80,
    "scikit-learn": 81,
    "TensorFlow": 82,
    "LSTM": 83,
    "NLP": 84,
    "Leaflet": 85,
    "CopilotKit": 86,
    "OpenCV": 87
};

export const projects: Project[] = [
    {
        title: "MindSafe AI – Suicidal Ideation Detection",
        description: "An AI-powered system for detecting suicidal ideation in online social content using ML, Deep Learning, and NLP.",
        detailedDescription: "MindSafe AI is an AI-powered system designed to detect suicidal ideation in online social content. It applies Natural Language Processing (NLP), Machine Learning, and Deep Learning to automatically identify posts and messages reflecting suicidal intent. Deployed with a dual-model ensemble approach combining a Random Forest classifier (96% accuracy) and a Bidirectional LSTM neural network (97% accuracy). Features an interactive Flask web application, analysis chat interface, stats dashboard, and an automated crisis hotline pop-up.",
        technologies: [
            79, // Python
            80, // Flask
            81, // scikit-learn
            82, // TensorFlow
            83, // LSTM
            84, // NLP
            13  // MongoDB
        ],
        link: "https://github.com/mohhdmufeed/MindSafe-AI",
        githubLink: "https://github.com/mohhdmufeed/MindSafe-AI",
        thumbnail: "/assets/projects/mindsafe.png",
        showGitStats: true,
        achievements: [
            "🧠 Achieved 97% classification accuracy using a Bidirectional LSTM deep learning model trained with GloVe word embeddings.",
            "🌲 Designed a Random Forest classifier optimized via GridSearchCV, reaching 96% accuracy on testing sets.",
            "💬 Developed a full Flask web application with a responsive chat interface showing severity scores (0-100), emotion breakdown, and risk word indicators.",
            "🆘 Integrated an automated crisis hotline popup modal that triggers immediately upon detecting High or Critical risk.",
            "📊 Created an analytics dashboard to display real-time statistics, risk distribution graphs, and historical logs."
        ]
    },
    {
        title: "iTodo – AI-Powered Task Planner",
        description: "A beautiful Next.js task planner featuring nested subtasks, focus pomodoro, and an integrated AI assistant.",
        detailedDescription: "iTodo is a state-of-the-art, AI-powered To-Do List application designed to organize and streamline daily productivity. It features advanced task properties (priorities, categories, due dates), nested step-by-step subtasks, local storage persistence, a data-rich stats dashboard, and an integrated AI Chat Assistant powered by OpenAI and CopilotKit. Includes white/rain ambient audio synthesis and speech-to-text dictation.",
        technologies: [
            1,  // Next.js
            3,  // React
            20, // Tailwind CSS
            12, // OpenAI
            86, // CopilotKit
            18, // Node.js
            50  // Postman
        ],
        link: "http://localhost:3000",
        githubLink: "https://github.com/mohhdmufeed/-ai-powered-todo-list",
        thumbnail: "/assets/projects/itodo.png",
        showGitStats: true,
        achievements: [
            "🤖 Integrated CopilotKit and OpenAI to build an interactive chat assistant that decomposes tasks and adds items automatically.",
            "📋 Designed a multi-view workspace supporting List view, native drag-and-drop Kanban Board, and Monthly Calendar planner.",
            "⏱️ Built an native sound synthesizer for White Noise & Rain sound filters within a focus Pomodoro session tracker.",
            "🎙️ Integrated Web Speech API for voice dictation of tasks directly inside the planner dashboard.",
            "🏆 Implemented gamified experience points (XP) and productivity streaks to encourage user task completion."
        ]
    },
    {
        title: "Live Location Tracker",
        description: "Real-time GPS tracking application featuring a dark glassmorphism admin dashboard and location streaming.",
        detailedDescription: "A real-time GPS tracking application featuring continuous location streaming, movement trails, target status monitoring, and auto-centering Leaflet maps. The application features a Weather Disguise mechanism built using Open-Meteo Weather APIs and Nominatim reverse geocoding to dynamically map coordinate values to street/city names, complete with a clean dark glassmorphism dashboard.",
        technologies: [
            18, // Node.js
            19, // Express.js
            10, // Socket.io
            85, // Leaflet
            67  // Geolocation
        ],
        link: "https://github.com/mohhdmufeed/live-location-tracker",
        githubLink: "https://github.com/mohhdmufeed/live-location-tracker",
        thumbnail: "/assets/projects/location_tracker.png",
        showGitStats: true,
        achievements: [
            "🛰 Implemented continuous GPS coordinate streaming using high-accuracy HTML5 navigator.geolocation.watchPosition().",
            "🗺 Configured an interactive Leaflet map using CartoDB Dark Matter layouts, pulsed CSS markers, and polyline trails.",
            "🌤 Designed a Weather App disguise page integrating Open-Meteo API and Nominatim reverse geocoding to hide tracking intents.",
            "⚡ Enabled real-time bidirectional messaging and data updates between target devices and dashboard via Socket.io."
        ]
    },
    {
        title: "Thermal Image Recognition System",
        description: "Real-time thermal object detection system optimized for low-visibility environments using YOLOv8 and OpenCV.",
        detailedDescription: "Developed a real-time thermal object detection system utilizing YOLOv8 and OpenCV. Designed specifically for low-visibility, nighttime, or adverse weather conditions, this system optimizes contrast and reduces image noise through customized pre-processing pipelines to ensure highly accurate real-time object classification.",
        technologies: [
            79, // Python
            87  // OpenCV
        ],
        githubLink: "https://github.com/mohhdmufeed/thermal-image-recognition",
        thumbnail: "/assets/projects/thermal.png",
        achievements: [
            "👁️ Processed thermal images in real-time with OpenCV filters for contrast enhancement and noise reduction.",
            "⚡ Deployed YOLOv8 custom-trained weights achieving low-latency, real-time object detection and classification.",
            "🛡️ Designed for nighttime and low-visibility surveillance settings with highly optimized frame execution."
        ]
    },
    {
        title: "JARVIS – Desktop AI Voice Assistant",
        description: "Desktop AI voice assistant featuring wake-word activation, API automation, and multithreaded speech synthesis.",
        detailedDescription: "A responsive desktop AI assistant designed using Python with wake-word detection, offline speech recognition, and command automation. JARVIS uses a multithreaded architecture to ensure speech output does not block the assistant's UI operations.",
        technologies: [
            79 // Python
        ],
        githubLink: "https://github.com/mohhdmufeed/Jarvis-Desktop-Voice-Assistant-main",
        thumbnail: "/assets/projects/jarvis.png",
        achievements: [
            "🎙️ Built wake-word detection and natural speech activation using local Python speech recognition engines.",
            "🧵 Implemented multithreading to isolate speech playback and NLP query processing from the main dashboard UI thread.",
            "🔧 Enabled system commands, application launching, and third-party API integration for weather and queries."
        ]
    },
    {
        title: "Car Rental Management System",
        description: "Normalized relational database design and optimized SQL query system for fleet and booking operations.",
        detailedDescription: "Designed and engineered a normalized relational database schema (3NF) to support a complete car rental platform. Wrote complex SQL queries, views, stored procedures, and trigger mechanisms to automate booking confirmation, fleet availability status, and customer invoicing.",
        technologies: [
            45, // MySQL
            44  // JavaScript
        ],
        githubLink: "https://github.com/mohhdmufeed/car-rental-website",
        thumbnail: "/assets/projects/carrental.png",
        achievements: [
            "🗄️ Structured normalized tables to Third Normal Form (3NF) ensuring referential integrity and data consistency.",
            "⚡ Wrote optimized SQL queries with indexing to ensure fast execution of complex availability and billing reports.",
            "🔄 Implemented triggers to automatically toggle vehicle availability state upon booking creations."
        ]
    }
];
