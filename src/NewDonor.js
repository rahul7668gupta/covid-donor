import React from 'react';
import undraw from "./assets/undraw.png";
import './NewDonor.css';

const NewDonor = () => {
	return (
		<div>
			<center>
				<h2>Be a donor </h2>
				<img src={undraw} alt="heart" width="100px" height="100px"/>
			</center>			
			<div className="input_box card">
				<center>
					<div>
						<br />
						<br />
						<input type="text" placeholder="Name" />
						<br />
						<br />
						<input type="text" placeholder="Blood Group" />
						<br />
						<br />
						<input type="number" placeholder="Age" alt=""/>
						<br />
						<br />
						<input type="number" placeholder="Phone number"/>
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
			<br />
			<br />

		</div>
		
	)
}
export default NewDonor;