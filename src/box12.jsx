import React, { Component } from 'react';
class Box12 extends Component {
    state={
        klazz:" "
    }
    componentDidMount(){
        setTimeout(()=>this.setState({klazz:" mui-enter-active"}),100)
    }
    render() {
        return (
            <div className={"yellow__box box12 hinge-in-from-left mui-enter fast"+this.state.klazz}></div>
        )

    }
}
export default Box12