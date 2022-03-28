import React from "react";

import '../css/projectInfo.css';

class ProjectInfoPage extends React.Component {
    addLink(){
        if(this.props.project.projectLink){
            return (
                <section>
                    <h3>Link</h3>
                    <a id="projectLink" href={this.props.project.projectLink}>{this.props.project.projectLink}</a>
                </section>
            )
        }
        else{
            return "";
        }
    }

    render(){
        if(this.props.trigger) {
            
            return(
                <div className="popupOuter">
                    <div className="popupInner">
                        <section id="buttonSection">
                            <button onClick={this.props.exit} className="closebtn">x</button>
                        </section>
                        <section>
                            <h1>{this.props.project.projectTitle}</h1>
                        </section>
                        <section id="imageSection">
                            <img className="projectInfoImage" src={this.props.project.imgSource}></img>
                        </section>
                        {this.addLink()}
                        <section>
                            <h3>Project Description</h3>
                            <p>{this.props.project.projectDescription}</p>
                        </section>
                        <section>
                            <h3>My Contribution</h3>
                            <p>{this.props.project.myContriubution}</p>
                        </section>
                    </div>
                </div>
            )
        }
        else {
            return "";
        }

    }
}

export {ProjectInfoPage};