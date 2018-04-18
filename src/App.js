import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import crunchy from './data/crunchy.json';
import netflix from './data/netflix.json';
import wakanim from './data/wakanim.json';
import adn from './data/adn.json';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Jumbotron, Row, Col } from 'reactstrap';
import { Table } from 'reactstrap';

import './fontawesome-free-5.0.10/svg-with-js/js/fontawesome-all.min.js';


/* const animes = [
    {'title': 'Naruto', 'provider': 'Crunchyroll'},
    {'title': 'Bleach', 'provider': 'Netflix'}
  ];
*/

const animes = crunchy.concat(netflix).concat(wakanim).concat(adn);

class App extends Component {

  constructor(props) {
    super(props);
    this.state = { animes : animes, defaultAnimes : animes, animeFilter : "", 
    providerFilter : "", selectedProvider : "", animeFilterValue : ""};
  }

  filter = (providerFilter, animeFilter) => {

    console.debug("Filtering by title : [ " + animeFilter + " ]  and provider : [ " + providerFilter + " ]");
    
    let filtered;

    if(providerFilter !== this.state.providerFilter || animeFilter !== this.state.animeFilter) {
      
      filtered = this.state.defaultAnimes;

      if(providerFilter !== "") {
        filtered = filtered.filter(x => x.provider === providerFilter);
      }

      if(animeFilter !== "") {
        filtered = filtered.filter( x => x.title.toUpperCase().search(animeFilter.toUpperCase()) !== -1);
      }

    } else {
      filtered = this.state.animes;
    }

    this.setState({animes : filtered, animeFilter : animeFilter, 
      providerFilter : providerFilter});

  }

  filterAnimes = (value) => {
    console.debug("Filtering by title : " + value);
    this.setState({ animeFilterValue : value});
    this.filter(this.state.providerFilter, value);
  }

  filterProviders = (value) => {
    console.debug("Filtering by provider : " + value);
    this.setState({ selectedProvider : value});
    this.filter(value, this.state.animeFilter);
  }

  resetFilters = (e) => {
    console.debug("Reset filters");
    this.setState({
      animeFilter: "", providerFilter: "",
      animes: this.state.defaultAnimes,
      selectedProvider: "", animeFilterValue: ""
    });
  }
  
  render() {

    const animes = this.state.animes;
    return (
      <div>
        <Container fluid style={{"padding": "0px"}}>
          <Jumbotron fluid className="text-center" style={{"background-color":"#414141"}}>
            <h1 className="" style={{ "color" : "white" }}>Anime Scraper</h1>
            <p className="lead" style={{ "color" : "white" }}>Find your legal anime provider !</p>
          </Jumbotron>

          <Row noGutters>
            <Col className="mt-2 align-self-center" xs={{ size: "10", offset : 1  }} sm={{ size : "auto", offset : 1 }}>
              <b>Filters</b> <i className="fas fa-filter fa-lg"></i>
            </Col>&nbsp;&nbsp;
            <Col className="mt-2" xs={{ size: "10", offset : 1 }} sm={{ size : "auto", offset: 0 }}>
              <FilteringInput onchange={this.filterAnimes} animeFilterValue={this.state.animeFilterValue} />
            </Col>&nbsp;&nbsp;
            <Col className="mt-2" xs={{ size : "10", offset : 1}} sm={{size : "auto", offset: 0 }}>
              <FilteringSelect providers={[...new Set(animes.map(x => x.provider ))]} selectValue={this.state.providerFilter}
                onchange={this.filterProviders} selectedProvider={this.state.selectedProvider} />
            </Col>&nbsp;&nbsp;
            <Col className="mt-2" xs={{ size : "10", offset : 1 }} sm={{size : "auto", offset: 0 }}>
              <button type="button" className="btn btn-info" onClick={this.resetFilters}> Reset <i className="fas fa-trash-alt"></i></button>
            </Col>
          </Row>

          <Row noGutters className="mt-5">
            <Col xs={{ size: 10, offset : 1 }}>
              <AnimeTable list={animes} />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

class AnimeTable extends Component {

  render() {
    return (
      <div className="table-responsive">
      <Table striped size="sm">
        <thead>
          <tr>
            <th>Title</th>
            <th style={{"width": "25%" }}>Provider</th>
          </tr>
        </thead>
        <tbody>
          {this.props.list.map((anime, index) =>
            <AnimeLine key={index} index={index} title={anime.title} 
              provider={anime.provider} onChangeListener={this.deleteLine}/>
            )}
          </tbody>
      </Table>
      </div>
    );
  }

}

class AnimeLine extends Component {
  
  render() {
    return (
      <tr>
        <td>
          {this.props.title}
        </td>
        <td>
          {this.props.provider}
        </td> 
      </tr>
    );
  }

}

class FilteringInput extends Component {

  filterAnimes = (event) => {
    this.props.onchange(event.target.value);
  }

  render() {
    return (
      <input type="text" value={this.props.animeFilterValue} className="form-control" placeholder="Start typing a title" onChange={this.filterAnimes}/>
    );
  }

}

class FilteringSelect extends Component {

  constructor(props) {
    super(props);
    this.state = { providers : props.providers};
  }

  filterProviders = (event) => {
    this.props.onchange(event.target.value);
  }

  render() {
    const options = this.state.providers.map((provider) =>
      <option key={provider} value={provider}>{provider}</option>
    );
    return (
      <select value={this.props.selectedProvider} className="form-control" onChange={this.filterProviders}>
        <option value="" label="-- Provider --">-- Provider --</option>
        {options}
      </select>
    );
  }

}

export default App;
