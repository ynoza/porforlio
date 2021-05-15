import React, {Fragment} from 'react';

import { Fade } from 'react-reveal';
import DisplayLottie from '../components/DisplayLottie'
import webdev from '../assets/lottie/webdev.json';

import {
    Container,
    Row,
    Col,
    UncontrolledTooltip
} from "reactstrap";

import { skillsSection } from "../portfolio";

const Skills = () => {
    return ( 
        <Fade left duration={1000} distance="40px">
            <Container className="text-center my-5 section section-lg">
            <h1 className="h1">{skillsSection.title}</h1>
            <p className="lead">{skillsSection.languageTitle}</p>
            <div className="d-flex justify-content-center flex-wrap mb-5">
                {
                    skillsSection.languageskills.map((skill) => {
                        return <Fragment key={skill.skillName}>
                    <div className="icon icon-lg icon-shape shadow rounded-circle mb-5"  id={skill.skillName}>
                        <span className="iconify" data-icon={skill.fontAwesomeClassname} data-inline="false"></span>
                    </div>
                    <UncontrolledTooltip
                        delay={0}
                        placement="bottom"
                        target={skill.skillName}
                        >
                        {skill.skillName}
                    </UncontrolledTooltip>
                        </Fragment>
                    })
                }
            </div>

            <p className="lead">{skillsSection.frameworkTitle}</p>
            <div className="d-flex justify-content-center flex-wrap mb-5">
                {
                    skillsSection.frameworkskills.map((skill) => {
                        return <Fragment key={skill.skillName}>
                    <div className="icon icon-lg icon-shape shadow rounded-circle mb-5"  id={skill.skillName}>
                        <span className="iconify" data-icon={skill.fontAwesomeClassname} data-inline="false"></span>
                    </div>
                    <UncontrolledTooltip
                        delay={0}
                        placement="bottom"
                        target={skill.skillName}
                        >
                        {skill.skillName}
                    </UncontrolledTooltip>
                        </Fragment>
                    })
                }
            </div>
            </Container>
        </Fade>
     );
}
 
export default Skills;