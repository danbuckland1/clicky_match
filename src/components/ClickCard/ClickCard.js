import React, {Component} from "react";
import "./ClickCard.css"

class ClickCard extends Component {
    render(){
        return (
            <div className="card">
            <div className="img-container">
              <img alt={this.props.name} src={this.props.image} />
            </div>
          </div>
        );
    }
}





export default ClickCard;