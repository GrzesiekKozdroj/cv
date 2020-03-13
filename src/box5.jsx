import React, { Component } from 'react';
class Box5 extends Component {
    state={
        klazz:" "
    }
    componentDidMount(){
        setTimeout(()=>this.setState({klazz:" mui-enter-active"}),100)
    }
    render() {
        return (
            <div className={"yellow__box box5 hinge-in-from-right mui-enter"+this.state.klazz}></div>
        )

    }
}
export default Box5