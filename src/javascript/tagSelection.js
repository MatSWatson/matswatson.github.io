import React from "react";

import { TagButton } from "./tagButton";

class TagSelection extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            selectedTags: []
        }
        this.changeSelected = this.changeSelected.bind(this);
    }

    changeSelected (isActive,tagName){
        console.log(isActive);
        if(isActive === true)
        {
            if(this.state.selectedTags.includes(tagName) === false)
            {
                this.state.selectedTags.push(tagName);
                console.log(this.state.selectedTags);
            }
        }
        else
        {
            if(this.state.selectedTags.includes(tagName) === true)
            {
                this.state.selectedTags.splice(this.state.selectedTags.indexOf(tagName),1);
                console.log(this.state.selectedTags);
            }
        }

        if(this.props.OnSelectedTagsChanged)
        {
            this.props.OnSelectedTagsChanged(this.state.selectedTags);
        }
    }

    render (){
        return(
            <section id="tagSelection">
                <div>
                    <h2>Tag Selection</h2>
                </div>
                <section>
                    <label htmlFor="languageList">Programming Languages:</label>
                    <ol id="languageList">
                        <li><TagButton btnText="C#" tag="C#" onSelected={this.changeSelected} /></li>
                        <li><TagButton btnText="C++" tag="C++" onSelected={this.changeSelected}/></li>
                        <li><TagButton btnText="Javascript" tag="Javascript" onSelected={this.changeSelected}/></li>
                        <li><TagButton btnText="HTML" tag="HTML" onSelected={this.changeSelected}/></li>
                        <li><TagButton btnText="CSS" tag="CSS" onSelected={this.changeSelected}/></li>
                    </ol>
                </section>
                <section>
                    <label htmlFor="fieldList">Fields:</label>
                    <ol id="fieldList">
                        <li><TagButton btnText="Web Development" tag="Web Development" onSelected={this.changeSelected}/></li>
                        <li><TagButton btnText="Games Development" tag="Games Development" onSelected={this.changeSelected}/></li>
                        <li><TagButton btnText="Mobile Development" tag="Mobile Development" onSelected={this.changeSelected}/></li>
                    </ol>
                </section>
                <section>
                    <label htmlFor="frameworkList">Frameworks/Library:</label>
                    <ol id="frameworkList">
                        <li><TagButton btnText="Unity" tag="Unity" onSelected={this.changeSelected}/></li>
                        <li><TagButton btnText="React" tag="React" onSelected={this.changeSelected}/></li>
                    </ol>
                </section>
                <section>
                    <label htmlFor="otherAreas">Other:</label>
                    <ol id="otherAreas">
                        <li></li>
                    </ol>
                </section>
            </section>
        )
    }
}

export {TagSelection};