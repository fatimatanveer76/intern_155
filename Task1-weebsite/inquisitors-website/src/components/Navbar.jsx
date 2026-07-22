import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import logo from "../assets/logo.png";
const navLinks = [
  { name: "Home", to: "hero" },
  { name: "Curriculum", to: "curriculum" },
  { name: "Benefits", to: "benefits" },
  { name: "Certifications", to: "certifications" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -70 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 w-full z-50 border-b border-cyan-500/20 bg-slate-950/80 backdrop-blur-xl"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <div className="flex items-center gap-3 cursor-pointer">
          <img
            src={logo}
            alt="logo"
            className="w-15 h-15 "
          />

          <div>
            <h1 className="font-bold text-xl tracking-wide text-white">
              INQUISITORS
            </h1>

            <p className="text-xs text-cyan-400">
              Internship Program 2026
            </p>
          </div>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((item) => (
            <Link
              key={item.name}
              to={item.to}
              smooth={true}
              duration={600}
              offset={-80}
              className="cursor-pointer text-slate-300 hover:text-cyan-400 transition"
            >
              {item.name}
            </Link>
          ))}

          <Link
            to="footer"
            smooth={true}
            duration={600}
            offset={-70}
          >
            <button className="rounded-full bg-cyan-500 px-6 py-3 text-white font-semibold shadow-lg shadow-cyan-500/40 hover:shadow-cyan-500/70 hover:scale-105 transition duration-300">
              Apply Now
            </button>
          </Link>
        </div>

        {/* Mobile Button */}
        <button
          className="lg:hidden text-white"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          className="lg:hidden bg-slate-900 border-t border-cyan-500/20"
        >
          <div className="flex flex-col p-6 gap-6">
            {navLinks.map((item) => (
              <Link
                key={item.name}
                to={item.to}
                smooth={true}
                duration={600}
                offset={-70}
                onClick={() => setOpen(false)}
                className="cursor-pointer text-slate-300 hover:text-cyan-400"
              >
                {item.name}
              </Link>
            ))}

            <Link
              to="footer"
              smooth={true}
              duration={600}
              onClick={() => setOpen(false)}
            >
              <button className="w-full rounded-xl bg-cyan-500 py-3 font-semibold text-white shadow-lg shadow-cyan-500/40">
                Apply Now
              </button>
            </Link>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}