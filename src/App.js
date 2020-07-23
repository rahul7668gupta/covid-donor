import React, { Component } from "react";
import Donor from "./contracts/Donor.json";
import getWeb3 from "./getWeb3";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavComp from './Components/NavComp';
import Slider from './Components/Slider';
import Donors from './Components/Donors/Donors';
import NewDonor from './Components/NewDonor/NewDonor';
import ShareStory from './Components/ShareStory/ShareStory';

import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      // donorData: {},
      web3: {},
      contractAddress: "",
      donorCount: "",
      donorData: {
        name: "rahul",
        age: 22,
        bloodGroup: "b+",
        location: "google.com",
        phoneNo: 9032700938
      }
    };
  }
  

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
      
      await this.handleDonorCount();
      await this.retrieveDonorData();
      // await this.handleNewDonorData1();
      // alert("Your data has been added!")
      // Set web3, accounts, and contract to the state, and then proceed with an
      // example of interacting with the contract's methods.

      this.setState({
        web3: this.web3,
        contractAddress: Donor.networks[this.networkId].address
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
    const name = target.donorData.name;
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

  handleNewDonorData = async (revState) => {
    const newDonor = await this.donorInstance.methods.addDonorData(
      revState.name,
      revState.bloodGroup,
      revState.age,
      revState.phoneNo,
      revState.location
    )
      .send({ from: this.accounts[0] })

    console.log(newDonor);
    this.setState({ donorData: { name: null, age: null, phoneNo: null, location: null, bloodGroup: null }});
  }

  handleNewDonorData1 = async () => {
    const newDonor = await this.donorInstance.methods.addDonorData(
      this.state.donorData.name,
      this.state.donorData.bloodGroup,
      this.state.donorData.age,
      this.state.donorData.phoneNo,
      this.state.donorData.location
    )
      .send({ from: this.accounts[0] })

    console.log(newDonor);
    this.setState({ donorData: { name: null, age: null, phoneNo: null, location: null, bloodGroup: null }});
  }

  retrieveDonorData = async () => {
    const donorData = await this.donorInstance.methods.donorMapping(1).call();
    console.log(donorData);
  }
  
  //use for each on donorCount and add the returned data to an array, then map that array and render data in the frontend


  render() {
    if (!this.state.web3) {
      return <div>Loading Web3, accounts, and contract...</div>;
    }
    return (
      <div className="App">
        <NavComp />
        <p>Contract Address : "{this.state.contractAddress}"</p>
        <Router>
          <Switch>
            <Route exact path="/covid-donor" component={Slider} />
            <Route path="/covid-donor/donors" component={Donors} />
            <Route
              path="/covid-donor/newdonor"
              component={
                () => <NewDonor
                  donorInstance ={this.donorInstance} accounts = {this.accounts}
                />
              }
            />
            <Route path="/covid-donor/sharestory" component={ShareStory} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
