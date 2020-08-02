import React from 'react';
import undraw from "../assets/undraw.png";
import './NewDonor.css';
import styles from './NewDonor.module.css';

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
		this.donorInstance = props.donorInstance;
	}

	componentDidMount() {
		// this.handleDonorCount();
		console.log(this.props);
	}

	handleNewDonorData = async () => {
		
		const donorData = await this.donorInstance.methods.addDonorData(
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
		alert('Please confirm the your transaction!');
		console.log(this.props);
		console.log(this.state);
		await this.handleNewDonorData()
	}

	handleDonorCount = async () => {
		alert("calling handledonorcount");
		const donorCount = await this.donorInstance.methods.getDonorCount().call();
		alert("handledonorcount called succefully");
		console.log("Donor Count : " + donorCount);
		this.setState({
		  donorCount: donorCount
		})
		return donorCount;
	  }

	render() {
		return (
			<div className={styles.parent}>
			<center>
				<h2>Be a donor </h2>
				<br />
				<img src={undraw} alt="heart" width="100px" height="100px"/>
				
			</center>			
			<div className={styles.container}>  
				<form className={styles.contact}>
					<fieldset>
						<input name="name" placeholder="Your name" type="text" value={this.state.name} onChange={this.handleInputChange} required autofocus/>
					</fieldset>
					<fieldset>
						<input name="email" placeholder="Your Email Address" type="email" value={this.state.email} onChange={this.handleInputChange} required/>
					</fieldset>
					<fieldset>
						<input name="age" placeholder="Your current age" type="text" value={this.state.age} onChange={this.handleInputChange} required/>
					</fieldset>
					<fieldset>
						<input name="bloodGroup" placeholder="Your blood group" type="text" value={this.state.bloodGroup} onChange={this.handleInputChange} required/>
					</fieldset>
					<fieldset>
						<input name="phoneNo" placeholder="Your Phone Number" type="tel" value={this.state.phoneNo} onChange={this.handleInputChange} required/>
					</fieldset>
					<fieldset>
						<input name="location" placeholder="Your location" type="text" value={this.state.location} onChange={this.handleInputChange} required/>
					</fieldset>
					<input 
					    type="checkbox"   	 
					    name="isChecked" 
					  	onChange = {this.handleChange} 
				      	checked={this.state.isChecked} 
				      />
				    <label>I agree to the Terms and Conditions</label>
					<fieldset>
							<button name="submit" type="submit" id="contact-submit" onClick={(event) => {
								event.preventDefault();
								this.handleSubmit();
							}}>
								Submit
						</button>
					</fieldset>
				</form>
			</div>	
		</div>	
	)}
}
export default NewDonor;