import React from 'react';
import { Navbar } from 'react-bootstrap';

const NavComp = () => {
	return (
		<div>
			<Navbar bg="primary" variant="dark">
				<Navbar.Brand href="#home">
					<img 
						src="https://img.icons8.com/color/96/000000/coronavirus.png"
						width='40px' height='40px'
					/>
				</Navbar.Brand>
			    <Navbar.Brand href="#home">
			      <img 
			      src="https://img.icons8.com/ios-filled/50/000000/home.png"
			      width='25px' height='25px'
			       />
			      Home
			    </Navbar.Brand>
			    <Navbar.Brand href="#donor">
			    <img 
			      src="https://img.icons8.com/ios-filled/50/000000/like.png"
			      width='25px' height='25px'
			       />
			    	Be a donor
			    </Navbar.Brand>
			    <Navbar.Brand href="#story">
			    <img src="https://img.icons8.com/material-sharp/24/000000/share-2.png"/>
			    	Share your story
			    </Navbar.Brand>
			  </Navbar>
		</div>
	)
}

export default NavComp;