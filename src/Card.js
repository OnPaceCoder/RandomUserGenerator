import React from "react"

import {Card , CardBody, CardTitle, CardText} from "reactstrap"

import {FaEnvelope, FaMapMarkedAlt , FaPhone} from "react-icons/fa"


const Cards = ({details}) =>{
    return (
        <Card >
            <CardBody className="text-center">
                <img src={details.picture?.large} alt="" height="150" width="150" 
                className="rounded-circle img-thumbnail border-danger"
                    />
        <CardTitle className="text-primary">
            <span>{details.name?.title} {details.name?.first} {details.name?.last}</span>
        </CardTitle>
                <CardText>
                    <FaMapMarkedAlt/>
                    &nbsp;
                     {details.location?.city}
                </CardText>
                <CardText>
                  <span>Email:-</span>
                    &nbsp;
                     {details.email}
                </CardText>
                <CardText>

                    <span>Phone:-</span>
                     {details.phone}
                </CardText>
            </CardBody>
        </Card>
    )
}


export default Cards;