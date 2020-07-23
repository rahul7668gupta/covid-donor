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
    contractAddress: "",
    donorCount: "",
    name: "rahul",
    age: "22",
    bloodGroup: "b+",
    location: "google.com",
    phoneNo: "9032700938"
  };

  componentDidMount = async () => {
    try {
      // Get network provider and web3 instance.
      this.web3 = await getWeb3();

      // Use web3 to get the user's accounts.
      this.accounts = await this.web3.eth.getAccounts();
      console.log("Accounts from metamask: " + this.accounts);
      // Get the contract instance.
      this.networkId = await this.web3.eth.net.getId();
      console.log("Matic network ID: " + this.networkId);

      this.donorInstance = new this.web3.eth.Contract(
        Donor.abi,
        Donor.networks[this.networkId] && Donor.networks[this.networkId].address,
      );
      console.log("Contract Instance : " + this.donorInstance);
      
      this.handleDonorCount();
      // this.handleNewDonorData();
      // alert("Your data has been added!")
      // Set web3, accounts, and contract to the state, and then proceed with an
      // example of interacting with the contract's methods.

      this.setState({ 
        web3: this.web3,
        contractAddress : Donor.networks[this.networkId].address
      });
      console.log("Web3 Obj : " + this.state.web3);

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

  handleDonorCount = async () => {
    const donorCount = await this.donorInstance.methods.getDonorCount().call();
    console.log("Donor Count : " + donorCount);
    this.setState({
      donorCount: donorCount
    })
  }

  handleNewDonorData = async () => {
    const newDonor = await this.donorInstance.methods.addDonorData(
      this.state.name,
      this.state.bloodGroup,
      this.state.age,
      this.state.phoneNo,
      this.state.location
    )
      .send({ from: this.accounts[0] })

    console.log(newDonor);
    this.setState({ name: null, age: null, phoneNo: null, location: null, bloodGroup: null });
  }

  // retrieveDonorData = async () => {
  //   const donorData = async () => {
  //     for (i = 0; i<this.state.donorCount; i++)
  //     return await this.donorInstance.methods.donorMapping[i]().call();
  //   }
  //   //use for each on donorCount and add the returned data to an array, then map that array and render data in the frontend
  // }

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
