// function Content() {
//   return (
//     <>
//       <div>
//         <a href="https://github.com/MatthewFcode/InsightStack">GitHub</a>
//         <a href="https://insightstack.borb.nz/">Deployed Site</a>

//         <img src="/src/assets/images/placeholder.png" alt="InsightStack-demo" />
//         <h6>TechStack Used:</h6>
//         <ul>
//           <li>TypeScript</li>
//           <li>React.js</li>
//           <li>Node.js</li>
//           <li>Express.js</li>
//           <li>SQLite3</li>
//           <li>Knex.js</li>
//           <li>Websockets</li>
//           <li>Multer</li>
//           <li>SCSS</li>
//           <li>Auth0</li>
//         </ul>
//         <p>
//           InsightStack is a posting platform for users to sign in and share
//           their technical and human skills insights to others. I started
//           building this before leaving Dev Academy because I wanted to give
//           people a place to share what they had learned recently that was really
//           valuable to them.
//         </p>
//       </div>
//       <div>
//         <a href="https://github.com/MatthewFcode/Echo">GitHub</a>
//         <a href="https://echo.borb.nz/">Deployed Site</a>
//         <img src="/src/assets/images/placeholder.png" alt="Echo-demo" />
//         <h6>TechStack Used:</h6>
//         <ul>
//           <li>TypeScript</li>
//           <li>JavaScript</li>
//           <li>React.js</li>
//           <li>Node.js</li>
//           <li>Express.js</li>
//           <li>SQLite3</li>
//           <li>Knex.js</li>
//           <li>Websockets</li>
//           <li>Tailwind CSS</li>
//           <li>Cloudinary</li>
//           <li>SCSS</li>
//           <li>Auth0</li>
//         </ul>
//         <p>
//           Echo is a messaging platform that lets you add friends and have a real
//           time conversation with someone. It has manny different feautres
//           including a built in typing test and news headline banner. The main
//           challenge in this project was securing chat ids so that users cannot
//           snoop into chats that they are not apart of.
//         </p>
//       </div>

//       <div>
//         <a href="https://github.com/MatthewFcode/FilmFeel-API">GitHub</a>
//         <a href="https://filmfeels.borb.nz/">Deployed Site</a>
//         <img src="/src/assets/images/placeholder.png" alt="FilmFeels-demo" />
//         <h6>TechStack Used:</h6>
//         <ul>
//           <li>TypeScript</li>
//           <li>JavaScript</li>
//           <li>React.js</li>
//           <li>Node.js</li>
//           <li>Express.js</li>
//           <li>SQLite3</li>
//           <li>Knex.js</li>
//           <li>Websockets</li>
//           <li>SCSS</li>
//         </ul>
//         <p>
//           FilmFeels is an API that accepts both POST and GET requests with no
//           CORS restrictions. There is a form for contributing movies to the
//           database and an automatic data enrichment process that makes entering
//           just the title of a movie a whole valuable dataset. The biggest
//           challenge I face in this project was actually seeding the database. As
//           a soulution I loop through a huge list of movies in the seeds calling
//           the third party api for each one and then insert that object into the
//           database.{' '}
//         </p>
//       </div>
//       <div>
//         <a href="https://github.com/MatthewFcode/PL-Match-Model">GitHub</a>
//         {/* <a href="https://filmfeels.borb.nz/">Deployed Site</a> */}
//         <img src="/src/assets/images/placeholder.png" alt="FilmFeels-demo" />
//         <ul>
//           <li>Python</li>
//           <li>Machine Learning | Random Forest Classifier</li>
//           <li>Feature Engineering</li>
//           <li>Web Scraping</li>
//           <li>Generative AI</li>
//           <li>Flask APIs</li>
//           <li>SQLite3</li>
//           <li>TypeScript</li>
//           <li>JavaScript</li>
//           <li>React.js</li>
//           <li>Express.js</li>
//           <li>SCSS</li>
//         </ul>
//         <p>
//           Match Model is a map based app that allows you to browse a map of
//           Premier League teams and view future predictions for the teams. The
//           biggest challenge here was accuracy. Whilst the webscrapers I built
//           were very effective at gathering relevant and valuable data to train
//           the ML model on it was still hard to acheive wide spread accuracy with
//           some predictions still not logical. To filter out the outliers I
//           applied generative AI in the Flask API route to revise the dataset and
//           make changes where necessary considering all relevent Premier League
//           information.{' '}
//         </p>
//       </div>
//     </>
//   )
// }

// export default Content

// import './InfoContent.scss'

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
                className="pixel-button"
              >
                GitHub
              </a>
              <a href="https://insightstack.borb.nz/" className="pixel-button">
                Live Site
              </a>
            </div>
          </div>

          <img
            src="/src/assets/images/placeholder.png"
            alt="InsightStack-demo"
            className="project-image"
          />

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
                className="pixel-button"
              >
                GitHub
              </a>
              <a href="https://echo.borb.nz/" className="pixel-button">
                Live Site
              </a>
            </div>
          </div>

          <img
            src="/src/assets/images/placeholder.png"
            alt="Echo-demo"
            className="project-image"
          />

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
              >
                GitHub
              </a>
              <a href="https://filmfeels.borb.nz/" className="pixel-button">
                Live Site
              </a>
            </div>
          </div>

          <img
            src="/src/assets/images/placeholder.png"
            alt="FilmFeels-demo"
            className="project-image"
          />

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
                className="pixel-button"
              >
                GitHub
              </a>
            </div>
          </div>

          <img
            src="/src/assets/images/placeholder.png"
            alt="PL-Match-Model-demo"
            className="project-image"
          />

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
      </div>
    </div>
  )
}

export default Content
