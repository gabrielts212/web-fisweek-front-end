import InstagramLatam from "../../assets/images/footer/InstagramLatam.png";
import Instagram from "../../assets/images/footer/Instagram.png";
import Facebook from "../../assets/images/footer/Facebook.png";
import InstagramSeLiga  from "../../assets/images/footer/InstagramSeLiga.png";
import Youtube from "../../assets/images/footer/Youtube.png";
import Twitter from "../../assets/images/footer/Twitter.png";
import Linkedin from "../../assets/images/footer/Linkedin.png";
import Telegram from "../../assets/images/footer/Telegram.png";
import Spotify from "../../assets/images/footer/Spotify.png";
import Tiktok from "../../assets/images/footer/Tiktok.png";

import "./Footer.css";

export function Footer() {
  return (
    <div className="Footer">
      <div className="contact">
        <h4>Precisa de ajuda?</h4>
        <p>faleconosco@fis.org.br</p>
        <h4>Comercial</h4>
        <p>comercial@fis.org.br</p>
        <h4>Assessoria de Imprensa</h4>
        <p>faleconosco@fis.org.br</p>
      </div>

      <div className="networks">
        <h4>Nossas redes</h4>
      </div>

      <div className="sociais">
        <div className="social">
          <a
            href=" https://www.facebook.com/iniciativafis"
            alt="facebook"
            target="_blank"
          >
            <img src={Facebook} alt="Facebook" />
          </a>
        </div>

        <div className="social">
          <a
            href="https://www.instagram.com/iniciativafis/"
            alt="instagram"
            target="_blank"
          >
            <img src={Instagram} alt="Instagram" />
          </a>
        </div>

        <div className="social">
          <a
            href="https://www.instagram.com/iniciativafis_latam/"
            alt="instagram"
            target="_blank"
          >
            <img src={InstagramLatam } alt="Instagram Latam " />
          </a>
        </div>
        <div className="social">
          <a
            href="https://www.instagram.com/se.liga.academicos/"
            alt="instagram"
            target="_blank"
          >
            <img src={InstagramSeLiga } alt="Instagram Se Liga" />
          </a>
        </div>

        <div className="social">
          <a
            href=" https://twitter.com/iniciativafis/"
            alt="twitter"
            target="_blank"
          >
            <img src={Twitter} alt="Twitter" />
          </a>
        </div>

        <div className="social">
          <a
            href="https://www.youtube.com/channel/UCfhxOWElbOLDkERStLYBNsg"
            alt="youtube"
            target="_blank"
          >
            <img src={Youtube} alt="Youtube" />
          </a>
        </div>

        <div className="social">
          <a
            href="https://www.linkedin.com/company/iniciativafis/"
            alt="linkedin"
            target="_blank"
          >
            <img src={Linkedin} alt="Linkedin" />
          </a>
        </div>

        <div className="social">
          <a
            href="https://open.spotify.com/show/7aON0A01X0mw4dSWG6rbuc?si=c40d709dd5744e4a&nd=1"
            alt="spotify"
            target="_blank"
          >
            <img src={Spotify} alt="Spotify" />
          </a>
        </div>

        <div className="social">
          <a href="https://t.me/iniciativafis" alt="telegram" target="_blank">
          <img src={Telegram} alt="Telegram" />
          </a>
        </div>

        <div className="social">
          <a
            href=" https://www.tiktok.com/@iniciativafis?lang=pt-BR"
            alt="tik tok"
            target="_blank"
          >
            <img src={Tiktok} alt="Tiktok" />
          </a>
        </div>
      </div>

      <div className="text-fis">
        <span>POWERED BY</span>
      </div>
      <div className="text-fis2">
        <span>INICIATIVAFIS</span>
      </div>
    </div>
  );
}
