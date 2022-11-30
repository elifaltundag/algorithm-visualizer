import React, { useState } from "react";

import "../../../design/components/navbar.scss";
import "../../../design/components/mobile-nav-toggle.scss";

export default function Navbar() {
    const [mobileNavDisplay, setMobileNavDisplay] = useState(false)
   


    function toggleMobileNav() {
        if (window.innerWidth <= 992) {
            setMobileNavDisplay(prevState => !prevState)
        }
    }

    return (
        <div className="container-nav" onClick={toggleMobileNav}>
            <button id="mobile__show-menu"><span className="sr-only">Menu</span></button>
            
            <nav id="navbar" data-displayed-on-mobile={mobileNavDisplay}>
                <ul>
                    <li><button className="nav-btn__main" id="btn__home">Home</button></li>
                    <li><button className="nav-btn__main dropdown" id="btn__algos">Algorithms</button></li>
                    <ul className="dropdown-menu" id="dropdown-menu__sections">
                        <li><button className="nav-btn__section" id="btn__algos__search">Search Algorithms</button></li>
                        <li><button className="nav-btn__section" id="btn__algos__traversal">Traversal Algorithms</button></li>
                        <li><button className="nav-btn__section dropdown" id="btn__algos__sort">Sort Algorithms</button></li>
                        <ul className="dropdown-menu" id="dropdown-menu__sort-algos">
                            <li><button className="nav-btn__subsection" id="btn__algos__sort__slct">Selection Sort</button></li>
                            <li><button className="nav-btn__subsection" id="btn__algos__sort__bubble">Bubble Sort</button></li>
                            <li><button className="nav-btn__subsection" id="btn__algos__sort__quick">Quick Sort</button></li>
                            <li><button className="nav-btn__subsection" id="btn__algos__sort__merge">Merge Sort</button></li>
                        </ul>
                    </ul>
                </ul>

                <button id="mobile__hide-menu"><span className="sr-only">Hide</span></button>
            </nav>
        </div>
    )
}