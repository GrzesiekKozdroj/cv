import React, { Component } from 'react';
class Box1 extends Component {
    state = {
        klazz:" "
    }
    componentDidMount(){
        setTimeout(()=>{
            console.log('activated')
            this.setState({klazz:" mui-enter-active"})
        }, 1000)
    }
    render() {
        return (
            <div className={"yellow__box box1 hinge-in-from-right mui-enter"+this.state.klazz} id="welcome-section">
                <h1>Hi ! <br/>I'm Greg</h1>
            </div>
        )
    }
}
export default Box1
