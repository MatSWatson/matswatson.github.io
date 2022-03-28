import React from "react";

class TagDisplay extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            tagText: this.props.tagText,
            tag:this.props.tag,
            isActive:false,
            styleClassName:"tagNotSelected"
        }
        this.tagIsSelected = this.tagIsSelected.bind(this);
    }

    componentDidUpdate(prevProps, prevState) {
        if(this.props.selectedTags){
            if (this.props.selectedTags !== prevProps.selectedTags) {
                console.log("Tag Display");
                if(this.props.selectedTags.includes(this.state.tag)){
                    this.tagIsSelected(true);
                }
                else{
                    this.tagIsSelected(false);
                }
            }
        }
      }

    tagIsSelected(isSelected){
        if(isSelected === true){
            this.setState({styleClassName:"tagIsSelected"});
        }
        else{
            this.setState({styleClassName:"tagNotSelected"});
        }
    }

    render (){
        return(
                <li className={this.state.styleClassName}>{this.state.tagText}</li>
        )
    }
}

export {TagDisplay};