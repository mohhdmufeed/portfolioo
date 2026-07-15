"use client";

import { motion } from "framer-motion";
import { memo, useEffect, useState } from "react";
import Image from "next/image";
import { containerVariants, itemVariants, textVariants } from "@/style";
import { certificatesData } from "@/constants/certificates";
import { IconAward, IconExternalLink } from "@tabler/icons-react";

const Certificates = () => {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    return (
        <main className="flex flex-col min-h-screen relative overflow-hidden max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
            <motion.section
                initial="hidden"
                animate="visible"
                variants={containerVariants}
                className="w-full pt-16 md:pt-20 lg:pt-24"
            >
                <div className="text-center mb-16">
                    <motion.div className="relative inline-block" variants={textVariants}>
                        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 relative inline-block bg-clip-text text-transparent bg-gradient-to-r from-white via-violet-100 to-white">
                            Certifications
                        </h1>
                    </motion.div>

                    <motion.p
                        className="text-base sm:text-lg text-zinc-300 max-w-2xl mx-auto px-2 leading-relaxed"
                        variants={textVariants}
                    >
                        Specialized courses and professional credentials that validate my expertise in Artificial Intelligence, Machine Learning, and Software Engineering.
                    </motion.p>
                </div>

                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                    variants={containerVariants}
                >
                    {certificatesData.map((cert, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            whileHover={{ y: -8, transition: { duration: 0.3 } }}
                            className="relative group rounded-2xl bg-zinc-900/40 border border-zinc-800/80 hover:border-violet-500/50 p-6 flex flex-col justify-between transition-all duration-300 backdrop-blur-md overflow-hidden"
                        >
                            {/* Decorative background glow */}
                            <div className="absolute -right-16 -top-16 w-32 h-32 bg-violet-600/10 rounded-full blur-2xl group-hover:bg-violet-600/20 transition-all duration-500" />
                            
                            <div>
                                {/* Certificate Image Container */}
                                <div className="relative w-full h-48 rounded-xl overflow-hidden mb-6 border border-zinc-800/80 bg-zinc-950 flex items-center justify-center">
                                    {cert.thumbnail ? (
                                        <Image
                                            src={cert.thumbnail}
                                            alt={cert.title}
                                            fill
                                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                        />
                                    ) : (
                                        <IconAward className="w-16 h-16 text-zinc-700" />
                                    )}
                                </div>

                                <div className="flex items-center gap-2 mb-3">
                                    <span className="px-2.5 py-1 text-xs font-semibold rounded-full bg-violet-500/10 text-violet-400 border border-violet-500/20">
                                        {cert.issuer}
                                    </span>
                                    <span className="text-xs text-zinc-500">
                                        {cert.date}
                                    </span>
                                </div>

                                <h3 className="text-xl font-bold text-white group-hover:text-violet-300 transition-colors duration-300 line-clamp-2">
                                    {cert.title}
                                </h3>
                            </div>

                            <div className="mt-6 pt-4 border-t border-zinc-800/80 flex items-center justify-between">
                                <span className="text-sm text-zinc-400 group-hover:text-zinc-300 transition-colors">
                                    Verify Credential
                                </span>
                                <a
                                    href={cert.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-2 rounded-lg bg-zinc-800/50 hover:bg-violet-600 text-zinc-400 hover:text-white transition-all duration-300 flex items-center justify-center group/btn"
                                >
                                    <IconExternalLink className="w-5 h-5 group-hover/btn:scale-110 transition-transform" />
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </motion.section>
        </main>
    );
};

export default memo(Certificates);
