import React from 'react';
import EngineeringBackground from '../../../assets/imgs/backgrounds/engineering.jpg';

export default class Engineering extends React.Component {
    constructor(){
        super();
    }

    render() {
        return (
            <div className="Engineering-wrapper">
                <div className="background-wrapper">
                    <img  src={EngineeringBackground}/>
                </div>
                    <div className="content-padding">
                        <div className="content-wrapper">
                            <div class="module-container">
                                <div class="label-wrapper">
                                    <div class="percentage-wrapper">
                                        <h3>70.67%</h3>
                                    </div>  
                                </div>
                                <div class="level-wrapper">              
                                    <h2>LEVEL 1</h2>
                                </div>
                                <div class="modules-wrapper">
                                    <ul class="module-list">
                                        <li class="module">Mathematics 1A</li>
                                        <li class="module">Mathematics 1B</li>
                                        <li class="module">Introduction to Engineering Materials</li>
                                        <li class="module">Introduction to Fluid Mechanics &amp; Thermodynamics</li>
                                        <li class="module">Statics and Dynamics</li>
                                        <li class="module">Experimental Methods and Laboratories</li>
                                        <li class="module">Design, Make, Evaluate Project</li>
                                        <li class="module">Introduction to Electronics</li>
                                        <li class="module">Transferable Skills</li>
                                        <li class="module">Design, Sustainability &amp; Component Production</li>
                                    </ul>
                                </div>
                            </div>
                        <div class="module-container">
                            <div class="label-wrapper">
                                <div class="percentage-wrapper">
                                    <h3>68.00%</h3>
                                </div>  
                            </div>
                            <div class="level-wrapper">              
                                <h2>LEVEL 2</h2>
                            </div>
                            <div class="modules-wrapper">
                                <ul class="module-list">
                                    <li class="module">Mathematics 2A</li>
                                    <li class="module">Engineering Managment</li>
                                    <li class="module">Control</li>
                                    <li class="module">Methods of Solids 2A</li>
                                    <li class="module">Design</li>
                                    <li class="module">Engineering Experiments</li>
                                    <li class="module">Aero Structures &amp; Materials</li>
                                    <li class="module">Fluid Mechanics 2 (Mma)</li>
                                    <li class="module">Thermodynamics</li>
                                    <li class="module">Aerodynamics &amp; Flight Mechanics</li>
                                    <li class="module">Numerical Methods with Matlab</li>
                                </ul>
                            </div>
                        </div>
                        <div class="module-container">
                            <div class="label-wrapper">
                                <div class="percentage-wrapper">
                                    <h3>70.63%</h3>
                                </div>  
                            </div>
                            <div class="level-wrapper">              
                                <h2>LEVEL 3</h2>
                            </div>
                            <div class="modules-wrapper">
                                <ul class="module-list">
                                    <li class="module">Group Design Project</li>
                                    <li class="module">Engineering Materials</li>
                                    <li class="module">Numerical Methods &amp; Cfd</li>
                                    <li class="module">Aerodynamics</li>
                                    <li class="module">Advanced Stress Analysis</li>
                                    <li class="module">Turbomachinery &amp; Aircraft Propulsion</li>
                                    <li class="module">Engineering Managment</li>
                                </ul>
                            </div>
                        </div>
                        <div class="module-container">
                            <div class="label-wrapper">
                                <div class="percentage-wrapper">
                                    <h3>65.00%</h3>
                                </div>  
                            </div>
                            <div class="level-wrapper">              
                                <h2>LEVEL 4</h2>
                            </div>
                            <div class="modules-wrapper">
                                <ul class="module-list">
                                    <li class="module">Multi-Disciplinary Design Project</li>
                                    <li class="module">Strategic Management</li>
                                    <li class="module">Turbulence</li>
                                    <li class="module">Spacecraft Structures and Mechanisms</li>
                                    <li class="module">MEng Individual Project (Thesis)</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}