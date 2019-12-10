import React, { Component } from "react";
import data from "./data";
import './display.css'
class Display extends Component {
  constructor() {
    super();
    this.state = {
      data: data,
      displayIndex: 0
    };
  }

  forwards() {
    this.state.data.length - 1 === this.state.displayIndex
      ? alert("This is the end of the array")
      : this.setState({
          displayIndex: this.state.displayIndex + 1
        });
  }

  backwards() {
    0 === this.state.displayIndex
      ? alert("This is the end of the array")
      : this.setState({ displayIndex: this.state.displayIndex - 1 });
  }

  render() {
    return (
      <div className='all'>
        <div>{this.state.displayIndex+1}/{this.state.data.length}</div>
        <h2>
          {this.state.data[this.state.displayIndex].name.first}{" "}
          {this.state.data[this.state.displayIndex].name.last}
        </h2>
        <ul>
          <li>
            From:{" "}
            <div>
              {this.state.data[this.state.displayIndex].city},{" "}
              {this.state.data[this.state.displayIndex].country}
            </div>
          </li>
          <li>
            Job Title:{" "}
            <div>{this.state.data[this.state.displayIndex].title}</div>
          </li>
          <li>
            Employer: <div>{this.state.data[this.state.displayIndex].employer}</div>
          </li>
        </ul>
        <ol>
          Favorite Movies:
          <li>{this.state.data[this.state.displayIndex].favoriteMovies[0]}</li>
          <li>{this.state.data[this.state.displayIndex].favoriteMovies[1]}</li>
          <li>{this.state.data[this.state.displayIndex].favoriteMovies[2]}</li>
        </ol>
        
        <footer><button onClick={() => this.backwards()}>Go Back</button>
        <button onClick={() => this.forwards()}>Go Forward</button>
        </footer>
      </div>
    );
  }
}

export default Display;
