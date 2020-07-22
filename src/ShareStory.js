import React from 'react';
import donate from "./assets/donate.png";
import './NewDonor.css';

const ShareStory = () => {
	return (
		<div>
			<center>
				<h2>Share your story </h2>
				<img src={donate} alt="donate" width="100px" height="100px"/>
			</center>			
			<div className="input_box card">
				<center>
					<div>
						<br />
						<br />
						<input type="text" placeholder="Name" />
						<br />
						<br />
						<input type="text" placeholder="story"/>
						<br />
						<br />
						<input type="text" placeholder="Location"/>
						<br />
						<br />
						<center><button> Submit </button></center>
						<br />
						<br />
					</div>
				</center>						
			</div>
		</div>
		
	)
}
export default ShareStory;