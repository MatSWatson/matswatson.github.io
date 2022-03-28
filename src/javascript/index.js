import React from "react";
import ReactDOM from "react-dom";

import { WebsiteHeader } from "./header";
import { DataStore } from "./dataStore";
import { ProjectCard } from "./projectCard";
import { ProjectInfoPage } from "./projectInfo";
import { WebsiteFooter } from "./footer";

import '../css/base.css';
import '../css/index.css';

class HomePage extends React.Component{
    constructor() {
        super();
        this.state = {
            popupIsActive: false,
            popupProject:DataStore.projects[0]
        };

        this.handlePopupExit = this.handlePopupExit.bind(this);
        this.handleOnSelect = this.handleOnSelect.bind(this);
        this.changeProject = this.changeProject.bind(this);
    }

    handleOnSelect (id){
        this.changeProject(id);
        this.setState({popupIsActive:this.state.popupIsActive=true});
    }

    handlePopupExit () {
        this.setState({popupIsActive:false});
    }

    changeProject(index){
        this.setState({popupProject:DataStore.projects[index]});
    }
    
    render(){
        return(
            <div>
                <WebsiteHeader />
                <section>
                    <section id="projectCollection">
                        <ProjectCard project={DataStore.projects[0]} onSelect={this.handleOnSelect}/>
                        <ProjectCard project={DataStore.projects[1]} onSelect={this.handleOnSelect}/>
                    </section>
                    <ProjectInfoPage trigger={this.state.popupIsActive} exit={this.handlePopupExit} project={this.state.popupProject}/>
                    <div id="homeForm">
                        <form method="get" action="portfolio.html">
                            <button id="moreHere" type="submit">See More Here</button>
                        </form>
                    </div>
                </section>
                <WebsiteFooter />
            </div>
        )
    }
}

ReactDOM.render(<HomePage />, document.getElementById("root"));