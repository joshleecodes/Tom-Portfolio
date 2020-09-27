import React from 'react';
import MediaBackground from '../../../assets/imgs/backgrounds/media.jpg';

export default class Media extends React.Component {
    constructor(){
        super();
    }

    render() {
        return (
            <div className="media-wrapper">
                <div className="background-wrapper">
                    <img  src={MediaBackground}/>
                </div>
            </div>
        );
    }
}