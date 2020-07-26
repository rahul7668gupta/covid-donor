import React from 'react';
import undraw from "../assets/undraw.png";
import './NewDonor.css';

class NewDonor extends React.Component {

	constructor(props) {
		super(props);
		this.state={
			name: "",
			age: "",
			bloodGroup: "",
			location: "",
			phoneNo: "",
			email: "",
			isChecked: false,
			donorCount: ""
		}
		this.accounts = props.accounts;
		this.biconomy = props.biconomy;
	}

	componentDidMount() {
		this.handleDonorCount();
	}

	handleNewDonorData = async () => {
		
		const donorData = await this.props.donorInstance.methods.addDonorData(
			this.state.name,
			this.state.bloodGroup,
			this.state.phoneNo,
			this.state.age,
			this.state.location,
			this.state.email
		)
			.send({ from: this.accounts[0] })
		
		console.log(donorData);
		console.log(donorData.transactionHash);
		this.setState({ name: "", age: "", phoneNo: "", location: "", bloodGroup: "", email : "" } );
		alert("Thank you for registering to donate blood plasma!");
		window.location.reload();
	}
		

	
	handleInputChange = (event) => {
		const target = event.target;
		const value = target.type === "checkbox" ? target.checked : target.value;
		const name = target.name;
		this.setState({
		  [name]: value,
		})
	}
	
	
	handleSubmit = async () => {
		alert('Please confirm the metamask transaction!');
		console.log(this.props);
		console.log(this.state);
		await this.handleNewDonorData()
	}

	handleDonorCount = async () => {
		const donorCount = await this.props.donorInstance.methods.getDonorCount().call();
		console.log("Donor Count : " + donorCount);
		this.setState({
		  donorCount: donorCount
		})
		return donorCount;
	  }

	render() {
		return (
		<div>
			<center>
				<h2>Be a donor </h2>
				<br />
				<img src={undraw} alt="heart" width="100px" height="100px"/>
				<br />
				<br />
					<button type="button" onClick={this.handleDonorCount}>
					Total Donor Count: {this.state.donorCount}
			</button>
			<div className="input_box card">
				<center>
					<br />
					<form className="ui form">
					  <div className="field">
					    <label>Name</label>
									<input type="text" name="name" placeholder="Full Name" value={this.state.name} onChange={this.handleInputChange}/>
					  </div>
					  <div className="field">
					    <label>Blood group</label>
					    <input type="text" name="bloodGroup" placeholder="Blood group" value={this.state.bloodGroup} onChange={this.handleInputChange}/>
					  </div>
					  <div className="field">
					    <label>Age</label>
					    <input type="number" name="age" placeholder="Age" value={this.state.age} onChange={this.handleInputChange}/>
						</div>
					<div className="field">
					    <label>Email</label>
					    <input type="email" name="email" placeholder="Email" value={this.state.email} onChange={this.handleInputChange}/>
					  </div>
					  <div className="field">
					    <label>Phone Number</label>
					    <input type="number" name="phoneNo" placeholder="Phone Number" value={this.state.phoneNo} onChange={this.handleInputChange}/>
					  </div>
					  <div className="field">
					    <label>Location</label>
					    <input type="text" name="location" placeholder="Location" value={this.state.location} onChange={this.handleInputChange}/>
					  </div>
					  <div className="field">
					    <div className="ui checkbox">
							<input
											name="isChecked"
											type="checkbox"
											tabIndex="0"
											className="hidden"
											checked={this.state.isChecked}
											onChange={this.handleChange}
							/>
					      <label>I agree to the Terms and Conditions</label>
					    </div>
					  </div>
								<button className="ui button" onClick={(event) => {
									event.preventDefault();
									this.handleSubmit();
								}
							}>Submit</button>
					</form>
					<br />
				</center>						
			</div></center>
			<br />
			<br />
		</div>	
	)}
}
export default NewDonor;