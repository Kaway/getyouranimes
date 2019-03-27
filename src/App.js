import React, { Component } from 'react';

import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Jumbotron, Row, Col } from 'reactstrap';
import { Form } from 'reactstrap';


import './fontawesome-free-5.0.10/web-fonts-with-css/css/fontawesome-all.min.css'

import AnimeTable from './AnimeTable'
import FilteringInput from './FilteringInput'
import FilteringSelect from './FilteringSelect'
import CounterBadge from './CounterBadge'
import ResetButton from './ResetButton'
import RefreshModel from './RefreshModel'

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

  handleSubmit = (event) => {
    event.preventDefault();
  };

  render() {

    return (
      <Container fluid style={{"padding": "0px"}}>
        <Jumbotron fluid className="text-center" style={{"backgroundColor":"#414141"}}>
          <h1 className="" style={{ "color" : "white" }}>Get Your Animes !</h1>
          <p className="lead" style={{ "color" : "white" }}>Find your legal anime provider !</p>
        </Jumbotron>
  
        <Row noGutters>
          <Col className="mt-2" xs={{ size: "11", offset : 1 }} sm={{ size : "auto", offset: 1 }}>
              <Form onSubmit={this.handleSubmit}>
                <div className="row no-gutters">
                  <Col className="mt-2 mr-3" xs={{ size: "11", offset : 0 }} sm={{ size : "auto", offset: 0 }}>
                      <FilteringInput />
                  </Col>
                  <Col className="mt-2 mr-3" xs={{ size: "11", offset : 0 }} sm={{ size : "auto", offset: 0 }}>
                    <FilteringSelect />
                  </Col>
                  <Col className="mt-2" xs={{ size: "11", offset : 0 }} sm={{ size : "auto", offset: 0 }}>
                    <ResetButton />
                  </Col>
                </div>
              </Form>
           </Col>
        </Row>

        <Row noGutters className="mt-3">
          <Col xs={{ size: "auto", offset : 1 }}>
              <CounterBadge count={this.props.animeCount} >
                <span>animes</span>
              </CounterBadge>
          </Col>
          <Col className="" xs={{ size: 8, offset: 1 }} sm={{ size: "5", offset : 1 }}>
              <span>Last update: <b>{this.props.lastUpdate}</b></span>
          </Col>
        </Row>

        <Row noGutters className="mt-3">
          <Col className="d-block d-sm-none" xs={{ size: 10, offset : 1 }}>
             <RefreshModel />
          </Col>
          <Col className="ml-4 d-none d-sm-block" sm={{ size: "5", offset : 0 }}>
             <RefreshModel />
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
                <span className="sr-only">Github</span>
                <i className="fab fa-github"/>
            </a>
            <span className="navbar-text">
            <i className="fas fa-at"/> Contact: contact@getyouranimes.com
            </span>
          </nav>
        </footer>

      </Container>        
 
    );
  }
}

const mapStateToProps = state => {
  return {
    animeCount: state.filtersReducer.animes.length,
    lastUpdate: state.filtersReducer.lastUpdate,
  }
};

const mapDispatchToProps = dispatch => {
  return {
    init: animes => dispatch(init(animes))
  }
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
