import React from 'react';

import './fontawesome-free-5.0.10/web-fonts-with-css/css/fontawesome-all.min.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import {Col, Form, Row} from 'reactstrap';
import './App.css';
import FilteringInput from "./FilteringInput";
import FilteringSelect from "./FilteringSelect";
import ResetButton from "./ResetButton";

const FiltersLine = () => {

    const handleSubmit = (event) => {
        event.preventDefault();
    };

    return (
        <Row noGutters>
            <Col className="mt-2" xs={{size: "11", offset: 1}} sm={{size: "auto", offset: 1}}>
                <Form onSubmit={handleSubmit}>
                    <div className="row no-gutters">
                        <Col className="mt-2 mr-3" xs={{size: "11", offset: 0}} sm={{size: "auto", offset: 0}}>
                            <FilteringInput/>
                        </Col>
                        <Col className="mt-2 mr-3" xs={{size: "11", offset: 0}} sm={{size: "auto", offset: 0}}>
                            <FilteringSelect/>
                        </Col>
                        <Col className="mt-2" xs={{size: "11", offset: 0}} sm={{size: "auto", offset: 0}}>
                            <ResetButton/>
                        </Col>
                    </div>
                </Form>
            </Col>
        </Row>
    );
};

export default FiltersLine;