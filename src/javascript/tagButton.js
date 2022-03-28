import React from "react";

class TagButton extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            btnText: this.props.btnText,
            tag:this.props.tag,
            isActive:false,
            styleClassName:"tagNotSelected"
        }
        this.buttonIsSelected = this.buttonIsSelected.bind(this);
    }

    getIsActive(){
        return this.state.isActive;
    }

    buttonIsSelected(){
        if(this.state.isActive === true){
            this.setState((state, props)=> ({
                styleClassName:"tagNotSelected",
                isActive:false
            }),
            () => {this.props.onSelected(this.state.isActive,this.state.tag);}
            );

        }
        else{
            this.setState((state, props)=> ({
                styleClassName:"tagIsSelected",
                isActive:true
            }),
            () => {this.props.onSelected(this.state.isActive,this.state.tag);}
            );
        }  
    }

    render (){
        return(
            <button className={this.state.styleClassName} onClick={this.buttonIsSelected}>{this.state.btnText}</button>
        )
    }
}

export {TagButton};