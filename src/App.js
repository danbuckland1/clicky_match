import React, { Component } from "react";
import ClickCard from "./components/ClickCard";
import Wrapper from "./components/Wrapper";
import Navbar from "./components/Navbar";
import Jumbotron from "./components/Jumbotron";
import toon from "./toons.json";
import "./App.css";

class App extends Component {
  state = {
    toon,
    score: 0,
    wins: 0,
    clickedCard: [],
    message: ""
  };

  handleClick = (id) => {
    
    if (this.state.clickedCard.indexOf(id) === -1) {

      let addScore = this.state.score + 1;

      if (addScore === 12) {

        let addWins = this.state.wins + 1;

        this.setState({
          wins: addWins,
          message: "Totally tubluar! You Win!"
        });
        this.handleReset();
      }
      else {
        this.setState({
          score: addScore,
          clickedCard: this.state.clickedCard.concat(id),
          message: "You got it, dude!"
        });

        this.handleShuffle();
      }
    }
    else {
      this.setState({
        message: "Aw, bummer, you guess incorrectly. Play again!"
      });

      this.handleReset();
    }
  };

  handleReset = () => {
    this.setState ({
      score: 0,
      clicked: []
    });
    this.handleShuffle();
  };


  handleShuffle = () => {
    const shuffleCards = array => {
      for(let i = array.length - 1; i > 0; i--){
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
      return array;
    }

    let shuffled = shuffleCards(toon);
    this.setState({toon: shuffled});
  };
  //This renders components in order to the page;
  //Nav, Jumbotron and Clickcard
  render() {
    return (
      <Wrapper>
        <Navbar
          score={this.state.score}
          wins={this.state.wins}
          message={this.state.message}
        />
        <Jumbotron />
        <div className="container">
          <div className="row">
            <div className="column">
              {this.state.toon.map(toon => (
                <ClickCard
                  key={toon.id}
                  id={toon.name}
                  image={toon.image}
                  handleClick={this.handleClick}
                />
              ))}
            </div>
          </div>
        </div>
      </Wrapper>
    );
  }
}

export default App;
