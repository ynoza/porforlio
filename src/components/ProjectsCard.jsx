import React from 'react';

import {
    Card,
    CardBody,
    Col,
    Button
} from "reactstrap";

import { Fade } from 'react-reveal';

const ProjectsCard = ({data}) => {
    return ( 
        <Col lg="6">
        <Fade bottom duration={1000} distance="40px">
            <Card className="shadow-lg--hover shadow mt-4">
            <CardBody className="text-darker">
                <div className="d-flex px-3">
                <div className="pl-4">
                    <h3 className="text-default">
                        {data.name}
                    </h3>
                    <h7 className="description mt-3">
                        {data.desc}
                    </h7>
                    <br></br>
                    <br></br>
                    <h7 className="description mt-3">Stack: </h7>
                    <h7 className="description mt-3">
                        {data.stack}
                    </h7>
                    <br></br>
                    {
                        data.link ? 
                        <Button
                            className="btn-neutral btn-icon"
                            color="primary"
                            href={data.link.url}
                            target="_blank"
                            >
                            <span className="btn-inner--icon text-default">
                                <i className="fa fa-arrow-right mr-2" />
                            </span>
                            <span className="nav-link-inner--text text-default ml-1">
                                {data.link.name} 
                            </span>
                        </Button> : null
                    }
                    {
                        data.github ? 
                        <Button
                            className="btn-neutral btn-icon"
                            color="primary"
                            href={data.github.url}
                            target="_blank"
                            >
                            <span className="btn-inner--icon text-default">
                                <i className="fa fa-arrow-right mr-2" />
                            </span>
                            <span className="nav-link-inner--text text-default ml-1">
                                {data.github.name} 
                            </span>
                        </Button> : null
                    }
                </div>
                </div>
            </CardBody>
        </Card>
        </Fade>
        </Col>
     );
}
 
export default ProjectsCard;