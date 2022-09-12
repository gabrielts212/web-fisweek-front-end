import date from '../../assets/images/savethedate/date.png';
import logo from '../../assets/images/savethedate/logo.png';
import main from '../../assets/images/savethedate/main.png';
import shape1 from '../../assets/images/savethedate/shape1.png';
import shape2 from '../../assets/images/savethedate/shape2.png';
import shape3 from '../../assets/images/savethedate/shape3.png';
import './SaveTheDate.css';

export function SaveTheDate() {
    return (
        <div className="saveTheDate">
            <img className="shape1" src={shape1} alt="Forma Geométrica" />
            <img className="logo" src={logo} alt="fisweek" />
            <img className="main" src={main} alt="Mulher Sorrindo" />
            <img className="date" src={date} alt="Data do evento" />
            <img className="shape2" src={shape2} alt="Forma Geométrica" />
            <img className="shape3" src={shape3} alt="Forma Geométrica" />
        </div>
    );
}
