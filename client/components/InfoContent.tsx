import { useState } from 'react'
import { projects } from './projects.ts'

function Content() {
  const [search, setSearch] = useState('')

  const filteredProjects = projects.filter((project) => {
    const query = search.toLowerCase()

    return (
      project.title.toLowerCase().includes(query) ||
      project.description.toLowerCase().includes(query)
    )
  })

  return (
    <div className="info-container">
      <div>
        <input
          type="text"
          placeholder="..Search projects"
          value={search}
          onChange={(event) => setSearch(event.target.value)}
        />
      </div>
      <div className="projects-grid">
        {filteredProjects.map((project) => (
          <div className="project-card" key={project.title}>
            <div className="project-header">
              <h2 className="project-title">{project.title}</h2>
              <div className="project-links">
                <a
                  href={project.github}
                  target="_blank"
                  className="pixel-button"
                  rel="noreferrer"
                >
                  GitHub
                </a>

                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    className="pixel-button"
                    rel="noreferrer"
                  >
                    Live Site
                  </a>
                )}
              </div>
            </div>

            <video className="project-image" autoPlay loop muted playsInline>
              <source src={project.video} type="video/mp4" />
            </video>

            <div className="tech-stack">
              <h3 className="section-title">Tech Stack:</h3>
              <div className="tech-tags">
                {project.tech.map((tech) => (
                  <span className="tech-tag" key={tech}>
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <p className="project-description">{project.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Content
