import Partners from '../../assets/images/partners.png';
import './Footer.css'

export function Footer() {
    return (
        <div className="ft-container">
            <h3>FOOTER</h3>
            <img className="partners" src={Partners} alt="Parceiros" />
        </div>
    );
}