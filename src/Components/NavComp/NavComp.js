import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import './NavComp.css';

class NavComp extends React.Component {

	render(){
		return (
		<div>
			<Navbar expand="lg" bg="primary" variant="dark" >
				<Navbar.Brand href="#">
				<img alt=""
					src="https://img.icons8.com/color/96/000000/coronavirus.png"
					width='40px' height='40px'
				/>
				Plasma Donor
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					
					<Nav className="ml-auto">
						<Nav.Item>
						    <label>
						    	<Nav.Link href="/covid-donor/" className="NavLink">
									Home
								</Nav.Link>
						    </label>
													 
						</Nav.Item>
						<Nav.Item>
							<label>
						    	<Nav.Link href="/covid-donor/donors/" className="NavLink">
									Find Donors
								</Nav.Link>
						    </label>						 
						</Nav.Item>
						<Nav.Item>
							<label>
						    	<Nav.Link href="/covid-donor/newdonor/" className="NavLink">
									Donate plasma
								</Nav.Link>
						    </label>					 
						</Nav.Item>	
						<Nav.Item>
							<label>
						    	<Nav.Link href="/covid-donor/sharestory/" className="NavLink">
									Share your story
								</Nav.Link>
						    </label>					 
						</Nav.Item>						
					</Nav>
				</Navbar.Collapse>
			</Navbar>			
		</div>
	)
	}
}

export default NavComp;