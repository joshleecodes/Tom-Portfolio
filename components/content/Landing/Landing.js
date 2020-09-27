import React from 'react';
import LandingVideo from '../../../assets/imgs/backgrounds/loopable.mp4';


export default class Landing extends React.Component {
    constructor(){
        super();
    }

    render() {
        return (
            <div className="landing-wrapper">
                <div className="background-wrapper">
                    <video className="landing-video" autoPlay muted loop src={LandingVideo} type="video/mp4"/>
                </div>
                <div className="logo-wrapper">
                    <div className="landing-title__wrapper">
                        <div className="landing-title__top-wrapper">
                            <p className="real-name">THOMAS LEE</p>
                            <div className="ign-name__wrapper">
                                <p>SHAS</p>
                                <p className="orange-highlight">[</p>
                                <p>O</p>
                                <p className="orange-highlight">]</p>
                                <p>UDAS</p>
                            </div>
                        </div>
                        <div className="landing-title__bottom-wrapper">
                            <p>ESPORTS COACH</p>
                            <p>AERONAUTICAL ENGINEER</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}