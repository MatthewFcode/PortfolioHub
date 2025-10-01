
import useLabelZoneBreakPoints from './LabelZones.tsx'

function Echo() {
  const labelZones = useLabelZoneBreakPoints()

  const zone = labelZones.find((m) => m.id === 'Echo')
  if (!zone) {
    return null
  }
  return (
    <div
      className="project-label"
      style={{ position: 'absolute', left: zone.left, top: zone.top }}
    >
      <div className="label-content">
        <div className="label-title">Whats Up 📱</div>
        <div className="label-description">
          Web based real time messaging application
        </div>
      </div>
      <div className="label-arrow">↓</div>
    </div>
  )
}

export default Echo
