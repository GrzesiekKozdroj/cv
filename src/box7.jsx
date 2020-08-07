import React, { Component } from 'react';
class Box7 extends Component {
    state = {
        klazz:" "
    }
    componentDidMount(){
        setTimeout(()=>this.setState({klazz:" mui-enter-active"}),600)
    }
    render() {
        return (
            <a href={this.props.url} target="_blank" className={"box7link hinge-in-from-top mui-enter " + this.state.klazz} rel="noopener noreferrer">
                <div className="yellow__box box7"
                 id="projects">{this.props.text}</div>
            </a>
        )
    }

}
export default Box7