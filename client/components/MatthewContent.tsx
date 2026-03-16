import { useState, useEffect } from 'react'
import MatthewProfile1 from '../../src/assets/images/Matthew-Prof1.jpg'
import MatthewProfile2 from '../../src/assets/images/Matthew-prof.jpg'
import { useForm, ValidationError } from '@formspree/react'

function MatthewContent() {
  const [image, setImage] = useState(MatthewProfile1)
  const [state, handleSubmit] = useForm('mwvrrvob')

  useEffect(() => {
    const interval = setInterval(() => {
      if (image === MatthewProfile1) {
        setImage(MatthewProfile2)
        console.log('swapped to 2')
      } else if (image === MatthewProfile2) {
        setImage(MatthewProfile1)
        console.log('swapped to 1')
      }
    }, 20000)

    return () => clearInterval(interval) // clears up the interval on unmount of the compoennt so it doesnt carry on running in the backgorund
  }, [])

  return (
    <div>
      <div>
        <img src={image} alt="Matthew-profile-image" />
      </div>
      <div>
        <h1>About Me</h1>
        <p>
          Hi, my name is Matthew and I am a full stack developer with experience
          building full stack apps using across different technical stacks and
          through their development, testing and deployments life cycles. I have
          a passion for learning, integrating and testing LLMs using best
          practices for software development for their implementation across a
          range of technical stacks. <br></br>
          When I am not diving deep into tech and working on projects I am on
          the tennis court or in the gym. These are my passions!
        </p>
      </div>
      <div>
        <h1>Reach Out❗❗ </h1>
        <div>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
          </svg>
        </div>
        <div className="contact-text">
          <span className="contact-label">LinkedIn</span>
          <a
            href="https://www.linkedin.com/in/donoughfoley/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Connect on LinkedIn
          </a>
        </div>

        {state.succeeded ? (
          <div className="success-message">
            <div className="success-icon">✓</div>
            <h3>Message Sent!</h3>
            <p>Thanks for reaching out. I will get back to you ASAP.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input
                id="email"
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

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                placeholder="Tell me about your enquiry..."
                rows={5}
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
              className="submit-button"
            >
              <span>{state.submitting ? 'Sending...' : 'Send Message'}</span>
            </button>
          </form>
        )}
      </div>
      <div>
        <h2>Technical Skills Overview</h2>
        <ul>
          <li>Node.js</li>
          <li>TypeScript</li>
          <li>JavaScript</li>
          <li>Python</li>
          <li>Django</li>
          <li>React.js</li>
          <li>Next.js</li>
          <li>Vue.js</li>
          <li>Express.js</li>
          <li>SQL + PostGres + SQLite</li>
          <li>Knex.js</li>
          <li>Prisma</li>
          <li>Dokku + Docker</li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
    </div>
  )
}

export default MatthewContent
