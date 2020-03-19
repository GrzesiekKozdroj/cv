import React, { Component } from 'react';
 
class SkillSquare extends Component {
    render()
        {
            const txt = this.props.tekst.map( o => (o+'\n') )
            return (
                <a 
                    href={this.props.link}
                    target="_blank" rel="noopener noreferrer"
                >
                <p>{txt}</p>
                </a>
            )
            }
}
class Box14 extends Component {
    state={
        klazz:" "
    }
    componentDidMount(){
        setTimeout(()=>this.setState({klazz:" mui-enter-active"}),1000)
    }
    render() {
        return (
            <div className={"yellow__box box14 hinge-in-from-left mui-enter"+this.state.klazz}>
            <SkillSquare link='https://developer.mozilla.org/en-US/docs/Web/HTML' tekst={["HTML","CSS"]}/>,
            <SkillSquare link='https://sass-lang.com/' tekst={["Sass"]}/>,
            <SkillSquare link='https://developer.mozilla.org/en-US/docs/Web/JavaScript' tekst={["JS"]}/>,
            <SkillSquare link='https://jquery.com/' tekst={["jQery"]}/>,
            <SkillSquare link='https://react-redux.js.org/' tekst={["React", "Redux"]}/>,
            <SkillSquare link='https://www.geeksforgeeks.org/mern-stack/' tekst={["node", "MERN"]}/>,
        </div>
        )

    }
}
export default Box14