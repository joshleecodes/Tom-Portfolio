import React from 'react';

import EmailIcon from './Email/EmailIcon';
import LinkedInIcon from './LinkedIn/LinkedInIcon';
import TwitchIcon from './Twitch/TwitchIcon';
import TwitterIcon from './Twitter/TwitterIcon';

import BronzeMedal from './Medals/BronzeMedal';
import SilverMedal from './Medals/SilverMedal';
import GoldMedal from './Medals/GoldMedal';

import CircleIcon from './PageNav/CircleIcon';
import DownArrow from './PageNav/DownArrowIcon';
import UpArrow from './PageNav/UpArrowIcon';

export default class Icon extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            isHovered: false,
            isActive: false
        }
    }
    
    handleMouseEnter = () => {
        this.setState({ isHovered: true });
    }

    handleMouseLeave = () => {
        this.setState({ isHovered: false });
    }

    selectSVG() {
        const iconSize = "48";
        const viewBox = "0 0 512 512";
        switch (this.props.iconType) {
            case "email":
                return <EmailIcon
                    color={this.state.isHovered ? '#ff8305' : '#FFF'}
                    width={iconSize}
                    height={iconSize}
                    viewBox={viewBox}
                />;
            case "linkedin":
                    return <LinkedInIcon
                    color={this.state.isHovered ? '#ff8305' : '#FFF'}
                    width={iconSize}
                    height={iconSize}
                    viewBox={viewBox}
                />;
            case "twitch":
                    return <TwitchIcon
                    color={this.state.isHovered ? '#ff8305' : '#FFF'}
                    width={iconSize}
                    height={iconSize}
                    viewBox={viewBox}
                />;
            case "twitter":
                    return <TwitterIcon
                    color={this.state.isHovered ? '#ff8305' : '#FFF'}
                    width={iconSize}
                    height={iconSize}
                    viewBox={viewBox}
                />;
            case "bronze-medal": 
                return <BronzeMedal
                    width={"64"}
                    height={"64"}
                    viewBox={viewBox}
                />;
            case "silver-medal": 
                return <SilverMedal
                    width={"64"}
                    height={"64"}
                    viewBox={viewBox}
                />;
            case "gold-medal": 
                return <GoldMedal
                    width={"64"}
                    height={"64"}
                    viewBox={viewBox}
                />;
            case "circle": 
                return <CircleIcon
                    color={this.state.isActive ? '#ff8305' : '#FFF'}
                    width={"64"}
                    height={"64"}
                    viewBox={viewBox}
                />;
            case "up-arrow": 
                return <UpArrow
                    color={this.state.isActive ? '#ff8305' : '#FFF'}
                    width={"64"}
                    height={"64"}
                    viewBox={viewBox}
                />;
            case "down-arrow": 
                return <DownArrow
                    color={this.state.isActive ? '#ff8305' : '#FFF'}
                    width={"64"}
                    height={"64"}
                    viewBox={viewBox}
                />;
            default:
              return;
        }
    }

    render() {
        return (
            <div className="" onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave}>
                {this.selectSVG()}
            </div>
                
        )
    }
    
}