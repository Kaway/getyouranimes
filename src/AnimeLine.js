import React, { Component } from 'react';

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
        <td className="text-center">
          {this.props.link ? 
            <a href={this.props.link} target="blank">
              <span className="sr-only">{this.props.title}</span>
              <i className="fas fa-external-link-alt fa-xs"></i>
            </a> :
            "N/A"
          }
        </td>
      </tr>
    );
  }

}

export default AnimeLine;