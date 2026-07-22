import { motion } from "framer-motion";

import {
  Award,
  BadgeCheck,
  GraduationCap,
  Trophy,
  FileCheck,
  Star,
} from "lucide-react";


const certificates = [

  {
    title: "National Skill Development Certification",
    description:
      "Recognition of professional skills development and practical learning achievements.",
    icon: GraduationCap,
  },


  {
    title: "AI & Emerging Technologies Certification",
    description:
      "Certificate showcasing knowledge of AI tools, automation, and modern technologies.",
    icon: BadgeCheck,
  },


  {
    title: "Leadership & Team Management",
    description:
      "Recognition for leadership abilities, teamwork, and professional collaboration.",
    icon: Award,
  },


  {
    title: "Outstanding Performance Award",
    description:
      "Special recognition for exceptional dedication, creativity, and project performance.",
    icon: Trophy,
  },


  {
    title: "Letter of Recommendation",
    description:
      "Professional recommendation highlighting skills, contribution, and achievements.",
    icon: FileCheck,
  },


  {
    title: "Internship Completion Certificate",
    description:
      "Official certification confirming successful completion of the internship program.",
    icon: Star,
  },

];



export default function Certifications() {


  return (

    <section
      id="certifications"
      className="
      relative
      py-24
      bg-slate-950
      overflow-hidden"
    >


      {/* Background Effects */}

      <div
        className="
        absolute
        top-0
        right-0
        w-96
        h-96
        bg-yellow-500/10
        rounded-full
        blur-3xl"
      />


      <div
        className="
        absolute
        bottom-0
        left-0
        w-80
        h-80
        bg-cyan-500/10
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

          transition={{
            duration:0.6
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
            text-yellow-400
            uppercase
            tracking-[0.3em]
            text-sm
            font-semibold"
          >

            Achievements

          </p>



          <h2
            className="
            mt-4
            text-4xl
            md:text-5xl
            font-extrabold
            text-white"
          >

            Earn Prestigious

            <span
              className="
              block
              bg-gradient-to-r
              from-yellow-400
              to-cyan-400
              bg-clip-text
              text-transparent"
            >

              National & International Certifications

            </span>


          </h2>




          <p
            className="
            mt-5
            max-w-2xl
            mx-auto
            text-slate-400"
          >

            Gain valuable certifications that strengthen your
            portfolio, resume, and professional profile.

          </p>


        </motion.div>






        {/* Certificate Cards */}

        <div
          className="
          grid
          md:grid-cols-2
          lg:grid-cols-3
          gap-8"
        >



          {certificates.map((certificate,index)=>{


            const Icon = certificate.icon;



            return (


              <motion.div


                key={certificate.title}


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
                  delay:index*0.1
                }}


                viewport={{
                  once:true
                }}


                whileHover={{
                  y:-10,
                  scale:1.03
                }}



                className="
                group
                relative
                rounded-3xl
                p-[2px]
                bg-gradient-to-br
                from-yellow-400
                via-transparent
                to-cyan-400
                hover:shadow-xl
                hover:shadow-yellow-500/20
                transition"
              >




                <div
                  className="
                  relative
                  h-full
                  rounded-3xl
                  bg-slate-900/80
                  backdrop-blur-xl
                  p-8"
                >



                  {/* Icon */}

                  <div
                    className="
                    w-16
                    h-16
                    rounded-2xl
                    flex
                    items-center
                    justify-center
                    bg-yellow-500/10
                    border
                    border-yellow-400/30
                    mb-6
                    group-hover:scale-110
                    transition"
                  >

                    <Icon
                      size={32}
                      className="text-yellow-400"
                    />

                  </div>




                  <h3
                    className="
                    text-xl
                    font-bold
                    text-white
                    mb-4
                    group-hover:text-yellow-400
                    transition"
                  >

                    {certificate.title}

                  </h3>




                  <p
                    className="
                    text-slate-400
                    leading-7"
                  >

                    {certificate.description}

                  </p>



                  {/* Certificate Badge */}

                  <div
                    className="
                    mt-6
                    inline-flex
                    items-center
                    gap-2
                    px-4
                    py-2
                    rounded-full
                    bg-cyan-500/10
                    border
                    border-cyan-400/30
                    text-cyan-300
                    text-sm"
                  >

                    <BadgeCheck size={16}/>

                    Verified Certificate

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