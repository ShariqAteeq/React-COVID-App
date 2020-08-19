import React, { Component } from 'react';
import './App.scss';
import Cards from './components/card/Card';
import Chart from './components/chart/Chart';
import CountryPicker from './components/countryPicker/CountryPicker';
import {fetchData} from './api';

class App extends Component {

  state = {
    data : {},
    country: ''
  }

  async componentDidMount() {
    const fetchdata = await fetchData();

    this.setState({ data : fetchdata });
  }

  changeCountryHandler = async (country) => {
    
    const fetchdata = await fetchData(country);

    this.setState({ data : fetchdata  , country : country});
  }

  render(){

    const { data , country } = this.state;

  return (
    <div className="container">
      <Cards data = {data}/>
      <CountryPicker changeCountryHandler = {this.changeCountryHandler}/>
      <Chart data = {data} country = {country}/>
    </div>
  );
}
}
export default App;
