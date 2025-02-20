import Image from "next/image"

export default function About() {
  return (
    <section id="about" className="py-20 bg-white/50 dark:bg-gray-800/50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-800 dark:text-white">About Me</h2>
        <div className="flex flex-col md:flex-row items-center justify-center">
          <div className="md:w-1/3 mb-8 md:mb-0">
            <Image src="/Fardin.png" alt="Fardin Ahmed" width={300} height={300} className="rounded-full" />
          </div>
          <div className="md:w-2/3 md:pl-8">
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-4">
              Hello! I'm Fardin, a passionate software engineer with expertise in Django, React, various programming languages and enterprise software development.
              I love creating responsive and user-friendly web applications that solve real-world
              problems.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Currently, I am a fourth-year Computer Science student at Brooklyn College, expected to graduate in Fall 2025.
              I'm always trying to learn new technologies, take on challenging projects.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

