import './css/header.css';
import {Link} from "react-router-dom";
import React from "react";

type PageProperties = {};
type PageState = {};

export default class Header extends React.Component<PageProperties, PageState> {
    constructor(props: PageProperties) {
        super(props);
    }

    public render() {
        return (
            <nav className="header-wrap">
                <ul>
                    <li>
                        <Link key={"header-wrap-0"} to="/">Главная</Link>
                    </li>
                    <li>
                        <Link key={"header-wrap-1"} to="/events">События</Link>
                    </li>
                </ul>
            </nav>
        );
    }
}