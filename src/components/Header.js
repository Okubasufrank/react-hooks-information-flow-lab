import React from "react";


function Header(props){
    const {isDark, onDarkModeClick} = props

    return(
        <div>
        <header>
            <h2>Shopster</h2>
        </header>
       <button onClick={onDarkModeClick}> {isDark ? "Dark": "Light"} Mode </button>
        </div>
    )
}

export default Header;