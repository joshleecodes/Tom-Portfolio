import React from 'react';
import AboutBackground from '../../../assets/imgs/backgrounds/about.jpg';
import GradPhoto from '../../../assets/imgs/tom-grad.png';

export default class About extends React.Component {
    constructor(){
        super();
    }

    render() {
        return (
            <div className="about-wrapper">
                <div className="background-wrapper">
                    <img  src={AboutBackground}/>
                </div>
                <div className="content-padding">
                    <div className="content-wrapper about-content">
                        <div className="about-text-content">
                            <h3 className="content__title section-title">ABOUT ME.</h3>
                            <div className="about-intro">
                                <p>
                                    Hi I’m Tom; an engineer by degree who has recently delved into the world of Esports as Coach &amp;
                                    Manager for a world-leading team. 
                                    My formal training and education culminated in my Masters Degree in Aerospace Engineering from a prestigious UK University. 
                                    My sequential jobs within the broader discipline have given me additional experience within the Automotive and Defence sectors. 
                                    During my time in this field I have had varied job responsibilities ranging from engineering to project planning and management; 
                                    ranging from low-volume experimental production projects all the way up to national sized projects and/or involving mass-marketed and mass manufactured products.
                                </p>
                                <p>
                                    My entry into Esports started as a hobby, a simple enjoyment that passed the time. 
                                    Having been raised on computer games they have remained a staple pastime in my life and now I am fortunate that my passion puts bread on my table. 
                                    I tentatively started coaching back in January 2016, where in my spare time I would formulate teams and create strategies/processes they could use during their games to improve performance and therefore improve results.
                                    Now the success of the teams I have coached has propelled me into a full-time career coaching within Esports under brands that lead the industry. 
                                    Something which would only have been a dream to a younger me…
                                </p>
                            </div>
                        </div>
                        <div>
                            <img className="about-photo" src={GradPhoto}/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}