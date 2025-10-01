// function FilmFeels() {
//   return (
//     <div>
//       <h1>FilmFeels API 🎬</h1>
//       <p>
//         FilmFeels is a REST API that allows for users to group movie data by
//         mood tags. There is a built in POST feature on the front end which
//         allows users to enter a film and the mood they were in and send this
//         data to our database. This data is automatically enriched by our backend
//         adding lots of data about the users entry and then making it availabe in
//         our API and our film suggestoin generator which allows you to select the
//         mood you are in and then be suggested a movie.
//       </p>
//       {/* <p>FilmFeels is a REST API
//         that groups movies by mood tags. Users can submit a film and mood via
//         the front end, which our backend enriches with extra data. The API
//         powers a movie suggestion generator that recommends films based on your
//         mood.</p> */}
//     </div>
//   )
// }

// export default FilmFeels
function FilmFeels() {
  return (
    <div
      className="project-label"
      style={{ position: 'absolute', left: 1498, top: 36 }}
    >
      <div className="label-content">
        <div className="label-title">FilmFeels API 🎬</div>
        <div className="label-description">
          Movie API, grouping data by mood tags and applying automatic data
          enrichment.
        </div>
      </div>
      <div className="label-arrow">↓</div>
    </div>
  )
}

export default FilmFeels
