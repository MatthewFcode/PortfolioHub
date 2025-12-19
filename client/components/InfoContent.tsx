function Content() {
  return (
    <div className="info-container">
      <div className="projects-grid">
        {/* Project 1 - InsightStack */}
        <div className="project-card">
          <div className="project-header">
            <h2 className="project-title">InsightStack</h2>
            <div className="project-links">
              <a
                href="https://github.com/MatthewFcode/InsightStack"
                target="_blank"
                className="pixel-button"
                rel="noreferrer"
              >
                GitHub
              </a>
              <a
                href="https://insightstack.borb.nz/"
                target="_blank"
                className="pixel-button"
                rel="noreferrer"
              >
                Live Site
              </a>
            </div>
          </div>
          <video className="project-image" autoPlay loop muted playsInline>
            <source src="/videos/insightstack.mp4" type="video/mp4" />
          </video>

          <div className="tech-stack">
            <h3 className="section-title">Tech Stack:</h3>
            <div className="tech-tags">
              <span className="tech-tag">TypeScript</span>
              <span className="tech-tag">React.js</span>
              <span className="tech-tag">Node.js</span>
              <span className="tech-tag">Express.js</span>
              <span className="tech-tag">SQLite3</span>
              <span className="tech-tag">Knex.js</span>
              <span className="tech-tag">Websockets</span>
              <span className="tech-tag">Multer</span>
              <span className="tech-tag">SCSS</span>
              <span className="tech-tag">Auth0</span>
            </div>
          </div>

          <p className="project-description">
            InsightStack is a posting platform for users to sign in and share
            their technical and human skills insights to others. I started
            building this before leaving Dev Academy because I wanted to give
            people a place to share what they had learned recently that was
            really valuable to them.
          </p>
        </div>

        {/* Project 2 - Echo */}
        <div className="project-card">
          <div className="project-header">
            <h2 className="project-title">Echo....</h2>
            <div className="project-links">
              <a
                href="https://github.com/MatthewFcode/Echo"
                target="_blank"
                className="pixel-button"
                rel="noreferrer"
              >
                GitHub
              </a>
              <a
                href="https://echo.borb.nz/"
                target="_blank"
                className="pixel-button"
                rel="noreferrer"
              >
                Live Site
              </a>
            </div>
          </div>

          <video className="project-image" autoPlay loop muted playsInline>
            <source src="/videos/echo.mp4" type="video/mp4" />
          </video>

          <div className="tech-stack">
            <h3 className="section-title">Tech Stack:</h3>
            <div className="tech-tags">
              <span className="tech-tag">TypeScript</span>
              <span className="tech-tag">JavaScript</span>
              <span className="tech-tag">React.js</span>
              <span className="tech-tag">Node.js</span>
              <span className="tech-tag">Express.js</span>
              <span className="tech-tag">SQLite3</span>
              <span className="tech-tag">Knex.js</span>
              <span className="tech-tag">Websockets</span>
              <span className="tech-tag">Tailwind CSS</span>
              <span className="tech-tag">Cloudinary</span>
              <span className="tech-tag">SCSS</span>
              <span className="tech-tag">Auth0</span>
            </div>
          </div>

          <p className="project-description">
            Echo is a messaging platform that lets you add friends and have a
            real time conversation with someone. It has many different features
            including a built in typing test and news headline banner. The main
            challenge in this project was securing chat ids so that users cannot
            snoop into chats that they are not apart of.
          </p>
        </div>

        {/* Project 3 - FilmFeels */}
        <div className="project-card">
          <div className="project-header">
            <h2 className="project-title">FilmFeels</h2>
            <div className="project-links">
              <a
                href="https://github.com/MatthewFcode/FilmFeel-API"
                className="pixel-button"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
              <a
                href="https://filmfeels.borb.nz/"
                target="_blank"
                className="pixel-button"
                rel="noreferrer"
              >
                Live Site
              </a>
            </div>
          </div>

          <video className="project-image" autoPlay loop muted playsInline>
            <source src="/videos/filmfeels.mp4" type="video/mp4" />
          </video>

          <div className="tech-stack">
            <h3 className="section-title">Tech Stack:</h3>
            <div className="tech-tags">
              <span className="tech-tag">TypeScript</span>
              <span className="tech-tag">JavaScript</span>
              <span className="tech-tag">React.js</span>
              <span className="tech-tag">Node.js</span>
              <span className="tech-tag">Express.js</span>
              <span className="tech-tag">SQLite3</span>
              <span className="tech-tag">Knex.js</span>
              <span className="tech-tag">Websockets</span>
              <span className="tech-tag">SCSS</span>
            </div>
          </div>

          <p className="project-description">
            FilmFeels is an API that accepts both POST and GET requests with no
            CORS restrictions. There is a form for contributing movies to the
            database and an automatic data enrichment process that makes
            entering just the title of a movie a whole valuable dataset. The
            biggest challenge I faced in this project was actually seeding the
            database. As a solution I loop through a huge list of movies in the
            seeds calling the third party api for each one and then insert that
            object into the database.
          </p>
        </div>

        {/* Project 4 - PL Match Model */}
        <div className="project-card">
          <div className="project-header">
            <h2 className="project-title">MatchModel</h2>
            <div className="project-links">
              <a
                href="https://github.com/MatthewFcode/PL-Match-Model"
                target="_blank"
                className="pixel-button"
                rel="noreferrer"
              >
                GitHub
              </a>
            </div>
          </div>

          <video className="project-image" autoPlay loop muted playsInline>
            <source src="/videos/matchmodel.mp4" type="video/mp4" />
          </video>

          <div className="tech-stack">
            <h3 className="section-title">Tech Stack:</h3>
            <div className="tech-tags">
              <span className="tech-tag">Python</span>
              <span className="tech-tag">Machine Learning</span>
              <span className="tech-tag">Feature Engineering</span>
              <span className="tech-tag">Web Scraping</span>
              <span className="tech-tag">Generative AI</span>
              <span className="tech-tag">Flask APIs</span>
              <span className="tech-tag">SQLite3</span>
              <span className="tech-tag">TypeScript</span>
              <span className="tech-tag">JavaScript</span>
              <span className="tech-tag">React.js</span>
              <span className="tech-tag">Express.js</span>
              <span className="tech-tag">SCSS</span>
            </div>
          </div>

          <p className="project-description">
            Match Model is a map based app that allows you to browse a map of
            Premier League teams and view future predictions for the teams. The
            biggest challenge here was accuracy. Whilst the webscrapers I built
            were very effective at gathering relevant and valuable data to train
            the ML model on it was still hard to achieve wide spread accuracy
            with some predictions still not logical. To filter out the outliers
            I applied generative AI in the Flask API route to revise the dataset
            and make changes where necessary considering all relevant Premier
            League information.
          </p>
        </div>
        <div className="project-card">
          <div className="project-header">
            <h2 className="project-title">ETNZ Dashboard</h2>
            <div className="project-links">
              <a
                href="https://github.com/MatthewFcode/ETNZ-Dashboard"
                target="_blank"
                className="pixel-button"
                rel="noreferrer"
              >
                GitHub
              </a>
              <a
                href="https://etnz-dashboard.borb.nz/"
                target="_blank"
                className="pixel-button"
                rel="noreferrer"
              >
                Live Site
              </a>
            </div>
          </div>

          <video className="project-image" autoPlay loop muted playsInline>
            <source src="" type="video/mp4" />
          </video>

          <div className="tech-stack">
            <h3 className="section-title">Tech Stack:</h3>
            <div className="tech-tags">
              <span className="tech-tag">React.js</span>
              <span className="tech-tag">TypeScript</span>
              <span className="tech-tag">JavaScript</span>
              <span className="tech-tag">WebSockets</span>
              <span className="tech-tag">Express.js</span>
              <span className="tech-tag">Vite</span>
              <span className="tech-tag">Knex.js</span>
              <span className="tech-tag">SQLite3</span>
            </div>
          </div>

          <p className="project-description">
            ETNZ is a mock live dashboard for displaying high frequency data
            with low latency to a user interface. The main challenge in this
            project was compiling the different data entry points in different
            React components on the front end. The fix was using the useContext
            React hook to globalise state across different React
            components.{' '}
          </p>
        </div>
      </div>
    </div>
  )
}

export default Content
