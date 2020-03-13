import React, { Component } from 'react';
class Box3 extends Component {
    state={
        klazz:" "
    }
    componentDidMount(){
        setTimeout(()=>this.setState({klazz:" mui-enter-active"}),1400)
    }
    render() {
        return (
            <div className={"yellow__box box3 hinge-in-from-top mui-enter"+this.state.klazz}>
                <a href="https://coderslab.pl/en" target="_blank" rel="noopener noreferrer">
                    <div className="cl__logo" alt="Coders Lab, IT school"></div>
                </a>
            </div>
        )

    }
}
export default Box3