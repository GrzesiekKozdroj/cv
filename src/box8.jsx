import React, { Component } from 'react';
class Box8 extends Component {
    state={
        klazz:" "
    }
    componentDidMount(){
        setTimeout(()=>this.setState({klazz:" mui-enter-active"}),1100)
    }
    render() {
        return (
            <div className={"yellow__box box8 hinge-in-from-top mui-enter"+this.state.klazz}>
                <ul>
                    <li>Coders Lab, IT school </li>
                    <li>(January - February 2019)</li>
                    <li>240 hours of classes</li>
                    <li>Got me completely hooked up with coding</li>
                </ul>
            </div>
        )

    }
}
export default Box8