import React from 'react';

import {
    Card,
    Container,
} from "reactstrap";

import SocialLinks from "../components/SocialLinks";

const GithubProfileCard = ({prof}) => {
    return ( 
            <Card className="section-lg bg-gradient-darker shadow-lg border-0">
                <Container className="">
                <img src={prof.avatar_url} style={{width: "100px"}} alt="" className="rounded-circle img-center img-fluid shadow shadow-lg--hover mb-4"/>
                <div className="p-2" style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
                  <SocialLinks />
                </div>
                </Container>
              </Card>
     );
}
 
export default GithubProfileCard;