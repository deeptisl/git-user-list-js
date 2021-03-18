import React, { Fragment, useEffect, useState } from "react";
import { Button, Card, Col, Form, Row } from "react-bootstrap";
import { connect } from "react-redux";
import { searchGithubUser, getUserDetails, resetUserDetails } from '../../Redux/Action/index';
import UserDetails from '../Users/UserDetails';
import axios from 'axios';
import './SearchBox.css';

const SearchBox = props => {
    const [username, setUsername] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [gitUserList, setGitUserList] = useState([]);
    const [isUserDetails, setIsUserDetails] = useState(false);
    const [isClick, setIsClick] = useState(false);

    useEffect(() => {
        setGitUserList([]);
        setIsUserDetails(false);
    }, [username])



    function handleSearch(event) {
        event.preventDefault();
        setIsLoading(true);
        setIsUserDetails(false);
        setIsClick(false);
        axios.get(`https://api.github.com/users/${username}/repos`).then(response => {
            if (response.data) {
                console.log('props.usersList', response.data)
                props.resetUserDetailsAction();
                setGitUserList(response.data);
                setIsLoading(false);
            }
            else {
                setIsLoading(false);
                setIsClick(true)
            }
        }).catch(() => {
            setIsLoading(false);
            setIsClick(true);
        })

        // props.searchGithubUserAction(username).then(() => {
        //     if (props.usersList) {
        //         console.log('props.usersList', props.usersList)
        //         props.resetUserDetailsAction();
        //         setGitUserList(props.usersList);
        //         setIsLoading(false);
        //     }
        //     else {
        //         setIsLoading(false);
        //         setIsClick(true)
        //     }
        // })

    }

    function renderUserList(users) {
        return (
            <Card key={users.id} style={{ width: '50rem' }} onClick={() => getDetails(users.name)}>
                <Card.Body>{users.name}</Card.Body>
            </Card>
        )
    }

    function getDetails(name) {
        props.getUserDetailsAction(username, name).then(() => {
            if (props.userDetails) {
                setIsUserDetails(true);
            }
        })
    }

    return (
        <Fragment>
            <Form className='searchBox'>
                <Form.Group as={Row} controlId="search-user">
                    <Col sm={6}>
                        <Form.Control type="text" placeholder="User Search" value={username} onChange={e => setUsername(e.target.value)} />
                    </Col>
                    <Col sm={4}>
                        <Button type="button" onClick={handleSearch}>{isLoading ? 'Searching...' : 'Search'}</Button>
                    </Col>
                </Form.Group>
                {
                    (gitUserList.length > 0 && !isUserDetails) && (
                        gitUserList.map(renderUserList)
                    )
                }
                {
                    isClick && (
                        <Card style={{ width: '50rem' }} >
                            <Card.Body>No Record Found</Card.Body>
                        </Card>
                    )
                }
            </Form>
            {
                isUserDetails && (<UserDetails />)
            }
        </Fragment>
    );
};

const mapStateToProps = (state) => {
    return {
        usersList: state.usersList,
        userDetails: state.userDetails
    };
};

const mapDispatchToProps = dispatch => {
    return {
        searchGithubUserAction: (username) =>
            dispatch(searchGithubUser(username)),
        getUserDetailsAction: (username, repositoryName) =>
            dispatch(getUserDetails(username, repositoryName)),
        resetUserDetailsAction: () =>
            dispatch(resetUserDetails()),
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SearchBox);
