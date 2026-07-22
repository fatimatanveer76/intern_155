import { motion } from "framer-motion";
import {
  ArrowRight,
  Sparkles,
  Laptop,
  Building2,
  Users,
  Award,
  Rocket,
} from "lucide-react";
import logo from "../assets/logo.png";


export default function Hero() {

  return (

    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden bg-slate-950 pt-24"
    >


      {/* Background Glow Effects */}

      <div className="absolute top-20 left-10 w-72 h-72 
      bg-cyan-500/20 rounded-full blur-3xl">
      </div>


      <div className="absolute bottom-10 right-10 w-96 h-96 
      bg-yellow-500/10 rounded-full blur-3xl">
      </div>



      {/* Grid Background */}

      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "linear-gradient(#009CB4 1px, transparent 1px), linear-gradient(90deg,#009CB4 1px,transparent 1px)",
          backgroundSize:"40px 40px",
        }}
      />


      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">


        <div className="grid lg:grid-cols-2 gap-12 items-center">



          {/* Left Content */}

          <motion.div

            initial={{
              opacity:0,
              y:40
            }}

            animate={{
              opacity:1,
              y:0
            }}

            transition={{
              duration:0.8
            }}

          >


            {/* Small Badge */}

            <div className="inline-flex items-center gap-2 
            rounded-full border border-cyan-500/30 
            bg-cyan-500/10 px-4 py-2 text-cyan-300 mb-6">


              <Sparkles size={18}/>

              Internship Program 2026


            </div>




            {/* Main Heading */}

            <h1
              className="text-4xl md:text-6xl 
              font-extrabold leading-tight text-white"
            >

              INQUISITORS

              <span className="block 
              bg-gradient-to-r from-cyan-400 
              via-blue-400 to-yellow-400 
              bg-clip-text text-transparent">

                Society Internship Program 2026

              </span>


            </h1>




            {/* Tagline */}

            <h2
              className="mt-6 text-2xl md:text-3xl 
              font-bold bg-gradient-to-r 
              from-cyan-400 to-yellow-400 
              bg-clip-text text-transparent"
            >

              Learn • Lead • Innovate • Grow

            </h2>





            {/* Description */}

            <p
              className="mt-6 text-slate-400 
              text-lg leading-8 max-w-xl"
            >

              Empowering passionate, creative, and motivated
              students with practical experience through AI,
              technology, leadership, mentorship, and
              real-world projects.

            </p>




            {/* Internship Badges */}

            <div className="flex flex-wrap gap-4 mt-8">


              <div
                className="flex items-center gap-2 
                rounded-full border border-cyan-500/30
                bg-slate-900/70 px-5 py-3
                text-cyan-300"
              >

                <Laptop size={20}/>

                Virtual Internship

              </div>



              <div
                className="flex items-center gap-2 
                rounded-full border border-yellow-500/30
                bg-slate-900/70 px-5 py-3
                text-yellow-300"
              >

                <Building2 size={20}/>

                Hybrid Internship

              </div>


            </div>





            {/* Buttons */}

            <div className="flex flex-wrap gap-5 mt-10">


              <button
                className="
                flex items-center gap-2
                rounded-xl bg-cyan-500 
                px-7 py-4 font-bold text-white
                shadow-lg shadow-cyan-500/40
                hover:bg-cyan-400
                hover:scale-105 transition"
              >

                Apply Now

                <ArrowRight size={20}/>

              </button>




              <button
                className="
                rounded-xl border border-cyan-500/40
                px-7 py-4 font-semibold
                text-cyan-300
                hover:bg-cyan-500/10 transition"
              >

                Explore Program

              </button>


            </div>


          </motion.div>







          {/* Right Side Visual */}

          <motion.div

            initial={{
              opacity:0,
              scale:0.8
            }}

            animate={{
              opacity:1,
              scale:1
            }}

            transition={{
              duration:0.8
            }}

            className="relative flex justify-center"

          >


            <div
              className="
              w-80 h-80 md:w-[420px] md:h-[420px]
              rounded-full
              bg-gradient-to-br 
              from-cyan-500/20
              to-yellow-500/20
              border border-cyan-400/30
              backdrop-blur-xl
              flex items-center justify-center
              shadow-2xl shadow-cyan-500/20"
            >


              <Rocket
                size={120}
                className="text-cyan-400"
              />
          {/* <img
            src={logo}
            alt="logo"
            className="w-42 h-42 rounded-full "
          /> */}

            </div>



            {/* Floating Cards */}


            <div
              className="
              absolute top-10 right-0
              bg-slate-900/80
              border border-cyan-500/30
              rounded-xl p-4
              backdrop-blur"
            >

              <Users className="text-cyan-400"/>

              <p className="text-white mt-2">
                Community
              </p>

            </div>





            <div
              className="
              absolute bottom-10 left-0
              bg-slate-900/80
              border border-yellow-500/30
              rounded-xl p-4
              backdrop-blur"
            >

              <Award className="text-yellow-400"/>

              <p className="text-white mt-2">
                Certification
              </p>

            </div>


          </motion.div>



        </div>


      </div>


    </section>

  );
}