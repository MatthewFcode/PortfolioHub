import { useState, useEffect } from 'react'
import MatthewProfile1 from '../../src/assets/images/Matthew-Prof1.jpg'
//import MatthewProfile2 from '../../src/assets/images/Matthew-prof.jpg'
import MatthewProfile3 from '../../src/assets/images/greem-matt.jpg'
import { useForm, ValidationError } from '@formspree/react'
import githubLogo from '../../src/assets/images/github.png'
import linkedinLogo from '../../src/assets/images/linkedbeh.webp'
import Alfredo from './MatthewContentAlfredo'

function MatthewContent() {
  // const [image, setImage] = useState(MatthewProfile1)
  const images = [MatthewProfile1, MatthewProfile3]
  const [index, setIndex] = useState(0)
  const [state, handleSubmit] = useForm('mwvrrvob')

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setImage((prev) =>
  //       prev === MatthewProfile1 ? MatthewProfile2 : MatthewProfile1,
  //     )
  //   }, 5000)
  //   return () => clearInterval(interval)
  // }, [])
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  const skills = [
    'Node.js',
    'TypeScript',
    'JavaScript',
    'Python',
    'Django',
    'React.js',
    'Next.js',
    'Vue.js',
    'Express.js',
    'SQL / PostGres / SQLite',
    'Knex.js',
    'Prisma',
    'Dokku + Docker',
  ]

  return (
    <div className="about-page-wrapper">
      {/* ── MAIN 3-COLUMN GRID ── */}
      <div className="about-grid">
        {/* COL 1 — Photo + Skills */}
        <div className="about-col about-col--left">
          <div className="about-photo-panel">
            <img
              src={images[index]}
              alt="Matthew profile"
              className="about-profile-img"
            />
          </div>

          <div className="about-skills-panel">
            <h3 className="about-panel-title">Tech Stack</h3>
            <ul className="about-skills-list">
              {skills.map((skill) => (
                <li key={skill} className="about-skill-tag">
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* COL 2 — About Me */}
        <div className="about-col about-col--mid">
          <div className="about-bio-panel">
            <h2 className="about-panel-title">About Me</h2>
            <p className="about-bio-text">
              Hi, my name is Matthew and I am a full stack developer with
              experience building apps across different technical stacks and
              through their development, testing and deployment life cycles.
            </p>
            <p className="about-bio-text">
              I have a passion for learning, integrating and testing LLMs using
              best practices for software development across a range of
              technical stacks.
            </p>
            <p className="about-bio-text">
              When I am not diving deep into tech I am on the tennis court or in
              the gym; these are my passions!
            </p>
          </div>

          {/* Education placeholder — bottom of col 2 */}
          <div className="about-education-panel">
            <Alfredo />
          </div>
        </div>

        {/* COL 3 — Reach Out */}
        <div className="about-col about-col--right">
          <div className="about-contact-panel">
            <h2 className="about-panel-title">Reach Out ❗❗</h2>

            {state.succeeded ? (
              <div className="about-success">
                <p>✅ Message sent!</p>
                <p>I will get back to you ASAP.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="about-form">
                <div className="about-form-group">
                  <label htmlFor="about-email">Your Email Address:</label>
                  <input
                    id="about-email"
                    type="email"
                    name="email"
                    placeholder="your.email@example.com"
                    required
                  />
                  <ValidationError
                    prefix="Email"
                    field="email"
                    errors={state.errors}
                  />
                </div>

                <div className="about-form-group">
                  <label htmlFor="about-message">Your Message:</label>
                  <textarea
                    id="about-message"
                    name="message"
                    placeholder="Tell me about your enquiry..."
                    rows={4}
                    required
                  />
                  <ValidationError
                    prefix="Message"
                    field="message"
                    errors={state.errors}
                  />
                </div>

                <button
                  type="submit"
                  disabled={state.submitting}
                  className="about-submit-btn"
                >
                  {state.submitting ? 'Sending…' : '▶ Send Message'}
                </button>
              </form>
            )}
            <div className="about-contact-links">
              <a
                href="mailto:matthewfoley333@gmail.com"
                className="about-contact-row"
              >
                <span className="about-contact-icon">✉️</span>
                <span className="about-contact-info">
                  <span className="about-contact-label">Email</span>
                  <span className="about-contact-value">
                    matthewfoley333@gmail.com
                  </span>
                </span>
              </a>

              <a
                href="https://github.com/MatthewFcode"
                className="about-contact-row"
                rel="noopener noreferrer"
                target="_blank"
              >
                <span className="about-contact-icon">
                  <img src={githubLogo} alt="github" />
                </span>
                <span className="about-contact-info">
                  <span className="about-contact-label">GitHub</span>
                  <span className="about-contact-value">Personal GitHub</span>
                </span>
              </a>

              <a
                href="https://www.linkedin.com/in/matthew-foley-96b02a256/"
                target="_blank"
                rel="noopener noreferrer"
                className="about-contact-row"
              >
                <span className="about-contact-icon">
                  <img src={linkedinLogo} alt="LinkedIn" />
                </span>
                <span className="about-contact-info">
                  <span className="about-contact-label">LinkedIn</span>
                  <span className="about-contact-value">
                    Connect on LinkedIn
                  </span>
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MatthewContent
