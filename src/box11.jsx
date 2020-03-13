import React, { Component } from 'react';
class Box11 extends Component {
    state={
        klazz:" "
    }
    componentDidMount(){
        setTimeout(()=>this.setState({klazz:" mui-enter-active"}),600)
    }
    render() {
        return (
            <div className={"yellow__box box11 hinge-in-from-bottom mui-enter"+this.state.klazz}>
                <ul>
                    <li>+ I want to challenge myself.</li>
                    <li>+ I want to improve my skills.</li>
                    <li>+ Started learing at 2018.</li>
                    <li>+ First, mobile app SoloLearn.</li>
                    <li>+ Then various online tutorials.</li>
                    <li>+ Finally a bootcamp.</li>
                </ul>
            </div>
        )
    }
}
export default Box11