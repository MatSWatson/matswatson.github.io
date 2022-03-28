import React from "react";
import ReactDOM from "react-dom";

import { WebsiteHeader } from "./header";
import { DataStore } from "./dataStore";
import { ProjectInfoPage } from "./projectInfo";
import { TagSelection } from "./tagSelection";
import { ProjectGallery } from "./projectGallery";
import { WebsiteFooter } from "./footer";

import '../css/base.css';
import '../css/portfolio.css';

class PortfolioPage extends React.Component{
    constructor() {
        super();
        this.state = {
            popupIsActive: false,
            popupProject:DataStore.projects[0],
            selectedTags: [],
            updateGallery: false
        };

        this.handlePopupExit = this.handlePopupExit.bind(this);
        this.handleOnSelect = this.handleOnSelect.bind(this);
        this.changeProject = this.changeProject.bind(this);
        this.updateSelectedTags = this.updateSelectedTags.bind(this);
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

    updateSelectedTags(nextSelectedTags){
        //creates new array to insure clear differnce between react props and prevProps
        this.setState({selectedTags:Object.assign([], nextSelectedTags)});
    }

    render(){
        return(
            <div>
                <WebsiteHeader />
                <section>
                    <TagSelection OnSelectedTagsChanged={this.updateSelectedTags} />
                    <ProjectGallery OnSelectHandler={this.handleOnSelect} selectedTags={this.state.selectedTags} galleryType="ALL"/>
                    <ProjectInfoPage trigger={this.state.popupIsActive} exit={this.handlePopupExit} project={this.state.popupProject}/>
                </section>
                <WebsiteFooter />
            </div>
        )
    }
}

ReactDOM.render(<PortfolioPage />, document.getElementById("root"));