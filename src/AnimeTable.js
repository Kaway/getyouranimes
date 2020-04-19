import React from 'react';
import {connect} from "react-redux";

import AnimeLine from './AnimeLine'

import {Table} from 'reactstrap';


const ConnectedAnimeTable = ({animes}) => {

  return (
      <div className="table-responsive">
        <Table striped size="sm">
          <thead>
          <tr>
            <th>Title</th>
            <th style={{"width": "20%"}}>Provider</th>
            <th className="text-center">Link</th>
          </tr>
          </thead>
          <tbody>
          {animes.map((anime, index) =>
              <AnimeLine key={index} index={index} title={anime.title}
                         provider={anime.provider} link={anime.link}/>
          )}
          </tbody>
        </Table>
      </div>
  );

}

const mapStateToProps = state => {
  return {
    animes: state.animes.animes
  };
};


export default connect(mapStateToProps)(ConnectedAnimeTable);