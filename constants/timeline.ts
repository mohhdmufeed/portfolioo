import type { TimelineEntry } from "@/types";

export const timelineData: TimelineEntry[] = [
    {
        id: "aiet",
        title: "Bachelor of Engineering (AIML)",
        company: "Alva's Institute of Engineering and Technology",
        type: "fulltime",
        duration: {
            start: "2023",
            end: "Present",
        },
        description:
            "Pursuing a specialized degree in Artificial Intelligence & Machine Learning. Developing foundational skills in Python, Data Structures & Algorithms, Machine Learning modeling (scikit-learn), Deep Learning frameworks (TensorFlow), and database management (SQL).",
    },
    {
        id: "sap-hackathon",
        title: "Hackathon Participant",
        company: "SAP Hackathon",
        type: "fulltime",
        duration: {
            start: "2024",
            end: "2024",
        },
        description:
            "Participated in the SAP Hackathon, working collaboratively within a team to build prototype solutions under tight deadlines. Demonstrated problem-solving ability, technical innovation, and effective communication skills.",
    },
    {
        id: "python-trainer",
        title: "Python Trainer (Extracurricular)",
        company: "High School Community Outreach",
        type: "parttime",
        duration: {
            start: "2024",
            end: "2025",
        },
        description:
            "Delivered hands-on Python training sessions to high school students, introducing them to programming concepts, logic building, and technical literacy to foster interest in computer science.",
    }
];
