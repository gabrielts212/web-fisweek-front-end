import { FacebookLogo } from "phosphor-react";
import { InstagramLogo } from "phosphor-react";
import { TwitterLogo } from "phosphor-react";
import { YoutubeLogo } from "phosphor-react";
import { LinkedinLogo } from "phosphor-react";
import { SpotifyLogo } from "phosphor-react";
import { TelegramLogo } from "phosphor-react";
import { TiktokLogo } from "phosphor-react";
import "./Footer.css";

export function Footer() {
  return (
    <div className="main-footer">
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
            <FacebookLogo />
          </a>
        </div>

        <div className="social">
          <a
            href="https://www.instagram.com/iniciativafis/"
            alt="instagram"
            target="_blank"
          >
            <InstagramLogo />
          </a>
        </div>

        <div className="social">
          <a
            href="https://www.instagram.com/iniciativafis_latam/"
            alt="instagram"
            target="_blank"
          >
            <InstagramLogo />
          </a>
        </div>

        <div className="social">
          <a
            href=" https://twitter.com/iniciativafis/"
            alt="twitter"
            target="_blank"
          >
            <TwitterLogo />
          </a>
        </div>

        <div className="social">
          <a
            href="https://www.youtube.com/channel/UCfhxOWElbOLDkERStLYBNsg"
            alt="youtube"
            target="_blank"
          >
            <YoutubeLogo />
          </a>
        </div>

        <div className="social">
          <a
            href="https://www.linkedin.com/company/iniciativafis/"
            alt="linkedin"
            target="_blank"
          >
            <LinkedinLogo />
          </a>
        </div>

        <div className="social">
          <a href="https://open.spotify.com/show/7aON0A01X0mw4dSWG6rbuc?si=c40d709dd5744e4a&nd=1" 
          alt="spotify" target="_blank">
            <SpotifyLogo />
          </a>
        </div>

        <div className="social">
          <a href="https://t.me/iniciativafis" alt="telegram" target="_blank">
            <TelegramLogo />
          </a>
        </div>

        <div className="social">
          <a
            href=" https://www.tiktok.com/@iniciativafis?lang=pt-BR"
            alt="tik tok"
            target="_blank"
          >
            <TiktokLogo />
          </a>
        </div>
      </div>
      <div className="text-fis">
        <p>POWERED BY </p>
      </div>
      <div className="text-fis2">
        <h4>INICIATIVAFIS</h4>
      </div>
    </div>
  );
}
