import Fisweek from '../../assets/images/fisweek.png';
import Logo from '../../assets/images/logo.png';
// import Na from '../../assets/images/na.png';
// import RioInnovation from '../../assets/images/rio-innovation.png';
import Image1 from '../../assets/images/image1.png';
import EventDate from '../../assets/images/event-date.png';
import GeometricShapes1 from '../../assets/images/geometric-shapes1.png';
import GeometricShapes2 from '../../assets/images/geometric-shapes2.png';
import GeometricShapes3 from '../../assets/images/geometric-shapes3.png';

import './SaveTheDate.css';

export function SaveTheDate() {
    return (
        <div className="save-the-date">
            <img className="fisweek" src={Fisweek} alt="Fisweek"/>
            <img className="logo" src={Logo} alt="Logo Fisweek" />
            {/* <img className="na" src={Na} alt="na" /> */}
            {/* <img className="rio-innovation" src={RioInnovation} alt="RioInnovation" /> */}
            <img className="image1" src={Image1} alt="Mulher Sorrindo" />
            <img className="event-date" src={EventDate} alt="Data do Evento" />
            <img className="geometric-shapes1" src={GeometricShapes1} alt="Forma Geomêtrica" />
            <img className="geometric-shapes2" src={GeometricShapes2} alt="Forma Geomêtrica" />
            <img className="geometric-shapes3" src={GeometricShapes3} alt="Forma Geomêtrica" />
        </div>
    );
}
