import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { memo } from 'react';
import SocialLinks from './SocialLinks';
import { motion } from 'framer-motion';
import { buttonHover, buttonVariants, containerVariants, imageVariants } from '@/style';

const ContactDetails = () => {
    return (
        <motion.section
            className="w-full max-w-4xl mx-auto px-4 py-12"
            custom={1}
            initial="hidden"
            animate="visible"
            variants={containerVariants}
        >
            <div className="flex flex-col md:flex-row items-center md:items-start gap-12">
                <motion.div
                    variants={imageVariants}
                    className="relative w-[300px] h-[300px] md:w-[320px] md:h-[320px] group flex-shrink-0"
                >
                    {/* Glowing gradient background border */}
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-violet-600 via-fuchsia-500 to-cyan-500 opacity-60 blur-md group-hover:opacity-100 group-hover:blur-lg transition duration-500" />
                    
                    {/* Inner image container */}
                    <div className="relative w-full h-full rounded-2xl overflow-hidden border border-zinc-800/80 bg-zinc-950 flex items-center justify-center">
                        <Image
                            src="/assets/avatar.png"
                            alt="Mohammed Mufeed - AI/ML & Full Stack Developer"
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                            sizes="(max-width: 768px) 100vw, 320px"
                            priority
                        />
                    </div>
                </motion.div>

                <div className="w-full md:w-1/2">
                    <h2 className="text-2xl font-semibold text-white mb-6">Connect With Me</h2>
                    <p className="text-gray-300 mb-6">
                        I&apos;m available on various social media platforms. Feel free to connect with me! <br />
                        I Usually get back to you in 24 hours.
                    </p>
                    <SocialLinks />
                    <Link href="/resume" passHref>
                    <motion.div variants={buttonVariants} whileHover={buttonHover}>
                        <Button className="inline-flex bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white transition-colors duration-300 w-full sm:py-3 px-6 relative overflow-hidden group">
                            <span className="relative z-10">View My Resume</span>
                            <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
                        </Button>
                    </motion.div>
                    </Link>
                    <Link href="/certificates" passHref>
                    <motion.div variants={buttonVariants} whileHover={buttonHover} className="mt-3">
                        <Button className="inline-flex bg-gradient-to-r from-violet-600 to-fuchsia-600 hover:from-violet-700 hover:to-fuchsia-700 text-white transition-colors duration-300 w-full sm:py-3 px-6 relative overflow-hidden group">
                            <span className="relative z-10">View My Certifications</span>
                            <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
                        </Button>
                    </motion.div>
                    </Link>
                </div>
            </div>
        </motion.section>
    );
};

export default memo(ContactDetails);