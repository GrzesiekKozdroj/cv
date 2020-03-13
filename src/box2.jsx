import React, { Component } from 'react';
class Box2 extends Component {
    state={
        klazz:" "
    }
    componentDidMount(){
        setTimeout(()=>this.setState({klazz:" mui-enter-active"}),900)
    }
    render() {
    let imge = this.props.imgicon;
        return (
            <a id="projects" href={this.props.url} target="_blank" rel="noopener noreferrer">
                <div className={"yellow__box box2 hinge-in-from-right mui-enter"+this.state.klazz}>
                    <img className="project-tile" src={imge} alt={this.props.alt}/>
                </div>
            </a>
        )

    }
}
export default Box2