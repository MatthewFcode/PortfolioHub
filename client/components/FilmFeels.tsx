import useLabelZoneBreakPoints from './LabelZones.tsx'

function FilmFeels() {
  const labelZones = useLabelZoneBreakPoints()

  const zone = labelZones.find((m) => m.id === 'FilmFeels')
  if (!zone) {
    return null
  }

  return (
    <div
      className="project-label"
      style={{ position: 'absolute', left: zone.left, top: zone.top }}
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
