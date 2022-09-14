import "./Footer.css";

export function Footer() {
  return (
    <div className="main-footer">
      <div className="container">
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
            <a href=" https://www.facebook.com/iniciativafis" alt="facebook">
              <i className="fa fa-facebook"></i>
            </a>
          </div>

          <div className="social">
            <a href="https://www.instagram.com/iniciativafis/" alt="instagram">
              <i className="fa fa-instagram"></i>
            </a>
          </div>

          <div className="social">
            <a
              href="https://www.instagram.com/iniciativafis_latam/"
              alt="instagram"
            >
              <i className="fa fa-instagram"></i>
            </a>
          </div>

          <div className="social">
            <a href=" https://twitter.com/iniciativafis/" alt="twitter">
              <i className="fa fa-twitter"></i>
            </a>
          </div>

          <div className="social">
            <a
              href="https://www.youtube.com/channel/UCfhxOWElbOLDkERStLYBNsg"
              alt="youtube"
            >
              <i className="fa fa-youtube"></i>
            </a>
          </div>

          <div className="social">
            <a
              href="https://www.linkedin.com/company/iniciativafis/"
              alt="linkedin"
            >
              <i className="fa fa-linkedin"></i>
            </a>
          </div>

          <div className="social">
            <a href="#" alt="spotify">
              <i className="fa fa-spotify"></i>
            </a>
          </div>

          <div className="social">
            <a href=" https://t.me/iniciativafis" alt="telegram">
              <i className="fa fa-telegram"></i>
            </a>
          </div>

          <div className="social">
            <a
              href=" https://www.tiktok.com/@iniciativafis?lang=pt-BR"
              alt="tik tok"
            >
              <i className="fab fa-tiktok fa-fw fa-xl margin-right-md "></i>
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
    </div>
  );
}
