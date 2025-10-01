
import useLabelZoneBreakPoints from './LabelZones.tsx'


function MatchPredictor() {
  const labelZones = useLabelZoneBreakPoints()
  const zone = labelZones.find((m) => m.id === 'MatchPredictor')

  if (!zone) {
    return null
  }
  return (
    <div
      className="project-label"
      style={{ position: 'absolute', left: zone.left, top: zone.top }}
    >
      <div className="label-content">
        <div className="label-title">FurtherForward 🧢</div>

        <div className="label-description">
          {/* AI-powered Premier League predictions (Coming Soon) */}
          Draft website for solo business that I created before the Dev Academy
          bootcamp
        </div>
      </div>
      <div className="label-arrow">↓</div>
    </div>
  )
}

export default MatchPredictor
