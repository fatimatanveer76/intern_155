import { motion } from "framer-motion";

import {
  Bot,
  Workflow,
  Code2,
  Brain,
} from "lucide-react";


const curriculum = [

  {
    title: "AI Tools",
    icon: Bot,
    color: "from-cyan-400 to-blue-500",

    skills: [
      "ChatGPT",
      "Claude AI",
      "Google Gemini",
      "Microsoft Copilot",
      "Perplexity AI",
      "Canva AI",
      "Gamma AI",
      "Notion AI",
      "ElevenLabs",
      "Lovable AI",
      "Bolt.new",
      "Cursor AI",
      "GitHub Copilot",
      "Midjourney",
    ],
  },


  {
    title: "AI Workflows",
    icon: Workflow,
    color: "from-yellow-400 to-orange-500",

    skills: [
      "Prompt Engineering",
      "AI Assisted Research",
      "Content Creation",
      "Graphic Design",
      "Website Development",
      "Automation",
      "Documentation",
      "Data Analysis",
    ],
  },


  {
    title: "Technical Skills",
    icon: Code2,
    color: "from-blue-400 to-indigo-500",

    skills: [
      "Website Development",
      "UI/UX Design",
      "Content Writing",
      "Graphic Designing",
      "Social Media Management",
      "Video Editing",
      "Project Management",
      "Git & GitHub",
    ],
  },


  {
    title: "Soft Skills",
    icon: Brain,
    color: "from-pink-400 to-purple-500",

    skills: [
      "Leadership",
      "Communication",
      "Public Speaking",
      "Teamwork",
      "Critical Thinking",
      "Problem Solving",
      "Time Management",
      "Networking",
    ],
  },

];



export default function Curriculum() {

  return (

    <section
      id="curriculum"
      className="
      relative
      py-24
      bg-slate-950
      overflow-hidden"
    >


      {/* Background Glow */}

      <div
        className="
        absolute
        top-20
        left-0
        w-96
        h-96
        bg-cyan-500/10
        rounded-full
        blur-3xl"
      />


      <div
        className="
        absolute
        bottom-10
        right-0
        w-96
        h-96
        bg-yellow-500/10
        rounded-full
        blur-3xl"
      />



      <div
        className="
        max-w-7xl
        mx-auto
        px-6
        relative
        z-10"
      >


        {/* Heading */}

        <motion.div

          initial={{
            opacity:0,
            y:30
          }}

          whileInView={{
            opacity:1,
            y:0
          }}

          viewport={{
            once:true
          }}

          className="
          text-center
          mb-16"
        >


          <p
            className="
            text-cyan-400
            uppercase
            tracking-[0.3em]
            text-sm
            font-semibold"
          >
            Learning Path
          </p>



          <h2
            className="
            mt-4
            text-4xl
            md:text-5xl
            font-extrabold
            text-white"
          >
            What You Will Learn
          </h2>



          <p
            className="
            mt-5
            max-w-2xl
            mx-auto
            text-slate-400"
          >
            Develop AI knowledge, technical expertise,
            and professional skills required to succeed
            in the modern digital world.
          </p>


        </motion.div>





        {/* Cards */}

        <div
          className="
          grid
          md:grid-cols-2
          xl:grid-cols-4
          gap-8"
        >


          {curriculum.map((item,index)=>{


            const Icon = item.icon;


            return (

              <motion.div

                key={item.title}

                initial={{
                  opacity:0,
                  y:40
                }}

                whileInView={{
                  opacity:1,
                  y:0
                }}

                transition={{
                  duration:0.5,
                  delay:index*0.15
                }}

                viewport={{
                  once:true
                }}

                whileHover={{
                  y:-12
                }}

                className="
                group
                rounded-3xl
                p-[2px]
                bg-gradient-to-br
                from-cyan-400
                via-transparent
                to-yellow-400
                hover:shadow-2xl
                hover:shadow-cyan-500/30
                transition"
              >


                <div
                  className="
                  h-full
                  rounded-3xl
                  bg-slate-900/90
                  backdrop-blur-xl
                  p-7"
                >



                  {/* Icon */}

                  <div
                    className={`
                    w-16
                    h-16
                    rounded-2xl
                    flex
                    items-center
                    justify-center
                    bg-gradient-to-br
                    ${item.color}
                    shadow-lg
                    group-hover:scale-110
                    transition`}
                  >

                    <Icon
                      size={32}
                      className="text-white"
                    />

                  </div>



                  {/* Title */}

                  <h3
                    className="
                    mt-6
                    text-2xl
                    font-bold
                    text-white
                    group-hover:text-cyan-400
                    transition"
                  >
                    {item.title}
                  </h3>




                  {/* Skill Tags */}

                  <div
                    className="
                    mt-6
                    flex
                    flex-wrap
                    gap-2"
                  >

                    {item.skills.map((skill)=>(

                      <span

                        key={skill}

                        className="
                        px-3
                        py-2
                        rounded-xl
                        text-xs
                        bg-slate-800
                        border
                        border-slate-700
                        text-slate-300
                        hover:border-cyan-400
                        hover:text-cyan-300
                        transition"

                      >

                        {skill}

                      </span>

                    ))}


                  </div>



                </div>


              </motion.div>

            );


          })}


        </div>


      </div>


    </section>

  );
}