import React from 'react';
import donate from "../assets/donate.png";
import './ShareStory.css';
import medicalcare from '../assets/medicalcare.png';
import sharedgoals from '../assets/sharedgoals.png';

const ShareStory = () => {
	return (
		<div>
			<center>
				<h2>Share your story </h2>
				<br />
				<img src={donate} alt="heart" width="100px" height="100px"/>
				<br />
				<br />
			</center>
			<center>
			<section className="donorparent">
				<img 
					alt="" 
					src={medicalcare} 
					width="300px" height="300px" 
					
				/>
				<div className="input_box card ">
					<center>
						<br />
						<form className="ui form">
						  <div className="field">
						    <label>Name</label>
						    <input type="text" name="full-name" placeholder="Full Name" />
						  </div>
						  <div className="field">
						    <label>Story</label>
						    <input type="text" name="story" placeholder="Write your story here" />
						  </div>
						  <div className="field">
						    <label>Location</label>
						    <input type="text" name="location" placeholder="Location" />
						  </div>
						  <div className="field">
						    <div className="ui checkbox">
						      <input type="checkbox" tabIndex="0" className="hidden" />
						      <label>I agree to the Terms and Conditions</label>
						    </div>
						  </div>
						  <button className="ui button" type="submit">Submit</button>
						</form>
						<br />
					</center>						
				</div>
				<img 
					alt="" 
					src={sharedgoals} 
					width="300px" height="300px" 
					
				/>		
			</section>
			</center>
		</div>
		
	)
}
export default ShareStory;