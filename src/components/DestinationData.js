import { Component } from "react";
import "./DestinationStyles.css";

class DestinationData extends Component {
  render() {
    return (
      <div>
        <div className={this.props.className}>
          <div className="des-text">
            <h2>{this.props.heading}</h2>
            <p>{this.props.text}</p>
          </div>
          <div className="images">
            <img alt="img" src={this.props.image1} />
            <img alt="img" src={this.props.image2} />
          </div>
        </div>
      </div>
    );
  }
}

export default DestinationData;
