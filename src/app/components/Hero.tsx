'use client';
import { motion } from 'framer-motion';
import Image from 'next/image'; // Import Image from next/image
export default function Hero() {
  return (
    <div className="relative group flex justify-center items-center">
  {/* GIF - hidden by default, shown on hover */}
  <div className="absolute top-[-260px] hidden group-hover:block">
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
      className="flex flex-col items-center justify-center text-center rounded-3xl h-[200px] w-[900px] px-50px">
     {/* GIF container that appears on hover */}
     {/* <div className="absolute top-[-120px] hidden group-hover:block">
        <img src="/luffy.gif" alt="Hover GIF" className="w-32 h-32" />
      </div> */}

      <h1 className="text-5xl font-extrabold mb-4">Hi, I&apos;m Kussal  
      
      </h1>
     
    </motion.section>
    </div>
  );
}