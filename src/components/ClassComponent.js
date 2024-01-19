import React,{Component} from "react";

class ClassComponent extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div>
                <h2>Developer Name : {this.props.name}</h2>
                <h3>Profession : {this.props.profession}</h3>
                <h4>Hobbies : {this.props.hobbies}</h4>
            </div>
        )
    }
}

export default ClassComponent;