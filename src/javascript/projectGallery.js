import React from "react";

import { DataStore } from "./dataStore";
import { ProjectCard } from "./projectCard";

import '../css/base.css';

class ProjectGallery extends React.Component {
    constructor(props){
        super(props)
        this.handleOnSelect = this.handleOnSelect.bind(this);
        this.sortByTags = this.sortByTags.bind(this);
        this.galleryInit = this.galleryInit.bind(this);
    }

    galleryInit(){
        let projectCardList = [];
        if(this.props.galleryType)
        {
            if(this.props.galleryType == "ALL")
            {
                projectCardList = DataStore.projects.map((thisProject,index) =>
                <ProjectCard key={thisProject.id} project={thisProject} onSelect={this.handleOnSelect} selectedTags={this.props.selectedTags}/>
                );
                projectCardList.sort((a,b) => this.sortByTags(a,b));
            }
        }
        else{

        }
        this.projectCardList = projectCardList;
        return projectCardList;
    }

    componentDidUpdate(prevProps, prevState) {
        if(this.props.selectedTags){
            if (this.props.selectedTags !== prevProps.selectedTags) {
                this.projectCardList.sort((a,b) => this.sortByTags(a,b));
                console.log("Project Gallery");
            }
        }
      }

    //Change Positions based on number of selected tags
    sortByTags(a,b){
        const cardASelectedTag = a.props.project.tagsList.filter(tag => this.props.selectedTags.includes(tag));
        const cardBSelectedTag = b.props.project.tagsList.filter(tag => this.props.selectedTags.includes(tag));

        //if number of selected tags is equal use id for order
        if(cardBSelectedTag.length == cardASelectedTag.length){
            return a.props.project.id - b.props.project.id;
        }
        else{
            return cardBSelectedTag.length - cardASelectedTag.length;
        }
        
    }

    handleOnSelect(id){
        this.props.OnSelectHandler(id);
    }

    
    render (){
        return(
            <section id="projectCollection">
                {
                    this.galleryInit()
                }
            </section>
        )
    }
}

export {ProjectGallery};