import React, { Component } from 'react';
import { connect } from "react-redux";

import AnimeLine from './AnimeLine'

import { Table } from 'reactstrap';



class ConnectedAnimeTable extends Component {

  render() {
    return (
      <div className="table-responsive">
      <Table striped size="sm">
        <thead>
          <tr>
            <th>Title</th>
            <th style={{"width": "20%" }}>Provider</th>
            <th className="text-center">Link</th>
          </tr>
        </thead>
        <tbody>
          {this.props.animes.map((anime, index) =>
            <AnimeLine key={index} index={index} title={anime.title} 
              provider={anime.provider} link={anime.link} onChangeListener={this.deleteLine}/>
            )}
          </tbody>
      </Table>
      </div>
    );
  }

}

const mapStateToProps = state => {
  return { animes: state.filtersReducer.animes };
};


const AnimeTable = connect(mapStateToProps)(ConnectedAnimeTable);

export default AnimeTable;