import React, { Component } from "react";
import Donor from "./contracts/Donor.json";
// import getWeb3 from "./getWeb3";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Donors from './Components/Donors/Donors';
import NewDonor from './Components/NewDonor/NewDonor';
import ShareStory from './Components/ShareStory/ShareStory';
import NavComp from './Components/NavComp/NavComp';
import Home from './Home/Home';
import styles from './App.module.css';

//using meta txns with biconomy
// import Biconomy from "@biconomy/mexa";

//uisng portis wallet
import Portis from '@portis/web3';
import Web3 from 'web3';

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

      // this.biconomy = new Biconomy(Web3, {apiKey: "LbOkM_BNx.b0a7a913-3db2-420e-a1d6-9ba4c8485367"});
      // const Web3 = new Web3(this.biconomy);
      const customNode = {
        nodeUrl: 'https://rpc-mumbai.matic.today/',
        chainId: 80001,
      };
      
      const portis = new Portis('863afd6a-a7e6-4da7-8e62-0c091da895ec', customNode);
      this.web3 = new Web3(portis.provider);
      // this.web3 = await getWeb3();
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

        // Set web3, accounts, and contract to the state, and then proceed with an
        // example of interacting with the contract's methods.

      this.setState({
        web3: this.web3,
        contractAddress: Donor.networks[this.networkId].address
      });
      console.log("Web3 Obj : " + this.state.web3);
      portis.isLoggedIn().then(({ error, result }) => {
        console.log(error, result);
      });
      
      // alert("Donor data retrieved from contract");
    } catch (error) {
      // Catch any errors for any of the above operations.
      console.error(error);
      alert(
        `Failed to load web3, accounts, or contract. Check console for details.  ${ JSON.stringify(error)}`
      );
      
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
    return donorCount;
  }

  // logout = async() => {
  //   await portis.logout();
  // }

  // login = async () => {
  //   await portis.showPortis();
  // }
  //use for each on donorCount and add the returned data to an array, then map that array and render data in the frontend


  render() {
    if (!this.state.web3) {
      return <div>Loading Web3, accounts, and contract... Try switching your netwrok to Matic Mumbai Testnet!</div>;
    }
    return (
      <div className="App">
        <NavComp />
        <p align="center">Contract Address : "{this.state.contractAddress}"</p>
        <Router>
          <Switch>
            <Route exact path="/covid-donor/" component={Home} />
            <Route
              path="/covid-donor/donors"
              component={
                () => <Donors
                  donorInstance={this.donorInstance}
                  donorCount = {this.state.donorCount}
                />
                } 
              />
            <Route
              path="/covid-donor/newdonor"
              component={
                () => <NewDonor
                  donorInstance ={this.donorInstance} accounts = {this.accounts}
                />
              }
            />
            <Route path="/covid-donor/sharestory" component={
                () => <ShareStory
                  donorInstance ={this.donorInstance} accounts = {this.accounts}
                />
              } />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
