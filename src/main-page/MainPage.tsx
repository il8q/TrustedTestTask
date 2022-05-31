import logo from "./images/logo.svg";
import './css/main-page.css';

export default function MainPage() {
    return (
        <div className="main-page">
            <img src={logo} className="main-page__logo" alt="logo" />
            <p>
                <h1 className="main-page__title">TrustedTestTask</h1>
                Тестовое задание для <b>ООО "Студия цифровых решений"</b>.
                <br></br>
                1) Текущая ветка "features/1_Event_page"<br></br>
                2) В master будет слита готовая страница<br></br>
            </p>
        </div>
    );
}