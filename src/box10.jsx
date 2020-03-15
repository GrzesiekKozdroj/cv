import React, { Component } from 'react';
class Box10 extends Component {
    state={
        klazz:" "
    }
    componentDidMount(){
        setTimeout(()=>this.setState({klazz:" mui-enter-active"}),1600)
    }
    render() {
        return (
            <div className={"yellow__box box10 hinge-in-from-bottom mui-enter fast"+this.state.klazz}>
                <div className="brain1"></div>
                <div className="brain2"></div>
                <div className="brain3"></div>
                <div className="brain4"></div>
                <div className="brain5"></div>
                <div className="brain6"></div>
            </div>
        )
    }
}
export default Box10