import React, { Component } from 'react';

import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Jumbotron, Row, Col } from 'reactstrap';
import { Form, FormGroup, Input } from 'reactstrap';


import './fontawesome-free-5.0.10/web-fonts-with-css/css/fontawesome-all.min.css'

import AnimeTable from './AnimeTable'
import FilteringInput from './FilteringInput'
import FilteringSelect from './FilteringSelect'
import CounterBadge from './CounterBadge'
import ResetButton from './ResetButton'

import connect from 'react-redux/lib/connect/connect'
import {init} from './actions'


class App extends Component {

  componentDidMount() {
    fetch('data/all.json').then(response => {
      response.json().then(value => {
        this.props.init(value);
      });
    });
  }

  render() {

    return (
      <Container fluid style={{"padding": "0px"}}>
        <Jumbotron fluid className="text-center" style={{"backgroundColor":"#414141"}}>
          <h1 className="" style={{ "color" : "white" }}>Get Your Animes !</h1>
          <p className="lead" style={{ "color" : "white" }}>Find your legal anime provider !</p>
        </Jumbotron>
  
        {/*
        <Row noGutters>
          <Col className="mt-2 align-self-center" xs={{ size: "10", offset : 1  }} sm={{ size : "auto", offset : 1 }}>
            <b>Filters</b> <i className="fas fa-filter fa-lg"></i>
          </Col>&nbsp;&nbsp;
          <Col className="mt-2" xs={{ size: "10", offset : 1 }} sm={{ size : "auto", offset: 0 }}>
            <FilteringInput />
          </Col>&nbsp;&nbsp;
          <Col className="mt-2" xs={{ size : "10", offset : 1}} sm={{size : "auto", offset: 0 }}>
            <FilteringSelect />
          </Col>&nbsp;&nbsp;
          <Col className="mt-2" xs={{ size : "10", offset : 1 }} sm={{size : "auto", offset: 0 }}>
            <ResetButton />
          </Col>&nbsp;&nbsp;
        </Row>
        */}

        
        <Row noGutters>
        <Col xs={{ size: 11, offset : 1 }}>
            <Form>
              <FormGroup row>
                <Col className="mt-2" xs={{ size: "10", offset : 0 }} sm={{ size : "auto", offset: 0 }}>
                    <FilteringInput />
                </Col>
                <Col className="mt-2" xs={{ size: "10", offset : 0 }} sm={{ size : "auto", offset: 0 }}>
                  <FilteringSelect />
                </Col>
                <Col className="mt-2" xs={{ size: "10", offset : 0 }} sm={{ size : "auto", offset: 0 }}>
                  <ResetButton />
                </Col>
              </FormGroup>
            </Form>
        </Col>
        </Row>

        <Row noGutters className="mt-3">
          <Col xs={{ size: 11, offset : 1 }}>
             <CounterBadge count={this.props.animeCount} >
              <span>animes</span>
             </CounterBadge>
          </Col>
        </Row>

        <Row noGutters className="mt-3 pb-5">
          <Col xs={{ size: 10, offset : 1 }}>
            <AnimeTable />
          </Col>
        </Row>

        <footer className="container-fluid">
          <nav className="navbar navbar-dark fixed-bottom bg-dark">
            <a className="navbar-brand" target="blank" href="https://github.com/Kaway/getyouranimes">
                <span class="sr-only">Github</span>
                <i className="fab fa-github"></i>
            </a>
            <span className="navbar-text">
            <i className="fas fa-at"></i> Contact: contact@getyouranimes.com
            </span>
          </nav>
        </footer>

      </Container>        
 
    );
  }
}

const mapStateToProps = state => {
  return {
    animeCount: state.filtersReducer.animes.length
  }
};

const mapDispatchToProps = dispatch => {
  return {
    init: animes => dispatch(init(animes))
  }
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
