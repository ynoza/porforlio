import React from 'react';

import { SkillBars } from "../portfolio";
import {
    Container,
} from "reactstrap";

import { Fade } from 'react-reveal';


const Proficiency = () => {
    return ( 
        <Container className="section section-lg">
           <Fade bottom duration={1000} distance="40px">
                <h1 className="text-darker text-center">FAQ</h1>
                {
                    SkillBars.map(skill => {
                        return <div className="progress-info" key={skill.Stack}>
                                    <div className="progress-label">
                                        <span>Q. {skill.Stack}</span>
                                    </div>
                                    <div className="description text-darker">
                                        <span>A. {skill.progressPercentage}</span>
                                    </div>
                                    <br></br>
                                </div>

                    })
                }
           </Fade>
        </Container>
     );
}
 
export default Proficiency;