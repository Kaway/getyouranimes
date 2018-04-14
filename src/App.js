import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import crunchy from './data/crunchy.json';
import netflix from './data/netflix.json';
import wakanim from './data/wakanim.json';
import adn from './data/adn.json';


/* const animes = [
    {'title': 'Naruto', 'provider': 'Crunchyroll'},
    {'title': 'Bleach', 'provider': 'Netflix'}
  ];
*/

const animes = crunchy.concat(netflix).concat(wakanim).concat(adn);

class App extends Component {

  constructor(props) {
    super(props);
    this.state = { animes : animes, defaultAnimes : animes, animeFilter : "", providerFilter : ""};
  }

  filter = (providerFilter, animeFilter) => {

    console.log("Filtering by title : [ " + animeFilter + " ]  and provider : [ " + providerFilter + " ]");
    
    let filtered;

    if(providerFilter !== this.state.providerFilter || animeFilter !== this.state.animeFilter) {
      
      console.log("Something has changed !");
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

    this.setState({animes : filtered, animeFilter : animeFilter, providerFilter : providerFilter});

  }

  filterAnimes = (value) => {
    console.log("Filtering by title : " + value);
    this.filter(this.state.providerFilter, value);
  }

  filterProviders = (value) => {
    console.log("Filtering by provider : " + value);
    this.filter(value, this.state.animeFilter);
  }
  
  render() {

    const animes = this.state.animes;
    return (
      <div>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
          </header>
          <p className="App-intro">
            To get started, edit <code>src/App.js</code> and save to reload.
          </p>
        </div>
        <div>
          <FilteringInput onchange={this.filterAnimes} />
          <FilteringSelect providers={[...new Set(animes.map(x => x.provider ))]} onchange={this.filterProviders} />
          <AnimeTable list={animes} />
        </div>
      </div>
    );
  }
}

class AnimeTable extends Component {

  render() {
    return (
      <table>
        <tbody>
          {this.props.list.map((anime, index) =>
            <AnimeLine key={index} index={index} title={anime.title} 
              provider={anime.provider} onChangeListener={this.deleteLine}/>
            )}
          </tbody>
      </table>
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

  constructor(props) {
    super(props);
    this.state = {value : ""};
  }

  filterAnimes = (event) => {
    this.setState({ value : event.target.value});
    this.props.onchange(event.target.value);
  }

  render() {
    return (
      <input type="text" defaultValue={this.state.value} onChange={this.filterAnimes}/>
    );
  }

}

class FilteringSelect extends Component {

  constructor(props) {
    super(props);
    this.state = { providers : props.providers, selected : ""};
  }

  filterProviders = (event) => {
    this.setState({selected : event.target.value});
    this.props.onchange(event.target.value);
  }

  render() {
    const options = this.state.providers.map((provider) =>
      <option key={provider} value={provider}>{provider}</option>
    );
    return (
      <select value={this.state.selected} onChange={this.filterProviders}>
        <option value=""></option>
        {options}
      </select>
    );
  }

}

export default App;
