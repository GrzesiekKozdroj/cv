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
                    <li> pizza! </li>
                    <li> black tea </li>
                    <li> learning useful things</li>
                    <li> winning games </li>
                    <li> mongolian rock </li>
                    <li> coding &lt;3 </li>
                </ul>
            </div>
        )

    }
}
export default Box8