import { SponsorsPanel } from '../sponsorspanel/SponsorsPanel'

import './Panels.css'

export function Panels() {
  return (
    <div className="Panels">
      <section className="Dates">
        <div className="Date">1º dia-02/05</div>
        <div className="dateAndTime">15:30-16:30</div>
        <div className="Utc3">UTC-3</div>
      </section>

      <SponsorsPanel />
    </div>
  )
}
