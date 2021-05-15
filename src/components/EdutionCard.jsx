import React from 'react';
import {
    Card,
    CardBody,
    Badge
} from "reactstrap";


import { Fade } from 'react-reveal';

const EdutionCard = ({education}) => {
    return ( 
        <Fade right duration={1000} distance="40px">
            <Card className="card-lift--hover shadow mt-4">
                <CardBody>
                    <div className="d-flex px-3">
                    <div className="pl-4">
                        <h4 className="text-default">
                            {education.schoolName}
                        </h4>
                        <h5 className="text-darker">
                            {education.subHeader}
                        </h5>
                        <Badge color="default" className="mr-1">
                        {education.duration}
                    </Badge>
                        <p className="text-darker mt-3">
                            {education.desc}
                            <ul className="text-darker">
                            {
                                education.descBullets.map((desc) => {
                                    return <li key={desc}>{desc}</li>
                                }) 
                            }
                        </ul>
                        </p>
                    </div>
                    </div>
                </CardBody>
            </Card>
        </Fade>
     );
}
 
export default EdutionCard;