import React, { Component } from 'react';
class Box11 extends Component {
    state={
        klazz:" "
    }
    componentDidMount(){
        setTimeout(()=>this.setState({klazz:" mui-enter-active"}),900)
    }
    render() {
        return (
            <div className={"yellow__box box11 hinge-in-from-bottom mui-enter fast"+this.state.klazz}>
                <ul>
                    <li>+ I want to challenge myself.</li>
                    <li>+ I want to improve my skills.</li>
                    <li>+ And learn more.</li>
                    <li>+ Started with online tutorials.</li>
                    <li>+ Then at CodersLab. </li>
                    <li>+ Now I code and continue to learn!</li>
                </ul>
            </div>
        )
    }
}
export default Box11