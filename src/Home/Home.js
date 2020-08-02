import React from 'react';
import styles from './Home.module.css';
import { Cards, Chart, CountryPicker } from '../Components';
import { fetchData } from '../Components/api';
import { TopSec } from '../Components/TopSec/TopSec';
import { About } from '../Components/TopSec/About';
import { RecoveredStories } from '../Components/RecoveredStories/RecoveredStories.jsx';

class Home extends React.Component{

  constructor(){
    super();
    this.state={
      data:{},
      country: ''
    }
  }

  async componentDidMount(){
    const fetchedData = await fetchData();
    this.setState({
      data: fetchedData
    })
  }
  handleCountryChange = async (country) => {
    //fetch the data
    const fetchedData = await fetchData(country);
    this.setState({
      data: fetchedData,
      country: country
    })
    
  }

  render(){
    const { data, country } = this.state;
    return (
      <section>
        <TopSec />
        <About />
        <div className={styles.container}>
          <Cards data={data} />
        </div>
        <RecoveredStories />
      </section>
      
    );
  }

  
}

export default Home;
