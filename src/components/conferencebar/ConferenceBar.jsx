import bg from '../../assets/images/conferencebar/bg.png';
import commeets from '../../assets/images/logos/commeets.png';
import fis from '../../assets/images/logos/fis.png';
import lygga from '../../assets/images/logos/lygga.png';
import sm from '../../assets/images/logos/sm.png';
import pipe from '../../assets/images/conferencebar/pipe.png';
import poweredBy from '../../assets/images/conferencebar/powered-by.png';

import './ConferenceBar.css';

export function ConferenceBar() {
    return (
        <div className="conferenceBar" style={{ backgroundImage: `url(${bg})` }}>
            <img src={fis} className="fis" />
            <img src={pipe} className="pipe" />
            <img src={sm} className="sm" />
            <img src={pipe} className="pipe" />
            <img src={lygga} className="lygga" />
            <img src={pipe} className="pipe" />
            <img src={commeets} className="commeets" />
            <img src={poweredBy} className="poweredBy d-none d-md-inline" />
        </div>
    );
}
