import './css/header.css';
import {
    Link
} from "react-router-dom";

export default function Header() {
    return (
        <nav className="header-wrap">
            <ul className="">
                <li>
                    <Link to="/">Главная</Link>
                </li>
                <li>
                    <Link to="/events">События</Link>
                </li>
            </ul>
        </nav>
    );
}