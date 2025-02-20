"use client"

import { useState, useEffect } from "react"
import { FaGithub, FaLinkedin } from "react-icons/fa"

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed w-full z-10 transition-all duration-300 ${
        isScrolled ? "bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-800 dark:text-white">Your Name</h1>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <a href="#about" className="text-gray-600 hover:text-gray-800 dark:text-gray-300 dark:hover:text-white">
                About
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className="text-gray-600 hover:text-gray-800 dark:text-gray-300 dark:hover:text-white"
              >
                Projects
              </a>
            </li>
            <li>
              <a href="#skills" className="text-gray-600 hover:text-gray-800 dark:text-gray-300 dark:hover:text-white">
                Skills
              </a>
            </li>
          </ul>
        </nav>
        <div className="flex space-x-4">
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-gray-800 dark:text-gray-300 dark:hover:text-white"
          >
            <FaGithub size={24} />
          </a>
          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-gray-800 dark:text-gray-300 dark:hover:text-white"
          >
            <FaLinkedin size={24} />
          </a>
        </div>
      </div>
    </header>
  )
}

