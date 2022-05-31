import './css/header.css';

export default function Header() {
    return (
        <div className="header-wrap">
            <a
                className="main-page__link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
            >
                Learn React
            </a>
        </div>
    );
}