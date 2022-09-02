import Image2 from '../../assets/images/image2.png';
import GeometricShapes4 from '../../assets/images/geometric-shapes4.png';
import GeometricShapes5 from '../../assets/images/geometric-shapes5.png';
import GeometricShapes6 from '../../assets/images/geometric-shapes6.png';
import Checked from '../../assets/images/checked.png';
import Youtube from '../../assets/images/youtube.png';
import Spotify from '../../assets/images/spotify.png';
import Instagram from '../../assets/images/instagram.png';
import Linkedin from '../../assets/images/linkedin.png';
import Twitter from '../../assets/images/twitter.png';
import TikTok from '../../assets/images/tik-tok.png';
import Facebook from '../../assets/images/facebook.png';
import User from '../../assets/images/user.png';
import Email from '../../assets/images/email.png';
import Telegram from '../../assets/images/telegram.png';

import './Newsletter.css';

export function Newsletter() {
    return (
        <div className="newsletter">
            <img className="image2" src={Image2} alt="Aperto de mãos de um robô com um humano" />
            <h2>
                A MAIOR EXPERIÊNCIA EM 
                GERAÇÃO DE  CONTEÚDO
                <br/> 
                DO SETOR DA SAÚDE NA 
                AMÉRICA LATINA VOLTOU!
            </h2>

            <form method="POST" action="">
                <h3>Fique por dentro</h3>
                <label className="label-input">
                    <img src={User} alt="User" />
                    <input type="text" name="name" placeholder="Nome" required />
                </label>
                <label className="label-input label-margin-small">
                    <img src={Email} alt="Email" />
                    <input type="email" name="email" placeholder="Email" required />
                </label>
                <button type="submit">CADASTRE-SE</button>
            </form>

            {/* <form className="form-send" action="POST">
                <img src={Checked} alt="Checked" />
                <h3 className="h3">Obrigado!</h3>
                <h4>Se conecte com a gente</h4>
                <div className="icons-form">
                    <a href="#">
                        <img src={Youtube} alt="Youtube" />
                    </a>
                    <a href="#">
                        <img src={Spotify} alt="Spotify" />
                    </a>
                    <a href="#">
                        <img src={Instagram} alt="Instagram" />
                    </a>
                    <a href="#">
                        <img src={Linkedin} alt="linkedin" />
                    </a>
                    <a href="#">
                        <img src={Twitter} alt="Twitter" />
                    </a>
                    <a href="#">
                        <img src={TikTok} alt="TikTok" />
                    </a>
                    <a href="#">
                        <img src={Facebook} alt="Facebook" />
                    </a>
                </div>
                <div className="button">
                    <label className="label-icon-telegram">
                        <img src={Telegram} alt="Telegram" />
                        <input type="submit" value="INSCREVA-SE NO TELEGRAM" />
                    </label>
                </div>
            </form> */}

            <img className="geometric-shapes4" src={GeometricShapes4} alt="Forma Geomêtrica" />
            <img className="geometric-shapes5" src={GeometricShapes5} alt="Forma Geomêtrica" />
            <img className="geometric-shapes6" src={GeometricShapes6} alt="Forma Geomêtrica" />
        </div>
    );
}


