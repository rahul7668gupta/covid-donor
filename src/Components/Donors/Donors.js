import React from 'react';
import { Button, Card, Image } from 'semantic-ui-react';
import './Donors.css';
import calling from '../assets/calling.svg';
import connect from '../assets/connect.svg';

class Donors extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			donors: [],
			donorCount: props.donorCount
		}
		this.retrieveDonorData();
	}

	retrieveDonorData = async () => {
		let donorsArray = [];
		for (let i = 0; i < this.state.donorCount; i++){
			let donorData = await this.props.donorInstance.methods.donorMapping(i).call();
			// console.log(donorData);
			donorsArray.push(donorData);
		}
		this.setState({
			donors: donorsArray
		})
		console.log("All donors: " + JSON.stringify(this.state.donors));
	  }
	render() {
		const realData = this.state.donors.map(
			(i, index) =>
			<Card className="card-box" key={index}>
			<Card.Content>
			  <Image
				floated='right'
				size='mini'
				src='https://react.semantic-ui.com/images/avatar/large/molly.png'
			  />
			<Card.Header>{i.name}</Card.Header>
			<Card.Meta>{i.location}</Card.Meta>
			  <Card.Description>
				Blood Group: <strong>{i.bloodGroup}</strong> plasma.
			  </Card.Description>
			</Card.Content>
			<Card.Content extra className="card-box">
				<div className='ui two buttons'>
					<a href={`tel:${i.phoneNo}`}>
						<Button basic color='green'>
							Call {i.phoneNo}
						</Button>
					</a>
					<a href={`mailto:${i.email}`}>
						<Button basic color='red'>
							Email
						</Button>
					</a>
			  	</div>
			</Card.Content>
		  </Card>
		)
		return (
			<div>
				<br/>
				<br/>
				<center><h2>Find Donors</h2></center>
				<section  className="donorparent">
					<div className="rightchild">
						
						<img alt="call" src={calling} width="300px" height="300px"/>
					</div>
					<main className="midchild">
						<br />
						<br />
						<div className="cards">
							<Card.Group>
								{/* <Card className="card-box"> */}
								  {/* <Card.Content >
									<Image
									  floated='right'
									  size='mini'
									  src='https://react.semantic-ui.com/images/avatar/large/steve.jpg'
									/>
									<Card.Header>Steve Sanders</Card.Header>
									<Card.Meta>Friends of Elliot</Card.Meta>
									<Card.Description>
									  Steve wants to add you to the group <strong>best friends</strong>
									</Card.Description>
								  </Card.Content>
								  <Card.Content extra>
									<div className='ui two buttons'>
									  <Button basic color='green'>
										Call
									  </Button>
									  <Button basic color='red'>
										Email
									  </Button>
									</div>
								  </Card.Content>
								</Card>
								<Card className="card-box">
								  <Card.Content >
									<Image
									  floated='right'
									  size='mini'
									  src='https://react.semantic-ui.com/images/avatar/large/molly.png'
									/>
									<Card.Header>Molly Thomas</Card.Header>
									<Card.Meta>New User</Card.Meta>
									<Card.Description>
									  Molly wants to add you to the group <strong>musicians</strong>
									</Card.Description>
								  </Card.Content>
								  <Card.Content extra>
									<div className='ui two buttons'>
									  <Button basic color='green'>
										Call
									  </Button>
									  <Button basic color='red'>
										Email
									  </Button>
									</div>
								  </Card.Content>
								
								 */}
									{/* </Card> */}
								{realData}
							  </Card.Group>
						</div>
					</main>
					<div className="leftchild">					
						<img alt="connect" src={connect} width="300px" height="300px"/>
					</div>
				</section>
			</div>
			)
	}
}
export default Donors;