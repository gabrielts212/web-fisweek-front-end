import { Link } from 'react-router-dom';
import { Footer } from '../../components/footer/Footer';
import { Newsletter } from '../../components/newsletter/Newsletter';

import { SaveTheDate } from '../../components/savethedate/SaveTheDate';


export function Pre() {
    return (
        <div>
            <h2>Pre</h2>
            <SaveTheDate />
            <Newsletter />
            <Link to="/home">Home</Link>
            <Footer />
        </div>
    );
}