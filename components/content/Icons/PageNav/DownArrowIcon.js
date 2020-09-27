import React from 'react';

export default class DownArrowIcon extends React.Component {

    render(){
        return(
            <svg
                width={this.props.width}
                height={this.props.height}
                viewBox={this.props.viewBox}
                fill={this.props.color}
                xmlns="http://www.w3.org/2000/svg"
                className="svg-down-arrow"
                xmlnsXlink="http://www.w3.org/1999/xlink"
            >
                <g>
                    <path xmlns="http://www.w3.org/2000/svg" style="" d="M472.328,120.529L245.213,347.665L18.098,120.529c-4.237-4.093-10.99-3.975-15.083,0.262  c-3.992,4.134-3.992,10.687,0,14.82l234.667,234.667c4.165,4.164,10.917,4.164,15.083,0l234.667-234.667  c4.237-4.093,4.354-10.845,0.262-15.083c-4.093-4.237-10.845-4.354-15.083-0.262c-0.089,0.086-0.176,0.173-0.262,0.262  L472.328,120.529z" fill="#ffffff" data-original="#ffc107" class=""/>
                    <path xmlns="http://www.w3.org/2000/svg" d="M245.213,373.415c-2.831,0.005-5.548-1.115-7.552-3.115L2.994,135.633c-4.093-4.237-3.975-10.99,0.262-15.083  c4.134-3.992,10.687-3.992,14.82,0l227.136,227.115l227.115-227.136c4.093-4.237,10.845-4.354,15.083-0.262  c4.237,4.093,4.354,10.845,0.262,15.083c-0.086,0.089-0.173,0.176-0.262,0.262L252.744,370.279  C250.748,372.281,248.039,373.408,245.213,373.415z" fill="#ffffff" data-original="#000000" style="" class=""/>
                </g>
            </svg>
        )
    }
}