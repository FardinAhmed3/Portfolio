import Image from "next/image"

const projects = [
  {
    title: "Project 1",
    description: "A brief description of your first project.",
    image: "/placeholder.svg",
    link: "https://project1.com",
  },
  {
    title: "Project 2",
    description: "A brief description of your second project.",
    image: "/placeholder.svg",
    link: "https://project2.com",
  },
  {
    title: "Project 3",
    description: "A brief description of your third project.",
    image: "/placeholder.svg",
    link: "https://project3.com",
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-white/30 dark:bg-gray-800/30">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-800 dark:text-white">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white/80 dark:bg-gray-700/80 rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105 backdrop-blur-sm"
            >
              <Image
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                width={400}
                height={200}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300"
                >
                  View Project
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

