import React, { Component }from "react";
import ClickCard from "./components/ClickCard";
import Wrapper from "./components/Wrapper";
import toon from "./toons.json";
import "./App.css";

class App extends Component {
  state = {
    toon
  };
  
  rottenBanana(key){
    //TODO change the state.
    let bananas = this.state.banana;
    for(let i=0; i < bananas.length; i++){
      if(bananas[i] === key){
        //Splice is used to remove a single element from bananas.
        bananas.splice(i, 1);
      }
    }
    this.setState({
      banana: bananas
    });
    console.log("rottenBanana");
  }
  render(){
    return (
  <Wrapper>
    <h1 className="title">Clicky Game!</h1>

    {
      this.state.toon.map(toon => 
        <ClickCard
        key={toon.id}
        id={toon}
        image={toon.image}

      />
      )
    }

  </Wrapper>
    )
  }
};

export default App;
