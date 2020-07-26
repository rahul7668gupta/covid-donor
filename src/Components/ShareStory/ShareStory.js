import React from 'react';
import donate from "../assets/donate.png";
import './ShareStory.css';
import medicalcare from '../assets/medicalcare.png';
import sharedgoals from '../assets/sharedgoals.png';

class ShareStory extends React.Component{

	constructor(){
		super();
		this.state={
			fullName: '',
			story: '',
			location: '',
			checked: true

		}
		this.handleChange = this.handleChange.bind(this);
	}
	handleChange(event){
		const {name, value, type, checked} = event.target;
		type === 'checkbox' ? 

		this.setState({
			[name]: checked
		}) 
		: 
		this.setState({
			[name]: value
		})
	}

	render(){
		return (
		<div>
			<center>
				<h2>Share your story </h2>
				<br />
				<img src={donate} alt="heart" width="200px" height="200px"/>
				<br />
				<br />
			</center>
			<center>
			<section className="donorparent">
				<img className="image"
					alt="" 
					src={medicalcare} 
					width="300px" height="300px" 
					
				/>
				<div className="card ">
					<center>
						<br />
						<form className="ui form">
						  <div className="field">
						    <label>Name</label>
						    <input type="text" name="fullName" placeholder="Full Name" onChange={this.handleChange}/>
						  </div>
						  <div className="field">
						    <label>Location</label>
						    <input type="text" name="location" placeholder="Location" onChange={this.handleChange}/>
						  </div>
						  <div className="field">
						    <label>Story</label>
						    <textarea name="story" placeholder="Write your story here" onChange={this.handleChange}/>
						  </div>
						  
						  <div className="field">
						    <div className="ui checkbox">
						      <input type="checkbox" checked={this.state.isChecked} onChange={this.handleChange}/>
						      <label>I agree to the Terms and Conditions</label>
						    </div>
						  </div>
						  <button className="ui button" type="submit">Submit</button>
						</form>
						<br />
					</center>						
				</div>
				<img className="image"
					alt="" 
					src={sharedgoals} 
					width="300px" height="300px" 
				/>		
			</section>
			</center>
		</div>
		
	)
	}

	
}
export default ShareStory;
