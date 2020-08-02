import React from 'react';
import donate from "../assets/donate.png";
import styles from './ShareStory.module.css';
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
		{/* this is a comment */}
		return (
		
		<div>
			<center><h2>Share your story </h2></center>
			`{/* This is a comment */}`
			<center>
				<section className={styles.donorParent}>
					<img className={styles.image}
							alt="" 
							src={medicalcare} 
							width="300px" height="300px" 		
					/>
					<img 
						src={donate} 
						alt="heart" 
						width="200px" height="200px"
					/>
					<img className={styles.image}
							alt="" 
							src={sharedgoals} 
							width="300px" height="300px" 
					/>
				</section>
			</center>	
				<div className={styles.container}>  
					<form className={styles.contact}>
						<fieldset>
							<input name="name" placeholder="Your name" type="text" required autofocus/>
						</fieldset>
						<fieldset>
							<input name="email" placeholder="Your Email Address" type="email" required/>
						</fieldset>
						<fieldset>
							<input name="location" placeholder="Your location" type="text" required/>
						</fieldset>
						<fieldset>
							<textarea placeholder="Write your story here"></textarea>
						</fieldset>
						<input 
							type="checkbox"   	 
							name="isChecked" 
							onChange = {this.handleChange} 
							checked={this.state.isChecked} 
						/>
						<label>I agree to the Terms and Conditions</label>
						<fieldset>
							<button name="submit" type="submit" id="contact-submit" onClick={() => console.log(this.state)}>Submit</button>
						</fieldset>
					</form>
				</div>			
			</div>
		
	)
	}

	
}
export default ShareStory;