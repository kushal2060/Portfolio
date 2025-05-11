'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image'; // Import Image from next/image

export default function Hero() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative group flex justify-center items-center px-4 sm:px-6 md:px-8"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onTouchStart={() => setIsHovered(true)}
      onTouchEnd={() => setIsHovered(false)}
    >
      {/* GIF - shown when hovered or tapped */}
      <div className={`absolute top-[-260px] ${isHovered ? 'block' : 'hidden'}`}>
        <Image 
          src="/luffy.gif" 
          alt="Hover GIF" 
          className="h-60"
          width={240}  
          height={240} 
        />
      </div>
      
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        style={{
          backgroundImage: "url('/pic.jpeg'), url('/pic.jpeg')",
          backgroundPosition: 'top left, bottom right',
          backgroundRepeat: 'repeat, repeat',
          backgroundSize: '180px, 200px',
        }}
        className="flex flex-col items-center justify-center text-center rounded-3xl w-full sm:w-[700px] md:w-[900px] px-6 sm:px-10 py-12"
      >
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4">Hi, I&apos;m Kussal</h1>
      </motion.section>
    </div>
  );
}
