import {
  Phone,
  Mail,
  MapPin,
} from "lucide-react";

import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
  FaXTwitter,
} from "react-icons/fa6";

import logo from "../assets/logo.png";



export default function Footer() {
  return (
    <footer
      id="footer"
      className="relative bg-slate-950 border-t border-cyan-500/20"
    >

      {/* Deadline Banner */}
      <div className="max-w-7xl mx-auto px-6 pt-16">

        <div className="rounded-3xl border border-yellow-500/40 
        bg-gradient-to-r from-yellow-500/10 via-cyan-500/10 to-yellow-500/10 
        p-8 text-center shadow-lg shadow-cyan-500/10">

          <p className="text-sm uppercase tracking-[0.3em] text-yellow-400 font-semibold">
            Application Deadline
          </p>

          <h2 className="mt-3 text-3xl md:text-5xl font-extrabold text-white">
            4 JULY 2026
          </h2>

          <p className="mt-2 text-cyan-300 text-lg">
            11:59 PM GMT
          </p>

        </div>

      </div>


      {/* Footer Content */}
      <div className="max-w-7xl mx-auto px-6 py-16 grid gap-10 md:grid-cols-3">


        {/* Brand Section */}
        <div>

          <div className="flex items-center gap-3">

            <img
              src={logo}
              alt="INQUISITORS Logo"
              className="w-16 h-16"
            />


            <div>

              <h3 className="text-2xl font-bold text-white">
                INQUISITORS
              </h3>

              <p className="text-cyan-400 text-sm">
                Society Internship Program 2026
              </p>

            </div>

          </div>


          <p className="mt-6 text-slate-400 leading-7">
            Empowering future innovators through AI,
            technology, leadership, teamwork, and
            real-world project experience.
          </p>


        </div>



        {/* Contact Section */}
        <div>

          <h3 className="text-xl font-semibold text-white mb-6">
            Contact
          </h3>


          <div className="space-y-5">


            <a
              href="tel:+923096888664"
              className="flex items-center gap-3 text-slate-300 hover:text-cyan-400 transition"
            >

              <Phone size={20}/>

              +92 (309) 688-8664

            </a>



            <a
              href="mailto:info@inquisitorssociety.org"
              className="flex items-center gap-3 text-slate-300 hover:text-cyan-400 transition"
            >

              <Mail size={20}/>

              info@inquisitorssociety.org

            </a>



            <div className="flex items-center gap-3 text-slate-300">

              <MapPin size={20}/>

              Pakistan

            </div>


          </div>

        </div>



        {/* Social Section */}
        <div>


          <h3 className="text-xl font-semibold text-white mb-6">
            Follow Us
          </h3>



          <div className="flex gap-4">


            <a
              href="#"
              className="p-3 rounded-xl bg-slate-900 text-white hover:bg-cyan-500 transition"
            >
              <FaLinkedin size={20}/>
            </a>



            <a
              href="#"
              className="p-3 rounded-xl bg-slate-900 text-white hover:bg-pink-500 transition"
            >
              <FaInstagram size={20}/>
            </a>



            <a
              href="#"
              className="p-3 rounded-xl bg-slate-900 text-white hover:bg-red-600 transition"
            >
              <FaYoutube size={20}/>
            </a>



            <a
              href="#"
              className="p-3 rounded-xl bg-slate-900 text-white hover:bg-black transition"
            >
              <FaXTwitter size={20}/>
            </a>


          </div>



          <button
            className="mt-8 w-full rounded-xl bg-cyan-500 py-3 
            font-semibold text-white shadow-lg shadow-cyan-500/30
            hover:bg-cyan-400 hover:scale-105 transition"
          >
            Apply Now
          </button>


        </div>


      </div>



      {/* Copyright */}
      <div className="border-t border-slate-800">


        <div className="max-w-7xl mx-auto px-6 py-6 
        flex flex-col md:flex-row justify-between items-center 
        text-slate-500 text-sm">


          <p>
            © 2026 INQUISITORS Society. All Rights Reserved.
          </p>


          <p className="mt-3 md:mt-0 text-cyan-400">
            Learn • Lead • Innovate • Grow
          </p>


        </div>


      </div>


    </footer>
  );
}