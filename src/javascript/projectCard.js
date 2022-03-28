import React from "react";

import { TagDisplay } from "./tagDisplay";

import '../css/base.css';

class ProjectCard extends React.Component {
    constructor(props){
        super(props)

        this.cardSelected = this.cardSelected.bind(this);
        this.projectCardInit = this.projectCardInit.bind(this);
    }

    projectCardInit(){
        let tagList = [];
        tagList = this.props.project.tagsList.map((tag,index) =>
        <TagDisplay key={index} tagText={tag} tag={tag} selectedTags={this.props.selectedTags}/>
        );
        this.tagListItems = tagList;
        return tagList;
    }

    componentDidUpdate(prevProps, prevState) {
        if(this.props.selectedTags){
            if (this.props.selectedTags !== prevProps.selectedTags) {
                console.log("Project Card");
            }
        }
      }

    cardSelected(){
        this.props.onSelect(this.props.project.id);
    }
    
    render (){
        return(
            <section onClick={this.cardSelected}>
                <h2>{this.props.project.projectTitle}</h2>
                <img src={this.props.project.imgSource}></img>
                <div className="cardTagDiv">
                    <ul className="tags">
                        {this.projectCardInit()}
                    </ul>
                </div>

            </section>
        )
    }
}

export {ProjectCard};