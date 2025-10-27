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
        <div className="label-title">Match Model ⚽</div>

        <div className="label-description">
          Machine Learning and AI-powered Premier League predictions
        </div>
      </div>
      <div className="label-arrow">↓</div>
    </div>
  )
}

export default MatchPredictor
