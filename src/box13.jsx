import React, { Component } from 'react';
class Box13 extends Component {
    state={
        klazz:" "
    }
    componentDidMount(){
        setTimeout(()=>this.setState({klazz:" mui-enter-active"}),1670)
    }
    render() {
        return (
            <div className={"yellow__box box13 hinge-in-from-bottom mui-enter"+this.state.klazz}>
                <div className="mouse__cable"></div>
                <div className="mouse__icon">
                    <div className="mouse__buttons">
                        <div className="mouse__buttons__divide"></div>
                    </div>
                    <div className="mouse__circle"></div>
                </div>
            </div>
        )

    }
}
export default Box13