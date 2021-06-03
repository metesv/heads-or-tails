import React, { Component } from "react";
import Coin from "../Coin/Coin";
import "./CoinFlipper.css";

class CoinFlipper extends Component {
  constructor(props) {
    super(props);
    // State üzerinde paranın başlangıçtaki durumunu veriyoruz, başlangıçta "tura" olsun.
    // Daha sonra şu anda paranın dönüp dönmeme durumunu da veriyoruz, başlangıçta para atılmamış olduğundan "false" olarak verdik.
    this.state = {
      side: "tura",
      flipping: false,
      round: 0,
      heads: 0,
      tails: 0,
    };
  }

  updateByHeads = () => {
    this.setState(prevState => {
      return {
        side: "tura",
        flipping: false,
        round: prevState.round + 1,
        heads: prevState.heads + 1,
      };
    });
  };

  updateByTails = () => {
    this.setState(prevState => {
      return {
        side: "yazi",
        flipping: false,
        round: prevState.round + 1,
        tails: prevState.tails + 1,
      };
    });
  };

  handleClick = () => {
    // "At!" butonuna tıkladığımızda paranın dönmesini istiyoruz, bu yüzden "flipping" durumunu "true" yapıyoruz.
    this.setState({ flipping: true });
    // 1 saniye kadar dönmesi yeterli, bu yüzden 1 saniye sonra "flipping" durmunu tekrar "false" yapıyoruz.
    const chance = Math.random() * 2;
    console.log(chance);
    let newSide = chance > 1 ? "tura" : "yazi";
    if (newSide === "tura") {
      setTimeout(this.updateByHeads, 1000);
    } else {
      setTimeout(this.updateByTails, 1000);
    }
  };

  render() {
    const { side, flipping, round, heads, tails } = this.state;
    return (
      <div className="CoinFlipper">
        <h1>Yazı mı Tura mı?</h1>
        <Coin side={side} flipping={flipping} />
        <button onClick={this.handleClick}>At!</button>
        <p>
          Toplam
          <strong> {round} </strong>
          atıştan
          <strong> {heads} </strong>ü tura
          <strong> {tails} </strong>
          si yazı geldi.
        </p>
      </div>
    );
  }
}

export default CoinFlipper;
