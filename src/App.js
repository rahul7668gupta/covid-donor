import React, { Component } from "react";
import Donor from "./contracts/Donor.json";
import getWeb3 from "./getWeb3";
import NavComp from './NavComp';
import Slider from './Slider';
import Donors from './Donors';
import NewDonor from './NewDonor';
import ShareStory from './ShareStory';

import "./App.css";

class App extends Component {
  state = {
    donorData: {},
    web3: {},
    contractAddress: ""
  };

  componentDidMount = async () => {
    try {
      // Get network provider and web3 instance.
      this.web3 = await getWeb3();

      // Use web3 to get the user's accounts.
      this.accounts = await this.web3.eth.getAccounts();
      console.log(this.accounts);
      // Get the contract instance.
      this.networkId = await this.web3.eth.net.getId();
      console.log(this.networkId);

      this.donorInstance = new this.web3.eth.Contract(
        Donor.abi,
        Donor.networks[this.networkId] && Donor.networks[this.networkId].address,
      );
      console.log(this.donorInstance);

      // Set web3, accounts, and contract to the state, and then proceed with an
      // example of interacting with the contract's methods.

      this.setState({ 
        web3: this.web3,
        contractAddress : Donor.networks[this.networkId].address
      });
      console.log(this.state.web3);

      // this.setState({
      //   donorData: await this.donorInstance.methods.getDonorData(0).call()
      // })
      // alert("Donor data retrieved from contract");
    } catch (error) {
      // Catch any errors for any of the above operations.
      alert(
        `Failed to load web3, accounts, or contract. Check console for details.`,
      );
      console.error(error);
    }
  };

  handleInputChange = (event) => {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;
    this.setState({
      [name]: value,
    })
  }

  render() {
    if (!this.state.web3) {
      return <div>Loading Web3, accounts, and contract...</div>;
    }
    return (
      <div className="App">
        <NavComp />
        <p>Contract Address : "{this.state.contractAddress}"</p>
        <Slider />
        <Donors />
        <NewDonor />
        <ShareStory />
      </div>
    );
  }
}

export default App;
