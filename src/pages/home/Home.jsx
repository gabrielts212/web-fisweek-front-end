import { Link } from 'react-router-dom';

export function Home() {
    return (
        <div>
            <h2>HOME</h2>
            <Link to="/">Save the date</Link>
        </div>
    );
}