import Image from "next/image"

const projects = [
  {
    title: "YapYap",
    description: "A scalable real-time messaging platform",
    tech_stack:"FastAPI, React, Docker, Socket.io, MySQL, MongoDB, RabbitMQ",
    image: "/YapYap.png",
    link: "https://yapyap.fardinahmed.com",
  },
  {
    title: "Penfluence",
    description: "Machine vision assisted tool to extract handwritten notes and convert into downloadable PDFs",
    tech_stack:"NextJS, FastAPI, OpenAI, OpenCV, MySQL",
    image: "/Penfluence.png",
    link: "https://penfluence.vercel.app",
  },
  {
    title: "GoalWise",
    description: "Full stack enterprise project developed using Django, React, MySQL",
    tech_stack:"React, Django, Axios, MySQL, Postman",
    image: "/GoalWise.png",
    link: "https://github.com/FardinAhmed3",
  },
  {
    title: "Excilify",
    description: "Data extraction and visualization tool built to streamline financial records at a project management office",
    tech_stack:"React, Django, ChartJS, Axios, MySQL, Postman",
    image: "/Excilify_simulation.jpg",
    link: "https://github.com/FardinAhmed3",
  },
  {
    title: "Promptopia",
    description: "Blog Platform",
    tech_stack:"NextJS, OAuth2.0, Vercel",
    image: "/Promptopia.png",
    link: "https://next.fardinahmed.com",
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
                width={500}
                height={200}
                className="w-full h-[300px] object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                <p className="text-gray-600 dark:text-gray-300 mb-4">Tech Stack: {project.tech_stack}</p>
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

