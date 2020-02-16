import React from "react";
import "./Header.scss";

function Header(props) {
    return (
        <>
            <header className={props.color}>Header</header>
            {props.children}
        </>
    );
}

export default Header;