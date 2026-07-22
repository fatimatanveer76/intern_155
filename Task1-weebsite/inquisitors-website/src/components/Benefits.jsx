import { motion } from "framer-motion";

import {
  Rocket,
  GraduationCap,
  Users,
  BriefcaseBusiness,
  FileUser,
  MessageSquareText,
} from "lucide-react";


const benefits = [
  {
    title: "Hands-on Project Experience",
    description:
      "Work on practical projects and gain experience solving real-world problems using modern tools and technologies.",
    icon: Rocket,
  },

  {
    title: "Industry Mentorship",
    description:
      "Learn directly from experienced mentors who guide you through technical and professional growth.",
    icon: GraduationCap,
  },

  {
    title: "Team Collaboration",
    description:
      "Collaborate with talented students, build teamwork skills, and participate in group projects.",
    icon: Users,
  },

  {
    title: "Portfolio Development",
    description:
      "Create impactful projects that strengthen your portfolio and showcase your abilities.",
    icon: BriefcaseBusiness,
  },

  {
    title: "Resume & LinkedIn Optimization",
    description:
      "Improve your professional profile with expert guidance for resumes and LinkedIn presence.",
    icon: FileUser,
  },

  {
    title: "Mock Interviews",
    description:
      "Prepare for future opportunities through interview practice and career preparation sessions.",
    icon: MessageSquareText,
  },
];


export default function Benefits() {

  return (

    <section
      id="benefits"
      className="relative py-24 bg-slate-950 overflow-hidden"
    >


      {/* Background Glow */}

      <div
        className="
        absolute top-20 right-0
        w-72 h-72
        bg-cyan-500/10
        rounded-full
        blur-3xl"
      />



      <div className="max-w-7xl mx-auto px-6 relative z-10">


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

          transition={{
            duration:0.6
          }}

          viewport={{
            once:true
          }}

          className="text-center mb-16"

        >

          <p
            className="
            text-cyan-400
            uppercase
            tracking-[0.3em]
            text-sm
            font-semibold"
          >
            Why Join Us
          </p>


          <h2
            className="
            mt-4
            text-4xl md:text-5xl
            font-extrabold
            text-white"
          >

            Benefits Of The Program

          </h2>


          <p
            className="
            mt-5
            text-slate-400
            max-w-2xl
            mx-auto"
          >

            Gain professional experience, build your career,
            and develop the skills required to succeed in the
            modern technology industry.

          </p>


        </motion.div>






        {/* Cards Grid */}

        <div
          className="
          grid
          sm:grid-cols-2
          lg:grid-cols-3
          gap-8"
        >


          {benefits.map((benefit, index) => {


            const Icon = benefit.icon;


            return (

              <motion.div

                key={index}


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
                  delay:index * 0.1
                }}


                viewport={{
                  once:true
                }}


                whileHover={{
                  scale:1.05
                }}


                className="
                group
                relative
                rounded-3xl
                border
                border-cyan-500/20
                bg-slate-900/50
                backdrop-blur-md
                p-8
                hover:border-cyan-400/60
                transition
                duration-300"
              >



                {/* Gradient Glow */}

                <div
                  className="
                  absolute
                  inset-0
                  rounded-3xl
                  bg-gradient-to-br
                  from-cyan-500/10
                  to-yellow-500/10
                  opacity-0
                  group-hover:opacity-100
                  transition"
                />



                <div className="relative z-10">


                  {/* Icon */}

                  <div
                    className="
                    w-14 h-14
                    flex
                    items-center
                    justify-center
                    rounded-2xl
                    bg-cyan-500/10
                    border
                    border-cyan-500/30
                    mb-6"
                  >

                    <Icon
                      size={28}
                      className="text-cyan-400"
                    />

                  </div>





                  <h3
                    className="
                    text-xl
                    font-bold
                    text-white
                    mb-3"
                  >

                    {benefit.title}

                  </h3>




                  <p
                    className="
                    text-slate-400
                    leading-7"
                  >

                    {benefit.description}

                  </p>



                </div>


              </motion.div>


            );

          })}


        </div>


      </div>


    </section>

  );
}