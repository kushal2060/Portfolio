// 'use client';
// import { motion } from 'framer-motion';

// const projectList = [
//   { title: 'Project One', description: 'Description here', link: '#' },
//   { title: 'Project Two', description: 'Description here', link: '#' },
// ];

// export default function Projects() {
//   return (
//     <section id="projects" className="py-20 px-6">
//       <h2 className="text-3xl font-bold mb-8">Projects</h2>
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//         {projectList.map((proj, i) => (
//           <motion.a
//             key={i}
//             href={proj.link}
//             initial={{ scale: 0.9, opacity: 0 }}
//             whileInView={{ scale: 1, opacity: 1 }}
//             transition={{ duration: 0.5, delay: i * 0.2 }}
//             className="block p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl"
//           >
//             <h3 className="text-2xl font-semibold mb-2">{proj.title}</h3>
//             <p className="prose dark:prose-invert">{proj.description}</p>
//           </motion.a>
//         ))}
//       </div>
//     </section>
//   );
// }
"use client"

import {
    motion,
    MotionValue,
    useScroll,
    useSpring,
    useTransform,
} from "motion/react"
import { useRef } from "react"
const projectList = [
  { id: 1, title: 'An E-commerce website ', description: 'A gym suppliment e commerce website integrated with khalti payment system', link: 'https://github.com/kushal2060/e-commerce',src: '/web.png' },
//   { id:2, title: 'Project Two', description: 'Description here', link: '#' },
];
function useParallax(value: MotionValue<number>, distance: number) {
    return useTransform(value, [0, 1], [-distance, distance])
}

function Image({ project }: { project: typeof projectList[0] }) {
    const ref = useRef(null)
    const { scrollYProgress } = useScroll({ 
        target: ref,
         })
    const y = useParallax(scrollYProgress, 100)

    return (
        <section className="img-container " >
            <div ref={ref}  className="rounded-xl">
                <img
                    src={project.src}
                    alt="A London skyscraper"
                     className="rounded-xl"
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
    )
}

export default function Projects() {
   
    const { scrollYProgress } = useScroll()
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 90,
        
        restDelta: 0.001,
    })

    return (
        <div  id="Projects" className="py-20 px-6 rounded-xl">
            <h2 className="text-3xl font-bold mb-8">Projects</h2>

            {projectList.map((project) => (
        <Image key={project.id} project={project} />
      ))}
            <motion.div className="progress rounded-3xl dark:bg-gray-800" style={{ scaleX }} />
            <StyleSheet />
        </div>
    )
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
            width: 300px;
            height: 400px;
        }

        @media (max-width: 500px) {
            .img-container > div {
                width: 150px;
                height: 200px;
            }

            .img-container img {
                width: 150px;
                height: 200px;
            }
        }

        .img-container h2 {
            color: #8df0cc;
            margin: 0;
            font-family: "Azeret Mono", monospace;
            font-size: 50px;
            font-weight: 700;
            letter-spacing: -3px;
            line-height: 1.2;
            position: absolute;
            display: inline-block;
            top: calc(50% - 25px);
            left: calc(50% + 120px);
        }

        .progress {
            position: fixed;
            left: 0;
            right: 0;
            height: 7px;
            background: black;
            bottom: 50px;
            transform: scaleX(0);
        }
    `}</style>
    )
}

 

 
// className={`card-container-${i}`}
// style={cardContainer}
// initial="offscreen"
// whileInView="onscreen"
// viewport={{ amount: 0.8 }}