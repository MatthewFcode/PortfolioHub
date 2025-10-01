import useLabelZoneBreakPoints from './LabelZones.tsx'

function InsightStack() {
  const labelZones = useLabelZoneBreakPoints()

  const zone = labelZones.find((m) => m.id === 'InsightStack')

  if (!zone) {
    return null
  }

  return (
    <div
      className="project-label"
      style={{ position: 'absolute', left: zone.left, top: zone.top }}
    >
      <div className="label-content">
        <div className="label-title">InsightStack 🗂️</div>
        <div className="label-description">
          InsightStack is a full stack social media styled application.
        </div>
      </div>
      <div className="label-arrow">↓</div>
    </div>
  )
}

export default InsightStack
