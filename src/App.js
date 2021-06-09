import React, { Component } from 'react';
import Box1 from "./box1.jsx";
import Box2 from "./box2.jsx";
import Box3 from "./box3.jsx";
import Box4 from "./box4.jsx";
import Box5 from "./box5.jsx";
import Box6 from "./box6.jsx";
import Box7 from "./box7.jsx";
import Box8 from "./box8.jsx";
import Box9 from "./box9.jsx";
import Box10 from "./box10.jsx";
import Box11 from "./box11.jsx";
import Box12 from "./box12.jsx";
import Box13 from "./box13.jsx";
import Box14 from "./box14.jsx";
import Box15 from "./box15.jsx";


class App extends Component {
    state = {
        forKlazz:" ",
        backKlazz:" ",
        majnButtonKlazz:" ",
        majnBackground:" ",
        counter: Math.floor(Math.random() * (this.props.projectInfeed.length - 1)),
        playPause: true,
        playPauseIcon: '||',
        typer: this.props.projectInfeed[0].text.substring(0, 1),
        projectImg: this.props.projectInfeed[0].img,
        url: this.props.projectInfeed[0].url,
        urlExample: this.props.projectInfeed[0].url,
        alt: this.props.projectInfeed[0].alt,
        isLoaded: false,
        backgrounds: {}
    }
    pausePlay = (event) => {
        event.preventDefault();
        this.setState({
            playPause: this.state.playPause ? false : true,
            playPauseIcon: !this.state.playPause ? '||' : '>'
        })
    }
    resetCounter = (e,i)=>{
        e.preventDefault()
        this.setState({
            counter:i
        })
    }
    beans = (length,highlightedProject) => {
        let produce = []
        for(let i=0; i<length; i++){
            let highlighter = highlightedProject === i ? 'glowBeam' : "non"
            produce = [ ...produce, <div className = {`beam button `+highlighter} onClick={e=>this.resetCounter(e,i)}  ></div>]
        }
        return produce
    }
    rewindClick = (event) => { event.preventDefault(); this.play(-1) }
    forwardClick = (event) => { event.preventDefault(); this.play(+1) }
    play = (digit) => {
        this.setState({ counter: (this.state.counter + digit) === -1 ? this.props.projectInfeed.length - 1 : (this.state.counter + digit) % this.props.projectInfeed.length })
    }
    render() {
        return (
            <div>
                <section className="main__container">
                    <Box1 />
                    <div className={"play scale-in-down mui-enter yellow__box"+this.state.majnButtonKlazz}>
                        <div className="counter">
                            {
                                this.beans(this.props.projectInfeed.length,this.state.counter)
                            }
                        </div>
                        <div className={"button pausePlay hinge-in-from-right mui-enter"+this.state.forKlazz}
                             onClick={e => this.rewindClick(e)}>&lt;&lt;</div>
                        <div className="button forward"
                            onClick={e => this.pausePlay(e)}>{this.state.playPauseIcon}</div>
                        <div className={"button rewind hinge-in-from-left mui-enter"+this.state.backKlazz} 
                            onClick={e => this.forwardClick(e)}>&gt;&gt;</div>
                    </div>
                    <Box2 imgicon={this.state.projectImg} url={this.state.urlExample} alt={this.state.alt}/>
                    <Box3 style={this.state.backgrounds}/>
                    <Box4 style={this.state.backgrounds}/>
                    <Box5 style={this.state.backgrounds}/>
                    <Box6 style={this.state.backgrounds}/>
                    <Box7 text={this.state.typer} url={this.state.url}/>
                    <Box8 style={this.state.backgrounds}/>
                    <Box9 style={this.state.backgrounds}/>
                    <Box10 style={this.state.backgrounds}/>
                    <Box11 style={this.state.backgrounds}/>
                    <Box12 style={this.state.backgrounds}/>
                    <Box13 style={this.state.backgrounds}/>
                    <Box14 style={this.state.backgrounds}/>
                    <Box15 style={this.state.backgrounds}/>
                </section>
            </div>
        )
    }
    componentDidMount() {
        console.log(this.state.backgrounds.largeImageURL)
        fetch('https://pixabay.com/api/?key=11506822-1403b5b6e423f8d19e23a25d5&q=milkyway&image_type=photo&pretty=true&mode=no-cors')
        .then( resp => resp.json())
        .then(
          (result) => {
              const backgrounds = result.hits
            this.setState({
              isLoaded: true,
              backgrounds: backgrounds[Math.ceil(Math.random()*20)]
            });
            console.log(this.state.backgrounds)
        })
        .catch(err=>{
            console.log(err)
        })

        setTimeout(()=>this.setState({majnButtonKlazz:" mui-enter-active"}),2000)
        setTimeout(()=>this.setState({
            forKlazz:" mui-enter-active",
            backKlazz:" mui-enter-active"
        }),2800)
        setTimeout(()=>this.setState({majnBackground:" main__container__anim"}),2500)
        let counter = 1;
        let indexLength = this.props.projectInfeed.length - 1;
        setInterval(() => {
            counter++
            this.setState({
                typer: this.props.projectInfeed[this.state.counter].text.substring(0, this.state.playPause ? counter : this.props.projectInfeed[this.state.counter].text.length),
                projectImg: this.props.projectInfeed[this.state.counter].img,
                url: this.props.projectInfeed[this.state.counter].url,
                urlExample: this.props.projectInfeed[this.state.counter].urlExample,
                alt: this.props.projectInfeed[this.state.counter].alt,
            })

            if (this.state.playPause && counter >= this.props.projectInfeed[this.state.counter].text.length) {
                counter++;
                if (this.state.counter < indexLength) {
                    this.setState({ counter: this.state.counter + 1 });
                    counter = 1;
                } else {
                    this.setState({ counter: 0 });
                    counter = 1;
                }
            }
        }, this.props.projectInfeed[this.state.counter].text.length / 5.5);
    }
    //componentWillUnmount() { clearInterval(myInt) }
}


export default App;


