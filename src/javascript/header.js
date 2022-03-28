import React from "react";

import '../css/base.css';
import '../css/header.css';

class WebsiteHeader extends React.Component {
    render (){
        return(
            <header>
                <section id="name">
                    <h1>Matthew Watson</h1>
                </section>
                <section id="links">     
                    <a href="index.html">Home</a>
                    <a href="portfolio.html">Portfolio</a>
                </section>
            </header>
        )
    }
}

export {WebsiteHeader};