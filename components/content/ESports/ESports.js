import React from 'react';
import ESportsBackground from '../../../assets/imgs/backgrounds/esports.jpg';
import Icon from '../Icons/Icon';

export default class ESports extends React.Component {
    constructor(){
        super();
    }

    render() {
        return (
            <div className="esports-wrapper">
                <div className="background-wrapper">
                    <img src={ESportsBackground}/>
                </div>
                <div className="content-padding">
                    <div className="ESports-achievments-title__wrapper">
                        <h3 className="ESports-achievments-title">NOTABLE ACHIEVEMENTS</h3>
                    </div>
                    <div className="content-wrapper">
                        <div className="ESports-achievments__wrapper">
                            <div className="achievments-left">
                                <div className="achievement-item">
                                    <div className="achievement-medal">
                                        <Icon  iconType="silver-medal" />
                                    </div>
                                    <div className="achievement-text-wrapper">
                                        <div className="achievement-title">
                                             <p>Six Major Raleigh 2019</p>
                                        </div>
                                        <div className="achievement-info">
                                            <p>Raleigh, Convention Center - $500,000 USD</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="achievement-item">
                                    <div className="achievement-medal">
                                        <Icon  iconType="gold-medal" />
                                    </div>
                                    <div className="achievement-text-wrapper">
                                        <div className="achievement-title">
                                             <p>Six Invitational 2019</p>
                                        </div>
                                        <div className="achievement-info">
                                            <p>Montreal, Place Bell- $2,000,000 USD</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="achievement-item">
                                    <div className="achievement-medal">
                                        <Icon iconType="gold-medal" />
                                    </div>
                                    <div className="achievement-text-wrapper">
                                        <div className="achievement-title">
                                             <p>Pro League Season 8 - Finals</p>
                                        </div>
                                        <div className="achievement-info">
                                            <p>Rio de Janeiro, Jeunesse Arena - $167,000 USD</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="achievement-item">
                                    <div className="achievement-medal">
                                        <Icon iconType="gold-medal" />
                                    </div>
                                    <div className="achievement-text-wrapper">
                                        <div className="achievement-title">
                                             <p>Six Major Paris 2018</p>
                                        </div>
                                        <div className="achievement-info">
                                            <p>Paris, Expo Porte de Versailles - $350,000 USD</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="achievements-right">
                                <div className="achievement-item">
                                    <div className="achievement-text-wrapper">
                                        <div className="achievement-title">
                                             <p>Pro League Season 7 - Finals</p>
                                        </div>
                                        <div className="achievement-info">
                                            <p>Atlantic City, Harrah's Resort - $167,000 USD</p>
                                        </div>
                                    </div>
                                    <div className="achievement-medal">
                                        <Icon  iconType="silver-medal" />
                                    </div>
                                </div>
                                <div className="achievement-item">
                                    <div className="achievement-text-wrapper">
                                        <div className="achievement-title">
                                             <p>Six Invitational 2018</p>
                                        </div>
                                        <div className="achievement-info">
                                            <p>Montreal, Ubisoft Studio TOHU  - $500,000 USD</p>
                                        </div>
                                    </div>
                                    <div className="achievement-medal">
                                        <Icon  iconType="gold-medal" />
                                    </div>
                                </div>
                                <div className="achievement-item">
                                    <div className="achievement-text-wrapper">
                                        <div className="achievement-title">
                                             <p>Pro League Year 2 Season 2 - Finals</p>
                                        </div>
                                        <div className="achievement-info">
                                            <p>Cologne, Koelnmesse - $167,000 USD</p>
                                        </div>
                                    </div>
                                    <div className="achievement-medal">
                                        <Icon  iconType="gold-medal" />
                                    </div>
                                </div>
                                <div className="achievement-item">
                                    <div className="achievement-text-wrapper">
                                        <div className="achievement-title">
                                             <p>Pro League Year 2 Season 1 - Finals</p>
                                        </div>
                                        <div className="achievement-info">
                                            <p>Katowice, ESL Arena - $167,000 USD</p>
                                        </div>
                                    </div>
                                    <div className="achievement-medal">
                                        <Icon  iconType="gold-medal" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <p className="ESports-achievments__liquipedia">COMPLETE LIST HERE</p>
                </div>
            </div>
        );
    }
}