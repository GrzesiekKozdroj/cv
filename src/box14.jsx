import React, { Component } from 'react';
class Box14 extends Component {
    state={
        klazz:" "
    }
    componentDidMount(){
        setTimeout(()=>this.setState({klazz:" mui-enter-active"}),800)
    }
    render() {
        return (
            <div className={"yellow__box box14 hinge-in-from-left mui-enter"+this.state.klazz}>
            <a 
                href='https://developer.mozilla.org/en-US/docs/Web/HTML' 
                target="_blank" rel="noopener noreferrer"
            >
                    <p>HTML</p>
            </a>,
            <a href='https://developer.mozilla.org/en-US/docs/Web/CSS' 
                target="_blank" rel="noopener noreferrer"
            >
                <p>CSS</p>
            </a>,
            <a href='https://sass-lang.com/' 
                target="_blank" rel="noopener noreferrer"
            >
                <p>Sass</p>
            </a>,
            <a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript' 
                target="_blank" rel="noopener noreferrer"
            >
                <p>JS</p>
            </a>,
            <a href='https://jquery.com/' target="_blank" rel="noopener noreferrer"><p>jQery</p></a>,
            <a href='https://reactjs.org/' target="_blank" rel="noopener noreferrer" className="reactButton"><p>React</p></a>.
        </div>
        )

    }
}
export default Box14