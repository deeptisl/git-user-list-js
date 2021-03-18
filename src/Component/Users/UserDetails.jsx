import React, { Fragment } from "react";
import { Card } from "react-bootstrap";
import { connect } from "react-redux";

const UserDetails = props => {
    return (
        <Fragment>
            <Card style={{ width: '20rem', marginLeft:'5%'}}>
                <Card.Img variant="top" src={props.userDetails.owner.avatar_url} />
                <Card.Body>
                    <Card.Title>{props.userDetails.name}</Card.Title>
                    <Card.Text>
                       <p>forks : {props.userDetails.forks}</p>
                       <p>forks count : {props.userDetails.forks_count}</p>
                       <p>size : {props.userDetails.size}</p>
                       <p>watchers : {props.userDetails.forks}</p>
                    </Card.Text>
                </Card.Body>
            </Card>
        </Fragment>
    );
};

const mapStateToProps = (state) => {
    return {
        userDetails: state.userDetails
    };
};

export default connect(
    mapStateToProps,
    null
)(UserDetails);
