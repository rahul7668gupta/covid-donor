import React from 'react';
import { Button, Card, Image } from 'semantic-ui-react';
import './Donors.css';
import calling from '../assets/calling.svg';
import connect from '../assets/connect.svg';

const Donors = () => {
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
						    <Card className="card-box">
						      <Card.Content >
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
						    </Card>
						    <Card  className="card-box">
						      <Card.Content>
						        <Image
						          floated='right'
						          size='mini'
						          src='https://react.semantic-ui.com/images/avatar/large/jenny.jpg'
						        />
						        <Card.Header>Jenny Lawrence</Card.Header>
						        <Card.Meta>New User</Card.Meta>
						        <Card.Description>
						          Jenny requested permission to view your contact details
						        </Card.Description>
						      </Card.Content>
						      <Card.Content extra className="card-box">
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
						    <Card  className="card-box">
						      <Card.Content>
						        <Image
						          floated='right'
						          size='mini'
						          src='https://react.semantic-ui.com/images/avatar/large/jenny.jpg'
						        />
						        <Card.Header>Jenny Lawrence</Card.Header>
						        <Card.Meta>New User</Card.Meta>
						        <Card.Description>
						          Jenny requested permission to view your contact details
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
						      <Card.Content>
						        <Image
						          floated='right'
						          size='mini'
						          src='https://react.semantic-ui.com/images/avatar/large/jenny.jpg'
						        />
						        <Card.Header>Jenny Lawrence</Card.Header>
						        <Card.Meta>New User</Card.Meta>
						        <Card.Description>
						          Jenny requested permission to view your contact details
						        </Card.Description>
						      </Card.Content>
						      <Card.Content extra className="card-box">
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
						      <Card.Content>
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
						      <Card.Content extra className="card-box">
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
export default Donors;