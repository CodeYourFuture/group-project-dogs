import React from "react";
import "./Breeds.css";

class Breeds extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listOfBreeds: [],
      imgSrc: [],
      isChanged: false
    };
  }
  componentDidMount() {
    fetch("https://dog.ceo/api/breeds/list/all")
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          listOfBreeds: Object.keys(data.message)
        });
      });
  }

  changeHandler = (event) => {
    fetch("https://dog.ceo/api/breed/" + event.target.value + "/images/random")
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          imgSrc: data.message
        });
      });
  };
  render() {
    return (
      <div className="Breeds">
        <h2 className="Breeds-title">Select a Breed</h2>
        <p>
          <div>
            <select className="Breeds-select" onChange={this.changeHandler}>
              {this.state.listOfBreeds.map((dog) => (
                <option>{dog}</option>
              ))}
            </select>
          </div>
        </p>

        <img className="Breeds-image" onChange={this.changeHandler} src={this.state.imgSrc} />

        <p>
          <button className="Breeds-button">Show me more!</button>
        </p>
      </div>
    );
  }
}

export default Breeds;
