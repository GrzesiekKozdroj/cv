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
            <a href={this.props.url} target="_blank" className="box7link" rel="noopener noreferrer">
                <div className={"yellow__box box7 hinge-in-from-top mui-enter" + this.state.klazz}
                 id="projects">{this.props.text}</div>
            </a>
        )
    }

}
export default Box7