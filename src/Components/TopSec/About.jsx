import React from 'react';
import styles from './About.module.css';
import covid19 from '../assets/covid19.JPG';
import mobileApp from '../assets/mobileApp.svg';
import { Jumbotron, Button } from 'react-bootstrap';

export const About = () => {
    return(
        <div>
            <Jumbotron className={styles.main}>
                <div className={styles.leftChild}>
                    <h1>Covid 19 Crisis</h1>
                    <br />
                    <br />
                    <p>
                    Coronavirus disease 2019 (COVID-19) is an infectious disease caused by severe acute respiratory syndrome coronavirus 2. 
                    It was first identified in December 2019 in Wuhan, China, and has since spread globally, resulting in an ongoing pandemic. 
                    According to the CDC, the virus is thought to be spread mainly from person-to-person. 
                    This means it may spread between people who are in close contact with one another (within about 6 feet), or through
                    respiratory droplets when an infected person coughs or sneezes. These droplets can land in the mouths or noses of people who are nearby or 
                    possibly be inhaled into the lungs. Some recent studies have suggested that COVID-19 may be spread by people who are not showing symptoms. 
                    The Government of India has tried to reduce the number of COVID 19 patients by providing blood plasma to COVID patients from plasma donors. But the problem that still persists is the low supply of plasma donors i.e. less number of people willing to donate blood plasma or being able to volunteer for it.
                    </p>
                </div>
                <div className={styles.rightChild}>
                    <img src={covid19} alt="" className={styles.image}/>    
                </div>                
            </Jumbotron>
            <Jumbotron  className={styles.about2}>
                    <h1>How did we get this idea?</h1>
                    <br />
                    <p>
                    We believe currently in the world of COVID 19 there are more people willing to take blood plasma with the increasing number of COVID cases worldwide.<br/> The Chief Minister of Delhi has also urged people to donate blood plasma. <br />If more people donate blood plasma, recoveries will increase and this will help the communities and India in Overall to flatten the curve.<br /> 
                    </p>
                    <br />
            </Jumbotron>
            <Jumbotron className={styles.main2}>
                <div className={styles.leftChild2}>
                    <img src={mobileApp} alt="" className={styles.image}/>    
                </div>
                <div className={styles.rightChild2}>
                    <h1>Our concept</h1>
                    <br />
                    <p>
                    Using our dapp people can volunteer to donate plasma and those who need blood plasma can now choose volunteer people based on their location and ask them for their voluntary help.<br/> This will help in reducing the number of COVID-19 cases and ultimately lower the spreading exponentially.<br/> We have used Matic Network’s Mumbai test network and have used Portis wallet to allow people to register and donate blood plasma using their mobiles directly due to metamask restrictions for mobile.<br/> 
                    </p>
                </div>
                                
            </Jumbotron>
        </div>
    )
    
}