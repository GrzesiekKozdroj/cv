import React, { Component } from 'react';
class BoxOneHalf extends Component {
    state={
        klazz:" "
    }
    componentDidMount(){
        setTimeout(()=>this.setState({klazz:" mui-enter-active"}),2300)
    }
    render() {
        return (
            <div className={"texted-linkz yellow__box hinge-in-from-bottom mui-enter " + this.state.klazz}>
                <a href={this.props.urlExample}>live example</a> 
                <p>&nbsp; and &nbsp;</p>
                <a href={this.props.url}>source code</a>
                <p>&nbsp; for &nbsp;</p>
                <p>"<b>{this.props.title}</b>"</p>
            </div>
        )
    }
}
export default BoxOneHalf
