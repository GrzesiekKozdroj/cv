import React, { Component } from 'react';
import imeg from './img/cabinetmin.jpg';
import imgBIG from './img/cabinet.jpg';
let b = imgBIG;
class Box4 extends Component {
    state={
        klazz:" ",
        iamg:b
    }
    componentDidMount(){
        setTimeout(()=>this.setState({klazz:" mui-enter-active"}),2000)
    }
    render() {
        return (
            <div className={"yellow__box box4 hinge-in-from-top mui-enter"+this.state.klazz}>
                <ul>
                    <li>Painting tabletop fantasy minatures.</li>
                    <li>Good fantasy and sci-fi games, books and movies.</li>
                    <li>Table top games and computer games</li>
                </ul>
                <a href="https://raw.githubusercontent.com/GrzesiekKozdroj/CV/master/build/static/media/cabinet.c077dd8b.jpg" target="_blank" rel="noopener noreferrer">
                    <img className="models" src={imgBIG} alt="my display cabinet" />
                </a>
            </div>
        )

    }
}
export default Box4