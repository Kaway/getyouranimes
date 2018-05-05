import React, { Component } from 'react';

import './App.css';
import crunchy from './data/crunchy.json';
import netflix from './data/netflix.json';
import wakanim from './data/wakanim.json';
import adn from './data/adn.json';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Jumbotron, Row, Col } from 'reactstrap';

import './fontawesome-free-5.0.10/web-fonts-with-css/css/fontawesome-all.min.css'

import AnimeTable from './AnimeTable'
import FilteringInput from './FilteringInput'
import FilteringSelect from './FilteringSelect'
import CounterBadge from './CounterBadge'
import ResetButton from './ResetButton'

import connect from 'react-redux/lib/connect/connect'


export const animes = crunchy.concat(netflix).concat(wakanim).concat(adn);
export const defaultAnimes = animes;
export const providers = [...new Set(animes.map(x => x.provider ))];

class App extends Component {

  render() {

    return (
      <Container fluid style={{"padding": "0px"}}>
        <Jumbotron fluid className="text-center" style={{"backgroundColor":"#414141"}}>
          <h1 className="" style={{ "color" : "white" }}>Anime Scraper</h1>
          <p className="lead" style={{ "color" : "white" }}>Find your legal anime provider !</p>
        </Jumbotron>
  
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

        <footer class="container-fluid">
          <nav class="navbar navbar-dark fixed-bottom bg-dark">
            <a class="navbar-brand" target="blank" href="https://github.com/Kaway/getyouranimes">
                <i class="fab fa-github"></i>
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


export default connect(mapStateToProps)(App);
