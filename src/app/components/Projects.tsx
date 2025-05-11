"use client";

import {
  motion,
  MotionValue,
  useScroll,
  useSpring,
  useTransform,
} from "motion/react";
import { useRef } from "react";
import Image from "next/image";  // Import Image from next/image

const projectList = [
  {
    id: 1,
    title: "An E-commerce website ",
    description:
      "A gym supplement e-commerce website integrated with Khalti payment system",
    link: "https://github.com/kushal2060/e-commerce",
    src: "/web.png", // Use the correct path for the image
  },
  // { id:2, title: 'Project Two', description: 'Description here', link: '#' },
];

function useParallax(value: MotionValue<number>, distance: number) {
  return useTransform(value, [0, 1], [-distance, distance]);
}

function ImageComponent({
  project,
}: {
  project: typeof projectList[0];
}) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
  });
  const y = useParallax(scrollYProgress, 100);

  return (
    <section className="img-container flex flex-col items-center gap-6 sm:flex-row sm:justify-center sm:items-start">
  <div ref={ref} className="rounded-xl w-[300px] h-[400px] sm:w-[300px] sm:h-[400px]  max-w-xs sm:max-w-none">
    <Image
      src={project.src}
      alt="project"
      className="rounded-xl object-cover w-full h-full"
      width={300}
      height={400}
    />
  </div>

  <motion.a
        href={project.link}
        target="_blank"
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ amount: 0.9 }}
        transition={{ duration: 0.5 }}
        className="block p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl"
      >
    <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
    <p className="prose dark:prose-invert">{project.description}</p>
  </motion.a>
</section>

  );
}

export default function Projects() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 90,
    restDelta: 0.001,
  });

  return (
    <div id="Projects" className="py-20 px-6 rounded-xl">
      <h2 className="text-3xl font-bold mb-8">Projects</h2>

      {projectList.map((project) => (
        <ImageComponent key={project.id} project={project} />
      ))}
      <motion.div
        className="progress rounded-3xl dark:bg-gray-800"
        style={{ scaleX }}
      />
      <StyleSheet />
    </div>
  );
}

/**
 * ==============   Styles   ================
 */

function StyleSheet() {
  return (
    <style>{`
        .img-container {
            height: 100vh;
            scroll-snap-align: start;
            display: flex;
            justify-content: center;
            align-items: center;
            position: relative;
        }

        .img-container > div {
            width: 300px;
            height: 400px;
            margin: 20px;
            background: #f5f5f5;
            overflow: hidden;
        }

        .img-container img {
            width: 100%;
            height: 100%;
        }

        @media (max-width: 500px) {
         .img-container {
             height: auto !important;
             padding-top: 1rem;
             padding-bottom: 1rem;
             }
            .img-container > div {
                width: 150px;
                height: 200px;
            }

            .img-container img {
                width: 100%;
                height: 100%;
            }
        }

        .progress {
            position: fixed;
            left: 0;
            right: 0;
            height: 7px;
            background: black;
            bottom: 10px;
            transform: scaleX(0);
        }
    `}</style>
  );
}
