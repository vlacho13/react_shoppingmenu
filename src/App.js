import React, { Component } from 'react';
import { Grid } from "react-bootstrap";

import Subtotal from "./components/Subtotal/Subtotal";
import PickupSavings from "./components/PickupSavings/PickupSavings";
import TaxesFees from "./components/TaxesFees/TaxesFees";
import EstimatedTotal from "./components/EstimatedTotal/EstimatedTotal";
import ItemDetails from "./components/ItemDetails/ItemDetails";
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      total: 100,
      PickupSavings: -5,
      Taxes: 0,
      EstimatedTotal: 0
    }
  }
  render() {
    return (
      <div className="container">
        <Grid className="purchase-card">
          <Subtotal price={this.state.total.toFixed(2)} />
          <PickupSavings price={this.state.PickupSavings} />
          <TaxesFees taxes={this.state.Taxes.toFixed(2)} />
          <hr />
          <EstimatedTotal price={this.state.EstimatedTotal.toFixed(2)} />
          <ItemDetails />
        </Grid>
      </div>
    );
  }
}

export default App;
