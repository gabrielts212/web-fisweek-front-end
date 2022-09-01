import Image2 from '../../assets/images/image2.png';
import GeometricShapes4 from '../../assets/images/geometric-shapes4.png';
import GeometricShapes5 from '../../assets/images/geometric-shapes5.png';
import GeometricShapes6 from '../../assets/images/geometric-shapes6.png';

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
                <i class="far fa-user icon-modify"></i> 
                <input type="text" name="name" placeholder="Nome" required />
                <br/>
                <i class="far fa-envelope icon-modify"></i>
                <input type="email" name="email" placeholder="Email" required />
                <button type="submit">CADASTRE-SE</button>
            </form>

            <img className="geometric-shapes4" src={GeometricShapes4} alt="Forma Geomêtrica" />
            <img className="geometric-shapes5" src={GeometricShapes5} alt="Forma Geomêtrica" />
            <img className="geometric-shapes6" src={GeometricShapes6} alt="Forma Geomêtrica" />
        </div>
    );
}

