import React, { Fragment } from "react";
import { Navbar } from 'react-bootstrap';
import SearchBox from '../SearchBox/SearchBox';


function App() {
    return (
        <Fragment>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand >
                    Github User Details
                </Navbar.Brand>
            </Navbar>
            <SearchBox />
        </Fragment>
    );
}

export default App;