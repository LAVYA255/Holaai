"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 8);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navItems = [
    { label: "Features", href: "/#features" },
    { label: "Testimonials", href: "/#testimonials" },
    { label: "Comparison", href: "/#comparison" },
    { label: "Blog", href: "#" },
    { label: "Pricing", href: "/pricing" },
    { label: "FAQs", href: "/#faqs" },
  ];

  return (
    <>
      {/* HEADER */}
      <motion.header
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        className={`sticky top-0 z-50 transition-all ${
          scrolled
            ? "bg-black/80 backdrop-blur border-b border-neutral-800"
            : "bg-black"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

          {/* LOGO */}
          <Link href="/" className="flex items-center gap-3 font-medium text-white">
            <div className="h-8 w-8 rounded-lg bg-white" />
            <span>Hola AI Voicemail</span>
          </Link>

          {/* DESKTOP NAV */}
          <nav className="hidden md:flex gap-8 text-sm text-gray-400">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="transition hover:text-white hover:-translate-y-[1px]"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* RIGHT CTA */}
          <div className="flex items-center gap-3">
            <Link
              href="/pricing"
              className="hidden md:inline-flex px-4 py-2 rounded-md bg-white text-black text-sm transition-all duration-200 hover:opacity-90"
            >
              Get the App
            </Link>

            {/* MOBILE MENU BUTTON */}
            <button
              className="md:hidden text-gray-300"
              onClick={() => setMenuOpen(true)}
            >
              ☰
            </button>
          </div>
        </div>
      </motion.header>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/60"
            onClick={() => setMenuOpen(false)}
          >
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="bg-neutral-900 rounded-b-2xl p-6 border-b border-neutral-800"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-center mb-6 text-white">
                <span className="font-medium">Menu</span>
                <button onClick={() => setMenuOpen(false)}>✕</button>
              </div>

              <nav className="flex flex-col gap-4 text-gray-400">
                {navItems.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="text-base transition hover:text-white"
                    onClick={() => setMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}

                <Link
                  href="/pricing"
                  className="mt-4 px-4 py-2 rounded-md bg-white text-black text-sm text-center"
                  onClick={() => setMenuOpen(false)}
                >
                  Get the App
                </Link>
              </nav>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
