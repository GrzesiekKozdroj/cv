import React, { Component } from 'react';
class Box9 extends Component {
    state={
        klazz:" "
    }
    componentDidMount(){
        setTimeout(()=>this.setState({klazz:" mui-enter-active"}),1500)
    }
    render() {
        return (
            <div className={"yellow__box box9 hinge-in-from-top mui-enter"+this.state.klazz}>
            <p>
                Grzegorz (Greg) Kozdroj
                Front End Developer
                GregKozdroj@gmail.com
            </p>
            <div className="contact c1"></div>
            <div className="contact c2"></div>
            </div>
        )

    }
}
export default Box9