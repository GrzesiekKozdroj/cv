import React, { Component } from 'react';
class Box6 extends Component {
    state={
        className:''
    }
    componentDidMount(){
        setTimeout(()=>{
            this.setState({className:' mui-enter-active'})
        },2500)
    }
    render() {
        return (

            <div className={"yellow__box box6"+this.state.className}>
                <div className="heart"></div>
            </div>
        )

    }
}
export default Box6