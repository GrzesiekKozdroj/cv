import React, { Component } from 'react';
class Box15 extends Component {
    state={
        klazz:" "
    }
    componentDidMount(){
        setTimeout(()=>this.setState({klazz:" mui-enter-active"}),1750)
    }
    render() {
        return (
        <div className={"yellow__box box15 hinge-in-from-top mui-enter"+this.state.klazz}>
                    <p className="phone button">0 745 453 40 18</p>
                    <a className="email button" href="mailto:GregKozdroj@gmail.com" 
                        target="_blank" rel="noopener noreferrer"
                    >
                        <p>email me</p>
                    </a>
                    <a className="github button" id="profile-link" href="https://github.com/GrzesiekKozdroj" 
                    target="_blank" rel="noopener noreferrer">Github</a>
                    <a className="linkedin button" id="profile-link" href="https://www.linkedin.com/in/grzegorz-kozdroj/" 
                    target="_blank" rel="noopener noreferrer">Linkedin</a>
        </div>
        )

    }
}
export default Box15


